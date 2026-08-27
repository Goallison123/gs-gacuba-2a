# Search Engine Optimization (SEO) & Metadata

## 1. Technical SEO Configuration
- **Dynamic Meta Tags**: Page titles, canonical URLs, and meta descriptions customized for each school section.
- **Sitemap**: `/sitemap.xml` listing all primary routes with change frequencies and priorities.
- **Robots Policy**: `/robots.txt` allowing indexing of public school content and disallowing private API internal endpoints.

## 2. Schema.org JSON-LD Structured Data

The website embeds `EducationalOrganization` schema:

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Groupe Scolaire Gacuba II A",
  "alternateName": "G.S. Gacuba",
  "url": "https://gsgacuba2a.rw",
  "logo": "https://gsgacuba2a.rw/assets/22de8.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rubavu",
    "addressRegion": "Western Province",
    "addressCountry": "RW"
  },
  "description": "A premier educational institution in Rubavu, Rwanda, dedicated to academic excellence, character development, and holistic student growth."
}
```
