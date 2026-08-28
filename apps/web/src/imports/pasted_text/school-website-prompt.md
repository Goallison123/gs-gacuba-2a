# Professional School Website Development Prompt

Build a **launch-ready, professional corporate school website** for **G.S. Gacuba** using **React + Tailwind CSS**, based strictly on the shared/reference designs provided.

The final website should look and feel like a **premium $300+ professional school website**: clean, modern, trustworthy, responsive, polished, accessible, fast, and immediately engaging to visitors.

## 1. Core Requirements

* Use **React** for the frontend.
* Use **Tailwind CSS** for styling.
* Follow professional, production-grade coding standards.
* Use a clean, scalable, maintainable architecture.
* Make the website fully responsive across:

  * Mobile
  * Tablet
  * Laptop
  * Desktop
  * Large screens
* Optimize for performance, accessibility, SEO, maintainability, and production deployment.
* Do not create a prototype or unfinished demo.
* The final result must be **launch-ready**.

## 2. Design Requirements

Use the shared designs as the **primary visual source of truth**.

**Do not change the existing designs unnecessarily.**

Preserve:

* Layout structure
* Typography hierarchy
* Color system
* Visual identity
* Spacing
* Component relationships
* Image treatment
* Section structure
* Overall visual direction

You may improve the designs where appropriate by adding:

* Subtle animations
* Micro-interactions
* Hover states
* Smooth transitions
* Scroll animations
* Image reveals
* Button interactions
* Navigation transitions
* Professional loading states

Animations must remain **subtle, fast, purposeful, and corporate**. Do not use excessive animations that make the website feel like a template or distract from the school's content.

Where a design is incomplete or ambiguous, make professional design decisions that remain consistent with the existing visual language.

## 3. Project Structure

Use this project structure as the foundation:

```text
g-s-gacuba-website/
├── apps/
│   ├── web/
│   └── api/
├── doc/
└── design/
```

Organize the application professionally rather than placing everything in a single frontend folder.

The architecture should clearly separate:

### Frontend

`apps/web/`

Responsible for:

* Pages
* Layouts
* Components
* Navigation
* UI
* Animations
* Forms
* Client-side state
* API consumption
* SEO metadata

Use a scalable structure such as:

```text
apps/web/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── sections/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── utils/
│   ├── types/
│   ├── assets/
│   └── styles/
├── public/
└── ...
```

Adapt the exact structure to the framework/tooling while maintaining clean separation of responsibilities.

### Backend

`apps/api/`

Create a properly structured backend layer where backend functionality is required.

Separate:

* Routes
* Controllers
* Services
* Database access
* Validation
* Authentication/authorization if required
* Error handling
* Configuration
* Logging

Do not put backend logic directly inside UI components.

### Documentation

`doc/`

Create professional project documentation including, where applicable:

```text
doc/
├── requirements.md
├── architecture.md
├── frontend.md
├── backend.md
├── api.md
├── database.md
├── design-system.md
├── testing.md
├── deployment.md
├── security.md
├── seo.md
├── accessibility.md
├── maintenance.md
└── changelog.md
```

Documentation should describe the actual implementation rather than generic filler.

### Design

`design/`

Keep the provided/shared design assets and references organized here.

Do not overwrite or destroy the original design references.

## 4. Navigation and Pages

Study the provided designs and identify every page represented in the designs.

Build those pages faithfully.

For navigation items that **do not have a supplied design**, create the missing pages yourself using the same:

* Design language
* Typography
* Colors
* Spacing
* Components
* Header
* Footer
* Cards
* Buttons
* Image treatment
* Visual hierarchy

The new pages must feel as though they were designed as part of the original website.

Do not create random layouts for missing pages.

At minimum, consider appropriate school website pages such as:

* Home
* About
* Academics
* Admissions
* Student Life
* News / Events
* Gallery
* Contact
* Leadership / Staff
* Departments
* Facilities
* Careers
* FAQs

Only include pages that make sense for the school's actual navigation and content structure.

## 5. Homepage

The homepage should immediately communicate:

1. Who the school is
2. What makes the school valuable
3. Why parents/students should trust it
4. What the visitor should do next

The first viewport must have strong visual hierarchy and a clear call-to-action.

Prioritize:

* Strong hero section
* Clear school positioning
* Key statistics/highlights
* Academic offering
* Why choose the school
* Facilities/student experience
* Testimonials where appropriate
* News/events where appropriate
* Strong admission/contact CTA
* Professional footer

The homepage should feel **premium without being unnecessarily complicated**.

## 6. Components

Create reusable components instead of duplicating markup.

Examples:

* Header
* Navigation
* Mobile navigation
* Footer
* Hero
* Section heading
* CTA
* Button
* Card
* Feature card
* Statistics section
* Testimonial
* News card
* Event card
* Gallery
* Contact form
* Breadcrumbs
* Page hero
* Loading states
* Error states

Components should be:

* Reusable
* Accessible
* Typed
* Maintainable
* Responsive
* Consistent

## 7. Content

Do not use meaningless placeholder text such as:

> Lorem ipsum

or generic filler throughout the website.

Where actual school information is unavailable, use **realistic, professional placeholder content clearly structured so it can easily be replaced later**.

Content should sound like a legitimate, established educational institution.

Maintain a professional, trustworthy and parent/student-friendly tone.

## 8. Responsive Design

The website must work properly on all screen sizes.

Do not simply shrink the desktop design.

Design intentionally for:

* 320px+
* 375px+
* 768px+
* 1024px+
* 1280px+
* 1440px+
* Large desktop displays

Pay particular attention to:

* Navigation
* Hero sections
* Typography
* Images
* Cards
* Grids
* Forms
* Tables
* Footer
* Touch targets

## 9. Accessibility

Follow professional accessibility standards.

Implement:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible forms
* Labels
* Alt text
* Appropriate contrast
* ARIA only where necessary
* Accessible navigation
* Reduced-motion consideration

Aim for WCAG 2.2 AA-level quality where practical.

## 10. SEO

Implement production-quality SEO.

Include:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Social sharing metadata
* Semantic HTML
* Proper heading hierarchy
* Image alt text
* Sitemap support
* Robots configuration
* Structured data where appropriate

For a school website, consider relevant schema such as:

* EducationalOrganization
* School
* LocalBusiness where appropriate
* Organization
* Event
* BreadcrumbList

## 11. Performance

Optimize the website for real-world production performance.

Focus on:

* Image optimization
* Lazy loading
* Code splitting
* Minimal JavaScript
* Efficient rendering
* Proper caching
* Optimized fonts
* Avoiding unnecessary dependencies
* Avoiding layout shifts
* Fast mobile loading

Do not sacrifice performance for unnecessary visual effects.

## 12. Security

Follow professional security practices.

Do not:

* Hardcode secrets
* Expose API keys
* Store sensitive credentials in source code
* Trust client-side validation alone
* Expose unnecessary backend endpoints

Use environment variables appropriately.

Validate and sanitize user input.

## 13. Testing

Create a proper testing strategy covering:

### Unit Testing

Test:

* Utilities
* Hooks
* Business logic
* Reusable components

### Integration Testing

Test:

* Forms
* API communication
* Important user flows

### End-to-End Testing

Test critical journeys such as:

* Visiting homepage
* Navigation
* Admissions flow
* Contact form
* Mobile navigation
* Important CTAs

Also test:

* Responsive layouts
* Accessibility
* Error states
* Loading states

## 14. Production Readiness

Before considering the project complete, verify:

* No broken routes
* No missing images
* No console errors
* No TypeScript errors
* No build errors
* No broken links
* No unfinished sections
* No placeholder lorem ipsum
* Responsive behavior works
* Navigation works
* Forms work
* SEO metadata exists
* Accessibility is acceptable
* Production build succeeds

The website must be capable of being deployed immediately.

## 15. Code Quality

Follow professional engineering standards:

* Strong TypeScript typing
* Clear naming conventions
* Small reusable components
* Separation of concerns
* No unnecessary duplication
* No giant components
* No hardcoded repeated values
* Centralized configuration where appropriate
* Consistent formatting
* Consistent error handling
* Clean imports
* No dead code
* No unused dependencies
* No unnecessary complexity

Do not take shortcuts simply to make the page appear complete.

## 16. Design Improvements

You are allowed to improve the supplied designs **without changing their core identity**.

Improve:

* Visual hierarchy
* Spacing
* Responsiveness
* Accessibility
* Micro-interactions
* Animation
* Content presentation
* Mobile experience
* Component consistency

Do not redesign the website into a completely different visual style.

The result should look like:

**"The original design, professionally finished and production-ready."**

## 17. Final Quality Standard

The final website should feel like a professionally commissioned school website that a real institution could confidently launch.

It should communicate:

**Trustworthy. Academic. Modern. Professional. Established. Welcoming. Premium.**

Avoid:

* Generic AI-looking designs
* Excessive gradients
* Excessive glassmorphism
* Unnecessary animations
* Template-like layouts
* Huge amounts of empty space
* Poor typography
* Inconsistent spacing
* Random colors
* Unprofessional copy
* Over-engineering

The final result should realistically justify a **$300+ professional website project** through its visual quality, functionality, responsiveness, code quality, documentation, and production readiness.

## 18. Development Process

Follow this workflow:

1. Inspect all supplied designs and assets.
2. Understand the visual system before coding.
3. Identify all existing pages.
4. Identify missing navigation pages.
5. Define the information architecture.
6. Define reusable components.
7. Establish the design system.
8. Implement the frontend.
9. Implement required backend/API functionality.
10. Integrate data and forms where necessary.
11. Add subtle animations and interactions.
12. Implement SEO and accessibility.
13. Add tests.
14. Run production builds.
15. Fix all errors and inconsistencies.
16. Review every page on desktop and mobile.
17. Review the website as a real parent, student, teacher, and prospective visitor.
18. Polish every remaining rough edge.
19. Complete technical documentation.
20. Deliver a clean, launch-ready production build.

**Do not stop at creating the homepage. Complete the entire website and all required supporting architecture/documentation.**
