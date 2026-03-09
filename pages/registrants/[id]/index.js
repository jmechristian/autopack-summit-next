import React, { useState, useEffect } from 'react';
import {
  getApsRegistrantById,
  getAddOnsByEventId,
  createRegistrantAddOnRequestApi,
  uploadToAPS3,
  updateSpeakerProfile,
} from '../../../util/api';
import { MdAccessTime, MdCheckCircle, MdEdit } from 'react-icons/md';

export const RegistrantPage = ({ registrant }) => {
  const [showEditSpeakerProfile, setShowEditSpeakerProfile] = useState(false);
  const billingPhone = registrant && registrant.billingAddressPhone;
  const billingEmail = registrant && registrant.billingAddressEmail;
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

  const handleSubmitAddOnRequests = async () => {
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

  return (
    <div className='w-full pt-10 pb-16'>
      {registrantData ? (
        <div className='w-full max-w-7xl mx-auto border border-gray-300 p-5 grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-12 lg:col-span-3'>
            <div
              className='w-full h-full  bg-ap-blue p-6 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('https://apsmedia.s3.us-east-1.amazonaws.com/profile-header.png')`,
              }}
            >
              <div className='flex flex-col gap-5 h-full'>
                <div className='w-full flex flex-col gap-2'>
                  <div className='text-3xl text-ap-yellow font-oswald uppercase'>
                    Welcome!
                  </div>
                  <div className='w-full flex flex-col gap-0'>
                    <div className='text-white text-5xl font-oswald uppercase'>
                      {registrantData.firstName} <br />{' '}
                      {registrantData.lastName}
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-0 mt-3'>
                    <div className='text-white text-xl font-oswald uppercase'>
                      {registrantData.company.name}
                    </div>
                    <div className='text-white text-lg max-w-[200px] font-oswald text-white/60 leading-tight'>
                      {registrantData.jobTitle}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-0'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Type
                    </div>
                    <div className='text-white text-lg font-oswald uppercase'>
                      {registrantData.attendeeType}
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-sm font-bold text-ap-yellow'>
                      Registration Status
                    </div>
                    <div
                      className={`flex items-center gap-1 text-lg font-oswald uppercase w-fit ${
                        registrantData.status === 'PENDING'
                          ? 'bg-ap-yellow px-2 py-0.5 rounded-lg'
                          : registrantData.status === 'WAITLIST'
                          ? 'bg-yellow-500 px-2 py-0.5 rounded-lg'
                          : 'bg-green-600 px-2 py-0.5 rounded-lg'
                      }`}
                    >
                      <div>
                        {registrantData.status === 'PENDING' ? (
                          <MdAccessTime color='black' size={24} />
                        ) : registrantData.status === 'WAITLIST' ? (
                          <MdAccessTime color='black' size={24} />
                        ) : (
                          <MdCheckCircle color='green' size={24} />
                        )}
                      </div>
                      <div
                        className={`${
                          registrantData.status === 'PENDING'
                            ? 'text-neutral-600'
                            : registrantData.status === 'WAITLIST'
                            ? 'text-black'
                            : 'text-white'
                        }`}
                      >
                        {registrantData.status === 'PENDING'
                          ? 'Pending'
                          : registrantData.status === 'WAITLIST'
                          ? 'Waitlist'
                          : 'Registered'}
                      </div>
                    </div>
                  </div>
                  <div className='pt-6 mt-6 border-t border-white/30'>
                    <div className='rounded-md bg-black/45 backdrop-blur-md border border-white/40 shadow-lg p-3'>
                      <div className='text-sm font-bold text-ap-yellow mb-2'>
                        Billing Details
                      </div>
                      <div className='text-white text-sm leading-tight font-medium'>
                        {registrantData.billingAddressFirstName}{' '}
                        {registrantData.billingAddressLastName}
                      </div>
                      <div className='text-white text-sm'>{billingPhone}</div>
                      <div className='text-white text-sm'>{billingEmail}</div>
                      <div className='text-white text-sm'>
                        {registrantData.billingAddressStreet}
                      </div>
                      <div className='text-white text-sm'>
                        {registrantData.billingAddressCity},{' '}
                        {registrantData.billingAddressState},{' '}
                        {registrantData.billingAddressZip}
                      </div>
                    </div>
                  </div>
                </div>
                {/* SPEAKER PROFILE */}
                {registrantData.attendeeType === 'Speaker' && (
                  <div className='flex items-end flex-1 gap-2'>
                    <div
                      className='flex items-center gap-4 cursor-pointer'
                      onClick={() => setShowEditSpeakerProfile(true)}
                    >
                      {speakerProfile.headshot ? (
                        <div
                          className='w-16 h-20 bg-cover bg-center bg-no-repeat'
                          style={{
                            backgroundImage: `url(${speakerProfile.headshot})`,
                          }}
                        ></div>
                      ) : (
                        <div className='w-12 h-16 bg-ap-blue rounded flex items-center justify-center'>
                          <div className='text-white/70 text-3xl font-oswald uppercase'>
                            {registrantData.firstName.charAt(0)}
                            {registrantData.lastName.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                          <MdEdit color='black' size={20} />
                        </div>
                        <div className='text-sm font-semibold text-white hover:text-ap-yellow'>
                          Edit Speaker Profile
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* MAIN CONTENT */}
          <div className='col-span-12 lg:col-span-9'>
            <div className='w-full h-full px-8 pt-8 pb-10 bg-ap-yellow/10 flex flex-col gap-12'>
              {/* ADD-ONS (SUMMARY) */}
              <div className='w-full'>
                <div className='text-sm font-bold text-ap-blue mb-3'>
                  Add-ons
                </div>
                {registrantData.addOnRequests &&
                registrantData.addOnRequests.items &&
                registrantData.addOnRequests.items.length > 0 ? (
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
                      const statusLabel = isApproved ? 'Approved' : 'Pending';
                      const statusClasses = isApproved
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800';

                      return (
                        <div
                          key={req.id}
                          className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-3 bg-white border border-gray-200 rounded-lg'
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
                            className={`inline-flex items-center justify-center px-3 py-1 text-xs font-semibold rounded-full ${statusClasses}`}
                          >
                            {statusLabel}
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
              <div className='w-full'>
                <div className='text-sm font-bold text-ap-blue mb-3'>
                  Request additional add-ons
                </div>
                {addOnsLoading ? (
                  <div className='text-sm text-gray-500'>Loading add-ons...</div>
                ) : (
                  <>
                    {(() => {
                      const requestedIds = new Set(
                        registrantData.addOnRequests?.items?.map(
                          (r) => r.addOnId
                        ) || []
                      );
                      const available = availableAddOns.filter(
                        (a) => !requestedIds.has(a.id)
                      );

                      if (available.length === 0) {
                        return (
                          <div className='text-sm text-gray-500'>
                            No additional add-ons are available at this time.
                          </div>
                        );
                      }

                      return (
                        <div className='space-y-3'>
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
                                className={`rounded-lg border p-3 bg-white ${
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
                                            f.type === 'select' &&
                                            f.options?.[0]
                                              ? f.options[0]
                                              : '';
                                        });
                                        setPendingAddOnsSelected((prev) => [
                                          ...prev,
                                          {
                                            addOnId: addOn.id,
                                            addOn,
                                            preferences: prefs,
                                          },
                                        ]);
                                      } else {
                                        setPendingAddOnsSelected((prev) =>
                                          prev.filter(
                                            (s) => s.addOnId !== addOn.id
                                          )
                                        );
                                      }
                                    }}
                                    className='mt-1'
                                  />
                                  <div className='flex-1 min-w-0'>
                                    <div className='font-medium text-gray-900'>
                                      {addOn.title}
                                    </div>
                                    <div className='text-xs text-gray-500 mt-0.5'>
                                      {[addOn.date, addOn.time, addOn.location]
                                        .filter(Boolean)
                                        .join(' • ')}
                                    </div>
                                    {addOn.description && (
                                      <div
                                        className='text-sm text-gray-600 mt-2 [&_*]:!text-gray-600 [&_b]:!font-semibold'
                                        dangerouslySetInnerHTML={{
                                          __html: addOn.description,
                                        }}
                                      />
                                    )}
                                    {addOn.price != null && addOn.price > 0 && (
                                      <div className='text-sm font-medium text-gray-900 mt-2'>
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
                                              selectedEntry?.preferences?.[
                                                field.key
                                              ] ?? ''
                                            }
                                            onChange={(e) => {
                                              const v = e.target.value;
                                              setPendingAddOnsSelected(
                                                (prev) =>
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
                                            className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ap-blue/30'
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
                                              selectedEntry?.preferences?.[
                                                field.key
                                              ] ?? ''
                                            }
                                            onChange={(e) => {
                                              const v = e.target.value;
                                              setPendingAddOnsSelected(
                                                (prev) =>
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
                                            className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ap-blue/30'
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
                      <div className='mt-3 text-sm text-red-600'>
                        {addOnRequestError}
                      </div>
                    )}
                    {addOnRequestSuccess && (
                      <div className='mt-3 text-sm text-green-600'>
                        {addOnRequestSuccess}
                      </div>
                    )}
                    <div className='mt-4'>
                      <button
                        type='button'
                        onClick={handleSubmitAddOnRequests}
                        disabled={
                          savingAddOns || pendingAddOnsSelected.length === 0
                        }
                        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg shadow-sm ${
                          savingAddOns || pendingAddOnsSelected.length === 0
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-ap-blue text-white hover:bg-ap-blue/90'
                        }`}
                      >
                        {savingAddOns ? 'Submitting...' : 'Submit add-on requests'}
                      </button>
                    </div>
                  </>
                )}
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
