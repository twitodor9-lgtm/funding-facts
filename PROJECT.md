# Funding Facts – Project Context & Work Plan

This document is intended for human collaborators and AI agents (including GPT agents) who join the project. It summarizes the background, goals, decisions made so far, and the current work plan.

---

## 1. Project Purpose

**Funding Facts** documents foreign (primarily European, especially German) funding flows into Israeli civil society and politics.

Main focus:
- German political foundations (Stiftungen) affiliated with Bundestag parties
- Related government-funded organizations such as Forum ZFD
- How this funding reaches Israeli NGOs, research centers, and (in alleged cases) political activities

Core narrative we want to make visible:
Critics often accuse Israel of foreign interference in Western politics. In reality, European governments (particularly Germany) and related foundations invest significant public money to influence discourse and activity *inside* Israel. This project aims to expose the double standard through transparent, source-based documentation.

---

## 2. Goals

1. **Transparency** – Collect and present publicly available information, reports, and primary sources in a clear, accessible way.
2. **Reach European audiences** – Especially German, French, Spanish, and other European speakers. Content is therefore prioritized in English + German first, with more languages planned.
3. **Combat antisemitism / double standards online** – By showing documented foreign funding influence directed at the only Jewish state, while accusations against Israel often lack equivalent evidence.
4. **Support social media distribution** – Provide clean, citable material that can be used in threads, posts, and replies on X/Twitter and other platforms.
5. **Long-term modular resource** – Build a site that is easy to maintain and expand with new data, case studies, and languages.

---

## 3. Target Audience

Primary: Europeans (especially Germans and other EU citizens) who are interested in politics, transparency, foreign influence, or the Israeli-Palestinian conflict.

Secondary: Israeli and Jewish audiences who want well-sourced material for hasbara / public diplomacy.

Tone preference: Factual, calm, professional, and source-driven. Avoid overly emotional or propagandistic language. “Dry” and credible is better than “sexy” or conspiratorial.

---

## 4. Key Decisions Made So Far

### Naming
- Main project name: **Funding Facts**
- Alternative / secondary titles that can be used in articles or posts:
  - Following the Funding
  - Funding Transparency
  - The Funding Trail (use carefully – can sound conspiratorial)

### Platform Strategy
- Dedicated project identity preferred over personal accounts for long-term credibility.
- Website first as a permanent, citable hub.
- Social media (especially X/Twitter) as distribution channel.
- Free hosting: GitHub Pages (current) or Wix if needed later.

### Content Principles
- Prefer primary sources, official reports, and documented investigations.
- Always encourage readers to verify claims against original materials.
- Distinguish clearly between documented funding to NGOs and alleged influence on political parties/campaigns.
- Keep the legal gray area (foreign funding of NGOs vs. direct party funding) explicit.

---

## 5. Current Site Structure (as of November 2026)

```
/
├── index.html              → redirects to /en/
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── en/
│   ├── index.html          (Home)
│   └── sources.html
├── de/
│   ├── index.html          (Startseite)
│   └── sources.html
├── README.md
├── SOURCES.md
└── PROJECT.md              (this file)
```

Features already implemented:
- Clean, highly readable, mobile-friendly design
- Floating language switcher (EN / DE)
- Simple client-side search on each page
- Modular folder structure for easy addition of new languages

---

## 6. Key Sources Currently Used

### Research Organizations
- **NGO Monitor** – Germany funding pages and foundation-specific reports
- **Im Tirtzu** – 2022 investigations; book *Country for Sale* (מדינה למכירה)

### Media
- Israel Hayom & JNS (August–September 2022) – major wave of reporting on German foundation funding
- Channel 14 investigation (November 2026) – allegations involving the Willy Brandt Center / Forum ZFD and “The Democrats” party election-related payments

### Mechanisms
German Government → Political Foundations (Heinrich Böll, Rosa Luxemburg, Friedrich Ebert, Konrad Adenauer, etc.) / Forum ZFD → Israeli NGOs and centers

Reported ballpark figures (2012–2022 range): ~NIS 150 million total from German sources, of which ~NIS 30 million via political foundations.

---

## 7. Work Plan & Next Priorities

### Short-term
- [ ] Activate GitHub Pages so the site is publicly live
- [ ] Improve and expand the Sources pages with more direct links and short excerpts
- [ ] Add an “About / Methodology” page
- [ ] Create a simple data table or timeline of major funding cases

### Medium-term
- [ ] Add more languages (priority order suggestion: French → Spanish → Russian → Japanese / Mandarin)
- [ ] Prepare short, shareable summary cards / one-pagers for social media
- [ ] Collect and organize more primary documents (foundation annual reports, Registrar of Associations filings, etc.)
- [ ] Develop clear visual diagrams of the funding flow

### Longer-term
- [ ] Case studies section
- [ ] Comparison with other countries’ funding
- [ ] Possible newsletter or regular update mechanism
- [ ] Coordination with social media distribution strategy (dedicated account recommended)

---

## 8. How AI Agents Should Help

When assisting with this project, agents should:

1. **Stay factual and source-oriented.** Prefer linking to or quoting primary materials over strong claims.
2. **Maintain the calm, professional tone.** Avoid sensationalism.
3. **Respect the modular structure.** When adding content, place it in the appropriate language folder and keep the design system consistent.
4. **Support expandability.** New languages, new cases, and new data tables should be easy to add later.
5. **Update this PROJECT.md** when significant new decisions or major content additions are made.
6. **Prioritize European accessibility** – clear language, good typography, mobile-friendly, and easy language switching.

Useful tasks for agents:
- Drafting or improving page content in English / German (and later other languages)
- Finding and summarizing additional public sources
- Suggesting data visualizations or table structures
- Preparing short social-media-ready summaries based on site content
- Reviewing text for clarity and neutrality

---

## 9. Repository Information

- GitHub: https://github.com/twitodor9-lgtm/funding-facts
- Owner: twitodor9-lgtm
- Visibility: Public
- Intended public site (after enabling Pages): https://twitodor9-lgtm.github.io/funding-facts/

---

*Last updated: November 2026*
*This file should be kept current as the project evolves.*
