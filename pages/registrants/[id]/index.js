import React, { useState, useEffect, useMemo } from 'react';
import {
  getApsRegistrantById,
  getAddOnsByEventId,
  createRegistrantAddOnRequestApi,
  uploadToAPS3,
  updateSpeakerProfile,
} from '../../../util/api';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Storage } from 'aws-amplify';
import {
  MdAccessTime,
  MdCheckCircle,
  MdEdit,
  MdAddCircleOutline,
  MdHotel,
  MdEventNote,
} from 'react-icons/md';
import { useS3Url } from '../../../components/S3Image';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export const RegistrantPage = ({ registrant }) => {
  const [showEditSpeakerProfile, setShowEditSpeakerProfile] = useState(false);
  const billingPhone = registrant && registrant.billingAddressPhone;
  const billingEmail = registrant && registrant.billingAddressEmail;
  const hasBilling =
    registrant &&
    (registrant.billingAddressFirstName ||
      registrant.billingAddressLastName ||
      registrant.billingAddressEmail ||
      registrant.billingAddressPhone ||
      registrant.billingAddressStreet ||
      registrant.billingAddressCity ||
      registrant.billingAddressState ||
      registrant.billingAddressZip);
  console.log('registrant', registrant);

  const [speakerProfile, setSpeakerProfile] = useState({
    headshot: (registrant && registrant.headshot) || '',
    presentationTitle: (registrant && registrant.presentationTitle) || '',
    speakerTopic: (registrant && registrant.speakerTopic) || '',
    learningObjectives: (registrant && registrant.learningObjectives) || '',
    bio: (registrant && registrant.bio) || '',
  });

  const [registrantData, setRegistrantData] = useState(registrant);
  const [refreshKey, setRefreshKey] = useState(0);
  const [availableAddOns, setAvailableAddOns] = useState([]);
  const [addOnsLoading, setAddOnsLoading] = useState(false);
  const [pendingAddOnsSelected, setPendingAddOnsSelected] = useState([]);
  const [savingAddOns, setSavingAddOns] = useState(false);
  const [addOnRequestError, setAddOnRequestError] = useState(null);
  const [addOnRequestSuccess, setAddOnRequestSuccess] = useState(null);
  const [addOnPaymentClientSecret, setAddOnPaymentClientSecret] = useState(null);
  const [addOnPaymentLoading, setAddOnPaymentLoading] = useState(false);
  const [addOnPaymentError, setAddOnPaymentError] = useState(null);
  const [uploadingProfilePic, setUploadingProfilePic] = useState(false);
  const [profilePicError, setProfilePicError] = useState(null);

  const appProfilePicPath = registrantData?.appUser?.profile?.profilePicture || '';
  const { url: resolvedAppProfilePicUrl } = useS3Url(appProfilePicPath);
  const canUploadProfilePic =
    String(registrantData?.status || '').toUpperCase() === 'APPROVED' &&
    !!registrantData?.appUser?.profile?.id;
  const initials = `${registrantData?.firstName?.[0] || ''}${registrantData?.lastName?.[0] || ''}`.toUpperCase();

  const paidAddOnsTotal = useMemo(
    () =>
      pendingAddOnsSelected.reduce(
        (sum, entry) => sum + (Number(entry?.addOn?.price) > 0 ? Number(entry.addOn.price) : 0),
        0
      ),
    [pendingAddOnsSelected]
  );

  useEffect(() => {
    setAddOnPaymentClientSecret(null);
    setAddOnPaymentError(null);
  }, [paidAddOnsTotal, pendingAddOnsSelected.length]);

  const handleFileUpload = async (file, type) => {
    if (!file) return;

    try {
      const url = await uploadToAPS3(file);
      console.log(url);
      setSpeakerProfile((prev) => ({
        ...prev,
        headshot: url,
      }));

      refreshData();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Add your API call to save the changes
      await updateSpeakerProfile(registrant.id, speakerProfile);
      setShowEditSpeakerProfile(false);
      refreshData();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const refreshData = async () => {
    const updatedRegistrant = await getApsRegistrantById(registrant.id);
    setRegistrantData(updatedRegistrant);
    setRefreshKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (refreshKey > 0) {
      getApsRegistrantById(registrant.id).then((data) => {
        setRegistrantData(data);
      });
    }
  }, [refreshKey]);

  useEffect(() => {
    const loadAddOns = async () => {
      if (!registrantData?.apsID) return;
      try {
        setAddOnsLoading(true);
        const items = await getAddOnsByEventId(registrantData.apsID);
        setAvailableAddOns(items || []);
      } catch (err) {
        console.error('Error fetching add-ons for dashboard', err);
      } finally {
        setAddOnsLoading(false);
      }
    };

    loadAddOns();
  }, [registrantData?.apsID]);

  const submitAddOnRequests = async () => {
    if (!registrantData?.id || pendingAddOnsSelected.length === 0) return;
    setAddOnRequestError(null);
    setAddOnRequestSuccess(null);

    try {
      setSavingAddOns(true);
      for (const entry of pendingAddOnsSelected) {
        await createRegistrantAddOnRequestApi({
          addOnId: entry.addOnId,
          registrantId: registrantData.id,
          status: 'PENDING',
          preferences: entry.preferences,
        });
      }
      setPendingAddOnsSelected([]);
      setAddOnPaymentClientSecret(null);
      setAddOnRequestSuccess('Your add-on requests have been submitted.');
      await refreshData();
    } catch (err) {
      console.error('Error submitting add-on requests from dashboard', err);
      setAddOnRequestError(
        'Something went wrong submitting your add-on requests. Please try again.'
      );
    } finally {
      setSavingAddOns(false);
    }
  };

  const handleSubmitAddOnRequests = async () => {
    if (!registrantData?.id || pendingAddOnsSelected.length === 0) return;
    setAddOnPaymentError(null);

    if (paidAddOnsTotal <= 0) {
      await submitAddOnRequests();
      return;
    }

    try {
      setAddOnPaymentLoading(true);
      const response = await fetch('/api/handle-stripe-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: paidAddOnsTotal,
          currency: 'usd',
          description: `APS Add-on requests (${registrantData.firstName} ${registrantData.lastName})`,
          metadata: {
            registrantId: registrantData.id,
            email: registrantData.email,
            type: 'ADD_ON_REQUESTS',
            addOnCount: String(pendingAddOnsSelected.length),
          },
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.clientSecret) {
        throw new Error(data.error || 'Unable to initialize add-on payment');
      }
      setAddOnPaymentClientSecret(data.clientSecret);
    } catch (err) {
      console.error('Error initializing add-on payment', err);
      setAddOnPaymentError(
        err?.message || 'Unable to initialize payment for add-ons.'
      );
    } finally {
      setAddOnPaymentLoading(false);
    }
  };

  const AddOnPaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handlePay = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) return;
      setSubmitting(true);
      setError(null);

      try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
          setError(submitError.message);
          setSubmitting(false);
          return;
        }

        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            payment_method_data: {
              billing_details: {
                email: registrantData.email,
                name: `${registrantData.firstName} ${registrantData.lastName}`,
              },
            },
          },
          redirect: 'if_required',
        });

        if (result.error) {
          setError(result.error.message);
          setSubmitting(false);
          return;
        }

        await submitAddOnRequests();
      } catch (err) {
        console.error('Add-on payment failed', err);
        setError('Payment failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    };

    return (
      <form onSubmit={handlePay} className='mt-3 space-y-3'>
        <PaymentElement />
        {error && <div className='text-sm text-red-600'>{error}</div>}
        <button
          type='submit'
          disabled={!stripe || !elements || submitting}
          className='inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-ap-blue text-white hover:bg-ap-blue/90 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {submitting
            ? 'Processing payment...'
            : `Pay $${paidAddOnsTotal.toLocaleString()} and submit`}
        </button>
      </form>
    );
  };

  const handleAppProfilePictureUpload = async (file) => {
    if (!file || !canUploadProfilePic) return;
    setUploadingProfilePic(true);
    setProfilePicError(null);

    try {
      const safeName = file.name.replace(/\s+/g, '-');
      const key = `profile-pictures/${registrantData.id}-${Date.now()}-${safeName}`;
      const uploadRes = await Storage.put(key, file, {
        contentType: file.type,
        level: 'public',
      });
      const storedKey = uploadRes?.key || uploadRes?.params?.Key || key;

      const response = await fetch('/api/update-app-user-profile-picture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profileId: registrantData.appUser.profile.id,
          profilePicture: storedKey,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to update profile picture');
      }
      await refreshData();
    } catch (error) {
      console.error('Error uploading app profile picture:', error);
      setProfilePicError(
        error?.message || 'Could not upload profile picture. Please try again.'
      );
    } finally {
      setUploadingProfilePic(false);
    }
  };

  return (
    <div className='w-full pt-10 pb-16'>
      {registrantData ? (
        <div className='w-full max-w-7xl mx-auto p-5 bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch'>
          {/* LEFT COLUMN */}
          <div className='col-span-12 lg:col-span-3 space-y-4 lg:flex lg:flex-col'>
            <div className='bg-white border border-gray-200 rounded-lg p-4'>
              <div className='flex flex-col items-center text-center'>
                {resolvedAppProfilePicUrl ? (
                  <div
                    className='w-24 h-24 rounded-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${resolvedAppProfilePicUrl})` }}
                  />
                ) : (
                  <div className='w-24 h-24 rounded-full bg-ap-blue text-white flex items-center justify-center text-3xl font-oswald'>
                    {initials || 'AP'}
                  </div>
                )}
                <div className='mt-3 text-3xl font-oswald leading-tight'>
                  {registrantData.firstName}
                  <br />
                  {registrantData.lastName}
                </div>
                {registrantData.jobTitle && (
                  <div className='text-sm text-gray-700 mt-1'>{registrantData.jobTitle}</div>
                )}
                <div className='text-sm text-gray-600 mt-1'>{registrantData.company?.name}</div>
              </div>
              {canUploadProfilePic && (
                <div className='mt-4'>
                  <label className='w-full inline-flex items-center justify-center text-sm font-semibold px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50 cursor-pointer'>
                    {uploadingProfilePic ? 'Uploading...' : 'Upload profile photo'}
                    <input
                      type='file'
                      accept='image/*'
                      className='hidden'
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleAppProfilePictureUpload(e.target.files[0]);
                        }
                      }}
                      disabled={uploadingProfilePic}
                    />
                  </label>
                  {profilePicError && (
                    <div className='mt-2 text-xs text-red-600'>{profilePicError}</div>
                  )}
                </div>
              )}
              {registrantData.attendeeType === 'Speaker' && (
                <button
                  type='button'
                  onClick={() => setShowEditSpeakerProfile(true)}
                  className='mt-4 w-full text-sm font-semibold px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50'
                >
                  Edit Speaker Profile
                </button>
              )}
            </div>

            <div className='bg-white border border-gray-200 rounded-lg p-4 lg:flex-1 lg:flex lg:flex-col'>
              <div className='text-sm font-bold text-gray-900'>Registration Status</div>
              <div className='mt-2'>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                    registrantData.status === 'PENDING'
                      ? 'bg-yellow-100 text-yellow-800'
                      : registrantData.status === 'WAITLIST'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {registrantData.status === 'PENDING' ? (
                    <MdAccessTime size={14} />
                  ) : (
                    <MdCheckCircle size={14} />
                  )}
                  {registrantData.status}
                </span>
              </div>

              <div className='mt-5 pt-4 border-t border-gray-200 text-sm lg:flex-1'>
                <div className='rounded-md border border-gray-200 divide-y divide-gray-200'>
                  <a
                    href='/register'
                    className='flex items-center gap-2 px-3 py-2.5 font-medium hover:bg-gray-50'
                  >
                    <MdAddCircleOutline size={16} />
                    <span>Add Tickets</span>
                  </a>
                  <a
                    href='https://www.hyatt.com/en-US/group-booking/GSPRG/G-APSM'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-3 py-2.5 font-medium hover:bg-gray-50'
                  >
                    <MdHotel size={16} />
                    <span>Book Hotel</span>
                  </a>
                  <a
                    href='/agenda'
                    className='flex items-center gap-2 px-3 py-2.5 font-medium hover:bg-gray-50'
                  >
                    <MdEventNote size={16} />
                    <span>View Agenda</span>
                  </a>
                </div>
              </div>

              <div className='mt-4 space-y-2'>
                {registrantData.invoice && (
                  <a
                    href={registrantData.invoice}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block w-full px-3 py-2 rounded-md bg-black text-white text-sm font-semibold text-center hover:bg-gray-800'
                  >
                    Download invoice
                  </a>
                )}
                <button
                  type='button'
                  disabled
                  className='block w-full px-3 py-2 rounded-md border border-gray-300 text-sm font-semibold text-gray-500 cursor-not-allowed'
                >
                  Download app (coming soon)
                </button>
                <a
                  href='mailto:bianca@packagingschool.com'
                  className='block w-full px-3 py-2 rounded-md border border-gray-300 text-sm font-semibold text-center hover:bg-gray-50'
                >
                  Contact organizer
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT MAIN COLUMN */}
          <div className='col-span-12 lg:col-span-9 space-y-4'>
            {/* TOP ROW */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
              <div className='lg:col-span-12 bg-white border border-gray-200 rounded-lg p-4'>
                <div className='text-base font-semibold text-gray-900'>
                  Automotive Packaging Summit 2026
                </div>
                <div className='text-sm text-gray-600 mt-1'>
                  Sept 30 - Oct 2, 2026 · Greenville, SC
                </div>
                <div className='text-sm font-bold text-ap-blue mt-4 mb-2'>
                  Agenda Snapshot
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  <div className='rounded-lg border border-gray-200 bg-white p-3'>
                    <div className='text-sm font-semibold text-gray-900 mb-2'>Wed, Sep 30</div>
                    <div className='space-y-2 text-sm text-gray-800 leading-snug'>
                      <div>Optional Add on Tours</div>
                      <div>6PM: Cocktail Hour at New Realm Brewery</div>
                    </div>
                  </div>
                  <div className='rounded-lg border border-gray-200 bg-white p-3'>
                    <div className='text-sm font-semibold text-gray-900 mb-2'>Thursday, Oct 1st</div>
                    <div className='space-y-2 text-sm text-gray-800 leading-snug'>
                      <div>7:30AM: Doors Open and Registration</div>
                      <div>8:30AM: All Day Conference</div>
                      <div>5PM: Cocktail Reception and Hors d&apos;Oeuvres</div>
                    </div>
                  </div>
                  <div className='rounded-lg border border-gray-200 bg-white p-3'>
                    <div className='text-sm font-semibold text-gray-900 mb-2'>Friday, Oct 2nd</div>
                    <div className='space-y-2 text-sm text-gray-800 leading-snug'>
                      <div>Optional Add on Tours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND ROW */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
              <div className='lg:col-span-8 bg-white border border-gray-200 rounded-lg p-4'>
                <div className='text-sm font-bold text-ap-blue mb-3'>
                  Add-ons Requested/Approved
                </div>
                {registrantData.addOnRequests?.items?.length > 0 ? (
                  <div className='space-y-3'>
                    {registrantData.addOnRequests.items.map((req) => {
                      const addon = req.addOn;
                      let prefs = null;
                      if (req.preferences) {
                        try {
                          prefs =
                            typeof req.preferences === 'string'
                              ? JSON.parse(req.preferences)
                              : req.preferences;
                        } catch (e) {
                          console.error('Error parsing add-on preferences', e);
                        }
                      }

                      const isApproved = req.status === 'APPROVED';
                      return (
                        <div
                          key={req.id}
                          className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3 border border-gray-200 rounded-lg'
                        >
                          <div className='space-y-1 text-sm text-gray-700'>
                            <div className='font-semibold text-gray-900'>
                              {addon?.title || 'Add-on'}
                            </div>
                            {addon && (
                              <div className='text-xs text-gray-500'>
                                {[addon.date, addon.time, addon.location]
                                  .filter(Boolean)
                                  .join(' · ')}
                              </div>
                            )}
                            {prefs && (
                              <div className='text-xs text-gray-600'>
                                {Object.entries(prefs).map(([key, value]) => (
                                  <div key={key}>
                                    <span className='font-medium'>{key}:</span>{' '}
                                    {String(value)}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <span
                            className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full ${
                              isApproved
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {isApproved ? 'Approved' : 'Pending'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className='text-sm text-gray-500'>
                    You have not requested any add-ons yet.
                  </div>
                )}
              </div>

              <div className='lg:col-span-4 bg-white border border-gray-200 rounded-lg p-4'>
                <div className='text-sm font-bold text-ap-blue mb-3'>
                  Request additional add-ons
                </div>
                {addOnsLoading ? (
                  <div className='text-sm text-gray-500'>Loading add-ons...</div>
                ) : (
                  <>
                    {(() => {
                      const requestedIds = new Set(
                        registrantData.addOnRequests?.items?.map((r) => r.addOnId) || []
                      );
                      const available = availableAddOns.filter((a) => !requestedIds.has(a.id));

                      if (available.length === 0) {
                        return (
                          <div className='text-sm text-gray-500'>
                            No additional add-ons are available at this time.
                          </div>
                        );
                      }

                      return (
                        <div className='space-y-3 max-h-[420px] overflow-auto pr-1'>
                          {available.map((addOn) => {
                            const isSelected = pendingAddOnsSelected.some(
                              (s) => s.addOnId === addOn.id
                            );
                            const selectedEntry = pendingAddOnsSelected.find(
                              (s) => s.addOnId === addOn.id
                            );
                            let schema = [];
                            try {
                              schema =
                                typeof addOn.preferenceSchema === 'string'
                                  ? JSON.parse(addOn.preferenceSchema || '[]')
                                  : Array.isArray(addOn.preferenceSchema)
                                  ? addOn.preferenceSchema
                                  : [];
                            } catch {
                              schema = [];
                            }

                            return (
                              <div
                                key={addOn.id}
                                className={`rounded-lg border p-3 ${
                                  isSelected
                                    ? 'border-ap-blue bg-ap-blue/5'
                                    : 'border-gray-200'
                                }`}
                              >
                                <label className='flex items-start gap-3 cursor-pointer'>
                                  <input
                                    type='checkbox'
                                    checked={isSelected}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        const prefs = {};
                                        schema.forEach((f) => {
                                          prefs[f.key] =
                                            f.type === 'select' && f.options?.[0]
                                              ? f.options[0]
                                              : '';
                                        });
                                        setPendingAddOnsSelected((prev) => [
                                          ...prev,
                                          { addOnId: addOn.id, addOn, preferences: prefs },
                                        ]);
                                      } else {
                                        setPendingAddOnsSelected((prev) =>
                                          prev.filter((s) => s.addOnId !== addOn.id)
                                        );
                                      }
                                    }}
                                    className='mt-1'
                                  />
                                  <div className='flex-1 min-w-0'>
                                    <div className='font-medium text-gray-900 text-sm'>
                                      {addOn.title}
                                    </div>
                                    <div className='text-xs text-gray-500 mt-0.5'>
                                      {[addOn.date, addOn.time, addOn.location]
                                        .filter(Boolean)
                                        .join(' • ')}
                                    </div>
                                    {addOn.price != null && addOn.price > 0 && (
                                      <div className='text-sm font-medium text-gray-900 mt-1'>
                                        ${addOn.price}
                                      </div>
                                    )}
                                  </div>
                                </label>
                                {isSelected && schema.length > 0 && (
                                  <div className='mt-3 pt-3 border-t border-gray-200 space-y-2'>
                                    {schema.map((field) => (
                                      <div key={field.key}>
                                        <label className='block text-xs font-medium text-gray-700 mb-1'>
                                          {field.label}
                                        </label>
                                        {field.type === 'select' ? (
                                          <select
                                            value={
                                              selectedEntry?.preferences?.[field.key] ?? ''
                                            }
                                            onChange={(e) => {
                                              const v = e.target.value;
                                              setPendingAddOnsSelected((prev) =>
                                                prev.map((s) =>
                                                  s.addOnId === addOn.id
                                                    ? {
                                                        ...s,
                                                        preferences: {
                                                          ...s.preferences,
                                                          [field.key]: v,
                                                        },
                                                      }
                                                    : s
                                                )
                                              );
                                            }}
                                            className='w-full px-2 py-1.5 border border-gray-300 rounded text-sm'
                                          >
                                            {field.options?.map((opt) => (
                                              <option key={opt} value={opt}>
                                                {opt}
                                              </option>
                                            ))}
                                          </select>
                                        ) : (
                                          <input
                                            type='text'
                                            value={
                                              selectedEntry?.preferences?.[field.key] ?? ''
                                            }
                                            onChange={(e) => {
                                              const v = e.target.value;
                                              setPendingAddOnsSelected((prev) =>
                                                prev.map((s) =>
                                                  s.addOnId === addOn.id
                                                    ? {
                                                        ...s,
                                                        preferences: {
                                                          ...s.preferences,
                                                          [field.key]: v,
                                                        },
                                                      }
                                                    : s
                                                )
                                              );
                                            }}
                                            className='w-full px-2 py-1.5 border border-gray-300 rounded text-sm'
                                          />
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}

                    {addOnRequestError && (
                      <div className='mt-3 text-sm text-red-600'>{addOnRequestError}</div>
                    )}
                    {addOnRequestSuccess && (
                      <div className='mt-3 text-sm text-green-600'>{addOnRequestSuccess}</div>
                    )}
                    <div className='mt-4'>
                      {!addOnPaymentClientSecret ? (
                        <button
                          type='button'
                          onClick={handleSubmitAddOnRequests}
                          disabled={
                            savingAddOns ||
                            addOnPaymentLoading ||
                            pendingAddOnsSelected.length === 0
                          }
                          className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg shadow-sm ${
                            savingAddOns ||
                            addOnPaymentLoading ||
                            pendingAddOnsSelected.length === 0
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                              : 'bg-ap-blue text-white hover:bg-ap-blue/90'
                          }`}
                        >
                          {addOnPaymentLoading
                            ? 'Starting payment...'
                            : paidAddOnsTotal > 0
                            ? `Continue to payment ($${paidAddOnsTotal.toLocaleString()})`
                            : savingAddOns
                            ? 'Submitting...'
                            : 'Submit add-on requests'}
                        </button>
                      ) : (
                        <div className='max-w-xl'>
                          <div className='text-xs text-gray-600 mb-2'>
                            Complete payment to submit paid add-on requests.
                          </div>
                          <Elements
                            stripe={stripePromise}
                            options={{
                              clientSecret: addOnPaymentClientSecret,
                              appearance: { theme: 'stripe' },
                            }}
                          >
                            <AddOnPaymentForm />
                          </Elements>
                        </div>
                      )}
                      {addOnPaymentError && (
                        <div className='mt-2 text-sm text-red-600'>
                          {addOnPaymentError}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* BOTTOM SUMMARY */}
            <div className='bg-white border border-gray-200 rounded-lg p-4'>
              <div className='text-sm font-bold text-ap-blue mb-3'>
                Registration Summary
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700'>
                <div className='space-y-1'>
                  <div>
                    <span className='font-semibold'>Name:</span>{' '}
                    {registrantData.firstName} {registrantData.lastName}
                  </div>
                  <div>
                    <span className='font-semibold'>Email:</span> {registrantData.email}
                  </div>
                  <div>
                    <span className='font-semibold'>Company:</span>{' '}
                    {registrantData.company?.name}
                  </div>
                  <div>
                    <span className='font-semibold'>Title:</span>{' '}
                    {registrantData.jobTitle}
                  </div>
                  <div>
                    <span className='font-semibold'>Type:</span>{' '}
                    {registrantData.attendeeType}
                  </div>
                </div>
                <div className='space-y-1'>
                  <div>
                    <span className='font-semibold'>Total Amount:</span> $
                    {Number(registrantData.totalAmount || 0).toLocaleString()}
                  </div>
                  <div>
                    <span className='font-semibold'>Status:</span>{' '}
                    {registrantData.status}
                  </div>
                  {registrantData.discountCode && (
                    <div>
                      <span className='font-semibold'>Discount Code:</span>{' '}
                      {registrantData.discountCode}
                    </div>
                  )}
                  {registrantData.paymentConfirmation && (
                    <div>
                      <span className='font-semibold'>Payment Confirmation:</span>{' '}
                      {registrantData.paymentConfirmation}
                    </div>
                  )}
                  {registrantData.invoice && (
                    <div>
                      <span className='font-semibold'>Invoice:</span>{' '}
                      <a
                        href={registrantData.invoice}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-ap-blue underline'
                      >
                        Download PDF
                      </a>
                    </div>
                  )}
                  {hasBilling && (
                    <div className='mt-3 pt-3 border-t border-gray-200'>
                      <div className='font-semibold mb-1'>Billing</div>
                      <div>
                        {registrantData.billingAddressFirstName}{' '}
                        {registrantData.billingAddressLastName}
                      </div>
                      <div>{billingEmail}</div>
                      <div>{billingPhone}</div>
                      <div>{registrantData.billingAddressStreet}</div>
                      <div>
                        {registrantData.billingAddressCity},{' '}
                        {registrantData.billingAddressState}{' '}
                        {registrantData.billingAddressZip}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-6 max-w-6xl mx-auto'>
          <div className='flex flex-col gap-2 font-bold text-lg'>
            Loading...
          </div>
        </div>
      )}
      {showEditSpeakerProfile && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
          <div className='w-full max-w-4xl mx-auto bg-white p-6 rounded-lg'>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-ap-blue'>
                  Edit Speaker Profile
                </h2>
                <button
                  onClick={() => setShowEditSpeakerProfile(false)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  ×
                </button>
              </div>

              <div className='grid gap-8'>
                <div className='flex flex-col gap-6'>
                  <div className='flex gap-6 bg-ap-yellow/10 rounded-lg p-4'>
                    {/* Headshot Upload */}
                    <div className='flex flex-col gap-2'>
                      <label className='text-sm font-bold text-ap-blue'>
                        Speaker Photo
                      </label>
                      <label
                        className='w-28 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer relative bg-cover bg-center bg-no-repeat'
                        style={
                          speakerProfile.headshot
                            ? {
                                backgroundImage: `url(${speakerProfile.headshot})`,
                              }
                            : {}
                        }
                      >
                        {!speakerProfile.headshot && (
                          <div className='text-gray-500 text-sm text-center px-2'>
                            Click to upload photo
                          </div>
                        )}
                        <input
                          type='file'
                          className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                          accept='image/*'
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileUpload(e.target.files[0], 'headshot');
                            }
                          }}
                        />
                      </label>
                      <p className='text-xs text-gray-500 text-center'>
                        10MB max
                      </p>
                    </div>
                    {/* Bio */}
                    <div className='flex flex-col gap-2 w-full'>
                      <label className='text-sm font-bold text-ap-blue'>
                        Bio
                      </label>
                      <textarea
                        value={speakerProfile.bio}
                        onChange={(e) => {
                          setSpeakerProfile((prev) => ({
                            ...prev,
                            bio: e.target.value,
                          }));
                        }}
                        className='p-2 border border-gray-300 rounded h-32'
                        placeholder='Provide a brief bio of yourself'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-6'>
                  {/* Presentation Title - Moved to top */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation Title
                    </label>
                    <input
                      type='text'
                      value={speakerProfile.presentationTitle || ''}
                      onChange={(e) =>
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          presentationTitle: e.target.value,
                        }))
                      }
                      className='p-2 border border-gray-300 rounded'
                      placeholder='Enter your presentation title'
                    />
                  </div>

                  {/* Presentation Summary */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Presentation Summary
                    </label>
                    <textarea
                      value={speakerProfile.speakerTopic}
                      onChange={(e) => {
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          speakerTopic: e.target.value,
                        }));
                      }}
                      className='p-2 border border-gray-300 rounded h-24'
                      placeholder='Provide a brief summary of your presentation'
                    />
                  </div>

                  {/* Learning Objectives */}
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-ap-blue'>
                      Learning Objectives
                    </label>
                    <textarea
                      value={speakerProfile.learningObjectives}
                      onChange={(e) => {
                        setSpeakerProfile((prev) => ({
                          ...prev,
                          learningObjectives: e.target.value,
                        }));
                      }}
                      className='p-2 border border-gray-300 rounded h-20'
                      placeholder='List the key learning objectives of your presentation'
                    />
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className='flex justify-end gap-3 mt-4 pt-4 border-t border-gray-200'>
                <button
                  onClick={() => setShowEditSpeakerProfile(false)}
                  className='px-4 py-2 text-gray-600 hover:text-gray-800'
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleSaveChanges();
                  }}
                  className='px-4 py-2 bg-ap-blue text-white rounded hover:bg-ap-blue/80'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const registrant = await getApsRegistrantById(params.id);

  return {
    props: { registrant },
  };
};

export default RegistrantPage;
