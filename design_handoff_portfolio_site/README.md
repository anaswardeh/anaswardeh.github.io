# Handoff: Mohammed Wardeh — Personal Portfolio Site ("Architecture Brief")

## Overview
A single-page personal site for Mohammed Wardeh — senior data architect, engineering leader, and educator. The design concept is an "architecture brief": a drafting-sheet aesthetic (subtle grid on warm ivory, navy structural borders, rust annotations) that presents his career as a set of sanitized technical briefs, an operating model, and operating principles. Tone: calm institutional authority, mission-first, no sales energy.

## About the Design Files
The file in this bundle (`Wardeh - Architecture Brief Site.dc.html`) is a **design reference created in HTML** — a prototype showing intended look, content, and behavior. It is NOT production code to copy directly. The task is to **recreate this design in a production web stack** (e.g. Next.js/Astro/plain HTML+CSS — no framework requirement is implied by the prototype; a static site generator is a good fit). All copy in the prototype is final and approved — do not rewrite it.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final and were audited for WCAG 2.2 contrast. Recreate pixel-faithfully at desktop; responsive/mobile behavior is NOT designed yet and must be implemented (see Interactions & Behavior).

## Page Structure (single page, anchor navigation)
Content column: max-width 1160px, centered, 56px horizontal padding. Page background: ivory `#F3F1EC` with a 32px drafting grid: two `linear-gradient` layers of `rgba(29,51,72,0.05)` 1px lines.

### 1. Header (sticky)
- Sticky top, z-50, background `rgba(243,241,236,0.94)` + `backdrop-filter: blur(6px)`, bottom border 1.5px solid `#1D3348`. Padding 16px 56px, flex space-between.
- Left: wordmark link "WARDEH.M / DATA ARCHITECT" — IBM Plex Mono 13px/600, letter-spacing 0.1em, navy, no underline. Links to `#top`.
- Right nav (flex, gap 26px): IBM Plex Mono 12px, letter-spacing 0.06em, color `#26282A`, hover color = rust accent. Items: `01 WORK → #work`, `02 SYSTEMS → #systems`, `03 LEADERSHIP → #leadership`, `04 TEACHING → #teaching`, `05 PRINCIPLES → #principles`, plus a CONTACT button (navy fill `#1D3348`, ivory text, padding 8px 18px, square corners, → `#contact`).

### 2. Hero (`#top`) — padding 120px 56px 150px
- Eyebrow: "DATA ARCHITECTURE / ENGINEERING LEADERSHIP / PUBLIC SERVICE" — IBM Plex Mono 12px, letter-spacing 0.16em, rust `#A84A29`, margin-bottom 22px.
- H1: "I turn difficult missions into systems people can trust." — IBM Plex Sans 64px/700, line-height 1.08, letter-spacing −0.015em, navy, max-width 880px, `text-wrap: balance`.
- Lede (margin-top 32px): Source Serif 4, 20px, line-height 1.75, `#444A50`, max-width 680px: "Data architect, engineering leader, and educator with more than twenty years of experience. I build governed data platforms, historical warehouses, analytical products — and the teams needed to sustain them."
- Buttons (flex gap 14px, margin-top 40px, IBM Plex Mono 12.5px/500, square corners):
  - Primary: "VIEW SELECTED SYSTEMS →" navy fill, ivory text, padding 14px 26px → `#work`
  - Secondary: "READ MY OPERATING PRINCIPLES" 1.5px navy border, navy text, padding 12.5px 26px → `#principles`
- Proof strip (margin-top 96px): 4-column grid, 1.5px navy border, background `#FBFAF7`, columns divided by 1px `rgba(29,51,72,0.25)`. Each cell padding 20px 24px: value (IBM Plex Mono 20px/600 navy) over label (mono 12px `#5C6670`, letter-spacing 0.04em). Cells: `20+ YEARS / DATA AND SOFTWARE`, `3 CONTINENTS / GLOBAL AND PUBLIC-SECTOR WORK`, `ARCHITECT + BUILDER / STRATEGY THROUGH DELIVERY`, `EDUCATOR / UNIVERSITY AND PROFESSIONAL TEACHING`.

### 3. 01 Work — Selected Systems (`#work`) — background `#FBFAF7`, top border 1.5px navy, padding 120px 56px
- Section heading row (flex baseline, gap 16px, margin-bottom 52px): rust mono "01" (12px/600) + H2 "Selected Systems" (IBM Plex Sans 34px/700 navy, ls −0.01em) + mono caption "SANITIZED TECHNICAL BRIEFS" (12px `#5C6670`).
- Three case-study cards (grid, gap 40px). Card = `<article>`, 1.5px navy border, background `#F3F1EC`:
  - Header bar: flex space-between, padding 14px 28px, bottom border 1.5px navy, IBM Plex Mono 12px ls 0.08em. Left: "SYSTEM 0N" rust/600. Right: classification in `#5C6670`.
  - Body: padding 36px 32px, grid. Title: IBM Plex Sans 30px/700 navy, ls −0.01em, spans all columns. Field blocks: mono label 12px ls 0.1em `#5C6670` (MISSION / ARCHITECTURE DECISION / RESULT) over Source Serif 4 19px, line-height 1.7, `#444A50`.
  - Footer bar: flex space-between, padding 14px 32px, top border 1px `rgba(29,51,72,0.25)`, mono 12px ls 0.06em. Left: "MY ROLE — …" in `#5C6670`. Right: link "READ TECHNICAL BRIEF →" rust/600, no underline. **These links are placeholders — technical-brief pages do not exist yet.**

  **System 01** — "Enterprise Readiness & Accountability Platform" (DEFENSE / 2024→), 3-column fields:
  - Mission: "A trusted operational view — personnel, training, finance — from fragmented systems and spreadsheets."
  - Architecture decision: "Governed metric definitions and semantic models first, built on the platform already owned."
  - Result: "Five production analytics products; hours of manual consolidation replaced by refreshes in minutes."
  - Role: ARCHITECTURE · DATA ENGINEERING · GOVERNANCE · STAKEHOLDER ALIGNMENT

  **System 02** — "Production Analytics Pipeline Platform" (ENTERPRISE CONSULTING / 2021–2024), 2-column: left = title + Mission/Decision/Result stacked; right = dark code panel:
  - Code panel: background `#14171A`, border-radius 6px, padding 24px 26px, IBM Plex Mono 13px, line-height 2. Lines: comment "-- nightly ETL, before and after redesign" `#9AA3AB` 12px; `runtime_before  =  1h 50m` (text `#E8E6DF`, value `#D97757`); `runtime_after   =  8m 30s` (value `#7FB069`); comment "-- 92% reduction, same hardware" `#7D8790`.
  - Mission: "End-to-end pipeline architecture for enterprise analytics, with engineering standards a team could sustain."
  - Decision: "Treat the workflow itself as the product — query tuning, Spark optimization, and orchestration redesign."
  - Result: "A predictable production pipeline the business could schedule around."
  - Role: TECH LEAD · PIPELINE ARCHITECTURE · MENTORING · PRODUCTION OWNERSHIP

  **System 03** — "Global Reporting & Multilingual Publishing Infrastructure" (INTERNATIONAL ORGANIZATION / 2005–2019), 2-column fields:
  - Mission: "Fourteen years at the United Nations — ETL into enterprise reporting warehouses for multilingual stakeholders across New York and Geneva."
  - Result: "Legacy publication processes modernized into accessible, automated workflows serving global public audiences."
  - Role: DATA WAREHOUSING · BI · DIGITAL PUBLISHING · CONTENT OPERATIONS

### 4. 02 Systems — Operating Model (`#systems`) — ivory, top border 1.5px navy, padding 120px 56px
- Heading: rust "02" + "How I structure a platform" (same heading pattern).
- Intro (Source Serif 4 18px, `#444A50`, max-width 640px): "Every engagement starts as L1 — reality — and earns its way up. The platform is the deliverable. The principles are what allow it to endure."
- Layout: grid `1fr 200px`, gap 40px.
  - Left: 5 stacked layer rows connected by 1.5px navy vertical ticks (height 16px, offset 48px from left). Each row: 1.5px navy border, background `#FBFAF7`, padding 18px 24px, grid `110px 220px 1fr`: mono level tag (13px/600 rust) + name (IBM Plex Sans 16px/600 navy) + mono description (12px `#5C6670`). Rows top→bottom: L5 DECISIONS "Executive reporting / operational answers / trusted measures"; L4 MEANING "Semantic models / KPI definitions / business ownership"; L3 HISTORY "Dimensional warehouse / lakehouse / auditability"; L2 ENGINEERING "Pipelines / quality controls / orchestration / observability"; L1 REALITY "Fragmented systems / spreadsheets / documents / changing requirements" — L1 uses a 1.5px **dashed** `#7A8A96` border, no fill, all text `#5C6670`.
  - Right rail: 1.5px navy left border, padding-left 28px, three blocks distributed vertically (space-between): OWNERSHIP "Every measure has a named business owner."; TRACEABILITY "Every number can be walked back to its source."; SUSTAINABILITY "The system outlives its architect." Heads: mono 13px/600 navy ls 0.08em; body: mono 12px `#5C6670` lh 1.6.

### 5. 03 Leadership (`#leadership`) — navy section: background `#1D3348`, text on dark, padding 110px 56px
- Heading: "03" in light rust `#E08A5F` + H2 "Leadership" in `#F5F3EC`.
- Intro (Source Serif 4 19px lh 1.75, `#C4CBD2`, max-width 640px, margin-bottom 56px): "The pipelines matter less than the decisions around them — and how the team executes without the architect becoming the bottleneck."
- Three equal columns (gap 40px), each with 2px top border in light rust `#E08A5F`, padding-top 22px:
  - DIRECTION — "Architecture, strategy, roadmap, priorities — deciding what should be built and in what order."
  - EXECUTION — "Engineering standards, delivery, quality controls, root-cause analysis — routine, not rescue."
  - CAPABILITY — "Mentoring, ownership, operating models — building teams that don't route every decision through one person."
  - Column head: IBM Plex Mono 13px/600 ls 0.12em `#F5F3EC`; body: Source Serif 4 17px lh 1.7 `#C4CBD2`.
- **Rule: dark rust `#A84A29` must never appear on navy (contrast fail 2.27:1). On navy always use `#E08A5F`.**

### 6. 04 Teaching (`#teaching`) — ivory, top border 1.5px navy, padding 100px 56px
- Heading: rust "04" + "Teaching".
- Statement (Source Serif 4 24px lh 1.6 `#444A50`, max-width 680px): "Teaching is how I test whether a system is understandable. If I can't explain it to a graduate class of working professionals, it isn't finished."
- Credentials block (top border 1px `rgba(29,51,72,0.3)`, padding-top 28px, grid gap 14px, IBM Plex Mono):
  - "UMGC · GEORGE WASHINGTON UNIVERSITY · BARUCH COLLEGE (CUNY)" — 13.5px/600 navy ls 0.04em
  - "DATA SCIENCE · DATABASES · SQL · SOFTWARE ENGINEERING · STATISTICAL MODELING" — 12px `#5C6670`
  - "M.S. CANDIDATE, APPLIED & COMPUTATIONAL MATHEMATICS — JOHNS HOPKINS UNIVERSITY · M.S. CIS, BOSTON UNIVERSITY · B.A. ENGLISH LITERATURE" — 12px `#5C6670`, extra 14px top margin

### 7. 05 Principles (`#principles`) — background `#FBFAF7`, top border 1.5px navy, padding 120px 56px
- Heading: rust "05" + "Operating Principles", margin-bottom 52px.
- 2×3 grid with hairline dividers (1px `rgba(29,51,72,0.3)`): top border on the grid; each cell has bottom border; right-column cells have left border. Cell padding 32px (40px toward the divider side).
- Cells P-01…P-05: mono tag (12px rust ls 0.1em) + title (IBM Plex Sans 20px/600 navy) + body (Source Serif 4 18px lh 1.7 `#444A50`):
  - P-01 Architecture before tools — "The problem determines the system. The product catalog does not."
  - P-02 Define the measure before the dashboard — "A visual cannot correct an undefined or unowned metric."
  - P-03 Historical truth must be designed — "Current-state reporting is easy. Reconstructing what changed, when, and why requires architecture."
  - P-04 Build teams that outlive the architect — "A system is not sustainable when every decision flows through one person."
  - P-05 Make complexity understandable — "Good architecture reduces cognitive load — for engineers, leaders, and users."
- Sixth cell (no tag/title): italic Source Serif 4 17px `#5C6670`, vertically centered: "Before I was a data architect I studied English literature. Both disciplines are the same job: find the structure that makes a difficult text legible."

### 8. Contact (`#contact`) — ivory, top border 1.5px navy, padding 88px 56px, centered text
- Eyebrow: "CONTACT" mono 12px ls 0.16em rust.
- H2: "Have a difficult mission?" 40px/700 navy.
- Body (Source Serif 4 19px lh 1.7 `#444A50`, max-width 520px, centered): "Bring me the mission, the constraints, and the systems that are not working together."
- Location line (margin-top 22px): "WASHINGTON, D.C. · DATA ARCHITECTURE AND ENGINEERING LEADERSHIP" — mono 12px ls 0.1em `#5C6670`.
- Buttons (flex center, gap 14px, margin-top 36px, mono 12.5px/500): primary `ANASWARDEH@GMAIL.COM` (navy fill, `mailto:anaswardeh@gmail.com`); secondary `LINKEDIN` and `GITHUB` (1.5px navy border). **LinkedIn/GitHub URLs are placeholders (`#`) — get real URLs from Mohammed before shipping.**

### 9. Footer
- Top border 1.5px navy, flex space-between, padding 20px 56px, mono 12px `#5C6670` ls 0.06em: "© 2026 MOHAMMED WARDEH" / "DRAWN, THEN BUILT."

## Interactions & Behavior
- Anchor navigation with `scroll-behavior: smooth`; sticky translucent-blur header.
- Nav link hover: text color → `#A84A29`. No other hover states are designed; add subtle ones consistent with the system (e.g. button background darken ~8%) if desired, nothing animated/flashy.
- No JS behavior is required beyond what CSS provides. No page-load animations were designed.
- **Responsive: not designed.** Requirements: single-column stacking for case-study grids, proof strip 2×2 then 1×4, layer diagram full-width with rail below, nav collapse (a simple mono menu). Maintain the size floors below at all breakpoints.
- "READ TECHNICAL BRIEF →" links: reserve routes (e.g. `/systems/01`) — pages to be designed later.

## Design Tokens (LOCKED — do not add colors, gradients, pure #FFF/#000 surfaces)
```
--ivory:      #F3F1EC   page ground (with 32px grid of rgba(29,51,72,0.05) 1px lines)
--card:       #FBFAF7   card / raised-panel ground
--navy:       #1D3348   brand: headlines, borders, dark section, buttons
--rust:       #A84A29   accent on LIGHT grounds only (5.06:1 on ivory)
--rust-light: #E08A5F   the ONLY rust permitted on navy (4.92:1)
--charcoal:   #14171A   code-panel ground only — never a page background
--ink:        #26282A   near-black UI text
--body:       #444A50   serif body copy (7.95:1 on ivory)
--muted:      #5C6670   secondary mono labels, light grounds only (5.18:1)
--code-muted: #7D8790   muted/comment text on charcoal (4.92:1)
--rule:       rgba(29,51,72,0.25)  decorative hairlines only
On-navy text: #F5F3EC headings, #E9E6DD / #C4CBD2 body. On-charcoal text: #E8E6DF, #9AA3AB.
Code panel values: #D97757 (before/bad), #7FB069 (after/good).
```
Usage ratio to preserve: ~75% ivory/card, ~18% navy, ~4% charcoal+grays, ~3% rust. Rust is annotation, never large fills or long text.

Contrast rules: any meaningful border (inputs, focus, states) ≥3:1 → use `rgba(29,51,72,0.55)` or darker; `rgba(29,51,72,0.25–0.3)` is decoration only. Add visible focus states (2px navy outline) for keyboard users — not present in the prototype.

## Typography
- **IBM Plex Sans** 400–700 — headlines and UI names. H1 64px/700; H2 34–40px/700; card titles 30px/700; layer names 16px/600; principle titles 20px/600. Letter-spacing −0.01 to −0.015em on large sizes.
- **IBM Plex Mono** 400–600 — labels, nav, buttons, annotations, code. Floor: **12px minimum**, uppercase, tracked (0.04–0.16em). Buttons 12.5px.
- **Source Serif 4** (optical size axis) 400/500 + italic — all prose. Floor: **18px minimum**; hero lede 20px, teaching statement 24px, case fields 19px, line-height 1.6–1.75.
- Load via Google Fonts or self-host; weights 400/500/600/700 (sans+mono), 400/500+italic (serif).

## State Management
None. Static content site — no state, no data fetching, no forms.

## Assets
No images, icons, or logos. Everything is typographic + CSS (grid background, borders). The code panel is styled text, not a screenshot.

## Files
- `Wardeh - Architecture Brief Site.dc.html` — the complete high-fidelity design reference (open in a browser; all markup/styles inline). The `{{ accent }}` template holes resolve to `#A84A29` (`#E08A5F` on navy).
- `screenshots/` — reference captures of each section at ~924px viewport width, in page order: 01 hero, 02–04 the three Selected Systems briefs, 05 operating-model diagram, 06 leadership, 07 teaching, 08 principles, 09 contact. Use them as visual ground truth alongside the HTML.
