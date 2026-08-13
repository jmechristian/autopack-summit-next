import React from 'react';
import Head from 'next/head';
import HeaderPadding from '../shared/HeaderPadding';

// Table of contents used for the sticky sidebar and top navigation.
const sections = [
  { id: 'getting-started', title: '1. Getting Started' },
  { id: 'getting-around', title: '2. Getting Around the App' },
  { id: 'hub', title: '3. The Hub (Home)' },
  { id: 'profile', title: '4. Your Profile' },
  { id: 'agenda', title: '5. Agenda & Sessions' },
  { id: 'community', title: '6. Community & Networking' },
  { id: 'requests', title: '7. Requests & Chat Approvals' },
  { id: 'messaging', title: '8. Messaging' },
  { id: 'passport', title: '9. Passport Challenge' },
  { id: 'directories', title: '10. Exhibitors, Sponsors & Speakers' },
  { id: 'announcements', title: '11. Announcements & Notifications' },
  { id: 'favorites', title: '12. Favorites' },
  { id: 'notes', title: '13. Notes' },
  { id: 'exhibitor-tools', title: '14. Exhibitor Tools' },
  { id: 'glossary', title: '15. Icon Glossary' },
];

// Amplify Storage public folder for app-guide screenshots.
const SHOTS_BASE =
  'https://autopacksummitapp94b14feadba64f23aff0ed8deae77b99bc6-dev.s3.amazonaws.com/public/screenshots';

const shot = (file, caption) => ({
  src: `${SHOTS_BASE}/${encodeURIComponent(file)}`,
  caption,
});

// Portrait phone screenshot. Pass { src, caption } from the shot() helper.
const Shot = ({ src, caption }) => (
  <figure className='m-0 flex w-full max-w-[240px] flex-col'>
    <img
      src={src}
      alt={caption || 'App screenshot'}
      className='aspect-[9/19.5] w-full rounded-3xl border border-gray-200 object-cover object-top shadow-sm'
      loading='lazy'
    />
    {caption && (
      <figcaption className='mt-3 text-center text-sm italic text-gray-500'>
        {caption}
      </figcaption>
    )}
  </figure>
);

// Lays screenshots out in a horizontal row that wraps on narrower screens.
const Shots = ({ items }) => {
  if (!items?.length) return null;
  return (
    <div className='my-8 flex flex-wrap justify-center gap-6'>
      {items.map((item, i) => (
        <Shot key={item.src || i} src={item.src} caption={item.caption} />
      ))}
    </div>
  );
};

const Section = ({ id, title, children }) => (
  <section id={id} className='scroll-mt-28 border-t border-gray-100 pt-12'>
    <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
      {title}
    </h2>
    <div className='prose prose-lg prose-indigo mt-4 max-w-none text-gray-600'>
      {children}
    </div>
  </section>
);

const Tip = ({ children }) => (
  <div className='my-6 rounded-r-lg border-l-4 border-ap-yellow bg-ap-yellow/10 px-5 py-4'>
    <p className='m-0 text-base text-gray-700'>
      <strong className='text-ap-darkblue'>Tip:</strong> {children}
    </p>
  </div>
);

const HowTo = () => {
  return (
    <>
      <Head>
        <title>Automotive Packaging Summit | How to Use the App</title>
        <meta
          name='description'
          content='A complete, step-by-step guide to every attendee feature in the Automotive Packaging Summit mobile app.'
        />
        <meta
          property='og:title'
          content='Automotive Packaging Summit | How to Use the App'
        />
      </Head>

      <HeaderPadding />

      {/* Hero */}
      <div className='bg-ap-darkblue'>
        <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
          <p className='text-sm font-semibold uppercase tracking-widest text-ap-yellow'>
            Attendee How-To Guide
          </p>
          <h1 className='mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
            Using the Automotive Packaging Summit App
          </h1>
          <p className='mt-4 max-w-3xl text-lg text-blue-100'>
            A complete, ordered walkthrough of every attendee-facing feature —
            from your first sign in to collecting passport stamps at the booth.
          </p>
        </div>
      </div>

      {/* Download callout — app is invite-only, so share these direct links */}
      <div className='border-b border-ap-yellow/30 bg-ap-yellow/10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between lg:px-8'>
          <div className='text-center sm:text-left'>
            <p className='text-lg font-bold text-ap-darkblue'>
              Download the official event app
            </p>
            <p className='mt-1 max-w-xl text-sm text-gray-700'>
              This app is for registered attendees and is not listed for public
              search — use the links below to install it on your device or open
              the web app, then sign in with the credentials from your
              registration.
            </p>
          </div>
          <div className='flex shrink-0 flex-wrap items-center justify-center gap-3'>
            <a
              href='https://apps.apple.com/us/app/automotive-packaging-summit/id6761734425'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block transition-opacity hover:opacity-90'
              aria-label='Download on the App Store'
            >
              <img
                src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83'
                alt='Download on the App Store'
                className='h-12 w-auto'
              />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=com.packagingschool.autopacksummit'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block transition-opacity hover:opacity-90'
              aria-label='Get it on Google Play'
            >
              <img
                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                alt='Get it on Google Play'
                className='h-[72px] w-auto'
              />
            </a>
            <a
              href='https://autopacksummit.expo.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-12 items-center justify-center rounded-lg bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90'
            >
              Open Web App
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-12'>
          {/* Sticky table of contents */}
          <aside className='hidden lg:col-span-3 lg:block'>
            <nav className='sticky top-28'>
              <p className='mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400'>
                On this page
              </p>
              <ul className='space-y-2'>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className='block text-sm text-gray-600 transition-colors hover:text-ap-blue'
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className='space-y-12 lg:col-span-9'>
            {/* Mobile TOC */}
            <details className='rounded-lg border border-gray-200 bg-gray-50 p-4 lg:hidden'>
              <summary className='cursor-pointer text-sm font-semibold text-ap-darkblue'>
                Jump to a section
              </summary>
              <ul className='mt-3 space-y-2'>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className='text-sm text-gray-600 hover:text-ap-blue'
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <Section id='getting-started' title='1. Getting Started'>
              <p>
                The Automotive Packaging Summit app is <strong>invite-only</strong>.
                There is no public sign-up — your account is created by the event
                organizer using your registration email. If you don&rsquo;t have
                an account, contact your event administrator.
              </p>

              <h3>1.1 First-Time Sign In (Invite Only)</h3>
              <p>
                The first time you log in, you use the{' '}
                <strong>temporary password</strong> provided by the organizer.
                The app will then ask you to create your own password.
              </p>
              <ol>
                <li>Open the app. You&rsquo;ll land on the <strong>Sign In</strong> screen.</li>
                <li>Enter your <strong>email</strong> and the <strong>temporary password</strong> you were given.</li>
                <li>Tap <strong>Sign In</strong>.</li>
                <li>When prompted, enter a <strong>new password</strong>, then <strong>confirm it</strong>.</li>
                <li>Tap <strong>Update Password</strong>. You&rsquo;ll be taken straight into the app.</li>
              </ol>
              <Shots items={[shot('signin.png', 'Sign-in screen with email and password fields.')]} />

              <h3>1.2 Signing In</h3>
              <ol>
                <li>Enter your <strong>email</strong> and <strong>password</strong>.</li>
                <li>Tap the <strong>eye icon</strong> to show/hide your password if needed.</li>
                <li>Tap <strong>Sign In</strong>.</li>
              </ol>
              <p>
                If your credentials are incorrect, you&rsquo;ll see a message such
                as <em>&ldquo;Incorrect email or password.&rdquo;</em> Because the
                app is invite-only, an unrecognized email returns{' '}
                <em>&ldquo;No account found&hellip; please contact your
                administrator.&rdquo;</em>
              </p>

              <h3>1.3 Forgot / Reset Password</h3>
              <p>
                If you forget your password, you can reset it yourself with a
                verification code sent to your email.
              </p>
              <ol>
                <li>On the Sign In screen, tap <strong>Forgot Password?</strong></li>
                <li>Enter your <strong>email</strong> and tap <strong>Send Verification Code</strong>.</li>
                <li>Check your email for the code.</li>
                <li>Back in the app, enter the <strong>verification code</strong>, your <strong>new password</strong>, and <strong>confirm</strong> it.</li>
                <li>Tap <strong>Reset Password</strong>. You&rsquo;ll be returned to Sign In to log in with your new password.</li>
              </ol>
              <p>Helpful options on this screen:</p>
              <ul>
                <li><strong>Resend code</strong> — sends a new code if the first didn&rsquo;t arrive.</li>
                <li><strong>Use a different email</strong> — start over with another address.</li>
                <li><strong>Back to sign in</strong> — return without resetting.</li>
              </ul>
              <Shots items={[shot('forgotpassword.png', 'Forgot Password — email entry step.')]} />

              <h3>1.4 Signing Out</h3>
              <ol>
                <li>Go to the <strong>Profile</strong> tab.</li>
                <li>Scroll to the bottom and tap <strong>Logout</strong>.</li>
              </ol>
              <Shots items={[shot('logout.png', 'Profile screen with the Logout button at the bottom.')]} />
            </Section>

            <Section id='getting-around' title='2. Getting Around the App'>
              <p>The app has <strong>five main tabs</strong> along the bottom of the screen:</p>
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Tab</th>
                      <th>Icon</th>
                      <th>What it&rsquo;s for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Hub</strong></td><td>🏠 Home</td><td>Your personalized home screen: your QR code, countdown, live sessions, quick shortcuts, and passport progress.</td></tr>
                    <tr><td><strong>Agenda</strong></td><td>📅 Calendar</td><td>The full event schedule, organized by day.</td></tr>
                    <tr><td><strong>Engage</strong></td><td>💬 Chat bubbles</td><td>Announcements, messages, contact requests, and directories. A <strong>red badge</strong> shows unread activity.</td></tr>
                    <tr><td><strong>Community</strong></td><td>👥 People</td><td>The attendee directory — find and connect with other people.</td></tr>
                    <tr><td><strong>Profile</strong></td><td>👤 Person</td><td>Your profile, QR code, contacts, notes, favorites, and settings.</td></tr>
                  </tbody>
                </table>
              </div>
              <Tip>Tapping a tab you&rsquo;re already on returns you to the top of that section.</Tip>
            </Section>

            <Section id='hub' title='3. The Hub (Home)'>
              <p>
                The <strong>Hub</strong> is your personalized landing screen. Your
                profile photo (or initials) sits in the top-left, and your name
                appears under your QR code so others can easily connect with you.
              </p>
              <Shots items={[shot('hub.png', 'Full Hub screen.')]} />

              <h3>3.1 Your QR Code (Always on the Hub)</h3>
              <p>
                Your personal <strong>QR code</strong> is a staple at the top of
                the Hub — always visible so you can share your info and connect
                with others in person without digging through menus.
              </p>
              <ul>
                <li>Have someone open <strong>Scan Contact</strong> (or their camera scanner) and point it at your Hub QR code.</li>
                <li>Your profile opens on their device so they can send a contact request.</li>
                <li>Your name appears directly under the QR code so people know whose code they&rsquo;re scanning.</li>
              </ul>
              <Tip>
                Flip to the Hub anytime you want to share your info — your QR
                code is right there at the top.
              </Tip>
              <Shots items={[shot('qrcode.png', 'Hub header with your QR code and name.')]} />

              <h3>3.2 Countdown &amp; Live Sessions</h3>
              <ul>
                <li>A <strong>countdown timer</strong> ticks down to the event in Greenville (Sept 30 – Oct 2, 2026).</li>
                <li>When sessions are happening, a <strong>LIVE</strong> badge appears next to the timer; otherwise you&rsquo;ll see <strong>&ldquo;Coming Up&rdquo;</strong> with the next session.</li>
                <li>Tap a session card to open its details. If a session is live and has a stream, a <strong>View Presentation</strong> button appears.</li>
              </ul>

              <h3>3.3 Quick Tools (Customize Your Shortcuts)</h3>
              <p>
                The <strong>Quick Tools</strong> grid gives one-tap access to your
                most-used features. You can pin up to <strong>8</strong> and
                arrange them in any order.
              </p>
              <ol>
                <li>In the Quick Tools section, tap <strong>Edit</strong>.</li>
                <li><strong>Add or remove</strong> tools by tapping them in the <em>Available tools</em> list.</li>
                <li>Use the <strong>up/down arrows</strong> to reorder your pinned tools.</li>
                <li>Tap <strong>Reset</strong> to return to the default set.</li>
                <li>Close the panel — your choices save automatically.</li>
              </ol>
              <p>
                Available shortcuts include: Contacts, Notes, Requests, Messages,
                Announcements, Favorites, Exhibitors, Sponsors, Speakers, and
                (for booth staff) Exhibitor Profile and Capture Contact.
              </p>
              <Shots
                items={[
                  shot('quick tools.png', 'Quick Tools grid with the Edit link.'),
                  shot('quick tools edit.png', 'Customize quick tools panel with add/remove and reorder controls.'),
                ]}
              />

              <h3>3.4 Passport Challenge Card</h3>
              <p>
                A blue <strong>Passport Challenge</strong> card shows your
                completion percentage and how many exhibitor stamps you&rsquo;ve
                collected. Tap it to open the full{' '}
                <a href='#passport'>Passport</a>.
              </p>

              <h3>3.5 Help, Feedback &amp; Notifications</h3>
              <p>
                The top-right of the Hub has two icons you&rsquo;ll use often:
              </p>
              <ul>
                <li>
                  <strong>Help (?)</strong> — opens a menu with two options:
                  <ul>
                    <li><strong>App Guide</strong> — opens this how-to page with instructions for every attendee feature.</li>
                    <li><strong>Feedback</strong> — send comments, bug reports, or ideas straight to the organizers from inside the app.</li>
                  </ul>
                </li>
                <li>
                  <strong>Bell</strong> — open your{' '}
                  <a href='#announcements'>Notifications</a>. A red badge shows
                  how many items are unread.
                </li>
              </ul>

              <h4>Sending Feedback</h4>
              <p>
                From the Help menu, tap <strong>Feedback</strong> to open the
                feedback form.
              </p>
              <ol>
                <li>Type your message in <strong>Your feedback</strong> (up to 2,000 characters) — what&rsquo;s working, what&rsquo;s confusing, or what you&rsquo;d like improved.</li>
                <li>Optionally attach up to <strong>6 images</strong> (screenshots help a lot) via the <strong>Add</strong> button.</li>
                <li>Tap <strong>Submit feedback</strong>.</li>
              </ol>
              <Shots items={[shot('feedback.png', 'Feedback form with text box and optional images.')]} />
            </Section>

            <Section id='profile' title='4. Your Profile'>
              <h3>4.1 Viewing Your Profile</h3>
              <p>
                Open the <strong>Profile</strong> tab to see your photo, name,
                title, company, email, and attendee type, followed by your Bio,
                Experience, Education, Interests, and Resume.
              </p>
              <p>
                The profile screen also has quick action tiles:{' '}
                <strong>Show QR Code</strong>, <strong>Scan Contact</strong>,{' '}
                <strong>Contacts</strong>, <strong>Notes</strong>,{' '}
                <strong>Favorites</strong>, and <strong>Settings</strong>.
              </p>
              <Shots items={[shot('Profile.png', 'Profile overview with the action tiles.')]} />

              <h3>4.2 Editing Your Profile</h3>
              <p>You can update your details directly on the Profile screen and in the Edit view.</p>
              <p><strong>Profile photo</strong></p>
              <ol>
                <li>Tap the <strong>+</strong> badge on your photo.</li>
                <li>Choose <strong>Take Photo</strong> or <strong>Choose from Library</strong>.</li>
                <li>The photo uploads and saves automatically.</li>
              </ol>
              <p><strong>Bio</strong> — Tap <strong>Edit</strong> next to Bio, type your bio, then tap <strong>Save</strong>.</p>
              <p><strong>Experience, Education, and Interests</strong> — Each section has its own add/edit controls to build out your background.</p>
              <p><strong>Resume</strong> — Tap <strong>Edit</strong> in the Resume section and choose a <strong>PDF (max 10MB)</strong>. Once uploaded, tap <strong>View uploaded resume</strong> to open it.</p>
              <Shots
                items={[
                  shot('editingbio.png', 'Editing the Bio field inline.'),
                  shot('updating profilepic.png', 'Updating your profile photo.'),
                ]}
              />

              <h3>4.3 Your QR Code</h3>
              <p>
                Your personal QR code lets other attendees scan you to open your
                profile and connect. The easiest place to find it is right at the
                top of the <a href='#hub'>Hub</a>, where it&rsquo;s always on
                display with your name underneath.
              </p>
              <ul>
                <li>Open the <strong>Hub</strong> tab — your QR code is the staple at the top, <strong>or</strong></li>
                <li>From <strong>Profile</strong>, tap <strong>Show QR Code</strong>.</li>
              </ul>
              <p>Have others point their camera at it (via <strong>Scan Contact</strong>) to view your profile.</p>

              <h3>4.4 Settings: Notifications</h3>
              <p>From <strong>Profile → Settings</strong>, control push notifications.</p>
              <ul>
                <li>Toggle <strong>Allow notifications</strong> on or off.</li>
                <li>Notifications include <strong>announcements, messages, and contact requests</strong>.</li>
                <li>If notifications were previously denied, the app shows an <strong>Open Settings</strong> button that takes you to your device settings to re-enable them.</li>
              </ul>
              <Shots items={[shot('settings.png', 'Settings screen showing the notifications toggle.')]} />

              <h3>4.5 Settings: Delete Account</h3>
              <p>At the bottom of <strong>Settings</strong> is a <strong>Danger Zone</strong>.</p>
              <ul>
                <li>Tapping <strong>Delete Account</strong> permanently removes your login, app profile, favorites, notes, contacts, and notification tokens. (Your event registration record is kept on file.)</li>
                <li>You&rsquo;ll be asked to confirm twice because this <strong>cannot be undone</strong>.</li>
              </ul>
            </Section>

            <Section id='agenda' title='5. Agenda & Sessions'>
              <h3>5.1 Browsing the Agenda</h3>
              <p>Open the <strong>Agenda</strong> tab to see the schedule.</p>
              <ul>
                <li>Use the <strong>Day</strong> chips at the top to switch between event days.</li>
                <li>Use the <strong>search bar</strong> to filter by session title, speaker, sponsor, or location.</li>
                <li>Each card shows the time, title, location, description, and speakers/sponsors. A <strong>LIVE</strong> badge appears on sessions happening now.</li>
                <li>Pull down to refresh.</li>
              </ul>
              <Shots items={[shot('agenda.png', 'Agenda list with day selector and search.')]} />

              <h3>5.2 Session Details</h3>
              <p>Tap any session to open its full details: time, title, location, full description, speakers, and sponsors.</p>
              <Shots items={[shot('sessiondetails.png', 'Session detail screen.')]} />

              <h3>5.3 Favoriting a Session</h3>
              <p>Tap the <strong>star icon</strong> on a session card or on the session detail screen to add it to your <a href='#favorites'>Favorites</a>. Tap again to remove it.</p>
              <Shots items={[shot('favoritesession.png', 'Session card with the favorite star highlighted.')]} />

              <h3>5.4 Session Notes</h3>
              <p>On the session detail screen, scroll to <strong>Notes</strong> to jot down private notes for that session.</p>
              <ul>
                <li>Type a note and tap <strong>Save note</strong>.</li>
                <li><strong>Edit</strong> or <strong>Delete</strong> existing notes anytime.</li>
                <li>Your notes are private to you. (See all notes in one place under <a href='#notes'>Notes</a>.)</li>
              </ul>
              <Shots items={[shot('sessionnotes.png', 'Notes section on a session detail screen.')]} />

              <h3>5.5 Watching a Live Presentation</h3>
              <p>When a session is <strong>live</strong> and has a stream attached, a <strong>View Presentation</strong> button appears on the Hub card and the session detail screen. Tap it to watch the presentation inside the app.</p>
            </Section>

            <Section id='community' title='6. Community & Networking'>
              <p>
                This is the heart of networking in the app. The connection flow is{' '}
                <strong>approval-based</strong>: you send a request, and the other
                person must <strong>accept</strong> before you can chat, see their
                email, or save them to your phone.
              </p>

              <h3>6.1 Browsing the Community Directory</h3>
              <p>Open the <strong>Community</strong> tab to browse all attendees, grouped alphabetically by last name.</p>
              <ul>
                <li>Use the <strong>search bar</strong> to find someone by name, company, or title.</li>
                <li>Pull down to refresh.</li>
                <li>Each row shows an icon indicating favorite status and whether a request is pending.</li>
              </ul>
              <Shots items={[shot('community.png', 'Community directory list with search.')]} />

              <h3>6.2 Viewing Someone&rsquo;s Profile</h3>
              <p>Tap any person to open their profile — bio, experience, education, and interests. Their <strong>email is hidden</strong> until you&rsquo;re connected (your request is accepted).</p>
              <Shots items={[shot('otherprofile.png', 'Another attendee’s profile.')]} />

              <h3>6.3 Sending a Contact Request</h3>
              <p>To connect with someone:</p>
              <ol>
                <li>Open their profile.</li>
                <li>Tap the <strong>Send Request</strong> tile (or the chat bubble icon).</li>
                <li>Confirm you want to send the request.</li>
                <li>Add a short <strong>intro message</strong> so they know who you are, then submit.</li>
              </ol>
              <p>The tile now shows <strong>Pending</strong> (an hourglass) until they respond. Once they <strong>accept</strong>, the tile changes to <strong>Accepted</strong>, and you can start a chat or save them to your phone contacts.</p>
              <Tip>This is the &ldquo;chat approval.&rdquo; You can&rsquo;t message someone until they accept your contact request.</Tip>
              <Shots
                items={[
                  shot('sendrequest.png', 'Profile with the “Send Request” tile.'),
                  shot('intromessage.png', 'Intro message pop-up.'),
                  shot('requestpending.png', 'Tile showing “Pending” after sending.'),
                ]}
              />

              <h3>6.4 Favoriting a Person</h3>
              <p>Tap the <strong>star icon</strong> on a person&rsquo;s profile (or in the directory) to favorite them for quick access later. Find them again under <a href='#favorites'>Favorites</a>.</p>
              <Shots items={[shot('favoriteperson.png', 'Favorite star on an attendee profile.')]} />

              <h3>6.5 Scanning an Attendee&rsquo;s QR Code</h3>
              <p>
                In person, you can scan someone&rsquo;s QR code (usually shown at
                the top of their Hub) to jump straight to their profile.
              </p>
              <ol>
                <li>From <strong>Profile</strong>, tap <strong>Scan Contact</strong> (or use the Scan tool).</li>
                <li>Point your camera at the other person&rsquo;s QR code on their Hub (or their full-screen QR).</li>
                <li>Their profile opens so you can send a request.</li>
                <li>Tap <strong>Scan again</strong> to scan another person.</li>
              </ol>

              <h3>6.6 Saving a Contact to Your Phone</h3>
              <p><strong>Once a request is accepted</strong>, the <strong>Add to phone contacts</strong> tile unlocks on that person&rsquo;s profile. Tap it (allow Contacts access if asked) to save their name, company, title, email, phone, and website to your phone&rsquo;s address book.</p>
              <Shots items={[shot('savecontact.png', '“Add to phone contacts” tile after acceptance.')]} />

              <h3>6.7 Contact Notes</h3>
              <p>At the bottom of any person&rsquo;s profile is a <strong>Notes</strong> section where you can keep private notes about that person (e.g., where you met, follow-ups). Add, edit, and delete notes just like session notes.</p>
              <Shots items={[shot('contactnote.png', 'Notes section on a contact’s profile.')]} />
            </Section>

            <Section id='requests' title='7. Requests & Chat Approvals'>
              <p>Manage all your connections from <strong>Engage → Requests</strong> (also on the Hub as the <strong>Requests</strong> quick tool). There are three tabs.</p>
              <Shots items={[shot('requestsent.png', 'Requests screen with the Received / Sent / Accepted tabs.')]} />

              <h3>7.1 Received Requests (Approve or Decline)</h3>
              <p>The <strong>Received</strong> tab lists people who want to connect with you, including their intro message.</p>
              <ul>
                <li>Tap <strong>Accept</strong> to approve — this instantly opens a chat with them.</li>
                <li>Tap <strong>Decline</strong> to dismiss the request.</li>
              </ul>
              <Shots items={[shot('receivedrequest.png', 'A received request with Accept / Decline buttons.')]} />

              <h3>7.2 Sent Requests</h3>
              <p>The <strong>Sent</strong> tab shows requests you&rsquo;ve sent that are still pending. Tap <strong>Cancel request</strong> to withdraw one (you&rsquo;ll be asked to confirm).</p>
              <Shots items={[shot('sentrequest.png', 'Sent request with the Cancel option.')]} />

              <h3>7.3 Accepted Connections</h3>
              <p>The <strong>Accepted</strong> tab lists everyone you&rsquo;re now connected with. For each, you can:</p>
              <ul>
                <li>Tap the <strong>person icon</strong> to open their profile.</li>
                <li>Tap the <strong>chat icon</strong> to open your conversation.</li>
              </ul>
              <Shots items={[shot('acceptedrequests.png', 'Accepted connections list.')]} />
            </Section>

            <Section id='messaging' title='8. Messaging'>
              <p>You can message someone <strong>only after</strong> they&rsquo;ve accepted your contact request (or you&rsquo;ve accepted theirs).</p>

              <h3>8.1 Messages Inbox</h3>
              <p>Open <strong>Engage → Messages</strong> (or the <strong>Messages</strong> quick tool) to see all your conversations. Unread conversations are indicated with a badge.</p>
              <Shots items={[shot('messages.png', 'Messages inbox list.')]} />

              <h3>8.2 Chatting in a Conversation</h3>
              <p>Tap a conversation to open it.</p>
              <ul>
                <li>Type in the box at the bottom and tap <strong>Send</strong>.</li>
                <li>Your messages appear on the right; theirs on the left.</li>
                <li>Messages update in real time, and a <strong>&ldquo;Sending&hellip;&rdquo;</strong> label shows briefly while a message is delivered.</li>
              </ul>
              <Shots items={[shot('chat.png', 'A one-on-one chat thread.')]} />
            </Section>

            <Section id='passport' title='9. Passport Challenge'>
              <p>The <strong>Passport Challenge</strong> encourages you to visit exhibitor booths. Each booth has a QR code — scan it to collect a stamp. Fill your passport to reach 100%.</p>

              <h3>9.1 Viewing Your Passport</h3>
              <p>Open the passport from the <strong>Passport Challenge card</strong> on the Hub or Engage screen.</p>
              <ul>
                <li>The top shows your <strong>completion percentage</strong> and stamp count.</li>
                <li>Below is the <strong>list of exhibitors</strong>, each marked <strong>collected</strong> (green check) or <strong>not yet</strong> (red).</li>
                <li>Pull down to refresh.</li>
              </ul>
              <Shots items={[shot('passport.png', 'Passport screen with progress and exhibitor list.')]} />

              <h3>9.2 Collecting Stamps by Scanning</h3>
              <ol>
                <li>Tap <strong>Scan Passport QR</strong> at the top, or the <strong>scan icon</strong> next to a specific exhibitor.</li>
                <li>Allow camera access if prompted.</li>
                <li>Point your camera at the exhibitor&rsquo;s <strong>passport QR code</strong>.</li>
                <li>A success screen confirms the stamp was added. Already-collected booths are recognized automatically.</li>
              </ol>
            </Section>

            <Section id='directories' title='10. Exhibitors, Sponsors & Speakers'>
              <p>Browse event participants from <strong>Engage</strong> or via the <strong>Exhibitors</strong>, <strong>Sponsors</strong>, and <strong>Speakers</strong> quick tools.</p>
              <ul>
                <li><strong>Search</strong> each directory to find a specific company or person.</li>
                <li>Tap any entry to view its full profile (company info, booth number, presentation details, etc.).</li>
                <li>Tap the <strong>star</strong> to add exhibitors, sponsors, or speakers to your <a href='#favorites'>Favorites</a>.</li>
              </ul>
              <Shots
                items={[
                  shot('exhibitors.png', 'Exhibitors directory.'),
                  shot('speakerprofile.png', 'A speaker profile.'),
                ]}
              />
            </Section>

            <Section id='announcements' title='11. Announcements & Notifications'>
              <p><strong>Announcements</strong> are event-wide updates from the organizers.</p>
              <ul>
                <li>Open <strong>Engage → Announcements</strong> to read them; unread items are badged.</li>
                <li>Tap an announcement to read the full message.</li>
              </ul>
              <p>The <strong>Notifications center</strong> (bell icon on the Hub) brings everything together in one feed:</p>
              <ul>
                <li>New <strong>announcements</strong></li>
                <li>Unread <strong>messages</strong></li>
                <li><strong>Contact request</strong> activity (received and accepted)</li>
              </ul>
              <p>Tap any notification to jump straight to the relevant screen.</p>
              <Shots items={[shot('notifications.png', 'Notifications center feed.')]} />
            </Section>

            <Section id='favorites' title='12. Favorites'>
              <p><strong>Favorites</strong> is your saved-items hub. Open it from the <strong>Profile</strong> tab or the <strong>Favorites</strong> quick tool. Items are grouped into categories:</p>
              <ul>
                <li><strong>Exhibitors</strong></li>
                <li><strong>Speakers</strong></li>
                <li><strong>Sponsors</strong></li>
                <li><strong>Sessions</strong></li>
                <li><strong>Contacts</strong></li>
              </ul>
              <p>For each item you can:</p>
              <ul>
                <li><strong>Tap it</strong> to open the full profile or session.</li>
                <li>Tap the <strong>star</strong> to remove it from favorites.</li>
                <li>Use <strong>Add</strong> on a category header to jump to that directory and favorite more.</li>
                <li><strong>Search</strong> to filter across all favorites.</li>
              </ul>
              <Shots items={[shot('favorites.png', 'Favorites grouped by category.')]} />
            </Section>

            <Section id='notes' title='13. Notes'>
              <p><strong>Notes</strong> collects everything you&rsquo;ve written in one place. Open it from the <strong>Profile</strong> tab or the <strong>Notes</strong> quick tool.</p>
              <ul>
                <li>Switch between the <strong>Sessions</strong> and <strong>Contacts</strong> tabs.</li>
                <li><strong>Search</strong> your notes by session title, person name, or company.</li>
                <li>Tap a note to jump to the session or person it belongs to.</li>
              </ul>
              <p>Notes are always private to you. You create and edit them from within a session or a person&rsquo;s profile (see <a href='#agenda'>5.4</a> and <a href='#community'>6.7</a>).</p>
            </Section>

            <Section id='exhibitor-tools' title='14. Exhibitor Tools (Booth Staff Only)'>
              <p>If your registration is tied to an exhibiting company, two extra tools become available (and <strong>Exhibitor Profile</strong> is automatically pinned to your Hub).</p>
              <ul>
                <li><strong>Exhibitor Profile</strong> — opens your company&rsquo;s booth profile so you can review/complete it. If none exists yet, ask an admin to create it.</li>
                <li><strong>Capture Contact</strong> — a lead-capture scanner. Point your camera at an attendee&rsquo;s QR code to quickly pull up and capture their contact details at your booth.</li>
              </ul>
            </Section>

            <Section id='glossary' title='15. Quick Reference: Icon Glossary'>
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr><th>Icon</th><th>Meaning</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>⭐ Star</td><td>Add/remove a favorite (session, person, exhibitor, sponsor, speaker).</td></tr>
                    <tr><td>💬 Chat bubble</td><td>Start or open a conversation (available after a request is accepted).</td></tr>
                    <tr><td>⏳ Hourglass</td><td>A contact request is <strong>pending</strong>.</td></tr>
                    <tr><td>✅ Checkmark (double)</td><td>A contact request is <strong>accepted</strong> — you&rsquo;re connected.</td></tr>
                    <tr><td>👤➕ Person-add</td><td>Send a contact request.</td></tr>
                    <tr><td>📷 / Scan icon</td><td>Open the camera to scan a QR code (attendee, passport, or lead capture).</td></tr>
                    <tr><td>🔔 Bell</td><td>Notifications (red badge = unread items).</td></tr>
                    <tr><td>📝 Note icon</td><td>This session or contact has a note attached.</td></tr>
                    <tr><td>🏷️ QR code</td><td>Your personal QR code — always shown at the top of the Hub for others to scan.</td></tr>
                  </tbody>
                </table>
              </div>
              <p className='mt-8 text-sm italic text-gray-400'>
                End of attendee guide. Admin features are covered separately and
                are intentionally not included here.
              </p>
            </Section>
          </main>
        </div>
      </div>
    </>
  );
};

export default HowTo;
