You are updating the PIB proposal site at /Users/melyn/Projects/aza-pid-proposal.

Make ALL of the following changes. Run `npm run build` at the end.

---

## 1. GanttPage.tsx — Convert from 32 weeks to 4 months + Brain 12-month extension

The current Gantt uses 32 weeks. Change it to use months (4 months for Strategy).

Replace the entire rows array and timeline logic with a month-based system:

- Use TOTAL_MONTHS = 4 for Strategy (and 16 when showing Brain)
- X-axis labels: "Month 1", "Month 2", "Month 3", "Month 4" for Strategy
- For Brain view: extend to 16 months, showing months 5-16 as "melyn Brain Implementation"

New month-based schedule (compress the current 32-week schedule into 4 months):
- Phase 1 (Month 1): start=0, end=1
  - 1.1 Kick-Off: M 0-0.25
  - 1.2 Engagement Plan: M 0.25-0.75
  - 1.3 WBS/Schedule: M 0.5-0.75
  - 1.4 BCR Briefing: M 0.75-1
  - Milestone Phase 1 Complete: M 1
- Phase 2 (Months 1-2.5):
  - 2.1 Engagement Design: M 1-1.25
  - 2.2 Community Engagement: M 1.25-2.25
  - 2.3 Stakeholder Interviews: M 1.5-2.25
  - 2.4 Stakeholder Register: M 1.5-2.25
  - 2.5 Socio-Economic Baseline: M 2-2.5
  - 2.6 Economic Opportunity Scan: M 2.25-2.75
  - 2.7 Pre-Planning Report: M 2.5-2.75
  - Milestone Phase 2 Complete: M 2.75
- Phase 3 (Months 2.5-3.75):
  - 3.1 Synthesis: M 2.75-3
  - 3.2 Vision/Principles: M 3-3.25
  - 3.3 Strategic Priorities: M 3-3.5
  - 3.4 Implementation Framework: M 3.25-3.5
  - 3.5 KPIs: M 3.25-3.75
  - 3.6 Draft Plan: M 3.25-3.75
  - 3.7 Live Digital Platform: M 3.5-3.75
  - Milestone Draft Plan: M 3.75
- Phase 4 (Months 3.75-4):
  - 4.1 Finalize Feedback: M 3.75-4
  - 4.2 Final Presentation: M 3.85-4
  - 4.3 Community Communications: M 3.75-4
  - 4.4 Summary Video: M 3.85-4
  - 4.5/4.6 Close-Out: M 3.9-4
  - Milestone Project Complete: M 4

IMPLEMENTATION APPROACH:
Instead of trying to show 0.25-unit bars (which look bad), use a simpler column system.
Use 16 columns where each column = 1 week (4 months × 4 weeks).
Label the columns: "Wk 1" through "Wk 16", with Month markers above ("Month 1" spanning Wk 1-4, "Month 2" spanning Wk 5-8, etc.)

Remap the 32-week schedule to 16 weeks by halving all start/end values:
- Old Week X → New Week ceil(X/2)
So:
- Phase 1: Wk 1-2 → Wk 1-2 (halved from 1-4)
- Phase 2: Wk 3-8 (halved from 5-16)
- Phase 3: Wk 9-13 (halved from 17-26)
- Phase 4: Wk 14-16 (halved from 27-32)

Update TOTAL_WEEKS = 16 and remap all row start/end values by halving and rounding:
- P1 header: 1-2, 1.1: 1-1, 1.2: 1-2, 1.3: 1-2, 1.4: 2-2, 1.5: 2-2, 1.6: 2-2, M1: 2-2
- P2 header: 3-8, 2.1: 3-3, 2.2: 3-7, 2.3: 4-6, 2.4: 4-7, 2.5: 6-7, 2.6: 6-8, 2.7: 7-8, M2: 8-8
- P3 header: 9-13, 3.1: 9-9, 3.2: 9-10, 3.3: 10-11, 3.4: 10-12, 3.5: 11-12, 3.6: 12-13, 3.7: 12-13, M3: 13-13
- P4 header: 14-16, 4.1: 14-14, 4.2: 15-15, 4.3: 14-15, 4.4: 15-16, 4.5: 16-16, 4.6: 16-16, M4: 16-16

Add month header row above the week labels showing:
- Month 1: weeks 1-4
- Month 2: weeks 5-8
- Month 3: weeks 9-12
- Month 4: weeks 13-16

Add a "melyn Brain Implementation" section below the strategy Gantt (always visible, with a subtle "Strategy Plus" badge):
Show a simple 12-month implementation timeline with 5 key phases:
- Month 1-2: Platform Setup & Configuration
- Month 1-3: Data Migration & Integration
- Month 2-4: Training & Onboarding
- Months 1-12: 12-Month Platform License (Active)
- Months 3-12: Dedicated Support

Use a gold/amber color for the Brain section bars.

Also add a header above the Brain section: "melyn Brain Implementation — Months 5-16 (Strategy Plus)"

---

## 2. DigitalPlanPage.tsx — Add live example link with password

Add a new prominent card ABOVE the existing phases array content (at the top of the page, right after the subtitle):

```tsx
// Add this as the first thing after the subtitle in ScopePageLayout, or create a standalone section
```

Since ScopePageLayout renders the phases, add a new section BEFORE the phases by modifying the page.

Actually, the simplest approach: Change DigitalPlanPage.tsx to NOT use ScopePageLayout and instead render custom content.

Create a standalone page with:
1. NavBar at top
2. Back navigation link
3. Header: "Digital Strategy Platform" / subtitle
4. A prominent "Live Example" card at top:
   - Green border/badge
   - Title: "See It Live — Sample Digital Strategy"
   - Text: "View a live example of what your completed Economic Development Strategy looks like on the melyn platform."
   - URL: https://digital-strategy.usemelyn.com (clickable link, opens in new tab)
   - Password field/display: "Access Password: melynStrategy2026!"
   - Style: prominent card with ExternalLink icon, emerald/green accent
5. The 4 content sections below (keep same content as before)

---

## 3. HeroSection.tsx — Update "32 weeks" to "4 months"

Search for any reference to "32" or "32 weeks" or "week" in HeroSection.tsx and update to "4 months".

---

## 4. BudgetSection.tsx — Update payment terms timeline reference

In paymentTerms array, if there's "32 weeks" change to "4 months".
Also update the BudgetTimeline if it exists.

---

## 5. BUILD VERIFICATION

Run: `npm run build`

Fix any TypeScript errors.

When completely finished, run:
openclaw system event --text "Done: PIB Gantt updated to 4-month timeline + 12-month Brain extension, Digital Plan live example link added (digital-strategy.usemelyn.com), build clean." --mode now
