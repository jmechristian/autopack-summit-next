import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { MdCheckCircle } from 'react-icons/md';
import { API } from 'aws-amplify';
import {
  getAPSCompanies,
  getAddOnsByEventId,
  createRegistrantAddOnRequestApi,
  sendCodeRequest,
} from '../util/api';
const PRICING = {
  OEM: 1600,
  Tier1: 1600,
  'Solution-Provider': 1600,
  Sponsor: 840,
  Speaker: 1600,
  Exhibitor: 699,
};

const DISCOUNT_ELIGIBLE_TYPES = [
  'OEM',
  'Tier1',
  'Sponsor',
  'Speaker',
  'Exhibitor',
];
const STANDARD_SPONSOR_TICKET_SOLD_OUT = true;

const APS_EVENT_ID = 'd00b35f5-c45b-42eb-b306-fa3dfeee0251';

const CREATE_APS_REGISTRANT_MINIMAL = /* GraphQL */ `
  mutation CreateApsRegistrant(
    $input: CreateApsRegistrantInput!
    $condition: ModelApsRegistrantConditionInput
  ) {
    createApsRegistrant(input: $input, condition: $condition) {
      id
      apsID
      firstName
      lastName
      email
      attendeeType
      totalAmount
      status
      billingAddressFirstName
      billingAddressLastName
      billingAddressEmail
      billingAddressPhone
      billingAddressStreet
      billingAddressCity
      billingAddressCountry
      billingAddressState
      billingAddressZip
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_APS_REGISTRANT_EMAIL_STATUS_MINIMAL = /* GraphQL */ `
  mutation UpdateApsRegistrantEmailStatus(
    $input: UpdateApsRegistrantInput!
    $condition: ModelApsRegistrantConditionInput
  ) {
    updateApsRegistrant(input: $input, condition: $condition) {
      id
      registrationEmailSent
      registrationEmailSentDate
      updatedAt
    }
  }
`;

const CREATE_APS_COMPANY_MINIMAL = /* GraphQL */ `
  mutation CreateAPSCompany($input: CreateAPSCompanyInput!) {
    createAPSCompany(input: $input) {
      id
      name
    }
  }
`;

const GET_APS_CODE_MINIMAL = /* GraphQL */ `
  query GetAPSCode($id: ID!) {
    getAPSCode(id: $id) {
      id
      used
      limit
    }
  }
`;

const UPDATE_APS_CODE_USAGE_MINIMAL = /* GraphQL */ `
  mutation UpdateAPSCodeUsage(
    $input: UpdateAPSCodeInput!
    $condition: ModelAPSCodeConditionInput
  ) {
    updateAPSCode(input: $input, condition: $condition) {
      id
      used
      limit
      updatedAt
    }
  }
`;

const INTEREST_OPTIONS = [
  'Expendable Packaging and/or After Sales Packaging',
  'Returnable and/or reusable Packaging',
  'Logistics and Supply Chain Solutions',
  'Others (please specify)',
];

const STEP_LABELS = [
  'Basic Information',
  'Interests & Preferences',
  'Payment',
  'Confirmation',
];

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

const isValidEmailFormat = (email = '') => {
  const normalized = String(email).trim();
  if (!normalized) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalized)) return false;
  const [localPart, domainPart] = normalized.split('@');
  if (!localPart || !domainPart) return false;
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
  if (localPart.includes('..') || domainPart.includes('..')) return false;
  return true;
};

const normalizeDiscountCode = (code = '') =>
  String(code)
    .trim()
    .replace(/[\u2010-\u2015\u2212]/g, '-')
    .replace(/\s*-\s*/g, '-')
    .toLowerCase();

const normalizeEmail = (email = '') => String(email).trim().toLowerCase();

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [companySearch, setCompanySearch] = useState('');
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [manualCompanyName, setManualCompanyName] = useState('');
  const [isCreatingCompany, setIsCreatingCompany] = useState(false);
  const [addCompanyModalError, setAddCompanyModalError] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountCodeError, setDiscountCodeError] = useState('');
  const [addOns, setAddOns] = useState([]);
  const [addOnsSelected, setAddOnsSelected] = useState([]); // { addOnId, addOn, preferences }
  const [addOnsLoading, setAddOnsLoading] = useState(true);
  const [formDataId] = useState('preview-' + Date.now());
  const [registrantId, setRegistrantId] = useState(null);
  const [emailChecking, setEmailChecking] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [emailDomainValid, setEmailDomainValid] = useState(true);
  const [eventCodes, setEventCodes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [sponsorTicketOption, setSponsorTicketOption] = useState(null);
  const [isRequestingCode, setIsRequestingCode] = useState(false);
  const [codeRequestCooldownSeconds, setCodeRequestCooldownSeconds] =
    useState(0);
  const [codeRequestStatus, setCodeRequestStatus] = useState({
    type: '',
    message: '',
  });

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
    certification: '',

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
      country: '',
      state: '',
      zip: '',
    },
    discountCode: '',
    totalAmount: 0,
  });
  const [clientSecret, setClientSecret] = useState(null);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [invoiceUrl, setInvoiceUrl] = useState(null);

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
        let nextToken = null;
        const items = [];

        do {
          const res = await API.graphql({
            query: /* GraphQL */ `
              query APSCodesByEventId($eventId: ID!, $nextToken: String) {
                aPSCodesByEventId(
                  eventId: $eventId
                  limit: 1000
                  nextToken: $nextToken
                ) {
                  items {
                    id
                    code
                    limit
                    used
                  }
                  nextToken
                }
              }
            `,
            authMode: 'API_KEY',
            variables: { eventId: APS_EVENT_ID, nextToken },
          });

          const page = res.data.aPSCodesByEventId;
          items.push(...(page?.items || []));
          nextToken = page?.nextToken || null;
        } while (nextToken);

        setEventCodes(items);
      } catch (err) {
        console.log('Error fetching event codes:', err);
      }
    };
    const loadAddOns = async () => {
      try {
        setAddOnsLoading(true);
        const items = await getAddOnsByEventId(APS_EVENT_ID);
        setAddOns(items || []);
      } catch (err) {
        console.log('Error fetching add-ons:', err);
      } finally {
        setAddOnsLoading(false);
      }
    };
    loadCompanies();
    loadEventCodes();
    loadAddOns();
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

  useEffect(() => {
    if (codeRequestCooldownSeconds <= 0) return;
    const timer = setInterval(() => {
      setCodeRequestCooldownSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [codeRequestCooldownSeconds]);

  const checkEmailExists = useCallback(async (email) => {
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail || !isValidEmailFormat(normalizedEmail)) {
      setEmailExists(false);
      setEmailDomainValid(true);
      setEmailChecking(false);
      return false;
    }
    setEmailChecking(true);
    try {
      const validateRes = await fetch(
        `/api/validate-email?email=${encodeURIComponent(normalizedEmail)}`,
      );
      const validateData = await validateRes.json().catch(() => ({}));
      if (!validateRes.ok || validateData?.valid === false) {
        setEmailDomainValid(false);
        setEmailExists(false);
        setErrors((prev) => ({
          ...prev,
          email: 'Please enter a valid email address',
        }));
        return true;
      }

      setEmailDomainValid(true);
      let nextToken = null;
      let exists = false;

      do {
        const res = await API.graphql({
          query: /* GraphQL */ `
            query ApsRegistrantsByApsID($apsID: ID!, $nextToken: String) {
              apsRegistrantsByApsID(
                apsID: $apsID
                limit: 1000
                nextToken: $nextToken
              ) {
                items {
                  id
                  email
                }
                nextToken
              }
            }
          `,
          authMode: 'API_KEY',
          variables: { apsID: APS_EVENT_ID, nextToken },
        });

        const page = res.data.apsRegistrantsByApsID;
        exists = (page?.items || []).some(
          (registrant) => normalizeEmail(registrant.email) === normalizedEmail,
        );
        nextToken = exists ? null : page?.nextToken || null;
      } while (nextToken);

      setEmailExists(exists);
      if (exists) {
        setErrors((prev) => ({
          ...prev,
          email: 'This email is already registered',
        }));
      }
      return exists;
    } catch (err) {
      console.log('Error checking email:', err);
      return false;
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

  const canSelectStandardSponsorTicket = useMemo(() => {
    if (!STANDARD_SPONSOR_TICKET_SOLD_OUT) return true;
    return discountApplied;
  }, [discountApplied]);

  useEffect(() => {
    if (
      STANDARD_SPONSOR_TICKET_SOLD_OUT &&
      formData.attendeeType === 'Sponsor' &&
      !canSelectStandardSponsorTicket &&
      sponsorTicketOption === 'standard'
    ) {
      setSponsorTicketOption(null);
    }
  }, [
    formData.attendeeType,
    sponsorTicketOption,
    canSelectStandardSponsorTicket,
  ]);

  const mapAttendeeTypeToEnum = (type) => {
    switch (type) {
      case 'OEM':
        return 'OEM';
      case 'Tier1':
        return 'TIER1';
      case 'Solution-Provider':
        return 'SOLUTIONPROVIDER';
      case 'Sponsor':
        return 'SPONSOR';
      case 'Speaker':
        return 'SPEAKER';
      case 'Exhibitor':
        return 'EXHIBITOR';
      default:
        return 'OEM';
    }
  };

  const addOnsTotal = useMemo(() => {
    return addOnsSelected.reduce(
      (sum, sel) => sum + ((sel.addOn?.price ?? 0) || 0),
      0,
    );
  }, [addOnsSelected]);

  const totalAmount = useMemo(() => {
    if (discountApplied) return addOnsTotal; // base ticket free, add-ons still paid
    const base = PRICING[effectiveAttendeeType] || 0;
    return base + addOnsTotal;
  }, [effectiveAttendeeType, discountApplied, addOnsTotal]);

  const stripeElementsOptions = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      appearance: { theme: 'stripe' },
    };
  }, [clientSecret]);

  const canRequestRegistrationCode = useMemo(
    () => ['OEM', 'Tier1'].includes(formData.attendeeType),
    [formData.attendeeType],
  );

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
              country: '',
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
              country: '',
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
      setEmailDomainValid(true);
      if (value) delete newErrors.email;
      setErrors(newErrors);
      if (emailCheckTimeout.current) clearTimeout(emailCheckTimeout.current);
      emailCheckTimeout.current = setTimeout(
        () => checkEmailExists(value),
        600,
      );
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

  const handleAddCompany = async () => {
    const typedCompany = manualCompanyName.trim();
    if (!typedCompany) {
      setAddCompanyModalError('Please type your company name first');
      return;
    }

    setIsCreatingCompany(true);
    setAddCompanyModalError('');
    try {
      const existing = companies.find(
        (c) => c.name?.trim().toLowerCase() === typedCompany.toLowerCase(),
      );

      let selectedCompany = existing || null;
      if (!selectedCompany) {
        const createRes = await API.graphql({
          query: CREATE_APS_COMPANY_MINIMAL,
          variables: {
            input: {
              name: typedCompany,
            },
          },
          authMode: 'API_KEY',
        });
        selectedCompany = createRes.data?.createAPSCompany || null;
      }

      if (!selectedCompany?.id) {
        throw new Error('Unable to create company');
      }

      setCompanies((prev) => {
        const exists = prev.some((c) => c.id === selectedCompany.id);
        return exists ? prev : [...prev, selectedCompany];
      });

      setFormData((prev) => ({
        ...prev,
        companyName: selectedCompany.name || typedCompany,
        companyId: selectedCompany.id,
      }));
      setCompanySearch(selectedCompany.name || typedCompany);
      setManualCompanyName('');
      setShowAddCompanyModal(false);
      setIsDropdownOpen(false);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.companyName;
        return next;
      });
    } catch (err) {
      console.error('Error creating company from registration form:', err);
      setAddCompanyModalError(
        'Could not create company right now. Please try again or select an existing company.',
      );
    } finally {
      setIsCreatingCompany(false);
    }
  };

  const handleApplyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountCodeError('Please enter a discount code');
      return;
    }
    const normalizedCode = normalizeDiscountCode(discountCode);
    const match = eventCodes.find(
      (c) => normalizeDiscountCode(c.code) === normalizedCode,
    );
    if (!match) {
      setDiscountCodeError('Invalid discount code');
      setDiscountApplied(false);
      return;
    }
    const requestedUnits = 1;
    if (
      match.limit != null &&
      (match.used || 0) + requestedUnits > match.limit
    ) {
      setDiscountCodeError(
        `This code has reached its usage limit (${match.used || 0}/${match.limit} used)`,
      );
      setDiscountApplied(false);
      return;
    }
    setDiscountApplied(true);
    setDiscountCodeError('');
    setFormData((prev) => ({ ...prev, discountCode: discountCode.trim() }));
  };

  const handleRequestRegistrationCode = async () => {
    if (isRequestingCode) return;

    const payload = {
      email: formData.email.trim(),
      company: formData.companyName.trim(),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
    };

    if (
      !payload.email ||
      !payload.firstName ||
      !payload.lastName ||
      !payload.company
    ) {
      setCodeRequestStatus({
        type: 'error',
        message:
          'Please complete your first name, last name, email, and company before requesting a code.',
      });
      return;
    }

    setIsRequestingCode(true);
    setCodeRequestStatus({ type: '', message: '' });

    try {
      await sendCodeRequest(
        payload.email,
        payload.company,
        payload.firstName,
        payload.lastName,
      );
      setCodeRequestStatus({
        type: 'success',
        message:
          'Request sent. Once approved, your registration code will be emailed to you.',
      });
      setCodeRequestCooldownSeconds(60);
    } catch (err) {
      console.error('Error requesting registration code:', err);
      setCodeRequestStatus({
        type: 'error',
        message:
          'Could not send your request right now. Please try again or contact info@packagingschool.com.',
      });
    } finally {
      setIsRequestingCode(false);
    }
  };

  const createAddOnRequestsForRegistrant = async (registrantId) => {
    if (!registrantId || addOnsSelected.length === 0) return;
    const failures = [];

    for (const sel of addOnsSelected) {
      try {
        await createRegistrantAddOnRequestApi({
          addOnId: sel.addOnId,
          registrantId,
          status: 'PENDING',
          preferences:
            sel.preferences && Object.keys(sel.preferences).length > 0
              ? sel.preferences
              : null,
        });
      } catch (err) {
        console.error('Failed to create add-on request:', err);
        failures.push({
          addOnId: sel.addOnId,
          title: sel.addOn?.title || 'Unknown add-on',
          error: err,
        });
      }
    }

    if (failures.length > 0) {
      const message = failures
        .map((f) => `${f.title} (${f.addOnId})`)
        .join(', ');
      throw new Error(`Failed to create add-on requests for: ${message}`);
    }
  };

  const incrementAppliedDiscountCodeUsage = async () => {
    if (!discountApplied || !formData.discountCode) return;
    const unitsToConsume = 1;

    const normalizedCode = normalizeDiscountCode(formData.discountCode);
    const matchedCode = eventCodes.find(
      (codeItem) => normalizeDiscountCode(codeItem.code) === normalizedCode,
    );
    if (!matchedCode?.id) {
      console.warn(
        `Discount code usage increment skipped. Could not find code id for: ${normalizedCode}`,
      );
      return;
    }

    const latestCodeRes = await API.graphql({
      query: GET_APS_CODE_MINIMAL,
      variables: { id: matchedCode.id },
      authMode: 'API_KEY',
    });
    const latestCode = latestCodeRes.data?.getAPSCode;
    if (!latestCode?.id) return;

    const latestUsed = latestCode.used || 0;
    const latestLimit = latestCode.limit;
    if (latestLimit != null && latestUsed + unitsToConsume > latestLimit) {
      throw new Error(
        `Discount code usage limit reached (${latestUsed}/${latestLimit} used).`,
      );
    }

    await API.graphql({
      query: UPDATE_APS_CODE_USAGE_MINIMAL,
      variables: {
        input: {
          id: latestCode.id,
          used: latestUsed + unitsToConsume,
        },
      },
      authMode: 'API_KEY',
    });

    setEventCodes((prev) =>
      prev.map((codeItem) =>
        codeItem.id === latestCode.id
          ? { ...codeItem, used: latestUsed + unitsToConsume }
          : codeItem,
      ),
    );
  };

  const sendRegistrationConfirmationAndMarkSent = async ({
    registrantRecordId,
    registrantFormData,
    registrantTotalAmount,
    registrantAddOnsSelected = [],
  }) => {
    const emailRes = await fetch('/api/send-registration-confirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: registrantFormData,
        totalAmount: registrantTotalAmount,
        formDataId: registrantRecordId,
        addOnsSelected: registrantAddOnsSelected,
      }),
    });

    if (!emailRes.ok) {
      const data = await emailRes.json().catch(() => ({}));
      throw new Error(
        data?.message || emailRes.statusText || 'Email send failed',
      );
    }

    await API.graphql({
      query: UPDATE_APS_REGISTRANT_EMAIL_STATUS_MINIMAL,
      variables: {
        input: {
          id: registrantRecordId,
          registrationEmailSent: true,
          registrationEmailSentDate: new Date().toISOString(),
        },
      },
      authMode: 'API_KEY',
    });
  };

  const handleSubmitRegistration = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const normalizedRegistrantEmail = normalizeEmail(formData.email);
      const emailUnavailable = await checkEmailExists(normalizedRegistrantEmail);
      if (emailUnavailable) {
        throw new Error('This email is already registered');
      }

      const input = {
        apsID: APS_EVENT_ID,
        attendeeType: mapAttendeeTypeToEnum(effectiveAttendeeType),
        status: 'PENDING',
        email: normalizedRegistrantEmail,
        firstName: formData.firstName || null,
        lastName: formData.lastName || null,
        phone: formData.phone || null,
        companyId: formData.companyId || null,
        jobTitle: formData.jobTitle || null,
        termsAccepted: formData.termsAccepted ?? null,
        interests: formData.interests?.length ? formData.interests : null,
        otherInterest: formData.otherInterest || null,
        buyerQuestion: formData.buyerQuestion || null,
        packagingChallenge: formData.packagingChallenge || null,
        certification: formData.certification || null,
        billingAddressFirstName: formData.billingAddress.firstName || null,
        billingAddressLastName: formData.billingAddress.lastName || null,
        billingAddressEmail: formData.billingAddress.email || null,
        billingAddressPhone: formData.billingAddress.phone || null,
        billingAddressStreet: formData.billingAddress.street || null,
        billingAddressCity: formData.billingAddress.city || null,
        billingAddressCountry: formData.billingAddress.country || null,
        billingAddressState: formData.billingAddress.state || null,
        billingAddressZip: formData.billingAddress.zip || null,
        sameAsAttendee: formData.sameAsAttendee ?? null,
        speakerTopic:
          formData.attendeeType === 'Speaker'
            ? formData.speakerTopic || null
            : null,
        learningObjectives:
          formData.attendeeType === 'Speaker'
            ? formData.learningObjectives || null
            : null,
        totalAmount: totalAmount ?? null,
        discountCode: formData.discountCode || null,
      };

      const res = await API.graphql({
        query: CREATE_APS_REGISTRANT_MINIMAL,
        variables: { input },
        authMode: 'API_KEY',
      });

      const created = res.data?.createApsRegistrant;
      const mainRegistrantId = created?.id;
      if (mainRegistrantId) {
        setRegistrantId(mainRegistrantId);
        await createAddOnRequestsForRegistrant(mainRegistrantId);
      }

      // Move the UI forward to confirmation regardless of invoice outcome.
      setStep(4);

      // Fire-and-forget: send registration confirmation email.
      if (mainRegistrantId) {
        const emailAddOns = addOnsSelected.map((sel) => ({
          id: sel.addOnId || sel.addOn?.id || '',
          title: sel.addOn?.title || 'Add-on',
        }));
        sendRegistrationConfirmationAndMarkSent({
          registrantRecordId: mainRegistrantId,
          registrantFormData: {
            ...formData,
            email: normalizedRegistrantEmail,
          },
          registrantTotalAmount: totalAmount,
          registrantAddOnsSelected: emailAddOns,
        }).catch((emailErr) => {
          console.error(
            'Failed to send registration confirmation email:',
            emailErr,
          );
        });

        incrementAppliedDiscountCodeUsage().catch((codeErr) => {
          console.error('Failed to increment discount code usage:', codeErr);
        });
      }

      // Fire-and-forget: generate and attach invoice PDF (including zero-balance with coupon).
      if (mainRegistrantId) {
        const registrationLabel =
          effectiveAttendeeType === 'Exhibitor'
            ? 'Exhibitor Staff Only'
            : effectiveAttendeeType === 'Sponsor'
              ? 'Sponsor Registration'
              : 'General Registration';
        const unitPrice = PRICING[effectiveAttendeeType] || 0;
        const subtotal = (PRICING[effectiveAttendeeType] || 0) + addOnsTotal;
        const discountAmount = discountApplied
          ? PRICING[effectiveAttendeeType] || 0
          : 0;
        const lineItems = [
          {
            description: `${registrationLabel} - ${formData.firstName} ${formData.lastName}`,
            quantity: 1,
            amount: unitPrice,
          },
        ];

        if (addOnsSelected.length) {
          lineItems.push({ type: 'section', description: 'Add-ons' });
          addOnsSelected.forEach((sel) => {
            lineItems.push({
              description: sel.addOn?.title || 'Add-on',
              quantity: 1,
              amount: sel.addOn?.price ?? 0,
            });
          });
        }

        fetch('/api/generate-invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            registrantId: mainRegistrantId,
            registrant: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: normalizedRegistrantEmail,
              companyName: formData.companyName,
              jobTitle: formData.jobTitle,
              attendeeType: effectiveAttendeeType,
              billingAddressFirstName: formData.billingAddress.firstName,
              billingAddressLastName: formData.billingAddress.lastName,
              billingAddressEmail: formData.billingAddress.email,
              billingAddressPhone: formData.billingAddress.phone,
              billingAddressStreet: formData.billingAddress.street,
              billingAddressCity: formData.billingAddress.city,
              billingAddressCountry: formData.billingAddress.country,
              billingAddressState: formData.billingAddress.state,
              billingAddressZip: formData.billingAddress.zip,
            },
            invoiceId: mainRegistrantId,
            lineItems,
            subtotal,
            discountAmount,
            totalDue: totalAmount,
            discountCode: formData.discountCode || null,
            paymentConfirmation: formData.paymentConfirmation || null,
          }),
        })
          .then(async (invoiceRes) => {
            if (!invoiceRes.ok) {
              const data = await invoiceRes.json().catch(() => ({}));
              console.error(
                'Invoice generation failed:',
                data?.error || invoiceRes.statusText,
              );
              return;
            }
            const data = await invoiceRes.json().catch(() => ({}));
            if (data?.url) {
              setInvoiceUrl(data.url);
            }
            console.log('Invoice generated:', data?.url);
          })
          .catch((invoiceErr) => {
            console.error('Failed to generate invoice PDF:', invoiceErr);
          });
      }
    } catch (err) {
      console.error('Error submitting registration:', err);
      setSubmitError(
        err?.message
          ? `Registration failed: ${err.message}`
          : 'Something went wrong submitting your registration. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const initializePayment = async () => {
    // For zero-total registrations (e.g. fully covered by a code),
    // skip Stripe entirely and submit the registration directly.
    if (totalAmount === 0) {
      const isValid = validateStep(3);
      if (!isValid) return;
      setCompletedSteps((prev) => ({ ...prev, 3: true }));
      await handleSubmitRegistration();
      return;
    }

    const isValid = validateStep(3);
    if (!isValid) return;

    setProcessingPayment(true);
    setPaymentError(null);
    try {
      const emailUnavailable = await checkEmailExists(formData.email);
      if (emailUnavailable) {
        setPaymentError('This email is already registered');
        return;
      }

      const response = await fetch('/api/handle-stripe-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'usd',
          quantity: 1,
          description: `APS Registration ${formData.lastName} -- ${formData.attendeeType}`,
          metadata: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            attendeeType: formData.attendeeType,
            email: normalizeEmail(formData.email),
            phone: formData.phone,
            companyName: formData.companyName,
          },
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.clientSecret) {
        throw new Error(data.error || 'Unable to initialize payment');
      }
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error initializing payment:', error);
      setPaymentError(
        error.message || 'Failed to initialize payment. Please try again.',
      );
    } finally {
      setProcessingPayment(false);
    }
  };

  const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);

    const handlePaymentSubmit = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
        setPaymentError('Payment system is not ready. Please try again.');
        return;
      }

      setIsSubmittingPayment(true);
      setPaymentError(null);

      try {
        const { error: submitError } = await elements.submit();
        if (submitError) {
          setPaymentError(submitError.message);
          setIsSubmittingPayment(false);
          return;
        }

        const result = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: `${window.location.origin}/register`,
            payment_method_data: {
              billing_details: {
                email: normalizeEmail(formData.email),
                name: `${formData.firstName} ${formData.lastName}`,
              },
            },
          },
          redirect: 'if_required',
        });

        if (result.error) {
          setPaymentError(result.error.message);
          setIsSubmittingPayment(false);
          return;
        }

        const paymentIntentStatus = result.paymentIntent?.status;
        if (!paymentIntentStatus) {
          setPaymentError(
            'Payment could not be confirmed. Please try again or contact support.',
          );
          setIsSubmittingPayment(false);
          return;
        }

        const isPaymentComplete = [
          'succeeded',
          'processing',
          'requires_capture',
        ].includes(paymentIntentStatus);

        if (!isPaymentComplete) {
          if (paymentIntentStatus === 'requires_payment_method') {
            setPaymentError(
              'Payment was not completed. Please review your card details and try again.',
            );
          } else if (paymentIntentStatus === 'requires_action') {
            setPaymentError(
              'Additional authentication is required to complete payment. Please try again.',
            );
          } else if (paymentIntentStatus === 'canceled') {
            setPaymentError('Payment was canceled. Please try again.');
          } else {
            setPaymentError(
              `Payment is not complete yet (status: ${paymentIntentStatus}). Please try again.`,
            );
          }
          setIsSubmittingPayment(false);
          return;
        }

        // Store payment confirmation on the formData for downstream usage.
        setFormData((prev) => ({
          ...prev,
          paymentConfirmation: result.paymentIntent.id,
        }));
        setCompletedSteps((prev) => ({ ...prev, 3: true }));
        await handleSubmitRegistration();
      } catch (err) {
        console.error('Unexpected payment error:', err);
        setPaymentError(
          'An unexpected error occurred. Please try again or contact support.',
        );
      } finally {
        setIsSubmittingPayment(false);
      }
    };

    return (
      <form onSubmit={handlePaymentSubmit} className='space-y-3'>
        <PaymentElement />
        {paymentError && (
          <div className='text-red-500 mt-2 p-2 bg-red-50 rounded'>
            {paymentError}
          </div>
        )}
        <button
          type='submit'
          disabled={!stripe || !elements || isSubmittingPayment}
          className='mt-2 w-full px-4 py-2.5 bg-ap-blue text-white text-sm font-semibold rounded-lg hover:bg-ap-darkblue transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmittingPayment
            ? 'Processing payment…'
            : `Pay $${totalAmount.toLocaleString()}`}
        </button>
      </form>
    );
  };

  const validateStep = (stepToValidate) => {
    const newErrors = {};

    if (stepToValidate === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim())
        newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!isValidEmailFormat(formData.email))
        newErrors.email = 'Please enter a valid email';
      else if (!emailDomainValid)
        newErrors.email = 'Please enter a valid email address';
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
      // Only require billing details when there is a non-zero total.
      // If a discount/code brings totalAmount to 0, billing can be skipped.
      if (totalAmount > 0) {
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
        if (!ba.country.trim()) newErrors.billingCountry = 'Country is required';
        if (!ba.zip.trim()) newErrors.billingZip = 'Postal code is required';
      }
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
        (k) => k.startsWith('billing') || k === 'termsAccepted',
      );
    }
    return false;
  };

  const handleNext = async () => {
    const isValid = validateStep(step);
    if (!isValid) return;

    if (step === 1) {
      const emailUnavailable = await checkEmailExists(formData.email);
      if (emailUnavailable) return;
    }

    setCompletedSteps((prev) => ({ ...prev, [step]: true }));
    setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const canSubmit = () => {
    if (!formData.attendeeType) return false;
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
                <svg
                  className='animate-spin h-4 w-4 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                  />
                </svg>
              </div>
            )}
            {!emailChecking &&
              formData.email &&
              isValidEmailFormat(formData.email) &&
              emailDomainValid &&
              !emailExists && (
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
              onClick={() => {
                setAddCompanyModalError('');
                setManualCompanyName(
                  formData.companyName || companySearch || '',
                );
                setShowAddCompanyModal(true);
              }}
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

          {/* Q4: Certification Interest */}
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>
              Would you be interested in completing a short post-event quiz to
              qualify for a Certificate of Attendance (up to 3 CEUs)? Indicate
              your interest to receive more information.
            </label>
            <div className='flex gap-4 mt-1'>
              <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
                <input
                  type='radio'
                  name='certification'
                  value='true'
                  checked={formData.certification === 'true'}
                  onChange={handleChange}
                  className='rounded border-gray-300 text-ap-blue focus:ring-ap-blue'
                />
                <span>Yes, I'm interested</span>
              </label>
              <label className='inline-flex items-center gap-2 text-sm text-gray-700'>
                <input
                  type='radio'
                  name='certification'
                  value='false'
                  checked={formData.certification === 'false'}
                  onChange={handleChange}
                  className='rounded border-gray-300 text-ap-blue focus:ring-ap-blue'
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Add-ons */}
        <div className='flex flex-col gap-4 p-6 lg:p-10 bg-gray-50 min-h-[300px]'>
          <h3 className='text-xl font-bold text-gray-900'>Add-ons</h3>
          {addOnsLoading ? (
            <p className='text-sm text-gray-500'>Loading add-ons...</p>
          ) : addOns.length > 0 ? (
            <div className='space-y-3'>
              {addOns.map((addOn) => {
                const isSelected = addOnsSelected.some(
                  (s) => s.addOnId === addOn.id,
                );
                const selectedEntry = addOnsSelected.find(
                  (s) => s.addOnId === addOn.id,
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
                    className={`rounded-lg border p-3 transition-colors bg-white ${
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
                            setAddOnsSelected((prev) => [
                              ...prev,
                              {
                                addOnId: addOn.id,
                                addOn,
                                preferences: prefs,
                              },
                            ]);
                          } else {
                            setAddOnsSelected((prev) =>
                              prev.filter((s) => s.addOnId !== addOn.id),
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
                          {addOn.date} • {addOn.time}
                        </div>
                        {addOn.location && (
                          <div className='text-xs text-gray-500'>
                            {addOn.location}
                          </div>
                        )}
                        {(addOn.limit != null ||
                          addOn.registrantRequests?.items?.length > 0) && (
                          <div className='text-xs text-gray-600 mt-1'>
                            {addOn.registrantRequests?.items?.filter(
                              (r) => r.status === 'APPROVED',
                            ).length ?? 0}
                            {addOn.limit != null
                              ? ` / ${addOn.limit} spots`
                              : ' approved'}
                          </div>
                        )}
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
                                  selectedEntry?.preferences?.[field.key] ?? ''
                                }
                                onChange={(e) => {
                                  const v = e.target.value;
                                  setAddOnsSelected((prev) =>
                                    prev.map((s) =>
                                      s.addOnId === addOn.id
                                        ? {
                                            ...s,
                                            preferences: {
                                              ...s.preferences,
                                              [field.key]: v,
                                            },
                                          }
                                        : s,
                                    ),
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
                                  selectedEntry?.preferences?.[field.key] ?? ''
                                }
                                onChange={(e) => {
                                  const v = e.target.value;
                                  setAddOnsSelected((prev) =>
                                    prev.map((s) =>
                                      s.addOnId === addOn.id
                                        ? {
                                            ...s,
                                            preferences: {
                                              ...s.preferences,
                                              [field.key]: v,
                                            },
                                          }
                                        : s,
                                    ),
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
          ) : (
            <p className='text-sm text-gray-500'>No add-ons available.</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const basePrice = PRICING[effectiveAttendeeType] || 0;
    const shouldShowDiscountCode =
      DISCOUNT_ELIGIBLE_TYPES.includes(effectiveAttendeeType);
    const isSponsorRegistrant = formData.attendeeType === 'Sponsor';

    const renderDiscountCodeSection = () => (
      <div className='bg-white rounded-lg border border-gray-200 p-4'>
        <label className='text-sm font-semibold text-gray-900'>
          Discount Code
        </label>
        <p className='text-xs text-gray-500 mt-0.5'>
          Codes apply to ticket registration only, not add-ons.
        </p>
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
              type='button'
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
              type='button'
              onClick={handleApplyDiscount}
              className='px-4 py-2 bg-ap-darkblue text-white text-sm font-medium rounded-lg hover:bg-ap-blue transition-colors'
            >
              Apply
            </button>
          )}
        </div>
        {canRequestRegistrationCode && (
          <div className='mt-2'>
            <button
              type='button'
              onClick={handleRequestRegistrationCode}
              disabled={isRequestingCode || codeRequestCooldownSeconds > 0}
              className='text-xs text-ap-blue underline hover:text-ap-darkblue disabled:text-gray-400 disabled:no-underline'
            >
              {isRequestingCode
                ? 'Sending request...'
                : codeRequestCooldownSeconds > 0
                  ? `Request sent. Try again in ${codeRequestCooldownSeconds}s`
                  : 'No code? Request one here'}
            </button>
          </div>
        )}
        {discountCodeError && (
          <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
            <ExclamationCircleIcon className='w-3.5 h-3.5' />
            {discountCodeError}
          </p>
        )}
        {codeRequestStatus.message && (
          <p
            className={`text-xs mt-1 ${
              codeRequestStatus.type === 'success'
                ? 'text-green-600'
                : 'text-red-500'
            }`}
          >
            {codeRequestStatus.message}
          </p>
        )}
        {discountApplied && (
          <p className='text-green-600 text-xs mt-1 flex items-center gap-1'>
            <MdCheckCircle className='w-3.5 h-3.5' />
            Coupon applied — registration is complimentary
          </p>
        )}
      </div>
    );

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

            <div className='flex flex-col gap-1'>
              <label className={labelClass}>Country</label>
              <input
                type='text'
                name='billingAddress.country'
                value={formData.billingAddress.country}
                onChange={handleChange}
                className={inputClass('billingCountry')}
              />
              {renderFieldError('billingCountry')}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>State / Province / Region</label>
                <input
                  type='text'
                  name='billingAddress.state'
                  value={formData.billingAddress.state}
                  onChange={handleChange}
                  className={inputClass('billingState')}
                  placeholder='Optional'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label className={labelClass}>Postal Code</label>
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

            {/* Discount Code */}
            {isSponsorRegistrant &&
              shouldShowDiscountCode &&
              renderDiscountCodeSection()}

            {/* Sponsor ticket option - only when attendeeType is Sponsor */}
            {isSponsorRegistrant && (
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
                      STANDARD_SPONSOR_TICKET_SOLD_OUT &&
                      !canSelectStandardSponsorTicket
                        ? 'border-red-200 bg-red-50/50 cursor-not-allowed'
                        : sponsorTicketOption === 'standard'
                          ? 'border-ap-blue bg-ap-blue/5'
                          : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type='radio'
                      name='sponsorTicketOption'
                      value='standard'
                      checked={sponsorTicketOption === 'standard'}
                      onChange={() => {
                        if (canSelectStandardSponsorTicket) {
                          setSponsorTicketOption('standard');
                        }
                      }}
                      disabled={!canSelectStandardSponsorTicket}
                      className='mt-1'
                    />
                    <div className='w-full'>
                      <span className='font-medium text-gray-900'>
                        Standard Sponsor ticket - $840
                      </span>
                      {STANDARD_SPONSOR_TICKET_SOLD_OUT && (
                        <p className='mt-2 rounded-md border border-red-200 bg-red-100 px-2.5 py-1.5 text-xs font-medium text-red-800'>
                          This option is sold out. Enter a valid code to unlock
                          this ticket type.
                        </p>
                      )}
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
              </div>
            )}

            {/* Discount Code */}
            {!isSponsorRegistrant &&
              shouldShowDiscountCode &&
              renderDiscountCodeSection()}

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

              {/* Add-ons */}
              <div className='mt-3 pt-3 border-t border-gray-100'>
                <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>
                  Add-ons
                </div>
                {addOnsSelected.length > 0 ? (
                  addOnsSelected.map((sel, i) => (
                    <div
                      key={i}
                      className='flex justify-between text-sm text-gray-600 py-1'
                    >
                      <span>{sel.addOn?.title}</span>
                      <span className='flex items-center gap-2'>
                        ${(sel.addOn?.price ?? 0).toLocaleString()}{' '}
                        <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full'>
                          PENDING
                        </span>
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
                    ${(basePrice + addOnsTotal).toLocaleString()}
                  </span>
                  <span className='text-green-400 text-lg'>
                    ${addOnsTotal.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span>${totalAmount.toLocaleString()}</span>
              )}
            </div>

            {/* Submit / Payment */}
            <div className='mt-2 space-y-3'>
              {totalAmount > 0 && clientSecret && (
                <Elements
                  stripe={stripePromise}
                  options={stripeElementsOptions}
                >
                  <PaymentForm />
                </Elements>
              )}
              {totalAmount === 0 && (
                <button
                  onClick={initializePayment}
                  disabled={!canSubmit() || isSubmitting}
                  className='w-full px-4 py-3 bg-ap-blue text-white font-bold rounded-lg hover:bg-ap-darkblue transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Submitting…' : getSubmitLabel()}
                </button>
              )}
              {totalAmount > 0 && !clientSecret && (
                <button
                  onClick={initializePayment}
                  disabled={!canSubmit() || processingPayment}
                  className='w-full px-4 py-3 bg-ap-blue text-white font-bold rounded-lg hover:bg-ap-darkblue transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {processingPayment
                    ? 'Starting payment…'
                    : 'Continue to payment'}
                </button>
              )}
              {submitError && (
                <p className='text-sm text-red-500'>{submitError}</p>
              )}
              {paymentError && (
                <p className='text-sm text-red-500'>{paymentError}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    const invoiceId = registrantId || formDataId;

    return (
      <div className='space-y-6'>
        {/* Header */}
        <div className='bg-ap-darkblue text-white rounded-xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div className='space-y-2'>
            <h3 className='text-2xl md:text-3xl font-bold'>
              Registration complete
            </h3>
            <p className='text-xs md:text-sm text-ap-yellow font-semibold tracking-wide uppercase'>
              Automotive Packaging Summit 2026 · Sept 30 – Oct 2, 2026
            </p>
            <p className='text-sm md:text-base text-white/80 max-w-xl'>
              A confirmation email will be sent shortly. Your registration
              details and receipt are summarized below.
            </p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            {registrantId && (
              <a
                href={`/registrants/${registrantId}`}
                className='inline-flex w-full max-w-xs items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-ap-yellow text-white hover:brightness-95 transition-colors shadow-sm'
              >
                View registrant dashboard
              </a>
            )}
            {invoiceUrl ? (
              <a
                href={invoiceUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex w-full max-w-xs items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm'
              >
                Download invoice (PDF)
              </a>
            ) : (
              <button
                type='button'
                onClick={() => window.print()}
                className='inline-flex w-full max-w-xs items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm'
              >
                Download invoice (PDF)
              </button>
            )}
          </div>
        </div>

        {/* Invoice / Receipt */}
        <div
          id='invoice-print'
          className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'
        >
          <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-200'>
            <div>
              <h4 className='text-lg font-semibold text-gray-900'>
                Registration invoice
              </h4>
              <p className='text-xs text-gray-500'>
                Automotive Packaging Summit 2026 · Sept 30 – Oct 2, 2026
              </p>
            </div>
            <span className='text-xs font-mono text-gray-500'>
              #{invoiceId}
            </span>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-10 py-6 md:py-8'>
            {/* Left: Registrant & Billing */}
            <div className='space-y-6 lg:col-span-1'>
              <div>
                <h5 className='text-sm font-semibold text-gray-900 mb-2'>
                  Registrant
                </h5>
                <div className='space-y-1 text-sm text-gray-700'>
                  <p>
                    <span className='font-medium'>
                      {formData.firstName} {formData.lastName}
                    </span>
                  </p>
                  <p>{formData.email}</p>
                  <p>{formData.companyName}</p>
                  <p>{formData.jobTitle}</p>
                  <p>{formData.phone}</p>
                  <p>
                    <span className='font-semibold'>Type:</span>{' '}
                    {effectiveAttendeeType}
                  </p>
                </div>
              </div>

              <div>
                <h5 className='text-sm font-semibold text-gray-900 mb-2'>
                  Billing
                </h5>
                <div className='space-y-1 text-sm text-gray-700'>
                  <p>
                    <span className='font-medium'>
                      {formData.billingAddress.firstName}{' '}
                      {formData.billingAddress.lastName}
                    </span>
                  </p>
                  <p>{formData.billingAddress.email}</p>
                  <p>{formData.billingAddress.phone}</p>
                  <p>{formData.billingAddress.companyName}</p>
                  <p>{formData.billingAddress.street}</p>
                  <p>
                    {formData.billingAddress.city},{' '}
                    {formData.billingAddress.state}{' '}
                    {formData.billingAddress.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Itemized charges */}
            <div className='lg:col-span-2'>
              <h5 className='text-sm font-semibold text-gray-900 mb-3'>
                Itemized charges
              </h5>
              <div className='border border-gray-200 rounded-lg overflow-hidden'>
                <div className='grid grid-cols-12 gap-2 px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b border-gray-200'>
                  <span className='col-span-7'>Description</span>
                  <span className='col-span-2 text-right'>Qty</span>
                  <span className='col-span-3 text-right'>Amount</span>
                </div>

                {/* Primary ticket */}
                <div className='grid grid-cols-12 gap-2 px-3 py-2 text-sm text-gray-800 border-b border-gray-100'>
                  <span className='col-span-7'>
                    {effectiveAttendeeType === 'Exhibitor'
                      ? 'Exhibitor Staff Only'
                      : effectiveAttendeeType === 'Sponsor'
                        ? 'Sponsor Registration'
                        : 'General Registration'}{' '}
                    – {formData.firstName} {formData.lastName}
                  </span>
                  <span className='col-span-2 text-right'>1</span>
                  <span className='col-span-3 text-right'>
                    ${(PRICING[effectiveAttendeeType] || 0).toLocaleString()}
                  </span>
                </div>

                {/* Add-ons */}
                {addOnsSelected.length > 0 && (
                  <>
                    <div className='px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-t border-b border-gray-200'>
                      Add-ons
                    </div>
                    {addOnsSelected.map((sel, i) => (
                      <div
                        key={i}
                        className='grid grid-cols-12 gap-2 px-3 py-2 text-sm text-gray-700 border-b border-gray-100'
                      >
                        <span className='col-span-7'>{sel.addOn?.title}</span>
                        <span className='col-span-2 text-right'>1</span>
                        <span className='col-span-3 text-right'>
                          ${(sel.addOn?.price ?? 0).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </>
                )}

                {/* Totals */}
                <div className='px-3 py-3 space-y-1 text-sm bg-gray-50'>
                  <div className='flex items-center justify-between text-gray-700'>
                    <span>Subtotal</span>
                    <span>
                      $
                      {(
                        (PRICING[effectiveAttendeeType] || 0) + addOnsTotal
                      ).toLocaleString()}
                    </span>
                  </div>
                  {discountApplied && (
                    <div className='flex items-center justify-between text-gray-700'>
                      <span>Discount ({formData.discountCode})</span>
                      <span className='text-green-600'>
                        -$
                        {(PRICING[effectiveAttendeeType] || 0).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className='flex items-center justify-between font-semibold text-gray-900 border-t border-gray-200 pt-2 mt-1'>
                    <span>Total due</span>
                    <span>${totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        {/* Actions (moved into header right column) */}
      </div>
    );
  };

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

      {showAddCompanyModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
          <div className='w-full max-w-md rounded-xl bg-white p-5 shadow-xl border border-gray-200'>
            <h3 className='text-base font-bold text-gray-900'>Add company</h3>
            <p className='mt-1 text-sm text-gray-600'>
              Enter your company name if it is not listed.
            </p>
            <input
              type='text'
              value={manualCompanyName}
              onChange={(e) => {
                setManualCompanyName(e.target.value);
                if (addCompanyModalError) setAddCompanyModalError('');
              }}
              placeholder='Company name'
              className='mt-4 w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ap-blue/30'
            />
            {addCompanyModalError ? (
              <p className='mt-2 text-xs text-red-600'>
                {addCompanyModalError}
              </p>
            ) : null}
            <div className='mt-4 flex justify-end gap-2'>
              <button
                type='button'
                disabled={isCreatingCompany}
                onClick={() => {
                  setShowAddCompanyModal(false);
                  setManualCompanyName('');
                  setAddCompanyModalError('');
                }}
                className='px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Cancel
              </button>
              <button
                type='button'
                disabled={isCreatingCompany}
                onClick={handleAddCompany}
                className='px-3 py-2 text-sm font-semibold text-white bg-ap-blue rounded-lg hover:bg-ap-darkblue disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isCreatingCompany ? 'Saving...' : 'Save company'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
