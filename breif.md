# Akshara Realty AI — Landing Page Brief & Copy (FINAL)
For use with Claude Code. All copy lives in a single `content.js` config object so it can be edited later without touching layout code.

---

## DESIGN SYSTEM

**Background**
- A single background image at `assets/images/background.jpg` (glossy black wavy luxury texture, 16:9) is used as a FIXED full-viewport background behind all content. Implement as a `position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1` div with `background-size: cover; background-position: center; background-repeat: no-repeat`. Do NOT generate a CSS gradient background, use this image directly. Do not use `background-attachment: fixed` (inconsistent on mobile) — use the fixed div approach instead.

**Colors**
- Background: black/dark (from background.jpg)
- Accent (CTA, highlights): Gold `#FFC42E`
- Primary text: White `#F5F5F5`
- Secondary/muted text: `#A8A8A8`
- Panel backgrounds (cards, sections needing contrast): `#1A1A1A` with `#2A2A2A` border
- Negative/before-state accent: muted red `#E24B4A` (used sparingly, only for "X" icons in the Gap section)

**Typography**
- Headings: `Poppins` (weight 800/700)
- Body / UI: `Inter`

**General rules**
- No em-dashes anywhere in copy or generated text
- All CTA buttons: solid gold `#FFC42E` background, dark text, bold Poppins, rounded corners (~8px)

---

## PAGE STRUCTURE & COPY

### 1. HERO
Background: the fixed background image (no additional graphic, text-only section)

```
eyebrow: "For real estate developers and brokers"

headline_part1: "Get "
headline_highlight: "50% more site visits"
headline_part2: ", guaranteed on your existing ad spend."

subheadline: "Our AI sales infrastructure calls every lead 
              within one minute, qualifies them, and books 
              the site visit. All day, every day."

cta_1: "Book a call"
```

Layout: centered, eyebrow above headline (small, gold, uppercase, letter-spaced), large bold headline with "50% more site visits" in gold, subheadline below in muted gray, gold CTA button below that.

---

### 2. THE GAP (before / after cards)
Background: fixed background image, content sits in a contained section
Visual: Built entirely in HTML/CSS — two side-by-side cards, NO images needed

```
eyebrow: "The gap"

headline: "Same ad spend. Same leads. 
           One difference: speed."

intro_line: "In India, even with a sales team, leads are 
             typically called back in 2 hours at best, 
             often 2 days. By then, the lead has already 
             moved on."

before_label: "Without AI Sales Infrastructure"
before_icon: "X" (red circle icon at top of card)
before_points:
  - "Leads are called back in 2 hours, often 2 days"
  - "By then, the lead is already cold"
  - "Office staff are busy and can't follow up fast"
  - "Site visit reminders get missed"
  - "After-hours and weekend leads go unanswered"
  - "Same ad spend, fewer visits booked"

after_label: "With AI Sales Infrastructure"
after_icon: "checkmark" (gold circle icon at top of card)
after_points:
  - "Every lead is called within 1 minute"
  - "Qualified and visit booked on the same call"
  - "Works around the clock, including weekends"
  - "Reminders sent automatically before every visit"
  - "Your team only handles leads that are ready"
  - "Same ad spend, 50% more visits booked"
```

Layout: eyebrow + headline + intro_line centered at top. Below, two cards side by side (stack vertically on mobile). Before card: dark panel `#1A1A1A`, red X circle icon at top, before_label as a header, bullet list with small red X icons. After card: dark panel `#1A1A1A` with a subtle gold border/glow, gold checkmark circle icon at top, after_label as header, bullet list with small gold checkmark icons.

---

### 3. THE OFFER (simple math)
Background: fixed background image
Visual: Built entirely in HTML/CSS — two number boxes with arrow, NO images needed

```
eyebrow: "The offer"
subeyebrow: "A simple way to think about the impact"

box_left:
  number: "10"
  label: "leads from your ads"

box_right:
  number: "5"
  label: "site visits booked"

closing_line: "Close just one of those visits, and the 
               system has already paid for itself many 
               times over."
```

Layout: eyebrow + subeyebrow centered. Below, two boxes side by side with an arrow between them. Left box: dark panel `#1A1A1A` with border, large number "10" in white, label below in gray. Arrow: gold, large. Right box: solid gold `#FFC42E` background, large number "5" in dark text, label below in dark muted text. closing_line centered below, max-width ~480px.

---

### 4. PROOF / DEMO
Background: fixed background image
Visual: Grid of 4 audio player cards

```
eyebrow: "Hear it for yourself"
headline: "Real calls. Real conversations."
subheadline: "Listen to how the AI handles real leads, 
              qualifying, answering questions, and 
              booking site visits."

recording_1:
  title: "Qualifying a new lead"
  duration: "1:58"

recording_2:
  title: "Handling a price objection"
  duration: "1:24"

recording_3:
  title: "Booking a site visit"
  duration: "2:10"

recording_4:
  title: "Hindi conversation"
  duration: "1:42"

cta_2: "See live demo"
```

Layout: eyebrow + headline + subheadline centered. Below, 2x2 grid (1 column on mobile) of cards, each: dark panel `#1A1A1A` with border, circular gold play button on the left, title + progress bar placeholder + duration on the right. Each card contains an `<audio>` element with placeholder `src` (e.g. `/assets/audio/recording-1.mp3`), play button toggles play/pause and updates progress bar via simple JS. cta_2 gold button centered below the grid.

---

### 5. HOW IT WORKS (scroll-driven, click-to-choose branch)
Background: fixed background image
Visual: 4 generated images at `assets/images/scene1-form.png`, `scene2-call.png`, `scene3-qualified.png`, `scene4-nurture.png`

```
eyebrow: "How it works"
headline: "Every lead, fully handled"

scene_1:
  image: "assets/images/scene1-form.png"
  caption: "A lead sees your ad and fills in their details"

scene_2:
  image: "assets/images/scene2-call.png"
  caption: "Within one minute, their phone rings"

branch:
  prompt: "How does this lead qualify?"
  button_qualified: "Qualified"
  button_nurture: "Not ready yet"

scene_3_qualified:
  image: "assets/images/scene3-qualified.png"
  caption_1: "The AI books a site visit on the call"
  caption_2: "A WhatsApp confirmation is sent instantly"
  caption_3: "The lead arrives, and so does your team"
  switch_link: "See the other outcome"

scene_3_nurture:
  image: "assets/images/scene4-nurture.png"
  caption_1: "The AI notes their budget and preferences"
  caption_2: "Over the following weeks, they get WhatsApp 
             updates when a matching property comes up"
  caption_3: "When they're ready, they're already warm"
  switch_link: "See the other outcome"
```

**Behavior:**
- As the user scrolls into this section, scene_1 fades/slides into view (use `IntersectionObserver` to trigger a CSS class that animates `opacity: 0 → 1` and `transform: translateY(20px) → translateY(0)`)
- Continued scroll reveals scene_2 the same way (scene_1 can fade out or remain, dimmed)
- After scene_2, the branch prompt and two buttons ("Qualified" / "Not ready yet") fade into view. Scrolling pauses here narratively (content below depends on the choice, so render nothing further until a choice is made)
- User clicks a button → store choice in component state → render the corresponding scene_3 (qualified or nurture) with its image and 3 captions, animating in the same fade/slide way as the user continues scrolling
- At the end of the chosen scene_3, show the switch_link. Clicking it resets the branch choice (clears state) so the branch buttons reappear, allowing the user to pick the other path. Scroll position does not need to change, just the rendered content below the branch point updates

Each image displayed at roughly 320-380px width, centered, with the caption text below in white/gray.

---

### 6. FINAL CTA
Background: fixed background image
Visual: Text-only, centered

```
headline: "See it on your own leads"
subheadline: "Book a 15-minute call and we'll walk through 
              exactly how this works for your projects."

cta_3: "Book a demo call"
```

---

### 7. FAQ
Background: fixed background image
Visual: Accordion list

```
eyebrow: "Questions"

faq_1:
  q: "Do I need any technical setup?"
  a: "No. We handle the entire setup, connecting your 
     existing forms, configuring the AI, and getting it 
     live. You don't need to install or manage anything."

faq_2:
  q: "What languages does it support?"
  a: "Hindi, English, and natural Hinglish. The AI adapts 
     to however your leads prefer to speak."

faq_3:
  q: "How fast can this go live?"
  a: "Most setups are ready within a few business days 
     once we have access to your lead forms."

faq_4:
  q: "What happens to leads who aren't ready to buy?"
  a: "They're not dropped. The AI notes their preferences 
     and follows up over WhatsApp as new properties match 
     their budget and interests."

faq_5:
  q: "Can this work alongside my existing sales team?"
  a: "Yes. The AI handles the first call and qualification. 
     Your team only spends time on leads who are already 
     warm and ready for a site visit."
```

---

## CLAUDE CODE BUILD PROMPT

Copy everything below into Claude Code:

---

Build a single-page landing site for a real estate AI sales offer. Use React with Tailwind CSS (via CDN if not using a build step).

**Critical requirement — editable content:**
Put ALL text content (headlines, captions, button labels, FAQ items, etc.) into a single exported object in `content.js`. Every component should read its text from this object, no hardcoded strings in JSX. This file is the single source of truth for copy and will be edited frequently. No em-dashes anywhere in any copy.

**Background:**
A single image at `assets/images/background.jpg` (16:9 glossy black wavy texture) is used as a FIXED full-viewport background behind all content. Implement as a `position: fixed; top:0; left:0; width:100%; height:100%; z-index:-1` div with `background-size: cover; background-position: center; background-repeat: no-repeat`. All page content scrolls on top of this fixed background. Do not generate any CSS gradient background, use this image file directly.

**Design system:**
- Accent/CTA color: Gold `#FFC42E`
- Primary text: White `#F5F5F5`, muted text: `#A8A8A8`
- Panel/card backgrounds: `#1A1A1A` with `#2A2A2A` border, semi-transparent so the background image is still subtly visible behind panels (e.g. `rgba(26,26,26,0.85)`)
- Fonts: 'Poppins' (weight 700-800) for all headings, 'Inter' for body/UI text (load both from Google Fonts)
- All CTA buttons: solid gold `#FFC42E` background, dark `#0A0A0A` text, bold Poppins, ~8px rounded corners

**Sections (in order), all content from `content.js`:**

1. **Hero** — text-only, centered. Eyebrow (small, gold, uppercase, letter-spaced), large bold headline with the "50% more site visits" phrase highlighted in gold within an otherwise white headline, subheadline in muted gray below, gold "Book a call" CTA button.

2. **The Gap** — eyebrow + headline + intro_line centered at top. Below, two cards side by side (stack vertically on mobile): 
   - Before card: semi-transparent dark panel, red `#E24B4A` circle "X" icon at top, "Without AI Sales Infrastructure" header, bullet list of 6 points each with a small red X icon
   - After card: semi-transparent dark panel with a subtle gold border/glow, gold `#FFC42E` circle checkmark icon at top, "With AI Sales Infrastructure" header, bullet list of 6 points each with a small gold checkmark icon

3. **The Offer** — eyebrow + subeyebrow centered. Below, two boxes side by side with a large gold arrow between them:
   - Left box: dark panel with border, large white "10", gray label "leads from your ads"
   - Right box: solid gold `#FFC42E` background, large dark "5", dark muted label "site visits booked"
   - closing_line centered below, max-width ~480px

4. **Proof/Demo** — eyebrow + headline + subheadline centered. Below, a 2x2 grid (1 column on mobile) of 4 cards. Each card: semi-transparent dark panel with border, circular gold play button on the left, title + thin progress bar + duration on the right. Each card contains an `<audio>` element with a placeholder src (e.g. `/assets/audio/recording-1.mp3` through `recording-4.mp3`). Play button toggles play/pause via simple JS and the progress bar fills based on `currentTime`/`duration`. Gold "See live demo" CTA button centered below the grid.

5. **How It Works** — SCROLL-DRIVEN with a click-to-choose branch. Build as a component using `IntersectionObserver`:
   - eyebrow + headline centered at top
   - scene_1: image `assets/images/scene1-form.png` (centered, ~320-380px wide) + caption below. Fades/slides in (`opacity 0→1`, `translateY(20px)→0`, 400ms ease) when scrolled into view
   - scene_2: image `assets/images/scene2-call.png` + caption, same scroll-triggered animation, appears below scene_1
   - branch: after scene_2, show branch.prompt text and two buttons (branch.button_qualified, branch.button_nurture), gold-outlined buttons, fade in on scroll
   - On button click, store the choice in component state (`'qualified' | 'nurture' | null`)
   - If `qualified`: render scene_3_qualified (image `scene3-qualified.png` + caption_1, caption_2, caption_3 stacked below) with the same fade-in animation as it scrolls into view
   - If `nurture`: render scene_3_nurture (image `scene4-nurture.png` + its 3 captions) the same way
   - Below the rendered branch scene, show the switch_link as a small text link. Clicking it resets the choice to `null`, which removes the branch scene and re-shows the two branch buttons (no scroll position change needed)

6. **Final CTA** — centered headline, subheadline, gold "Book a demo call" button.

7. **FAQ** — eyebrow + centered "Frequently asked" header, then 5 accordion items from content.js. First item open by default, others collapsed. Clicking a question toggles its answer with a smooth height transition, and toggles a +/- indicator.

**Technical notes:**
- Fully responsive, mobile-first
- All CTA buttons are `<a>` tags with placeholder `href="#"`, easy to replace with WhatsApp/Calendly links later
- Keep each section as its own component file for easy editing
- Use vanilla CSS transitions for all animations, no heavy animation libraries

**File structure expected:**
```
assets/
  images/
    background.jpg
    scene1-form.png
    scene2-call.png
    scene3-qualified.png
    scene4-nurture.png
  audio/
    recording-1.mp3 (placeholder, may not exist yet)
    recording-2.mp3
    recording-3.mp3
    recording-4.mp3
content.js
components/
  Hero.jsx
  Gap.jsx
  Offer.jsx
  Proof.jsx
  HowItWorks.jsx
  FinalCTA.jsx
  FAQ.jsx
```

Start by setting up `content.js` with the full content structure from this brief, then build sections in order from Hero through FAQ. Reference `assets/images/background.jpg` and the 4 scene images by these exact filenames, I will place the actual image files in these locations.

---