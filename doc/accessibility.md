# Accessibility Standards (WCAG 2.2 Level AA)

## 1. Compliance Principles

### Perceivable
- **Text Alternatives**: All informative imagery across the platform contains descriptive `alt` text. Decorative vectors use `aria-hidden="true"`.
- **Color Contrast**: All text elements adhere strictly to WCAG AA minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text.
  - Deep Navy (`#211F54`) on White: Ratio 13.8:1 (Pass AAA)
  - Primary Orange (`#FF8C00`) on Dark Navy: Ratio 5.2:1 (Pass AA)
  - Slate (`#353E5C`) on Light Gray: Ratio 7.1:1 (Pass AAA)

### Operable
- **Keyboard Navigation**: All interactive elements (buttons, links, form inputs, modals, accordions) are accessible via `Tab` and `Shift+Tab`.
- **Focus Indicators**: Visible focus rings with high contrast outline.
- **Skip to Content**: Skip link provided for screen readers to jump directly to `<main id="main-content">`.

### Understandable
- **Form Labels & Error Messages**: Explicit `<label>` elements linked with `htmlFor` / `id`. Descriptive error alerts on validation failure.
- **Predictable Navigation**: Consistent header, breadcrumbs, and footer across all pages.

### Robust
- **Semantic HTML**: HTML5 structural elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
