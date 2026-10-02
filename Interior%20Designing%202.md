# Interior Designing 2 — Reference-Informed Interior Design Website Specification

**Reference Website:** https://hashtagdesignstudio.in/

## 1. Purpose

This document converts the publicly observable structure of the reference website into a **company-neutral, production-ready interior-design website specification**. Reuse experience architecture, not company identity.

Do **not** copy the reference company name, logo, founder, contact information, project names, locations, testimonials, exact copy, social handles, proprietary imagery, reviews, metrics, or brand assets. Replace them with placeholders and original client-approved content.

Primary experience goal:

`SEE → UNDERSTAND → EXPLORE → TRUST → CONNECT`

---

# 2. Reference Architecture Observed

The reference website exposes these major content areas:

- Home
- About
- Projects
- Individual project case studies
- Blog
- Contact

The homepage combines portfolio discovery, a studio/founder introduction, measurable trust information, a before/after transformation component, process stages, testimonials, blog content, and a consultation CTA. citeturn0search2

The Projects area is a portfolio index with project cards and individual project routes. The indexed portfolio contains residential, hospitality, workplace/office, education/training, healthcare and display/retail-type work. citeturn0search1

The About page contains studio/founder storytelling, credentials, establishment information, team positioning, work-area/project metrics and studio philosophy. Those values belong only to the reference company and must not be copied. citeturn0search3

The project-detail architecture includes project category, year, location, project work, requirements/challenge, outcome, images and client feedback. citeturn1search0turn0search7

The reference also maintains an editorial Blog section with interior-design education/inspiration articles. citeturn0search4

---

# 3. Company-Neutral Content Rules

Use these placeholders:

- `[COMPANY NAME]`
- `[COMPANY LOGO]`
- `[FOUNDER NAME]`
- `[FOUNDER ROLE]`
- `[FOUNDER CREDENTIALS]`
- `[TEAM DESCRIPTION]`
- `[OFFICE ADDRESS]`
- `[PHONE NUMBER]`
- `[EMAIL ADDRESS]`
- `[SOCIAL LINKS]`
- `[PROJECT TITLE]`
- `[PROJECT SLUG]`
- `[PROJECT CATEGORY]`
- `[PROJECT LOCATION]`
- `[PROJECT YEAR]`
- `[PROJECT AREA]`
- `[HERO IMAGE]`
- `[GALLERY IMAGE]`
- `[BEFORE IMAGE]`
- `[AFTER IMAGE]`
- `[CLIENT NAME]`
- `[CLIENT ROLE]`
- `[CLIENT QUOTE]`
- `[BLOG TITLE]`
- `[BLOG IMAGE]`

No final imagery is assumed. Build a robust placeholder/asset system first.

---

# 4. Recommended Site Map

```text
/
├── Home
├── About
├── Projects
│   ├── All Projects
│   ├── Residential
│   ├── Commercial
│   ├── Hospitality
│   ├── Workplace
│   ├── Retail
│   ├── Healthcare
│   └── Project Detail
├── Services
├── Process
├── Journal / Blog
│   └── Article Detail
├── Contact
├── Privacy Policy
└── Terms / Legal
```

Optional sections can include Before/After, Testimonials, FAQs and Consultation without requiring separate routes.

---

# 5. Overall Visual Direction

The new site should feel:

- premium
- editorial
- architectural
- contemporary
- image-led
- spacious
- refined
- calm
- professional
- human
- detail-oriented

Avoid:

- generic SaaS styling
- excessive gradients
- excessive glassmorphism
- cartoon-like UI
- excessive rounded cards
- unnecessary shadows
- template-looking layouts
- excessive motion
- fake stock-project presentation

Photography, typography, whitespace and case-study storytelling should carry most of the visual identity.

---

# 6. Global Design System

## Layout

Use:

- large editorial whitespace
- strong alignment
- controlled max-width containers
- asymmetric layouts where useful
- large visual blocks
- modular content sections
- consistent gutters

Suggested desktop container: `1280–1440px`.

Suggested reading width: `680–850px`.

## Typography

Use one editorial/display typeface and one neutral sans-serif.

Possible references:

- Display: Instrument Serif, Cormorant Garamond, DM Serif Display, Playfair Display
- UI/body: Inter, Manrope, DM Sans, Plus Jakarta Sans

Do not treat these as mandatory brand choices.

## Color tokens

```text
--color-background: [BACKGROUND]
--color-surface: [SURFACE]
--color-text: [TEXT]
--color-muted: [MUTED]
--color-accent: [ACCENT]
--color-border: [BORDER]
--color-inverse: [INVERSE]
```

Photography should remain visually dominant.

---

# 7. Header / Navigation

Desktop:

```text
[LOGO]
Home  About  Projects  Services/Process  Journal  Contact
[START A PROJECT]
```

Initial header may be transparent/integrated into the hero. On scroll, transition to a more solid surface with reduced height and optional border/blur.

Do not make the sticky header visually aggressive.

Mobile:

```text
[LOGO]                         [MENU]
```

Menu opens into a full-height or large overlay with staggered navigation.

Opening sequence:

1. menu icon transforms
2. overlay appears
3. navigation items stagger upward
4. CTA appears

Closing reverses the sequence.

---

# 8. Homepage Blueprint

Recommended sequence:

```text
01 Hero
02 Studio Statement
03 Featured Projects
04 Project Categories
05 Before / After
06 Studio Introduction
07 Trust Metrics
08 Process
09 Testimonials
10 Journal
11 Consultation CTA
12 Footer
```

---

# 9. Hero Section

Purpose: communicate design quality and studio positioning immediately.

Structure:

```text
[SMALL EYEBROW]
[PRIMARY HEADLINE]
[SUPPORTING STATEMENT]
[VIEW PROJECTS] [START A PROJECT]
[HERO IMAGE / VIDEO]
```

Do not copy the reference headline. Create original copy.

Hero image can be a full-width interior photograph, architectural video or cinematic project montage.

Recommended entrance:

```text
Image scale: 1.06 → 1.00
Headline: opacity 0 → 1, y 30px → 0
CTA: opacity 0 → 1, y 20px → 0
```

Duration: roughly `0.8–1.4s`, subject to testing.

---

# 10. Studio Statement

Large editorial statement:

```text
[SMALL LABEL]
[LARGE DESIGN PHILOSOPHY]
[SHORT SUPPORTING PARAGRAPH]
```

Use strong typography and generous whitespace rather than decorative UI.

---

# 11. Featured Projects

One of the most important homepage sections.

Each project card:

```text
IMAGE
CATEGORY
PROJECT TITLE
LOCATION
YEAR
VIEW PROJECT
```

Desktop hover:

- subtle image zoom
- subtle overlay
- title movement
- visible interaction cue

Suggested image scale: `1 → 1.035` over `600–900ms`.

Do not use excessive rotation or distortion.

---

# 12. Project Discovery Layouts

Supported patterns:

### Editorial grid

```text
[LARGE] [SMALL]
[SMALL] [LARGE]
```

### Two-column grid

```text
[PROJECT] [PROJECT]
[PROJECT] [PROJECT]
```

### Featured stack

```text
PROJECT 01
──────────
PROJECT 02
──────────
PROJECT 03
──────────
```

Use one coherent visual system across the site.

---

# 13. Projects Page

Header:

```text
PROJECTS
A curated selection of [COMPANY NAME]'s work.
```

Filters:

```text
ALL
RESIDENTIAL
COMMERCIAL
HOSPITALITY
WORKPLACE
RETAIL
HEALTHCARE
```

Only show categories supported by actual business data.

Filter behavior:

1. active filter changes
2. outgoing projects transition away
3. incoming projects stagger into position
4. preserve scroll position appropriately
5. update accessible state

Use semantic buttons, not arbitrary clickable text.

---

# 14. Project Card System

Data-driven card component:

```text
ProjectCard
├── Image
├── Category
├── Title
├── Location
├── Year
└── View indicator
```

States:

- default
- hover
- focus
- active
- loading
- missing image

Every card must remain usable without hover.

---

# 15. Before / After Experience

The reference homepage prominently uses a before/after transformation concept. citeturn0search2

Implement as a reusable component:

```text
BEFORE / AFTER

[BEFORE IMAGE | AFTER IMAGE]

        [DRAG HANDLE]
```

Desktop:

- mouse drag
- optional pointer movement enhancement

Mobile:

- touch drag

Accessibility:

- keyboard support
- accessible labels
- descriptive alt text
- static fallback

Do not auto-move the comparison handle without user input.

---

# 16. Studio Introduction

Structure:

```text
[STUDIO IMAGE]
[SMALL LABEL]
[STUDIO HEADLINE]
[DESCRIPTION]
[ABOUT THE STUDIO]
```

Explain:

- design philosophy
- disciplines
- collaboration
- project approach
- execution capability
- client relationship

---

# 17. Founder / Team

Optional but recommended if real information is available.

```text
[PORTRAIT]
[FOUNDER NAME]
[ROLE]
[SHORT BIO]
[CREDENTIALS]
```

Use only verified client-provided information.

---

# 18. Trust Metrics

The reference uses measurable studio information such as establishment/project/work-area information. citeturn0search3

Neutral structure:

```text
[YEARS / ESTABLISHED]
[PROJECTS COMPLETED]
[AREA DESIGNED]
[TEAM / DISCIPLINES]
```

Never invent metrics.

Use count-up animation only if it improves comprehension.

---

# 19. Process Section

Use a four- or five-stage process.

Recommended four-stage model:

```text
01 DISCOVER
02 PLAN
03 CREATE
04 COMPLETE
```

Alternative:

```text
01 CONSULTATION
02 CONCEPT
03 DESIGN
04 EXECUTION
05 HANDOVER
```

Use the real business process in production.

Desktop can use horizontal/editorial sequencing. Mobile should become a vertical timeline.

---

# 20. Process Motion

On activation:

```text
number → reveal
heading → slide/fade
description → fade
supporting image → clip reveal
```

Avoid excessive simultaneous movement.

---

# 21. Testimonials

Use genuine client feedback only.

Structure:

```text
TESTIMONIALS
“[CLIENT QUOTE]”
[CLIENT NAME]
[PROJECT / ROLE]
```

Carousel controls:

```text
←  01 / 05  →
```

Support swipe and keyboard navigation. Pause autoplay on interaction if autoplay is enabled.

Do not copy reference reviews.

---

# 22. Journal / Blog

The reference includes a dedicated editorial section containing numerous interior-design educational topics. citeturn0search4

Homepage:

```text
JOURNAL
[ARTICLE] [ARTICLE] [ARTICLE]
VIEW ALL
```

Article card:

```text
IMAGE
CATEGORY
DATE
TITLE
READ MORE
```

Purpose:

- SEO
- authority
- education
- inspiration
- long-tail discovery
- internal linking

---

# 23. Article Detail

```text
CATEGORY
TITLE
DATE
HERO IMAGE
INTRODUCTION
CONTENT SECTION
IMAGE
CONTENT SECTION
IMAGE
RELATED ARTICLES
CTA
```

Use semantic article markup and real editorial content.

---

# 24. About Page

Recommended structure:

```text
ABOUT HERO
STUDIO STORY
FOUNDER / TEAM
DESIGN PHILOSOPHY
CAPABILITIES
TRUST METRICS
PROCESS
SELECTED PROJECTS
CTA
```

The reference's exact founder, credential and numerical information must not be reused. citeturn0search3

---

# 25. Services

Possible service categories:

- Residential Interiors
- Commercial Interiors
- Hospitality
- Workplace
- Retail
- Healthcare
- Space Planning
- Architecture, if actually offered
- Turnkey Execution, if actually offered

Service page:

```text
SERVICE HERO
IMAGE
WHAT WE DO
OUR APPROACH
STEP 01
STEP 02
STEP 03
RELATED PROJECTS
FAQ
CTA
```

---

# 26. Project Detail Template

The reference project pages use a case-study pattern around project information, requirements, outcome, images and client feedback. citeturn1search0turn0search7

Use:

```text
PROJECT HERO
PROJECT TITLE
LOCATION
CATEGORY
YEAR
HERO IMAGE

PROJECT OVERVIEW
PROJECT REQUIREMENTS
CHALLENGE / CONSTRAINTS
DESIGN APPROACH
EXECUTION
OUTCOME
GALLERY
BEFORE / AFTER
CLIENT TESTIMONIAL
RELATED PROJECTS
PREVIOUS / NEXT
```

Do not turn project pages into image-only galleries. Tell the project story.

---

# 27. Project Story Model

Every case study should answer:

1. What was the project?
2. What did the client need?
3. What constraints existed?
4. What design direction was chosen?
5. What was executed?
6. What was the outcome?

Recommended narrative:

`Context → Need → Constraint → Design Response → Execution → Outcome → Client Perspective`

---

# 28. Project Metadata Schema

```text
id
slug
title
category
location
year
area
status
services
shortDescription
longDescription
requirements
challenge
approach
execution
outcome
heroImage
gallery[]
beforeImage
afterImage
testimonial
featured
published
sortOrder
seo
```

---

# 29. Gallery

Support:

- full-width images
- two-column images
- portrait images
- landscape images
- detail shots
- before/after
- optional video

Use fixed aspect-ratio containers to prevent layout shift.

Lightbox:

```text
Previous
Next
Close
Counter
```

Optional:

- zoom
- captions
- swipe
- keyboard navigation

Trap focus while modal is open and restore focus when it closes.

---

# 30. Project Navigation

End each project with:

```text
PREVIOUS PROJECT
[NEXT PROJECT]

VIEW ALL PROJECTS
```

Ordering must come from project data, not hard-coded links.

---

# 31. Contact Page

Structure:

```text
CONTACT
[HEADLINE]
[SHORT DESCRIPTION]

[ADDRESS]
[PHONE]
[EMAIL]
[BUSINESS HOURS]

FORM
NAME
EMAIL
PHONE
PROJECT TYPE
LOCATION
AREA
BUDGET RANGE
TIMELINE
MESSAGE
[SUBMIT]
```

Keep the form progressive and avoid unnecessary fields.

Success:

```text
Thank you.
Your enquiry has been received.
```

Error states must identify the problematic field.

---

# 32. Consultation CTA

Use a strong final conversion section:

```text
READY TO SHAPE YOUR SPACE?
Tell us about your project.
[START A PROJECT]
```

Write original copy. Do not reproduce reference wording.

---

# 33. Footer

```text
[LOGO]
[SHORT DESCRIPTION]

NAVIGATION
HOME
ABOUT
PROJECTS
SERVICES
JOURNAL
CONTACT

CONTACT
[EMAIL]
[PHONE]
[ADDRESS]

SOCIAL
[INSTAGRAM]
[LINKEDIN]

LEGAL
PRIVACY
TERMS

© [YEAR] [COMPANY NAME]
```

---

# 34. Scroll Experience

Use controlled motion rather than making the entire website animation-dependent.

Recommended primitives:

```text
Section reveal:
opacity 0 → 1
translateY 24px → 0

Image reveal:
clip-path reveal
scale 1.05 → 1

Project hover:
scale 1 → 1.035

Text reveal:
staggered line/word entrance
```

Trigger near `70–85%` viewport position after testing.

---

# 35. Smooth Scroll

Optional:

- Lenis
- native smooth scrolling
- another lightweight equivalent

If used, verify:

- anchor links
- touch behavior
- reduced motion
- sticky elements
- modal scroll lock
- accessibility

---

# 36. Page Transitions

Suggested:

```text
Current content exits
↓
short transition layer
↓
new content enters
```

Target duration: approximately `400–800ms`.

Do not delay navigation excessively.

---

# 37. Cursor Effects

Desktop-only optional cursor labels:

```text
VIEW
DRAG
OPEN
EXPLORE
```

Disable on touch and in reduced-motion mode.

Never make cursor effects necessary for understanding the interface.

---

# 38. Responsive Behavior

Breakpoints may be adapted to the design system, but test approximately:

```text
< 640px       Mobile
640–1023px    Tablet
1024–1439px   Desktop
1440px+       Large desktop
```

Mobile is not simply a compressed desktop layout.

Mobile project presentation:

- one-column feed
- large image
- metadata below
- touch interactions
- no hover dependency

---

# 39. Image Placeholder System

No final images are available initially.

Use explicit slots:

```text
[HERO IMAGE]
[PROJECT IMAGE 01]
[PROJECT IMAGE 02]
[PROJECT IMAGE 03]
[STUDIO IMAGE]
[TEAM IMAGE]
[BEFORE IMAGE]
[AFTER IMAGE]
[BLOG IMAGE]
```

If an asset is missing, reserve the same aspect-ratio space and show a neutral placeholder.

Do not create fake project photography and present it as real work.

---

# 40. Image Production Requirements

When real assets become available:

- preserve important architectural details
- avoid destructive cropping
- create responsive crops
- generate AVIF/WebP where appropriate
- use `srcset`
- lazy-load below-fold media
- retain original masters
- generate appropriate thumbnails

---

# 41. Accessibility

Required:

- semantic headings
- semantic navigation
- keyboard navigation
- visible focus
- descriptive alt text
- form labels
- clear errors
- sufficient contrast
- accessible dialogs
- no keyboard traps
- no hover-only essential information
- reduced-motion support

Before/after must support keyboard and touch.

---

# 42. Reduced Motion

When `prefers-reduced-motion: reduce` is active:

Disable or simplify:

- parallax
- large transforms
- smooth scrolling
- custom cursor
- complex page transitions
- autoplay animation

Content must remain immediately understandable.

---

# 43. Performance

Interior websites are media-heavy.

Required:

- responsive images
- lazy loading
- modern image formats
- reserved dimensions
- optimized video
- compressed fonts
- code splitting where appropriate
- minimal client JavaScript
- efficient animation

Do not use JavaScript for effects that CSS can perform efficiently.

---

# 44. SEO

Each route requires:

```text
title
description
canonical
Open Graph
social preview
```

Recommended structured data where valid:

- Organization
- LocalBusiness where applicable
- WebSite
- BreadcrumbList
- Article
- CreativeWork/project representation where appropriate

Never fabricate awards, project counts, ratings or other structured-data claims.

---

# 45. Content Architecture

Keep content separate from presentation:

```text
/content
  /projects
  /services
  /journal
  /testimonials
  /site
```

Components consume structured content.

---

# 46. Project Data Example

```js
{
  id: "[PROJECT_ID]",
  title: "[PROJECT TITLE]",
  slug: "[PROJECT SLUG]",
  category: "[PROJECT CATEGORY]",
  location: "[PROJECT LOCATION]",
  year: "[PROJECT YEAR]",
  area: "[PROJECT AREA]",
  heroImage: "[PROJECT HERO IMAGE]",
  description: "[PROJECT DESCRIPTION]",
  requirements: "[PROJECT REQUIREMENTS]",
  challenge: "[PROJECT CHALLENGE]",
  approach: "[DESIGN APPROACH]",
  outcome: "[PROJECT OUTCOME]",
  gallery: [],
  beforeImage: "[BEFORE IMAGE]",
  afterImage: "[AFTER IMAGE]",
  testimonial: {
    quote: "[CLIENT QUOTE]",
    name: "[CLIENT NAME]",
    role: "[CLIENT ROLE]"
  }
}
```

---

# 47. Blog Data Example

```js
{
  title: "[BLOG TITLE]",
  slug: "[BLOG SLUG]",
  category: "[BLOG CATEGORY]",
  date: "[PUBLISHED DATE]",
  coverImage: "[BLOG IMAGE]",
  excerpt: "[BLOG EXCERPT]",
  content: "[BLOG CONTENT]",
  author: "[AUTHOR NAME]"
}
```

---

# 48. CMS / Admin Requirements

If an admin/CMS is implemented, make these editable:

- logo
- navigation
- hero
- hero media
- headings
- paragraphs
- projects
- project categories
- project images
- testimonials
- metrics
- process steps
- services
- blog posts
- contact details
- social links
- SEO metadata

Never hard-code business data inside presentation components.

---

# 49. Contact Backend

Implement:

1. client-side validation
2. server-side validation
3. sanitization
4. spam prevention
5. rate limiting
6. optional enquiry storage
7. notification delivery
8. clear success/error response

Never expose credentials or private API keys in browser code.

---

# 50. Animation Registry

Centralize motion definitions:

```text
fadeIn
fadeUp
imageReveal
imageZoom
staggerText
projectHover
menuOpen
menuClose
modalOpen
modalClose
pageEnter
pageExit
```

Maintain consistent timing and easing.

Motion tokens:

```text
--duration-fast: 180ms
--duration-normal: 450ms
--duration-slow: 800ms
--duration-cinematic: 1200ms
```

---

# 51. Motion Hierarchy

### Level 1 — Essential

- button feedback
- menu
- modal
- form states

### Level 2 — UX enhancement

- project hover
- section reveal
- image reveal

### Level 3 — Brand expression

- hero motion
- editorial transitions
- sophisticated page transitions

Level 3 must never reduce usability or performance.

---

# 52. Loading Experience

Optional short loader:

```text
[LOGO MARK]
[COMPANY NAME]
```

Then a short fade/clip reveal into the homepage.

Do not create long loading screens just for visual effect.

---

# 53. Error States

Create:

- 404
- 500
- form error
- network error
- missing project
- missing article

404:

```text
PAGE NOT FOUND
[RETURN HOME]
[VIEW PROJECTS]
```

---

# 54. Trust Strategy

Trust should come from:

- real projects
- real photography
- transparent process
- genuine testimonials
- real metrics
- verified credentials
- clear contact details
- detailed case studies

Do not use unsupported labels such as “best”, “number one”, “top” or “award-winning” unless verified and genuinely appropriate.

---

# 55. Interaction Quality Rules

Every interactive element needs:

- clear affordance
- hover state where relevant
- focus state
- active state
- disabled state where relevant
- keyboard operation
- touch operation
- accessible name

---

# 56. Component Architecture

```text
App
├── Header
│   ├── Logo
│   ├── DesktopNavigation
│   ├── MobileMenu
│   └── PrimaryCTA
├── PageTransition
├── Home
│   ├── Hero
│   ├── StudioStatement
│   ├── FeaturedProjects
│   ├── CategoryExplorer
│   ├── BeforeAfter
│   ├── StudioIntro
│   ├── TrustMetrics
│   ├── Process
│   ├── Testimonials
│   ├── JournalPreview
│   └── ConsultationCTA
├── Projects
│   ├── ProjectFilters
│   ├── ProjectGrid
│   └── ProjectCard
├── ProjectDetail
│   ├── ProjectHero
│   ├── ProjectMeta
│   ├── ProjectStory
│   ├── ProjectGallery
│   ├── BeforeAfter
│   ├── Testimonial
│   └── ProjectNavigation
├── About
├── Services
├── Journal
├── ArticleDetail
├── Contact
└── Footer
```

---

# 57. State Model

Global UI state may include:

```text
navigationOpen
currentProjectFilter
currentGalleryIndex
lightboxOpen
beforeAfterPosition
formStatus
pageTransitionState
reducedMotion
```

Avoid duplicating state unnecessarily.

---

# 58. User Journey

Primary:

```text
LAND
↓
UNDERSTAND STYLE
↓
VIEW WORK
↓
EXPLORE CASE STUDY
↓
UNDERSTAND PROCESS
↓
SEE TRUST SIGNALS
↓
READ INSIGHT
↓
CONTACT
```

Search-driven:

```text
SEARCH
↓
BLOG
↓
RELATED PROJECT
↓
ABOUT / PROCESS
↓
CONTACT
```

---

# 59. Conversion Strategy

Primary CTA:

`START A PROJECT`

Secondary CTA:

`VIEW PROJECTS`

Tertiary CTA:

`EXPLORE PROCESS`

Do not put a CTA after every section. Let conversion moments feel intentional.

---

# 60. Reference-Informed Portfolio Categories

The reference portfolio demonstrates a mixed practice rather than a single project type. The neutral system should therefore support multiple categories without forcing them onto every business. citeturn0search1

Possible categories:

```text
Residential
Commercial
Hospitality
Workplace
Retail
Healthcare
Education
Other
```

Only activate relevant categories.

---

# 61. Editorial Topic Architecture

Recommended topic groups:

```text
Interior Design Guides
Material Selection
Lighting
Space Planning
Furniture
Storage
Color
Small Spaces
Commercial Design
Renovation
Project Advice
Design Trends
```

Create original titles. Do not duplicate reference article titles.

---

# 62. Technical Boundaries

Do not claim knowledge of hidden implementation details such as:

- exact framework
- exact animation library
- exact database
- private APIs
- hosting provider
- private CMS
- analytics configuration
- exact source-code structure
- hidden admin functionality
- exact responsive breakpoints

If not observable, label as:

`[IMPLEMENTATION TO VERIFY]`

or

`[RECOMMENDED IMPLEMENTATION]`.

---

# 63. Reference Fact vs Recommendation

## Reference-derived

The public site structure demonstrates:

- Home
- About
- Projects
- project detail pages
- Blog
- Contact
- portfolio cards
- project metadata
- before/after content
- studio/founder introduction
- process section
- trust metrics
- testimonials
- consultation CTA
- editorial content

Supported by the indexed reference pages. citeturn0search2turn0search3turn0search1turn0search4

## New recommendations

This specification additionally recommends:

- dynamic filtering
- structured content models
- accessible lightbox
- robust form states
- reduced-motion support
- responsive image optimization
- semantic SEO
- explicit QA
- stronger case-study storytelling
- centralized animation tokens

These are recommendations, not claims that the reference site uses these exact implementations.

---

# 64. Page-by-Page Matrix

| Page | Primary Goal | Main Content | Key Interaction |
|---|---|---|---|
| Home | Brand + conversion | Hero, projects, trust, process, journal | Scroll/reveal |
| About | Credibility | Studio, team, philosophy, metrics | Editorial reveal |
| Projects | Portfolio discovery | Filters + cards | Filter + hover |
| Project Detail | Case study | Story + gallery | Lightbox + navigation |
| Services | Explain capability | Service details | Reveal/expand |
| Journal | Education + SEO | Article cards | Archive navigation |
| Article | Authority | Long-form content | Reading/navigation |
| Contact | Lead generation | Details + form | Validation |
| 404 | Recovery | Helpful navigation | CTA |

---

# 65. Project Checklist

Every project should ideally include:

```text
[ ] Title
[ ] Category
[ ] Location
[ ] Year
[ ] Area
[ ] Hero image
[ ] Short description
[ ] Client requirement
[ ] Challenge
[ ] Design response
[ ] Execution details
[ ] Outcome
[ ] Gallery
[ ] Before/after when applicable
[ ] Genuine testimonial when available
[ ] Related projects
```

---

# 66. Homepage QA

```text
[ ] Hero communicates positioning
[ ] Hero media loads
[ ] CTAs work
[ ] Projects are dynamic
[ ] Filters work
[ ] Before/after works with mouse
[ ] Before/after works with touch
[ ] Studio content is editable
[ ] Metrics are real
[ ] Process is understandable
[ ] Testimonials are genuine
[ ] Journal links work
[ ] Consultation CTA works
[ ] Footer links work
```

---

# 67. Responsive QA

Test at least:

```text
1440px
1280px
1024px
834px
768px
430px
390px
375px
360px
```

Check:

- overflow
- typography
- image crop
- spacing
- buttons
- menu
- forms
- galleries
- before/after
- sticky header
- page transitions

---

# 68. Browser QA

Test:

- Chrome
- Safari
- Firefox
- Edge
- iOS Safari
- Android Chrome

Verify:

- animations
- forms
- touch interactions
- image loading
- keyboard navigation
- sticky elements
- modal behavior

---

# 69. SEO QA

```text
[ ] Unique page title
[ ] Unique meta description
[ ] Canonical
[ ] Open Graph
[ ] Sitemap
[ ] Robots
[ ] Semantic headings
[ ] Image alt text
[ ] Clean URLs
[ ] Internal links
[ ] Structured data
[ ] Breadcrumbs where useful
```

---

# 70. Performance QA

Measure:

- initial render
- Largest Contentful Paint
- Cumulative Layout Shift
- Interaction responsiveness
- image payload
- JavaScript payload
- font payload

Test on throttled mobile networks and a real mobile device.

---

# 71. Security QA

Verify:

- server-side validation
- XSS protection
- CSRF protection where applicable
- rate limiting
- spam prevention
- secure headers
- safe uploads
- secret management
- no credentials in client bundle

---

# 72. Implementation Stack Recommendation

Suitable options:

```text
Frontend: Astro / React / Next.js
Styling: CSS / Tailwind / CSS Modules
Animation: GSAP + ScrollTrigger or CSS/lightweight equivalents
Smooth scroll: Lenis or native
Forms: server/API endpoint
CMS: headless CMS or database-backed admin
```

Choose technology based on project requirements. Do not add libraries only for visual novelty.

---

# 73. Implementation Roadmap

## Phase 01 — Foundation

- project setup
- typography
- color tokens
- spacing
- responsive system
- global CSS

## Phase 02 — Global Shell

- header
- mobile navigation
- footer
- CTA
- page transitions

## Phase 03 — Homepage

- hero
- statement
- featured projects
- categories
- before/after
- studio
- metrics
- process
- testimonials
- journal
- CTA

## Phase 04 — Portfolio

- listing
- filters
- cards
- detail page
- gallery
- lightbox
- previous/next

## Phase 05 — Content

- About
- Services
- Journal
- Article

## Phase 06 — Contact

- details
- form
- validation
- success/error

## Phase 07 — Motion

- reveals
- image transitions
- hover states
- menu animation
- page transitions

## Phase 08 — SEO + Accessibility

- semantic HTML
- metadata
- schema
- sitemap
- accessibility
- reduced motion

## Phase 09 — Performance

- images
- fonts
- lazy loading
- code splitting
- animation optimization

## Phase 10 — Final QA

- desktop
- tablet
- mobile
- browsers
- accessibility
- performance
- broken links
- forms
- SEO

---

# 74. Design Quality Target

The final website should feel like:

> An editorial architecture portfolio combined with a highly usable interior-design consultation platform.

It should not feel like:

> A copied template or a direct clone of the reference company.

The experience should be driven by:

```text
Photography
+
Typography
+
Whitespace
+
Case Studies
+
Process
+
Trust
+
Subtle Motion
+
Clear Conversion
```

---

# 75. Final Master Requirements

```text
1. Company-neutral
2. No copied identity
3. No copied proprietary content
4. No copied testimonials
5. No fake project data
6. No fake metrics
7. No unsupported claims
8. No mock data presented as real
9. Dynamic project architecture
10. Responsive desktop/tablet/mobile
11. Accessible interactions
12. SEO-ready
13. Performance-conscious
14. Premium visual hierarchy
15. Editorial portfolio presentation
16. Strong case studies
17. Before/after interaction
18. Clear process
19. Genuine trust signals
20. Strong consultation conversion
21. Content separated from UI
22. Centralized animation system
23. Reduced-motion support
24. Mobile interaction fallback
25. Maintainable component architecture
26. Real asset replacement workflow
27. Error and empty states
28. Real contact-form handling
29. Browser QA
30. Production readiness
```

---

# 76. Final Website-Builder Instruction

Treat this document as the **experience architecture and implementation specification**.

Before production:

1. Replace all placeholders with approved client data.
2. Create a distinct brand identity.
3. Do not copy reference wording.
4. Do not copy reference logos.
5. Do not reuse reference project images.
6. Do not reuse reference testimonials.
7. Do not reuse reference contact details.
8. Do not reuse reference metrics.
9. Use original or client-supplied imagery.
10. Build projects from structured data.
11. Make content editable.
12. Test every interaction.
13. Test desktop, tablet and mobile.
14. Test reduced motion.
15. Test accessibility.
16. Test performance with real image payloads.
17. Verify SEO metadata and schema.
18. Verify every CTA and form.
19. Verify every project and article route.
20. Verify 404 and error states.
21. Remove placeholders before launch.
22. Preserve the premium editorial character while creating a clearly distinct brand.

---

# 77. Completion Definition

The experience is complete only when this journey works end-to-end:

```text
HOME
 ↓
PROJECT DISCOVERY
 ↓
PROJECT CASE STUDY
 ↓
PROCESS / TRUST
 ↓
JOURNAL / INSIGHT
 ↓
CONSULTATION
 ↓
CONTACT
```

Every page must work independently while contributing to the same visual language.

The final website should feel **designed, intentional, human and production-ready — not assembled from a template**.
