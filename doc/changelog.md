# Changelog

All notable changes to the GS Gacuba II A platform are documented in this file.

## [3.3.5] - 2026-08-31
### Refined (Clean Highlight Reel Video Player)
- **Distraction-Free Video Experience**:
  - Removed all modal header banners, textual descriptions, audio toggles, and admission CTA footers when opening the highlights reel.
  - Implemented a clean, full-viewport video modal with native controls, autoplay, escape-key/backdrop dismiss, and a floating close button.

## [3.3.4] - 2026-08-31
### Refined (Sports Discipline Cards Cleaning)
- **Removed Overlay Pill Tags**:
  - Removed the *"Boys & Girls Squads"*, *"Regional Finalists"*, and *"Track & Field"* overlay badges from the top-right of the sports disciplines cards to provide an unoccluded presentation matching the clean design.

## [3.3.3] - 2026-08-31
### Refined (Hero Typography & Unbroken Stats Bar)
- **Unbroken 3-Line Headline**:
  - Enforced `whitespace-nowrap` with fluid responsive font scaling (`text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[56px] 2xl:text-[64px]`) on each line (*"Build strength."*, *"Build discipline."*, and *"Build champions."*).
  - Adjusted left column width allocation to ensure zero mid-phrase text wrapping across viewports.
- **Single Continuous Stats Bar**:
  - Configured `15+ Sports and Games`, `3 Teams`, and `20 Awards` to remain strictly in a single unbroken horizontal line (`flex-nowrap`, `shrink-0`) with vertical white dividers.

## [3.3.2] - 2026-08-31
### Refined (Sports & Entertainment Hero Exact Reference Alignment)
- **Seamless Athlete Cutouts (No Cards / No White Boxes)**:
  - Extracted transparent PNG cutouts for the three athletes matching the exact reference composition:
    - Basketball player (#44) leaping up high with the basketball raised above head level.
    - Traditional Rwandan cultural dancer in yellow/orange and black Umushanana attire with outstretched arms and warm smile in the center.
    - Goalkeeper in lime green jersey diving horizontally to the right, catching the soccer ball in the upper right.
- **Orange Hero Geometry & Watermark**:
  - Full semicircle pill curve (`rounded-r-full` / `rounded-r-[380px]`) on the right side of the vibrant orange canvas (`#f58220`).
  - School campus building facade watermark blended subtly (`mix-blend-multiply` with low opacity) into the orange background.
- **Inline High-Contrast Stats & Typography**:
  - Clean horizontal stat row (`15+ Sports and Games`, `3 Teams`, `20 Awards`) with thin vertical white dividers directly on the orange canvas without enclosing boxes.
  - Three-line headline: *"Build strength."* and *"Build discipline."* in dark navy, paired with *"Build champions."* in crisp white.
  - Top category eyebrow: *"OUR SPORTS"* in bold white uppercase.
- **Header Synchronization**:
  - Ensured header is completely unclipped with full search bar (`"Search for anything about Gacuba"`), logo, navigation links, user profile trigger, and Ask action button.

## [3.3.1] - 2026-08-31
### Refined (Sports & Entertainment Page Alignment to Reference Screenshots 2–4)
- **Large Hero Proportions & Card Collage**:
  - Expanded hero canvas with bold high-contrast 3-line typography (*"Build strength."* and *"Build discipline."* in dark navy, *"Build champions."* in crisp white).
  - Stat card container aligned to 2-row layout (`15+ Sports and Games` | `3 Teams` on top row, `20 Awards` on bottom row) with translucent glass backdrop and clean border.
  - Replaced flat cutout arrangement with 3 rounded white card frames:
    - Basketball player card with dark navy *"Basketball"* badge.
    - Goalkeeper card with dark navy *"Varsity Football"* badge.
    - Traditional Rwandan dancer central featured card with natural layering and shadow depth.
- **Sport Disciplines Cards (Screenshot 3 Matching)**:
  - Card 1 (Basketball): Updated to exact coach/faculty portrait (`/assets/07117.png`), *"Boys & Girls Squads"* status tag, floating circular basketball icon, and *"Learn more →"* action link.
  - Card 2 (Football): Updated to student group uniform photograph (`/assets/046d0.png`), *"Regional Finalists"* status tag, and floating soccer icon.
  - Card 3 (Athletics): Updated to track & field faculty portrait (`/assets/017b1.png`), *"Track & Field"* status tag, and floating athletics icon.
  - Premium micro-interactions with upward lift, subtle border shadows, and image zoom.
- **Beyond the Game & CTA Sections (Screenshot 4 Matching)**:
  - Left column with clear typography hierarchy (*"Growing champions for life"*), orange checkmarks, and *"Apply for Admission →"* button.
  - Large cheering crowd photo card with pulsating play button and *"SPORTS HIGHLIGHTS / SEE OUR CHAMPIONS IN ACTION"* overlay with *"Watch Reel →"* pill badge.
  - Full-width golden orange CTA with circular outline trophy icon and action buttons.
  - Clean desktop whitespace and removed unintended side margin text.

## [3.3.0] - 2026-08-31
### Added (Sports & Entertainment Page Implementation)
- **Hero Section**:
  - Curved vibrant orange container (`rounded-tr-[160px] rounded-br-[160px]`) with blueprint grid watermark.
  - Three-line high impact headline: *"Build strength."* (Navy), *"Build discipline."* (Navy), and *"Build champions."* (White).
  - Subtitle: *"Sports at Gacuba inspires teamwork, discipline and excellence on and off the field."*
  - Stat metrics counter bar with translucent glass card: `15+ Sports and Games` (Trophy), `3 Teams` (Users), and `20 Awards` (Medal).
  - Layered dynamic athletic cutout composite:
    - Basketball player soaring towards the hoop (`/assets/sports-basketball-jump.jpg`).
    - Traditional Rwandan cultural dancer in Umushanana attire with outstretched arms (`/assets/sports-rwandan-dancer.jpg`).
    - Soccer goalkeeper diving horizontally in mid-air catching a ball (`/assets/sports-goalkeeper-dive.jpg`).
- **Vertical Typography Accent**:
  - Stylized vertical decorative typography along the right page margin: *"A place for every passion."*
- **Our Sport Disciplines Section**:
  - Eyebrow (`OUR SPORT DISCIPLINES`) and heading (*"Excel in your favorite sport"*).
  - 3 Discipline cards with photo headers, floating circular orange icon badges, titles, and descriptions:
    - **Basketball**: *"Building strategy, agility and team spirit."*
    - **Football**: *"Strength, endurance and team work."*
    - **Athletics**: *"Speed, endurance and determination."*
- **Beyond the Game Section**:
  - Headline: *"Growing champions for life"*, description, checklist with orange circular badges (*Modern sports materials*, *Inter-school competitions*, *Health, wellness and safety first*), and *"Apply for Admission →"* CTA button.
  - Interactive media card featuring the cheering crowd photo (`/assets/sports-cheering-crowd.jpg`), pulsing play button, and interactive championship highlights video reel modal.
- **Bottom Golden Orange Banner**:
  - Large trophy badge in circular outline, headline (*"Be part of the spirit. Be part of the team."*), and action buttons (*"Apply for admissions →"* and *"Talk to admissions →"*).
- **Navigation & Search Integration**:
  - Registered route `/sports` and aliases (`/sports-and-entertainment`, `/athletics`, `/games`, `/entertainment`).
  - Added Sports & Entertainment to Header dropdown and Footer quick links.
  - Added sports records and disciplines to global search and Spotlight database.

## [3.2.0] - 2026-08-31
### Added & Enhanced (Browser URL Synchronization & Mobile Deployment Hardening)
- **URL Routing & Address Bar Synchronization**:
  - Implemented bidirectional HTML5 History API URL synchronization (`window.history.pushState` / `replaceState` and `popstate` listeners).
  - Browser address bar now displays clean, real-time URLs for all routes (e.g. `/`, `/about`, `/gallery`, `/news`, `/academics`, `/admissions`, `/student-life`, `/facilities`, `/leadership`, `/careers`, `/faq`, `/contact`).
  - Added URL alias mapping (e.g. `/about-us` -> `/about`, `/events` -> `/news`, `/curriculum` -> `/academics`, `/apply` -> `/admissions`).
  - Added deep-linking query param actions (`?apply=true`, `?ask=...`, `?search=...`, `?profile=true`).
  - Dynamic page `<title>` and `<meta name="description">` synchronization on every route change.
- **Mobile View & Deployment Hardening**:
  - Configured `vercel.json` with SPA wildcard rewrite rules (`/(.*)` -> `/index.html`) to prevent 404s on subpaths.
  - Added security headers and asset caching directives in `vercel.json`.
  - Configured `vite.config.ts` build target to `es2020` for broader mobile browser (iOS Safari, Android WebViews) compatibility.
  - Added `ErrorBoundary` component to isolate runtime script errors from breaking the page view.
  - Enhanced `index.html` viewport settings (`viewport-fit=cover`, `maximum-scale=5.0`), favicon and apple touch icons.
### Added (Academics Page Implementation & Pathway Alignment)
- **Split Hero Section**:
  - Implemented the diagonal angular split banner with left vibrant orange gradient containing the `ACADEMICS` eyebrow, two-tone headline (*"Excellence in"* in white and *"every discipline"* in navy), description, and CTA buttons (*"Explore programs →"* and *"Curriculum overview"*).
  - Positioned the real classroom photography (`/assets/c1786.png`) on the right with a clean geometric diagonal wedge slice.
- **Our Academic Pathways Section**:
  - Centered eyebrow (`— OUR ACADEMIC PATHWAYS`) and headline (*"Find the right path for your future"*).
  - Segmented toggle between **Advanced level (A' Level)** and **Ordinary level (O' Level)**.
  - **MS2 Card**: Features mathematics/science icon badge in soft orange, bold title, uppercase stream subtitle (*"MATHEMATICS, SCIENCES AND TECHNOLOGY"*), and rigorous pathway description.
  - **Arts and Humanities Card**: Features book/languages icon badge in soft blue, bold title, uppercase stream subtitle (*"HUMANITIES, LANGUAGES AND SOCIAL SCIENCES"*), and career pathway description.
- **Bottom Golden Orange CTA Banner**:
  - Headline: *"Your future starts with the right foundation"*, subtitle, and action buttons (*"Apply for admissions →"* and *"Talk to admissions →"*).
- **Navigation Integration**: Linked `AcademicsPage` seamlessly into application routing and navigation menus in `App.tsx`.

## [3.0.0] - 2026-08-29
### Added (News Page Implementation & Design Alignment)
- **Top Announcement / Breaking Banner**:
  - Implemented the full-width orange banner with the `"Latest"` white pill badge and the headline `"Our student awarded a 1st position in National exams 2026"`.
- **Featured News Hero Section**:
  - Structured the 2-column featured news layout with official certificate award ceremony image (`/assets/1c7aa.png`).
  - Overlay action buttons: `"Apply for Admission →"` and `"Ask about us"`.
  - Right details: `"Most liked"` badge with interactive Heart (like) and Share actions, bold headline (*"Kayla Elyse awarded the first position as the best performer in A’ level 2026"*), student narrative, and timestamp (`2 hours ago`).
- **Category Filter Pills**:
  - Implemented filter tabs (`All`, `School life`, `Events`, `Academics`, `Sports`) with active orange styling and outline pill buttons.
- **News Cards Grid**:
  - Created a 3-column responsive card grid featuring the Lenovo laptops delivery story with students photo (`/assets/b5865.png`).
  - Interactive card footer with timestamp (`2 hours ago`), like counter (`2`), and share counter (`6`).
- **Pagination & Navigation**:
  - Added numeric pagination buttons (`1` in navy, `2`-`6` in orange-bordered buttons).
  - Integrated `NewsPage` directly into application routing in `App.tsx`.

## [2.9.0] - 2026-08-29
### Enhanced (Clean Gallery Hero Layout & Even Content Distribution)
- **Image Removal**: Removed the peeping children image and any artificial left-offset padding from the Gallery hero section as requested.
- **Even Content Distribution**:
  - Restructured the hero layout into a clean, balanced 2-column grid.
  - Left column: Headline (`See it. Feel it. Live it.`), quote card, subtitle (`Get what you used to miss.`), and interactive CTA buttons.
  - Right column: Centered "Visual Campus Tour" badge inside the curved orange backdrop.
  - Gallery photo collection: Perfectly aligned with the container margins and interactive cards.

## [2.8.0] - 2026-08-29
### Enhanced (Peeping Children Asset & Gallery Showcase Alignment)
- **Peeping Children Graphic Replacement**: Replaced the peeping student asset with the official cutout image (`/assets/peeping-children.png`), featuring the two children in blue caps peeping from the left edge.
- **Visual & Typography Precision**:
  - Aligned headline hierarchy (`See it. Feel it. Live it.`), quote card (`At Gacuba, success isn't optional, it's the routine.`), and subtitle (`Get what you used to miss.`).
  - Refined the "Apply for Admission &rarr;" button in bright orange and "Ask about us" button with custom borders.
  - Aligned gallery cards, reaction buttons (`Dislike` and `Like`), and pagination controls.
### Enhanced (School Leadership Section Background & Layout Alignment)
- **Leadership Background Integration**: Applied the official graphic artwork background (`/assets/team-section-background.jpg`) to the school leadership section, incorporating the golden wave contour mesh on the left and circular halftone dot matrix pattern on the right.
- **Card Framing & Styling**:
  - Implemented the 4 leadership portrait cards with slate/steel-blue upper portrait enclosures (`bg-[#5c647b]`) and the monochrome headmaster portrait.
  - Formatted the lower badge container with clean white background, bold navy name (`HABUMUGISHA Ernest`), and purple role typography (`Headmaster`).
- **Indicators & Action Controls**:
  - Aligned the carousel indicator dots (active orange dot and white inactive dots).
  - Centered the "Apply for admission —" and "Ask about us" buttons with precise padding and styling.

## [2.6.0] - 2026-08-29
### Enhanced (Exact Hero Section Alignment & Background Overlay Integration)
- **Hero Background Overlay**: Replaced procedural SVG line paths with the official graphic overlay image (`/assets/hero-image-overlay.jpeg`), featuring the warm school building architecture and sweeping golden contour lines.
- **Hero Typography & Visual Balance**:
  - Aligned the headline, subtitle, and CTA layout with the exact visual specifications in the design reference.
  - Formatted the "Call us anytime" card with a squircle phone icon badge and high-contrast typography.
  - Refined the "Apply for admission —" and "Ask about us" buttons with rectangular framing.
  - Aligned the student cutout photo against the bottom baseline and stats bar.
  - Configured the dark navy stats bar with distinct icon container colors (`#2b3563` and `#ff8c00`).

## [2.5.0] - 2026-08-28
### Added & Enabled (Instant Multi-Category Search Engine & Spotlight)
- **Instant Search Engine (`src/data/searchDatabase.ts`)**:
  - Full-text multi-token search index covering every domain of GS Gacuba II A:
    - **Contacts & Admin**: Official telephone numbers (`+250 788 642 708`, `+250 788 000 000`), official email (`info@gsgacuba2a.rw`), campus location in Rubavu District / Lake Kivu zone, working hours (7:30 AM – 5:00 PM CAT).
    - **Leadership & Faculty**: Headmaster (HABUMUGISHA Ernest & Murenzi Emmanuel), Deans (Uwimana Claire, Habimana Jean de Dieu), Department heads (Dr. Nsengiyumva Patrick, Mukamugema Chantal, Kwizera Aimable).
    - **Academic Streams**: Ordinary Level (S1–S3), MPC / MS2 (Maths, Physics, Computer Science), HGL (Arts & Humanities), REB / CBC curriculum standards.
    - **Admissions & Fees**: Enrollment checklist, document requirements, tuition payment info, direct online admission application trigger.
    - **Campus Facilities**: ICT computer lab (50 workstations), Physics & Chemistry labs, Library (10,000+ books), sports grounds, 650-seat assembly hall.
    - **Student Life & Clubs**: Rwandan Cultural Troupe (*Itorero*), Debate & Public Speaking, STEM & Robotics Hub.
    - **FAQs & Quick Questions**: Day vs boarding policies, uniform guidelines, mid-year transfer procedures.
- **Clean & Compact UI (`src/components/SearchModal.tsx` & `src/components/Header.tsx`)**:
  - **Inline Live-Search Dropdown**: As students type or focus in the header search input, a clean, compact dropdown displays instant results with categorized color badges and descriptions.
  - **Spotlight Search Palette**: Accessible via dedicated search button in header, mobile drawer search, or global hotkeys (`Ctrl+K`, `Cmd+K`, or `/`).
  - **One-Click Direct Actions**: Instant triggers for opening the Admission Form, launching Contact Inquiries, opening the Student Portal, dialing school numbers via `tel:`, emailing via `mailto:`, or copying info with feedback indicators.
  - **Mobile Quick-Search Chips**: Quick shortcut chips (*Contacts*, *Headmaster*, *Location*, *MS2*, *Fees*, *Admissions*) inside the mobile menu drawer for tap-to-search access.

## [2.4.0] - 2026-08-28
### Added & Enhanced (Responsive Architecture & Multi-Screen Layout Precision)
- **Universal Multi-Screen Responsiveness**:
  - **Gallery Viewport Redesign**: Restructured the Gallery hero into an adaptive multi-screen layout. On mobile, elements are stacked cleanly with high contrast on a white canvas, while student imagery and the circular *"Visual Campus Tour"* badge are contained in a dedicated curved orange banner card. On desktop, the layout transitions to a split canvas with the peeking student anchoring the bottom-left and the large curved orange backdrop holding the tour badge.
  - **Gallery Grid & Pagination Scaling**: Adaptive 1-column (mobile), 2-column (tablet), and 3-column (desktop) photo feed with touch-friendly category filter pills and enlarged pagination buttons (`w-9 h-9 sm:w-10 sm:h-10`).
  - **Leadership Section Active Indicators**: Positioned interactive leadership indicator dots below the cards with synchronized selection and enhanced touch target padding.
  - **Header & Mobile Navigation Drawer**: Enhanced the responsive mobile menu drawer with `max-h-[calc(100dvh-64px)]` scroll containment, accessible touch targets (`min-h-[44px]`), and responsive button layout.
  - **Hero & Card Scaling**: Fluid typography scaling (`text-2xl` to `text-[46px]`), bounded student cutouts to eliminate viewport overflow, and stackable action buttons across Home, About, and Gallery pages.
- **Design Reference Documentation**:
  - Documented links and architectural mappings to the V1 prototype (`https://gs-gacuba-2a.vercel.app/`) and the active V2 Figma design system in `design/original/README.md` and technical specifications.

## [2.3.0] - 2026-08-28
### Updated & Refined
- **Page Readiness Scope**: Defined **Home**, **About Us**, and **Gallery** as the three active, fully realized pages.
- **Streamlined Coming Soon Card**: Implemented a minimalist `ComingSoonPage` for upcoming routes (*News, Academics, Admissions, Student Life, Facilities, Leadership, Careers, FAQ, Contact*) featuring a text-only "Coming Soon" badge, section header, descriptive text, and two direct action buttons: "Back to Home" and "Apply for Admission".
- **Gallery Hero Exact Asset**: Integrated the exact transparent peeping student photo (`peeping-student.png`) positioned along the bottom-left edge as a natural foreground element with proper responsive layout and non-overlapping typography.
- **Direct School Inquiries ("Ask" Feature)**: Clarified and refactored the "Ask" button into `ContactModal` — a direct administrative & admissions communication modal for parents and students to submit inquiries to GS Gacuba II A administration and academic departments.
- **HTML Meta & Title Synchronization**: Aligned `index.html` `<title>`, `<meta name="description">`, and OpenGraph tags with `metadata.json`.

## [2.2.0] - 2026-08-28
### Added & Updated (Design Parity & Architectural Synchronization)
- **Visual Design Parity**: 100% matched design layouts, typography, and graphic assets against the official GS Gacuba / Sybella Systems mockups.
- **Top Header**: Implemented brand logo, live search bar with instant AI search query dispatch, navigation links (Home, About, Gallery, News, More dropdown with 8 sub-pages), Student/Parent Portal launcher, and "Ask" AI assistant button.
- **Landing Page (Home)**:
  - Hero with orange gradient, architectural motif, bold typography ("Shaping the leaders and thinkers of tomorrow"), "Call us anytime" pill badge, action CTAs, and framed student cutout photo.
  - Dark navy stats counter (800+ Students, NESA Accreditation, 23 Staff Members).
  - Stream cards with color-coded icons for MS2, Arts and Humanities, and Ordinary Level.
  - "Why Choose Us" section with students laptop photo, 4 verified checklist items, and "Know More About Us" CTA.
  - CTA Banner ("You were never late, you just hesitated!") with classroom study photo.
  - "Best performing students" showcase featuring Amina Uwase, Grace Mukamana, and featured quote card by Jean Paul Habimana.
  - "Ready to join us?" callout with "Register Today" registration trigger.
- **About Page**:
  - Hero with deep navy background, orange curved ribbon motif, and classroom photo with overlaid orange Headmaster (HABUMUGISHA Ernest) card.
  - "A foundation built for the future" section with campus aerial photo and 4 school highlights.
  - "The school leadership" section with halftone dot background, 4 arched leadership cards, and quick admission triggers.
- **Gallery Page**:
  - Hero with asymmetric orange curve, students peeking illustration, bold typography ("See it. Feel it. Live it."), floating quote, and "Get what you used to miss" subtitle.
  - Category filters: All, School life, Events, Academics, Sports.
  - Interactive gallery cards with like/dislike counters, responsive visual feedback, and pagination controls.
- **Academics, Admissions, News, Contact, Student Life, Facilities, Leadership, Careers & FAQ Pages**:
  - Complete, rich interactive implementations across all sub-pages with detailed curriculum breakdowns, required documentation, news archive, campus coordinates, club catalogs, and interactive accordions.
- **Interactive Modals**:
  - `AskModal`: Full AI Assistant for GS Gacuba II A answering questions about streams, admissions, fees, teachers, and campus life with pre-filled search support.
  - `AdmissionModal`: Multi-step online registration flow generating official application reference numbers.
  - `UserProfileModal`: Student, parent, and applicant portal with login, SMIS application status verification, and downloadable curriculum guides.
- **Source Synchronization**: Fully synchronized root `/src` and `/apps/web/src` directories and public asset trees.

## [2.1.0] - 2026-08-27
### Added
- Enterprise monorepo client project structure (`apps/web`, `apps/api`, `design/`, `doc/`, `infrastructure/`, `.github/`).
- Full UI component library: Button, Card, Badge, Modal, Input, Select, Textarea, Breadcrumbs, SectionHeading, Accordion.
- Interactive admissions multi-step application engine with validation and confirmation.
- Interactive contact inquiry system with department routing.
- Media gallery with lightbox preview modal and category filtering.
- RESTful API service with controllers, routes, middleware, validation schemas, and health checks.
- Comprehensive technical documentation across 15 engineering disciplines.
