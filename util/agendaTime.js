/**
 * Agenda session times are stored as Eastern (America/New_York) wall-clock
 * values — not UTC. They arrive as "HH:mm", "HH:mm:ss", or
 * "YYYY-MM-DDTHH:mm:ss" with no offset.
 *
 * Always format through these helpers so every viewer sees Eastern times,
 * regardless of their browser timezone.
 */

const EASTERN_TZ = 'America/New_York';

/**
 * Pull hour/minute from an agenda time string.
 * @returns {{ hour: number, minute: number } | null}
 */
export const extractAgendaTimeParts = (value) => {
  if (!value || typeof value !== 'string') return null;

  const timePart = value.includes('T') ? value.split('T')[1] : value;
  const match = timePart.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?/);
  if (!match) return null;

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (
    Number.isNaN(hour) ||
    Number.isNaN(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    return null;
  }

  return { hour, minute };
};

/**
 * Format a stored agenda time as Eastern wall-clock (e.g. "09:00 AM").
 * Does not shift based on the viewer's local timezone.
 */
export const formatAgendaTime = (value) => {
  const parts = extractAgendaTimeParts(value);
  if (!parts) return null;

  // Carry wall-clock hours via a UTC Date so Intl won't re-interpret them
  // against the browser's local zone.
  const carrier = new Date(Date.UTC(2000, 0, 1, parts.hour, parts.minute, 0));
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC',
  }).format(carrier);
};

/**
 * Format a start/end range in Eastern, e.g. "09:00 AM - 10:30 AM EST".
 */
export const formatAgendaTimeRange = (startTime, endTime) => {
  const start = formatAgendaTime(startTime);
  const end = formatAgendaTime(endTime);
  if (start && end) return `${start} - ${end} EST`;
  if (start) return `${start} EST`;
  return null;
};

export const normalizeAgendaDate = (value) => {
  if (!value) return null;

  if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }

  const parts = String(value).split(/[-/]/);
  if (parts.length === 3) {
    const [month, day, year] = parts;
    const fullYear = year.length === 2 ? `20${year}` : year;
    const paddedMonth = month.padStart(2, '0');
    const paddedDay = day.padStart(2, '0');
    return `${fullYear}-${paddedMonth}-${paddedDay}`;
  }

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return value;
};

export const normalizeAgendaTime = (value) => {
  if (!value) return null;
  if (/^\d{2}:\d{2}:\d{2}$/.test(value)) return value;
  if (/^\d{2}:\d{2}$/.test(value)) return `${value}:00`;
  return value;
};

/**
 * Combine date + time into a timezone-less Eastern wall-clock datetime.
 * Display must go through formatAgendaTime — do not pass to new Date() alone.
 */
export const combineAgendaDateTime = (dateValue, timeValue) => {
  if (!dateValue || !timeValue) return null;
  const normalizedDate = normalizeAgendaDate(dateValue);
  const normalizedTime = normalizeAgendaTime(timeValue);
  if (!normalizedDate || !normalizedTime) return null;
  if (normalizedTime.includes('T')) return normalizedTime;
  return `${normalizedDate}T${normalizedTime}`;
};

/**
 * Format any stored time string for Eastern display.
 * Handles HH:mm, HH:mm:ss, ISO-ish datetimes, simple ranges, and free-form
 * copy — always ensuring an EST label when one is not already present.
 */
export const formatEasternDisplayTime = (value) => {
  if (!value) return null;
  const trimmed = String(value).trim();
  if (!trimmed) return null;
  if (/\b(EST|EDT|ET|Eastern)\b/i.test(trimmed)) return trimmed;

  // Already human-readable with AM/PM — keep as-is, add EST
  if (/\b(am|pm)\b/i.test(trimmed)) {
    return `${trimmed} EST`;
  }

  const rangeMatch = trimmed.match(
    /^(\d{1,2}:\d{2}(?::\d{2})?)\s*[-–—]\s*(\d{1,2}:\d{2}(?::\d{2})?)$/
  );
  if (rangeMatch) {
    const start = formatAgendaTime(rangeMatch[1]);
    const end = formatAgendaTime(rangeMatch[2]);
    if (start && end) return `${start} – ${end} EST`;
  }

  const single = formatAgendaTime(trimmed);
  if (single) return `${single} EST`;

  return `${trimmed} EST`;
};

export { EASTERN_TZ };
