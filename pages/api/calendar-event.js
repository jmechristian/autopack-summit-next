export default function handler(req, res) {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AutoPack Summit//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'DTSTART:20260930T120000Z',
    'DTEND:20261002T210000Z',
    'SUMMARY:Automotive Packaging Summit 2026',
    'DESCRIPTION:Join industry leaders at the Automotive Packaging Summit 2026. Sept 30 – Oct 2\\, 2026 in Greenville\\, SC. Visit autopacksummit.com for details.',
    'LOCATION:Hyatt Regency\\, 220 North Main Street\\, Greenville\\, SC 29601',
    'URL:https://www.autopacksummit.com',
    'STATUS:CONFIRMED',
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    'UID:aps2026@autopacksummit.com',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="aps-2026.ics"'
  );
  res.status(200).send(ics);
}
