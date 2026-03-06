import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  ExclamationCircleIcon,
  PlusIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';
import { MdCheckCircle } from 'react-icons/md';
import { API } from 'aws-amplify';
import { getAPSCompanies } from '../util/api';
import NewTicketForm from '../components/registration/NewTicketForm';

const PRICING = {
  OEM: 1600,
  Tier1: 1600,
  'Solution-Provider': 1600,
  Sponsor: 840,
  Speaker: 1600,
  Exhibitor: 699,
};

const DISCOUNT_ELIGIBLE_TYPES = ['OEM', 'Tier1', 'Sponsor', 'Speaker'];

const APS_EVENT_ID = 'd00b35f5-c45b-42eb-b306-fa3dfeee0251';

const INTEREST_OPTIONS = [
  'Expendable Packaging and/or After Sales Packaging',
  'Returnable and/or reusable Packaging',
  'Logistics and Supply Chain Solutions',
  'Others (please specify)',
];

const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const STEP_LABELS = [
  'Basic Information',
  'Interests & Preferences',
  'Payment',
  'Confirmation',
];

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [companySearch, setCompanySearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountCodeError, setDiscountCodeError] = useState('');
  const [additionalRegistrants, setAdditionalRegistrants] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);
  const [addOnsSelected, setAddOnsSelected] = useState([]);
  const [formDataId] = useState('preview-' + Date.now());
  const [emailChecking, setEmailChecking] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [eventCodes, setEventCodes] = useState([]);
  const [sponsorTicketOption, setSponsorTicketOption] = useState(null);

  const dropdownRef = useRef(null);
  const emailCheckTimeout = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyId: '',
    jobTitle: '',
    attendeeType: '',
    speakerTopic: '',
    learningObjectives: '',
    interests: [],
    otherInterest: '',
    buyerQuestion: '',
    packagingChallenge: '',
    termsAccepted: false,
    sameAsAttendee: false,
    billingAddress: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    discountCode: '',
    totalAmount: 0,
  });

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const items = await getAPSCompanies();
        setCompanies(items || []);
      } catch (err) {
        console.log('Error fetching companies:', err);
      }
    };
    const loadEventCodes = async () => {
      try {
        const res = await API.graphql({
          query: /* GraphQL */ `
            query APSCodesByEventId($eventId: ID!) {
              aPSCodesByEventId(eventId: $eventId) {
                items {
                  code
                  limit
                  used
                }
              }
            }
          `,
          authMode: 'API_KEY',
          variables: { eventId: APS_EVENT_ID },
        });
        setEventCodes(res.data.aPSCodesByEventId.items || []);
      } catch (err) {
        console.log('Error fetching event codes:', err);
      }
    };
    loadCompanies();
    loadEventCodes();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const checkEmailExists = useCallback(async (email) => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailExists(false);
      setEmailChecking(false);
      return;
    }
    setEmailChecking(true);
    try {
      const res = await API.graphql({
        query: /* GraphQL */ `
          query ApsRegistrantsByEmail($email: String!) {
            apsRegistrantsByEmail(email: $email) {
              items {
                id
              }
            }
          }
        `,
        authMode: 'API_KEY',
        variables: { email },
      });
      const exists = (res.data.apsRegistrantsByEmail.items?.length || 0) > 0;
      setEmailExists(exists);
      if (exists) {
        setErrors((prev) => ({ ...prev, email: 'This email is already registered' }));
      }
    } catch (err) {
      console.log('Error checking email:', err);
    } finally {
      setEmailChecking(false);
    }
  }, []);

  const filteredCompanies = useMemo(() => {
    const sorted = [...companies].sort((a, b) => a.name.localeCompare(b.name));
    if (!companySearch) return sorted;
    return sorted.filter((c) =>
      c.name.toLowerCase().includes(companySearch.toLowerCase()),
    );
  }, [companies, companySearch]);

  const effectiveAttendeeType = useMemo(() => {
    if (
      formData.attendeeType === 'Sponsor' &&
      sponsorTicketOption === 'exhibitor-staff'
    ) {
      return 'Exhibitor';
    }
    return formData.attendeeType;
  }, [formData.attendeeType, sponsorTicketOption]);

  const totalAmount = useMemo(() => {
    if (discountApplied) return 0;
    const base = PRICING[effectiveAttendeeType] || 0;
    return base * ticketQuantity;
  }, [effectiveAttendeeType, discountApplied, ticketQuantity]);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const digits = value.replace(/[^\d]/g, '');
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newErrors = { ...errors };

    if (name === 'attendeeType') {
      setSponsorTicketOption(null);
    }

    if (name === 'sameAsAttendee') {
      setFormData((prev) => ({
        ...prev,
        sameAsAttendee: checked,
        billingAddress: checked
          ? {
              firstName: prev.firstName,
              lastName: prev.lastName,
              email: prev.email,
              phone: prev.phone,
              companyName: prev.companyName,
              street: '',
              city: '',
              state: '',
              zip: '',
            }
          : {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              companyName: '',
              street: '',
              city: '',
              state: '',
              zip: '',
            },
      }));
      return;
    }

    if (name === 'billingAddress.phone') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        billingAddress: { ...prev.billingAddress, phone: formatted },
      }));
      if (formatted) delete newErrors.billingPhone;
      setErrors(newErrors);
      return;
    }

    if (name.startsWith('billingAddress.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        billingAddress: { ...prev.billingAddress, [field]: value },
      }));
      if (value)
        delete newErrors[
          `billing${field.charAt(0).toUpperCase() + field.slice(1)}`
        ];
      setErrors(newErrors);
      return;
    }

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
      if (formatted) delete newErrors.phone;
      setErrors(newErrors);
      return;
    }

    if (name === 'interests') {
      setFormData((prev) => {
        const current = prev.interests;
        const updated = current.includes(value)
          ? current.filter((i) => i !== value)
          : [...current, value];
        return { ...prev, interests: updated };
      });
      delete newErrors.interests;
      setErrors(newErrors);
      return;
    }

    if (name === 'termsAccepted') {
      setFormData((prev) => ({ ...prev, termsAccepted: checked }));
      if (checked) delete newErrors.termsAccepted;
      setErrors(newErrors);
      return;
    }

    if (name === 'email') {
      setFormData((prev) => ({ ...prev, email: value }));
      setEmailExists(false);
      if (value) delete newErrors.email;
      setErrors(newErrors);
      if (emailCheckTimeout.current) clearTimeout(emailCheckTimeout.current);
      emailCheckTimeout.current = setTimeout(() => checkEmailExists(value), 600);
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value) delete newErrors[name];
    setErrors(newErrors);
  };

  const handleCompanySelect = (company) => {
    setFormData((prev) => ({
      ...prev,
      companyName: company.name,
      companyId: company.id,
    }));
    setCompanySearch(company.name);
    setIsDropdownOpen(false);
    const newErrors = { ...errors };
    delete newErrors.companyName;
    setErrors(newErrors);
  };

  const handleAddCompany = () => {
    console.log('Add company requested. Search term:', companySearch);
  };

  const handleApplyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountCodeError('Please enter a discount code');
      return;
    }
    const match = eventCodes.find(
      (c) => c.code.toLowerCase() === discountCode.trim().toLowerCase()
    );
    if (!match) {
      setDiscountCodeError('Invalid discount code');
      setDiscountApplied(false);
      return;
    }
    if (match.limit != null && match.used >= match.limit) {
      setDiscountCodeError('This code has reached its usage limit');
      setDiscountApplied(false);
      return;
    }
    setDiscountApplied(true);
    setDiscountCodeError('');
    setFormData((prev) => ({ ...prev, discountCode: discountCode.trim() }));
  };

  const handleSubmitRegistration = () => {
    console.log('Submit registration:', {
      formData: {
        ...formData,
        attendeeType: effectiveAttendeeType, // EXHIBITOR when exhibitor-staff selected
        totalAmount,
      },
      additionalRegistrants,
      addOnsSelected,
    });
    setStep(4);
  };

  const validateStep = (stepToValidate) => {
    const newErrors = {};

    if (stepToValidate === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim())
        newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Please enter a valid email';
      else if (emailExists)
        newErrors.email = 'This email is already registered';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.companyName) newErrors.companyName = 'Company is required';
      if (!formData.jobTitle.trim())
        newErrors.jobTitle = 'Job title is required';
      if (!formData.attendeeType)
        newErrors.attendeeType = 'Attendee type is required';
      if (formData.attendeeType === 'Speaker') {
        if (!formData.speakerTopic.trim())
          newErrors.speakerTopic = 'Topic description is required';
        if (!formData.learningObjectives.trim())
          newErrors.learningObjectives = 'Learning objectives are required';
      }
    }

    if (stepToValidate === 2) {
      if (formData.interests.length === 0)
        newErrors.interests = 'At least one selection is required';
      if (
        formData.interests.includes('Others (please specify)') &&
        !formData.otherInterest.trim()
      ) {
        newErrors.otherInterest = 'Please specify your other interest';
      }
      if (!formData.buyerQuestion.trim())
        newErrors.buyerQuestion = 'This question is required';
      if (!formData.packagingChallenge.trim())
        newErrors.packagingChallenge = 'This question is required';
    }

    if (stepToValidate === 3) {
      if (
        formData.attendeeType === 'Sponsor' &&
        !sponsorTicketOption
      ) {
        newErrors.sponsorTicketOption =
          'Please select a ticket option (Standard Sponsor or Exhibitor Staff Only)';
      }
      const ba = formData.billingAddress;
      if (!ba.firstName.trim())
        newErrors.billingFirstName = 'First name is required';
      if (!ba.lastName.trim())
        newErrors.billingLastName = 'Last name is required';
      if (!ba.email.trim()) newErrors.billingEmail = 'Email is required';
      if (!ba.phone.trim()) newErrors.billingPhone = 'Phone is required';
      if (!ba.companyName.trim())
        newErrors.billingCompanyName = 'Company name is required';
      if (!ba.street.trim()) newErrors.billingStreet = 'Street is required';
      if (!ba.city.trim()) newErrors.billingCity = 'City is required';
      if (!ba.state) newErrors.billingState = 'State is required';
      if (!ba.zip.trim()) newErrors.billingZip = 'Zip code is required';
      if (!formData.termsAccepted)
        newErrors.termsAccepted = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const hasStepErrors = (stepNumber) => {
    const errorKeys = Object.keys(errors);
    if (stepNumber === 1) {
      return errorKeys.some((k) =>
        [
          'firstName',
          'lastName',
          'email',
          'phone',
          'companyName',
          'jobTitle',
          'attendeeType',
          'speakerTopic',
          'learningObjectives',
        ].includes(k),
      );
    }
    if (stepNumber === 2) {
      return errorKeys.some((k) =>
        [
          'interests',
          'otherInterest',
          'buyerQuestion',
          'packagingChallenge',
        ].includes(k),
      );
    }
    if (stepNumber === 3) {
      return errorKeys.some(
        (k) =>
          k.startsWith('billing') ||
          k === 'termsAccepted' ||
          k === 'sponsorTicketOption',
      );
    }
    return false;
  };

  const handleNext = () => {
    const isValid = validateStep(step);
    if (isValid) {
      setCompletedSteps((prev) => ({ ...prev, [step]: true }));
      setStep((s) => s + 1);
    }
  };

  const handlePrev = () => setStep((s) => s - 1);

  const canSubmit = () => {
    if (!formData.attendeeType) return false;
    if (
      formData.attendeeType === 'Sponsor' &&
      !sponsorTicketOption
    ) {
      return false;
    }
    return true;
  };

  const getSubmitLabel = () => {
    const type = formData.attendeeType;
    if (discountApplied) return 'Register with Code';
    if (type === 'Solution-Provider') return 'Join Waitlist';
    return 'Register';
  };

  const inputClass = (fieldName) =>
    `w-full px-3 py-2.5 border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ap-blue/30 ${
      errors[fieldName]
        ? 'border-red-400 bg-red-50/50'
        : 'border-gray-300 hover:border-gray-400'
    }`;

  const labelClass = 'text-sm font-semibold text-gray-700';

  const renderFieldError = (fieldName) =>
    errors[fieldName] ? (
      <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
        <ExclamationCircleIcon className='w-3.5 h-3.5 flex-shrink-0' />
        {errors[fieldName]}
      </p>
    ) : null;

  const renderProgress = () => (
    <div className='flex items-start justify-center gap-0 mb-8 max-w-2xl mx-auto'>
      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = step === stepNumber;
        const isCompleted = completedSteps[stepNumber];
        const isDisabled = stepNumber > step && !completedSteps[stepNumber - 1];
        const hasErrors = hasStepErrors(stepNumber);

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={`flex-1 h-0.5 mt-5 ${
                  isCompleted || isActive ? 'bg-ap-blue' : 'bg-gray-200'
                }`}
              />
            )}
            <div className='flex flex-col items-center w-24 shrink-0'>
              <button
                disabled={isDisabled || step === 4}
                onClick={() => !isDisabled && step !== 4 && setStep(stepNumber)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-ap-blue text-white shadow-lg shadow-ap-blue/30 scale-110'
                    : isCompleted
                      ? 'bg-ap-blue text-white'
                      : 'bg-gray-200 text-gray-500'
                } ${isDisabled || step === 4 ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
              >
                {isCompleted && !isActive ? (
                  <MdCheckCircle className='w-5 h-5' />
                ) : (
                  stepNumber
                )}
                {hasErrors && (
                  <ExclamationCircleIcon className='w-5 h-5 text-red-500 absolute -top-1 -right-1' />
                )}
              </button>
              <span
                className={`mt-2 text-xs font-medium text-center leading-tight ${
                  isActive ? 'text-ap-blue' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );

  const renderStep1 = () => (
    <div className='bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-10'>
      <h2 className='text-xl font-bold text-gray-900 mb-6'>
        Attendee Information
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-1'>
          <label className={labelClass}>First Name</label>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass('firstName')}
          />
          {renderFieldError('firstName')}
        </div>
        <div className='flex flex-col gap-1'>
          <label className={labelClass}>Last Name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass('lastName')}
          />
          {renderFieldError('lastName')}
        </div>
        <div className='flex flex-col gap-1'>
          <label className={labelClass}>Email Address</label>
          <div className='relative'>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className={`${inputClass('email')} pr-10`}
            />
            {emailChecking && (
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg className='animate-spin h-4 w-4 text-gray-400' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                </svg>
              </div>
            )}
            {!emailChecking && formData.email && /\S+@\S+\.\S+/.test(formData.email) && !emailExists && (
              <MdCheckCircle className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500' />
            )}
          </div>
          {emailExists && (
            <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
              <ExclamationCircleIcon className='w-3.5 h-3.5' />
              This email is already registered. Please use a different email.
            </p>
          )}
          {!emailExists && renderFieldError('email')}
        </div>
        <div className='flex flex-col gap-1'>
          <label className={labelClass}>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='(xxx) xxx-xxxx'
            value={formData.phone}
            onChange={handleChange}
            className={inputClass('phone')}
          />
          {renderFieldError('phone')}
        </div>

        {/* Company Searchable Dropdown */}
        <div className='flex flex-col gap-1'>
          <label className={labelClass}>Company Name</label>
          <div className='relative' ref={dropdownRef}>
            <div className='relative'>
              <input
                type='text'
                placeholder={
                  formData.companyName || 'Search for your company...'
                }
                value={
                  isDropdownOpen ? companySearch : formData.companyName || ''
                }
                onChange={(e) => {
                  setCompanySearch(e.target.value);
                  setIsDropdownOpen(true);
                  if (formData.companyName) {
                    setFormData((prev) => ({
                      ...prev,
                      companyName: '',
                      companyId: '',
                    }));
                  }
                }}
                onClick={() => {
                  setIsDropdownOpen(true);
                  setCompanySearch('');
                }}
                className={`${inputClass('companyName')} pr-8 ${
                  !formData.companyName && !isDropdownOpen
                    ? 'text-gray-400'
                    : ''
                }`}
              />
              {(companySearch || formData.companyName) && (
                <button
                  onClick={() => {
                    setCompanySearch('');
                    setFormData((prev) => ({
                      ...prev,
                      companyName: '',
                      companyId: '',
                    }));
                    setIsDropdownOpen(false);
                  }}
                  className='absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  <XCircleIcon className='w-4 h-4' />
                </button>
              )}
            </div>
            {isDropdownOpen && (
              <div className='absolute z-20 w-full mt-1 max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg'>
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company) => (
                    <div
                      key={company.id}
                      className='px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 transition-colors'
                      onClick={() => handleCompanySelect(company)}
                    >
                      {company.name}
                    </div>
                  ))
                ) : (
                  <div className='px-3 py-2 text-sm text-gray-400'>
                    No companies found
                  </div>
                )}
              </div>
            )}
          </div>
          <p className='text-xs text-gray-500 mt-0.5'>
            If your company is not listed,{' '}
            <button
              type='button'
              onClick={handleAddCompany}
              className='text-ap-blue hover:underline'
            >
              click here to add it.
            </button>
          </p>
          {renderFieldError('companyName')}
        </div>

        <div className='flex flex-col gap-1'>
          <label className={labelClass}>Job Title</label>
          <input
            type='text'
            name='jobTitle'
            placeholder='Job Title'
            value={formData.jobTitle}
            onChange={handleChange}
            className={inputClass('jobTitle')}
          />
          {renderFieldError('jobTitle')}
        </div>

        <div className='flex flex-col gap-1 md:col-span-2'>
          <label className={labelClass}>Attendee Type</label>
          <select
            name='attendeeType'
            value={formData.attendeeType}
            onChange={handleChange}
            className={inputClass('attendeeType')}
          >
            <option value=''>Select Attendee Type</option>
            <option value='OEM'>OEM</option>
            <option value='Tier1'>Tier 1 Part Supplier</option>
            <option value='Solution-Provider'>Solution Provider</option>
            <option value='Sponsor'>Sponsor</option>
            <option value='Speaker'>Speaker</option>
          </select>
          {renderFieldError('attendeeType')}
        </div>

        {formData.attendeeType === 'Speaker' && (
          <>
            <div className='flex flex-col gap-1 md:col-span-2'>
              <label className={labelClass}>
                Give a brief description of your proposed topic and how it is
                relevant to the automotive packaging audience *
              </label>
              <textarea
                name='speakerTopic'
                value={formData.speakerTopic}
                onChange={handleChange}
                className={`${inputClass('speakerTopic')} h-32 resize-none`}
                placeholder='Enter your topic description'
              />
              {renderFieldError('speakerTopic')}
            </div>
            <div className='flex flex-col gap-1 md:col-span-2'>
              <label className={labelClass}>
                Please input three learning objectives from your proposed
                presentation *
              </label>
              <textarea
                name='learningObjectives'
                value={formData.learningObjectives}
                onChange={handleChange}
                className={`${inputClass('learningObjectives')} h-32 resize-none`}
                placeholder='Enter your learning objectives'
              />
              {renderFieldError('learningObjectives')}
            </div>
            <p className='md:col-span-2 text-sm text-gray-500 italic'>
              Note: Speaker application is subject to approval. You will be
              notified via email once your application has been reviewed.
            </p>
          </>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
        {/* Left: Interests */}
        <div className='flex flex-col gap-8 p-6 lg:p-10'>
          {/* Q1: Multiple Choice */}
          <div className='flex flex-col gap-3'>
            <div>
              <h3 className='text-lg font-bold text-gray-900'>
                What are you most interested in learning about?
              </h3>
              <p className='text-sm text-gray-500 mt-1'>
                Select all that apply. At least one selection is required.
              </p>
            </div>
            <div className='flex flex-col gap-2.5'>
              {INTEREST_OPTIONS.map((interest) => (
                <label
                  key={interest}
                  className='flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors'
                >
                  <input
                    type='checkbox'
                    name='interests'
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                    className='mt-0.5 rounded border-gray-300 text-ap-blue focus:ring-ap-blue'
                  />
                  <span className='text-sm text-gray-700'>{interest}</span>
                </label>
              ))}
              {formData.interests.includes('Others (please specify)') && (
                <div className='ml-6'>
                  <input
                    type='text'
                    name='otherInterest'
                    placeholder='Please specify...'
                    value={formData.otherInterest}
                    onChange={handleChange}
                    className={inputClass('otherInterest')}
                  />
                  {renderFieldError('otherInterest')}
                </div>
              )}
            </div>
            {renderFieldError('interests')}
          </div>

          {/* Q2: Buyer Question */}
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>
              If you could ask an automotive packaging buyer one question, what
              would it be?
            </label>
            <textarea
              name='buyerQuestion'
              value={formData.buyerQuestion}
              onChange={handleChange}
              className={`${inputClass('buyerQuestion')} h-28 resize-none`}
              placeholder='Enter your question...'
            />
            {renderFieldError('buyerQuestion')}
          </div>

          {/* Q3: Packaging Challenge */}
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>
              Please describe one significant automotive packaging challenge
              your organization is currently working to resolve.
            </label>
            <textarea
              name='packagingChallenge'
              value={formData.packagingChallenge}
              onChange={handleChange}
              className={`${inputClass('packagingChallenge')} h-28 resize-none`}
              placeholder='Describe the challenge...'
            />
            {renderFieldError('packagingChallenge')}
          </div>
        </div>

        {/* Right: Add-ons placeholder */}
        <div className='flex flex-col items-center justify-center p-6 lg:p-10 bg-gray-50 min-h-[300px]'>
          <div className='text-center'>
            <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4'>
              <PlusIcon className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-lg font-semibold text-gray-400'>Add-Ons</h3>
            <p className='text-sm text-gray-400 mt-1'>Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const basePrice = PRICING[effectiveAttendeeType] || 0;
    const displayTotal = discountApplied ? 0 : basePrice * ticketQuantity;

    return (
      <div className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200'>
          {/* Left: Billing */}
          <div className='flex flex-col gap-5 col-span-3 p-6 lg:p-10'>
            <h3 className='text-xl font-bold text-gray-900'>
              Billing Information
            </h3>

            <label className='flex items-center gap-2 text-sm cursor-pointer'>
              <input
                type='checkbox'
                name='sameAsAttendee'
                checked={formData.sameAsAttendee}
                onChange={handleChange}
                className='rounded border-gray-300 text-ap-blue focus:ring-ap-blue'
              />
              <span className='text-gray-700'>Same as Attendee</span>
            </label>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>First Name</label>
                <input
                  type='text'
                  name='billingAddress.firstName'
                  value={formData.billingAddress.firstName}
                  onChange={handleChange}
                  className={inputClass('billingFirstName')}
                />
                {renderFieldError('billingFirstName')}
              </div>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>Last Name</label>
                <input
                  type='text'
                  name='billingAddress.lastName'
                  value={formData.billingAddress.lastName}
                  onChange={handleChange}
                  className={inputClass('billingLastName')}
                />
                {renderFieldError('billingLastName')}
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>Email</label>
                <input
                  type='email'
                  name='billingAddress.email'
                  value={formData.billingAddress.email}
                  onChange={handleChange}
                  className={inputClass('billingEmail')}
                />
                {renderFieldError('billingEmail')}
              </div>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>Phone</label>
                <input
                  type='tel'
                  name='billingAddress.phone'
                  placeholder='(xxx) xxx-xxxx'
                  value={formData.billingAddress.phone}
                  onChange={handleChange}
                  className={inputClass('billingPhone')}
                />
                {renderFieldError('billingPhone')}
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label className={labelClass}>Company Name</label>
              <input
                type='text'
                name='billingAddress.companyName'
                value={formData.billingAddress.companyName}
                onChange={handleChange}
                className={inputClass('billingCompanyName')}
              />
              {renderFieldError('billingCompanyName')}
            </div>

            <div className='flex flex-col gap-1'>
              <label className={labelClass}>Street Address</label>
              <input
                type='text'
                name='billingAddress.street'
                value={formData.billingAddress.street}
                onChange={handleChange}
                className={inputClass('billingStreet')}
              />
              {renderFieldError('billingStreet')}
            </div>

            <div className='flex flex-col gap-1'>
              <label className={labelClass}>City</label>
              <input
                type='text'
                name='billingAddress.city'
                value={formData.billingAddress.city}
                onChange={handleChange}
                className={inputClass('billingCity')}
              />
              {renderFieldError('billingCity')}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>State</label>
                <select
                  name='billingAddress.state'
                  value={formData.billingAddress.state}
                  onChange={handleChange}
                  className={inputClass('billingState')}
                >
                  <option value=''>Select State</option>
                  {US_STATES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {renderFieldError('billingState')}
              </div>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>Zip Code</label>
                <input
                  type='text'
                  name='billingAddress.zip'
                  value={formData.billingAddress.zip}
                  onChange={handleChange}
                  className={inputClass('billingZip')}
                />
                {renderFieldError('billingZip')}
              </div>
            </div>

            <div className='bg-gray-50 rounded-lg p-4 mt-2'>
              <label className='flex items-start gap-2 text-sm cursor-pointer'>
                <input
                  type='checkbox'
                  name='termsAccepted'
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className='mt-0.5 rounded border-gray-300 text-ap-blue focus:ring-ap-blue'
                />
                <span className='text-gray-700'>
                  I acknowledge and accept the{' '}
                  <a
                    href='/policies'
                    className='text-ap-blue underline hover:text-ap-darkblue'
                  >
                    Event Terms and Conditions
                  </a>
                  .
                </span>
              </label>
              {renderFieldError('termsAccepted')}
            </div>
          </div>

          {/* Right: Payment Summary */}
          <div className='flex flex-col gap-4 col-span-2 bg-gray-50 p-6 lg:p-8'>
            <h3 className='text-xl font-bold text-gray-900'>
              Payment Information
            </h3>

            {/* Registrant Summary */}
            <div className='bg-white rounded-lg border border-gray-200 p-4'>
              <h4 className='font-semibold text-sm text-gray-900 mb-2'>
                Registrant
              </h4>
              <div className='text-sm text-gray-600 space-y-1'>
                <p>
                  {formData.firstName} {formData.lastName}
                </p>
                <p>{formData.email}</p>
                <p>{formData.companyName}</p>
                <p>{formData.jobTitle}</p>
                <p>{formData.phone}</p>
              </div>
            </div>

            {/* Sponsor ticket option - only when attendeeType is Sponsor */}
            {formData.attendeeType === 'Sponsor' && (
              <div className='bg-white rounded-lg border border-gray-200 p-4'>
                <h4 className='font-semibold text-sm text-gray-900 mb-3'>
                  Sponsor ticket option
                </h4>
                <p className='text-xs text-gray-600 mb-3'>
                  Choose the ticket type that matches your role:
                </p>
                <div className='space-y-3'>
                  <label
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      sponsorTicketOption === 'standard'
                        ? 'border-ap-blue bg-ap-blue/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type='radio'
                      name='sponsorTicketOption'
                      value='standard'
                      checked={sponsorTicketOption === 'standard'}
                      onChange={() => setSponsorTicketOption('standard')}
                      className='mt-1'
                    />
                    <div>
                      <span className='font-medium text-gray-900'>
                        Standard Sponsor ticket — $840
                      </span>
                      <p className='text-xs text-gray-600 mt-1'>
                        Full sponsor access and assigned seating.
                      </p>
                    </div>
                  </label>
                  <label
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      sponsorTicketOption === 'exhibitor-staff'
                        ? 'border-ap-blue bg-ap-blue/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type='radio'
                      name='sponsorTicketOption'
                      value='exhibitor-staff'
                      checked={sponsorTicketOption === 'exhibitor-staff'}
                      onChange={() => setSponsorTicketOption('exhibitor-staff')}
                      className='mt-1'
                    />
                    <div>
                      <span className='font-medium text-gray-900'>
                        Exhibitor Staff Only ticket — $699
                      </span>
                      <ul className='text-xs text-gray-600 mt-1 space-y-1 list-disc list-inside'>
                        <li>
                          Access to the event exhibitor space, networking, food
                          and refreshments, and drinks
                        </li>
                        <li>
                          Access to the presentation area but without an
                          assigned seat
                        </li>
                        <li>Limit: 2 per exhibitor</li>
                        <li>
                          Requirement: Must be an exhibitor — add-on only for
                          exhibitor sponsors
                        </li>
                      </ul>
                    </div>
                  </label>
                </div>
                {renderFieldError('sponsorTicketOption')}
              </div>
            )}

            {/* Discount Code */}
            {DISCOUNT_ELIGIBLE_TYPES.includes(effectiveAttendeeType) && (
              <div className='bg-white rounded-lg border border-gray-200 p-4'>
                <label className='text-sm font-semibold text-gray-900'>
                  Discount Code
                </label>
                <div className='flex gap-2 mt-2'>
                  <input
                    type='text'
                    value={discountCode}
                    onChange={(e) => {
                      setDiscountCode(e.target.value);
                      setDiscountCodeError('');
                      if (discountApplied) {
                        setDiscountApplied(false);
                        setFormData((prev) => ({ ...prev, discountCode: '' }));
                      }
                    }}
                    disabled={discountApplied}
                    placeholder='Enter code'
                    className='flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ap-blue/30 disabled:bg-gray-50 disabled:text-gray-500'
                  />
                  {discountApplied ? (
                    <button
                      onClick={() => {
                        setDiscountApplied(false);
                        setDiscountCode('');
                        setFormData((prev) => ({ ...prev, discountCode: '' }));
                      }}
                      className='px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors'
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={handleApplyDiscount}
                      className='px-4 py-2 bg-ap-darkblue text-white text-sm font-medium rounded-lg hover:bg-ap-blue transition-colors'
                    >
                      Apply
                    </button>
                  )}
                </div>
                {discountCodeError && (
                  <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
                    <ExclamationCircleIcon className='w-3.5 h-3.5' />
                    {discountCodeError}
                  </p>
                )}
                {discountApplied && (
                  <p className='text-green-600 text-xs mt-1 flex items-center gap-1'>
                    <MdCheckCircle className='w-3.5 h-3.5' /> Coupon applied — registration is complimentary
                  </p>
                )}
              </div>
            )}

            {/* Order Summary */}
            <div className='bg-white rounded-lg border border-gray-200 p-4'>
              <h4 className='font-semibold text-sm text-gray-900 mb-3'>
                Order Summary
              </h4>
              <div className='flex justify-between text-xs font-medium text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-100'>
                <span>Item</span>
                <span>Qty</span>
                <span>Total</span>
              </div>

              {formData.attendeeType === 'Solution-Provider' ? (
                <div className='flex flex-col gap-2 mt-3'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-700'>
                      General Registration - {formData.lastName}
                    </span>
                    <span className='text-gray-500'>1</span>
                    <span className='font-medium'>
                      ${basePrice.toLocaleString()}
                    </span>
                  </div>
                  {additionalRegistrants.map((reg, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center text-sm border-t border-gray-100 pt-2'
                    >
                      <div className='flex items-center gap-1.5'>
                        <button
                          onClick={() => {
                            setTicketQuantity((t) => t - 1);
                            setAdditionalRegistrants((prev) =>
                              prev.filter((_, i) => i !== index),
                            );
                          }}
                          className='text-red-400 hover:text-red-600 transition-colors'
                        >
                          <XCircleIcon className='w-4 h-4' />
                        </button>
                        <span className='text-gray-700'>
                          General Registration - {reg.lastName}
                        </span>
                      </div>
                      <span className='text-gray-500'>1</span>
                      <span className='font-medium'>
                        ${basePrice.toLocaleString()}
                      </span>
                    </div>
                  ))}
                  <button
                    onClick={() => setShowNewTicketForm(true)}
                    className='flex items-center gap-2 mt-2 py-2 px-3 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors'
                  >
                    <div className='bg-white rounded-full p-0.5'>
                      <PlusIcon className='w-3.5 h-3.5' />
                    </div>
                    Add New Ticket
                  </button>
                </div>
              ) : (
                <div className='flex justify-between text-sm mt-3'>
                  <span className='text-gray-700'>
                    {effectiveAttendeeType === 'Exhibitor'
                      ? 'Exhibitor Staff Only'
                      : effectiveAttendeeType === 'Sponsor'
                        ? 'Sponsor Registration'
                        : 'General Registration'}
                  </span>
                  <span className='text-gray-500'>1</span>
                  {discountApplied ? (
                    <div className='flex items-baseline gap-2'>
                      <span className='line-through text-gray-400 text-xs'>
                        ${basePrice.toLocaleString()}
                      </span>
                      <span className='font-semibold text-green-600'>$0.00</span>
                    </div>
                  ) : (
                    <span className='font-medium'>
                      ${basePrice.toLocaleString()}
                    </span>
                  )}
                </div>
              )}

              {/* Add-ons */}
              <div className='mt-3 pt-3 border-t border-gray-100'>
                <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>
                  Add-ons
                </div>
                {addOnsSelected.length > 0 ? (
                  addOnsSelected.map((addon, i) => (
                    <div
                      key={i}
                      className='flex justify-between text-sm text-gray-600 py-1'
                    >
                      <span>{addon.title}</span>
                      <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full'>
                        PENDING
                      </span>
                    </div>
                  ))
                ) : (
                  <p className='text-xs text-gray-400 italic'>
                    No add-ons selected
                  </p>
                )}
              </div>
            </div>

            {/* Total */}
            <div className='flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg font-bold'>
              <span>Total</span>
              {discountApplied ? (
                <div className='flex items-baseline gap-2'>
                  <span className='line-through text-gray-400 text-sm font-normal'>
                    ${(basePrice * ticketQuantity).toLocaleString()}
                  </span>
                  <span className='text-green-400 text-lg'>$0.00</span>
                </div>
              ) : (
                <span>${displayTotal.toLocaleString()}</span>
              )}
            </div>

            {/* Submit */}
            <div className='mt-2'>
              <button
                onClick={() => {
                  const isValid = validateStep(3);
                  if (isValid) {
                    setCompletedSteps((prev) => ({ ...prev, 3: true }));
                    handleSubmitRegistration();
                  }
                }}
                disabled={!canSubmit()}
                className='w-full px-4 py-3 bg-ap-blue text-white font-bold rounded-lg hover:bg-ap-darkblue transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {getSubmitLabel()}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
      {/* Thank You Banner */}
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 w-full px-6 md:px-10 py-10 md:py-16 items-center bg-ap-darkblue'>
        <div className='flex flex-col gap-4 flex-1'>
          <h3 className='text-2xl md:text-3xl font-bold text-white'>
            {formData.attendeeType === 'Solution-Provider'
              ? 'Thank you for joining the waitlist!'
              : 'Thank you for completing your registration!'}
          </h3>
          <p className='text-white/90 text-lg leading-relaxed max-w-prose'>
            {formData.attendeeType === 'Solution-Provider'
              ? 'We will notify you if a ticket becomes available.'
              : "We're reviewing your information and will send you a confirmation email soon once it's approved."}
          </p>
        </div>
        <div className='flex-shrink-0'>
          <div className='bg-white p-2 rounded-lg ring-4 ring-ap-yellow shadow-lg'>
            <QRCodeSVG
              value={`https://www.autopacksummit.com/aps25/${formDataId}`}
              size={128}
              bgColor='#ffffff'
              fgColor='#000000'
              level='Q'
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-6 md:p-10'>
        <div>
          <h4 className='text-lg font-bold text-gray-900 mb-4'>
            Registrant Details
          </h4>
          <div className='space-y-2 text-sm text-gray-700 border-b border-gray-200 pb-6'>
            <p>
              <span className='font-semibold'>Name:</span> {formData.firstName}{' '}
              {formData.lastName}
            </p>
            <p>
              <span className='font-semibold'>Email:</span> {formData.email}
            </p>
            <p>
              <span className='font-semibold'>Company:</span>{' '}
              {formData.companyName}
            </p>
            <p>
              <span className='font-semibold'>Title:</span> {formData.jobTitle}
            </p>
            <p>
              <span className='font-semibold'>Phone:</span> {formData.phone}
            </p>
            <p>
              <span className='font-semibold'>Type:</span>{' '}
              {effectiveAttendeeType}
            </p>
          </div>
        </div>
        <div>
          <h4 className='text-lg font-bold text-gray-900 mb-4'>
            Billing Details
          </h4>
          <div className='space-y-2 text-sm text-gray-700 border-b border-gray-200 pb-6'>
            <p>
              <span className='font-semibold'>Name:</span>{' '}
              {formData.billingAddress.firstName}{' '}
              {formData.billingAddress.lastName}
            </p>
            <p>
              <span className='font-semibold'>Email:</span>{' '}
              {formData.billingAddress.email}
            </p>
            <p>
              <span className='font-semibold'>Phone:</span>{' '}
              {formData.billingAddress.phone}
            </p>
            <p>
              <span className='font-semibold'>Address:</span>{' '}
              {formData.billingAddress.street}
            </p>
            <p>
              {formData.billingAddress.city}, {formData.billingAddress.state}{' '}
              {formData.billingAddress.zip}
            </p>
          </div>
        </div>
      </div>

      {/* Ticket Summary */}
      <div className='px-6 md:px-10 pb-10'>
        <h4 className='text-lg font-bold text-gray-900 mb-4'>Ticket Summary</h4>
        <div className='bg-gray-50 rounded-lg p-4'>
          <div className='flex justify-between text-sm font-medium border-b border-gray-200 pb-2 mb-2'>
            <span>Item</span>
            <span>Qty</span>
            <span>Total</span>
          </div>
          <div className='flex justify-between text-sm text-gray-700 py-1'>
            <span>
              {effectiveAttendeeType === 'Exhibitor'
                ? 'Exhibitor Staff Only'
                : effectiveAttendeeType === 'Sponsor'
                  ? 'Sponsor Registration'
                  : 'General Registration'}
            </span>
            <span>{ticketQuantity}</span>
            <span>
              $
              {(discountApplied
                ? 0
                : (PRICING[effectiveAttendeeType] || 0) * ticketQuantity
              ).toLocaleString()}
            </span>
          </div>
          {additionalRegistrants.map((reg, i) => (
            <div
              key={i}
              className='flex justify-between text-sm text-gray-700 py-1'
            >
              <span>
                Additional - {reg.firstName} {reg.lastName}
              </span>
              <span>1</span>
              <span>
                ${(PRICING[effectiveAttendeeType] || 0).toLocaleString()}
              </span>
            </div>
          ))}
          {addOnsSelected.length > 0 && (
            <div className='mt-2 pt-2 border-t border-gray-200'>
              {addOnsSelected.map((addon, i) => (
                <div
                  key={i}
                  className='flex justify-between text-sm text-gray-600 py-1'
                >
                  <span>{addon.title}</span>
                  <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full'>
                    PENDING
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <div className='max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6'>
      <header>
        <h1 className='text-3xl font-bold text-gray-900 text-center mb-2'>
          Registration
        </h1>
        <p className='text-gray-500 text-center mb-8'>
          Automotive Packaging Summit 2026
        </p>
        {renderProgress()}
      </header>

      <main>{renderStep()}</main>

      {/* Navigation */}
      {step < 4 && (
        <div className='flex justify-between items-center pt-4'>
          {step > 1 ? (
            <button
              onClick={handlePrev}
              className='px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
            >
              Back
            </button>
          ) : (
            <div />
          )}
          {step < 3 && (
            <button
              onClick={handleNext}
              className='px-8 py-2.5 text-sm font-medium text-white bg-ap-blue rounded-lg hover:bg-ap-darkblue transition-colors shadow-sm'
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* New Ticket Modal */}
      {showNewTicketForm && (
        <NewTicketForm
          setRegistrant={(registrant) => {
            setAdditionalRegistrants((prev) => [...prev, registrant]);
            setTicketQuantity((t) => t + 1);
          }}
          close={() => setShowNewTicketForm(false)}
          company={formData.companyName}
          companyId={formData.companyId}
          formData={formData}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
