# Design System Specification

## 1. Color Palette Tokens

```css
:root {
  --color-primary: #FF8C00;       /* Warm Institutional Amber/Orange */
  --color-primary-hover: #E07B00;
  --color-navy: #211F54;          /* Deep Regal Navy */
  --color-navy-dark: #19213D;     /* Ultra Dark Navy */
  --color-navy-light: #2A276E;
  --color-slate: #353E5C;         /* Secondary Slate */
  --color-muted: #6D758F;         /* Neutral Body Gray */
  --color-sand: #C3B091;          /* Heritage Warm Sand */
  --color-sand-light: #F7F5F0;    /* Soft Neutral Surface */
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-border: #E5E7EB;
}
```

## 2. Typography
- **Display & Headings**: Inter / Manrope, Bold / Semi-bold (700 / 600)
- **Body & Captions**: Inter, Regular / Medium (400 / 500)
- **Scale**:
  - H1: 36px – 48px (Line-height: 1.15)
  - H2: 28px – 36px (Line-height: 1.2)
  - H3: 20px – 24px (Line-height: 1.3)
  - Body: 16px (Line-height: 1.6)
  - Small / Caption: 13px – 14px (Line-height: 1.5)

## 3. Spacing & Grid System
- Standard container max-width: `1440px` with responsive horizontal padding (`px-4 sm:px-8 lg:px-16 xl:px-24`).
- Section vertical rhythm: `py-16 md:py-24`.
- Component corner radius: `rounded-xl` (12px) to `rounded-2xl` (16px).
