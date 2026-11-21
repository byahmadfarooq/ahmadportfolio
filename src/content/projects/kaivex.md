---
title: Kaivex Systems
tag: Website + growth system
description: The Kaivex agency site, rebuilt from one page into a store-first, seven-page site with a profit simulator, a guided flow and one clear action. Built for speed, accessibility and search.
problem: Kaivex helps established Shopify brands turn traffic into profit, but its site was a single long page. It listed services, gave a visitor no reason to stay, and had no way to show how the team thinks.
built: A seven-page Next.js site. E-commerce comes first, local services sit on their own page. It has a profit simulator, a scripted guide, a free store audit as the one main action, a dedicated mobile layer, and structured data for search and AI answers.
result: A site that shows the thinking instead of listing services, with one action all the way through to a booked call. Client results will be added here once there are real ones to show. Nothing on the site is a made-up stat.
stack: Next.js, Tailwind, Framer Motion, Cal.com
url: https://kaivexsystems.vercel.app
hero: /work/kaivex/hero-light.webp
heroAlt: Kaivex Systems homepage, headline reading Turn more of your traffic into profit
order: 4
---

## Where it started

The first Kaivex site was one long page. It had a serif headline, small monospace labels, a pill above the headline, and a row of big numbers with nothing behind them. It said what the agency does, and then it ended. Someone who landed on it had nothing to do except scroll back up and leave. For an agency that sells growth, that is a quiet contradiction: the site itself did not convert anyone.

<figure>
  <img src="/work/kaivex/before-hero.webp" alt="The original Kaivex homepage hero with a serif headline and a Book a 30-minute strategy call button" loading="lazy" />
  <figcaption>Before. A broad promise, a generic button, and decoration where an answer should be.</figcaption>
</figure>

<figure class="scroll">
  <div class="frame"><img src="/work/kaivex/before-full.webp" alt="The original single-page Kaivex site, top to bottom" loading="lazy" /></div>
  <figcaption>Before, top to bottom. One page, one long scroll, and nowhere to go next.</figcaption>
</figure>

## The first decision was who it is for

Kaivex had been describing itself broadly. I narrowed it. The main customer is an established Shopify brand that already has traffic and is not turning enough of it into profit. Local service businesses are a real second offer, so they get their own page instead of diluting the first one. A visitor gets a clear answer in one screen: this is for stores that have traffic and want more of it to pay off.

## One action, all the way through

The hero now has a single button, a free store audit. I had a second "book a call" button next to it at first and cut it. Two equal buttons make the visitor choose before they have a reason to. The audit is the easy yes, and the end of the audit is where the call is offered: after someone sees their own result, booking a call to go through it is a natural next step instead of a cold ask.

<figure>
  <img src="/work/kaivex/hero-light.webp" alt="Kaivex homepage hero with a single primary button" loading="lazy" />
  <figcaption>One headline, one button, and a store mock-up whose numbered hotspots explain what a good product page does. The mock-up is labelled as illustrative.</figcaption>
</figure>

## I replaced the leak calculator with something an owner can use

The first version had a "revenue leak" calculator. It produced a large, alarming number, which is exactly why I did not trust it. It looks like insight and tells the owner nothing they can act on.

The replacement is a profit simulator. You enter ad spend, cost per click, conversion rate, order value and margin. It answers the questions an owner actually has:

- Am I profitable, at break-even, or losing money? Shown in words and an icon, not colour alone.
- What is my return on ad spend, and where is my break-even line?
- Where does each $100 of sales go: product cost, ads, or what I keep?
- Which single fix is worth the most? Conversion rate, order value or cost per click, ranked by profit.

It is plain arithmetic on the numbers you type, and it says so on the page. It does not forecast, and it does not promise a result. That honesty is the point. An owner who sees that raising spend would make things worse will trust the next thing the page says.

<figure>
  <img src="/work/kaivex/simulator.webp" alt="The Kaivex profit simulator showing a store losing money, the break-even gauge and the biggest lever" loading="lazy" />
  <figcaption>Default numbers show a store losing money at its current spend. The "which fix is worth the most" line is the useful part.</figcaption>
</figure>

## A guide that is honest about what it is

The guided conversation asks two short questions and points the visitor to the right page. It is a script, not an AI chat, and it says so in its header: "Scripted, no data stored". People can tell when a bot is pretending, and an agency that sells trust should not open with a small deception. It also waits for the cookie choice before it offers itself, so it never competes with the banner.

<figure>
  <img src="/work/kaivex/guide-desktop.webp" alt="The Kaivex guide open on desktop" loading="lazy" />
  <figcaption>Two questions, then a specific next step.</figcaption>
</figure>

## Proof without inventing any

There are no client logos or results on the site yet, so I did not fake them. The Work page shows a labelled concept teardown, a before-and-after of an example product page, and says plainly that client case studies are coming. The old page carried headline numbers I could not source, so they are gone. When real results exist they go in, and until then the site is trustworthy because it is not pretending.

<figure class="scroll">
  <div class="frame"><img src="/work/kaivex/home-full.webp" alt="The full Kaivex homepage, top to bottom" loading="lazy" /></div>
  <figcaption>After. The homepage argues the case in order: the bottleneck, the simulator, the system, the process, the principles, the questions, the action.</figcaption>
</figure>

## Type, buttons and a header that feel finished

I moved the headings to Familjen Grotesk and the body to Manrope, and removed monospace type entirely. The buttons borrow a pattern from the Zotir Labs site: a dark slab with an arrow chip that turns on hover. The header is transparent at the top and blurs as you scroll, so the page leads and the navigation supports it. I also dropped the small pill that used to sit above the headline. It added nothing a visitor needed.

## Built for a real phone, not a squeezed desktop

Mobile is where most store traffic arrives, so it is its own layer rather than the desktop page shrunk down. There is a fixed bottom bar with the audit button and the guide. The guide opens as a bottom sheet. The problem cards swipe sideways, and every tap target is at least 44 pixels. I kept it one responsive site on purpose. A separate mobile site splits search ranking and doubles the maintenance.

<figure class="phone">
  <img src="/work/kaivex/m-hero.webp" alt="Kaivex homepage on a phone with the sticky bottom bar" loading="lazy" />
  <figcaption>The sticky bar keeps the one action in reach with a thumb.</figcaption>
</figure>

<figure class="phone">
  <img src="/work/kaivex/m-simulator.webp" alt="The profit simulator on a phone" loading="lazy" />
  <figcaption>The simulator on a phone. The sliders are big enough to use with a thumb.</figcaption>
</figure>

<figure class="phone">
  <img src="/work/kaivex/m-guide.webp" alt="The Kaivex guide as a bottom sheet on a phone" loading="lazy" />
  <figcaption>On a phone the guide opens as a bottom sheet instead of a floating box.</figcaption>
</figure>

<figure class="phone">
  <img src="/work/kaivex/m-menu.webp" alt="The full-screen mobile menu" loading="lazy" />
  <figcaption>A full-screen menu with the action pinned at the bottom.</figcaption>
</figure>

## Fast, accessible and easy for search and AI to read

- **Speed.** The first screen does not wait for JavaScript to appear. Sections below the fold load lazily, the guide loads only when asked for, and the fonts are self-hosted. The homepage's first load is 159 kB of JavaScript.
- **Accessibility.** Text colours were tuned to pass WCAG AA contrast (around 5:1 or better). There is a skip link, visible focus, labelled controls, state that is never colour only, and respect for reduced-motion settings.
- **Search and AI answers.** Each page has its own title, description and canonical link, with structured data for the organisation, services, FAQs and breadcrumbs. There is an `llms.txt`, a plain "Kaivex in brief" fact list on the About page, and a local-services FAQ written the way people ask the question.

<figure>
  <img src="/work/kaivex/hero-dark.webp" alt="Kaivex homepage in dark mode" loading="lazy" />
  <figcaption>A full dark mode, the visitor's choice, with contrast checked in both themes.</figcaption>
</figure>

## What I would do next

Add real client results as soon as there are some, run the audit flow on live traffic to see where people drop, and test the hero line. Those are the three things that move the numbers, and they need real visitors to answer.
