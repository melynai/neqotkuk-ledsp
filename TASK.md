# TASK: Rewrite neqotkuk-ledsp for Tobique RFP

## CRITICAL UPDATES

This repo is cloned from the PIB proposal. ALL PIB/Penticton content must be rewritten for Neqotkuk (Tobique) First Nation.

### Pricing (MUST be exact)
- **Strategy: $64,500** (all expenses included, lump-sum fixed fee)
- **Strategy Plus: $144,500** ($64,500 + $80,000 melyn Brain)
- **Brain add-on: $80,000** (Platform Setup $15K, Data Migration $12K, Training $10K, 12-Month License $30K, Dedicated Support $13K)

### Phase Budget Breakdown (must sum to $64,500) - SAME 4-PHASE STRUCTURE AS PIB + DIGITAL PLATFORM
| Phase | Amount |
|---|---|
| Phase 1 - Project Initiation and Alignment | $4,500 |
| Phase 2 - Engagement and Baseline Assessment | $12,000 |
| Phase 3 - Strategic Planning | $19,500 |
| Phase 4 - Finalization and Close-Out | $10,500 |
| Live Digital Strategy Platform | $12,000 |
| PM and Admin | $6,000 |
| **TOTAL** | **$64,500** |

**IMPORTANT: Use the exact same 4-phase structure as PIB plus a separate Digital Strategy Platform line item. Phases 1+2 are lean discovery. Phases 3+4 are the heavy lifting. Digital Platform is a distinct deliverable. Match PIB's OverviewSection phase layout, BudgetSection collapsible tables, and GanttPage format. Rewrite content for Neqotkuk and use these exact dollar amounts.**

### Nation Context
- **Nation:** Neqotkuk (Tobique) First Nation
- **Culture:** Wolastoqey (Maliseet) - NOT Syilx (that was PIB)
- **Location:** Saint John River, northern New Brunswick
- **RFP:** Economic Development 5-Year Sustainability Plan
- **Deadline:** April 24, 2026
- **Key themes:** Capacity training, leadership development, governance training, succession planning, sustainable growth

### Team (NO Tiffany Perley - she is the RFP contact, NOT on our team)
1. TJ Galiardi - CEO, Project Lead ($350/hr)
2. Cherag Kapoor - COO, Strategic Oversight ($350/hr)
3. Mackenzie Kreutzer - Lead Analyst ($200/hr)
4. Ramona Horseman - Indigenous Engagement Advisor ($175/hr)
5. Dr. Stan Chung - Governance Advisor ($175/hr)
6. Deepak Balakrishnan - Market Research ($100/hr)
7. Ezgi Gul - Project Coordinator ($75/hr)

### What to Change in Every File

**HeroSection.tsx:**
- Title: "Economic Development Sustainability Plan"
- Subtitle: Prepared for Neqotkuk (Tobique) First Nation
- Stats: Strategy $64,500 / 4 Months / 6 Phases, Strategy Plus $144,500 / 4+12 Months (melyn Brain), Start: Immediately upon award
- Remove pib-logo import. Use melyn logo only. Footer bar: "melyn - April 2026"
- Badge: "RFP Response - Economic Development Sustainability Plan"

**OverviewSection.tsx:**
- Rewrite for 6 phases (see phase breakdown above)
- All task descriptions written for Neqotkuk/Wolastoqey context
- Replace all Syilx/Okanagan references with Wolastoqey/Saint John River Valley
- Replace PIB-specific sectors (gas station, IR No.2, solar) with Tobique sectors: tourism, forestry, agriculture, cannabis, real estate, renewable energy

**BudgetSection.tsx:**
- Strategy total: $64,500
- Strategy Plus: $144,500
- Phase amounts per table above
- Brain: $80,000 (breakdown: $15K setup, $12K migration, $10K training, $30K license, $13K support)
- Recalculate all percentages
- Update pie chart segments
- Update rate card (same rates, but change "BC Cultural Advisor" to "Governance Advisor")
- Payment terms: Milestone-based, HST applicable, immediately upon award
- Create step-by-step budget breakdowns per phase (roles x hours x rate = phase total)

**ApproachSection.tsx:**
- Rewrite all pillar descriptions for Neqotkuk context
- Replace Syilx references with Wolastoqey

**TimelineSection.tsx:**
- 6 phases + Brain implementation
- Phase 1: Month 1, Phase 2: Months 1-3, Phase 3: Months 2-3, Phase 4: Months 2-4, Phase 5: Months 3-4, Phase 6: Month 4
- Brain: Months 5-16

**FourPillars.tsx:**
- Replace CCP pillars with economic development pillars: Sustainable Growth, Capacity Building, Community Voice, Strategic Partnerships

**Footer.tsx:**
- "melyn - Prepared for Neqotkuk (Tobique) First Nation"
- "Economic Development Sustainability Plan - April 2026 - Confidential"

**NavBar.tsx:**
- Keep same structure

**PasswordGate.tsx:**
- Password: melynTobique2026!

**TeamPage.tsx:**
- Remove Tiffany Perley completely
- Replace "BC Cultural Advisor" with "Governance Advisor" for Dr. Stan Chung
- Replace all PIB project references with Neqotkuk project references
- Keep full melyn team roster in lower section but remove Tiffany from Community Champions

**ReferencePage.tsx:**
- Keep Witchekan Lake and AOPFN LP references
- Add PIB as third reference: "snpink'tn (Penticton) Indian Band - LEDSP Economic Development Strategic Plan, March 2026 - Present, BC, Contact upon request"

**GanttPage.tsx:**
- 6 phases across 16 weeks
- Map all tasks to week ranges

**DigitalPlanPage.tsx:**
- Replace PIB references with Neqotkuk
- Keep live example link

**ResumesPage.tsx:**
- Same resumes but update project references from PIB to Neqotkuk
- Remove any Tiffany Perley resume

**ChecklistPage.tsx:**
- Update for Tobique RFP requirements

**ScopeBrain.tsx, ScopeCCP.tsx, ScopeWebsite.tsx:**
- Update PIB references to Neqotkuk

**index.html:**
- Title: "melyn | Neqotkuk Economic Development Sustainability Plan"
- Remove Lovable meta tags

### HARD RULES
1. No em dashes. Use " - " (space-hyphen-space)
2. Zero PIB/Penticton/Syilx/Okanagan content remaining
3. melyn is a technology company, never consulting/advisory
4. Do NOT include Tiffany Perley anywhere
5. All prices must sum correctly ($64,500 strategy, $144,500 strategy plus)
6. Password: melynTobique2026!
7. Build must be clean (npm run build with zero errors)

### After All Changes
```bash
npm install
npm run build
git add .
git commit -m "Rewrite for Neqotkuk - $64,500 strategy, $144,500 strategy plus"
git push origin main
```
