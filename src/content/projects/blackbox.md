---
title: Blackbox
tag: Conversion scanner
description: A free scanner that scores a B2B landing page from 29 fixed checks and ranks the fixes by points gained. No AI in the score.
problem: Teams know a landing page underperforms but not why. Audits are opinions, and AI scorers give a different answer each run, so nobody trusts the number.
built: A Next.js scanner with a fixed rubric of 29 checks in five areas. Every check shows its evidence, every fix shows its points, and the same page always gets the same score. Reports come with a share link, a share card, a badge and a PDF.
result: Live and free to use. I scanned my own site first: it scored 70, I found two bugs in the scanner, fixed them, and it scored 85. Usage numbers will go here once they are real.
stack: Next.js, TypeScript, Tailwind, pdf-lib
url: https://blackboxcheck.vercel.app
hero: /work/blackbox/report-top.webp
heroAlt: Blackbox report for a personal site showing a score of 85 out of 100 and the first fix ranked by points gained
order: 2
---

## Why I built it

My audits ended as lists of opinions. I wanted a tool that gives the same answer every time, shows what it found, and ranks the fixes.

## No AI in the score

The score comes from a fixed rubric: 29 checks across action, message, proof, speed and basics. Each result shows what the scanner found, such as "Main button: Book 20 minutes with me". When it can't tell, it says "not confirmed" and leaves that check out of the score, with the coverage shown.

## I ran it on my own site

The first scan scored **70**. It said I had no main button and a one-word headline. Both were wrong. My headline puts each word in its own element, so the scanner counted one word. And it did not recognise "Book 20 minutes with me" as an action.

I fixed both, added tests, and scanned again: **85**, the report at the top of this page. The four fixes it still lists are real: no numbers, no named customer quotes, email-only contact, and no named audience.

<figure>
  <img src="/work/blackbox/first-scan.webp" alt="The first Blackbox report for this site, scoring 70, with a fix saying no action button was found" loading="lazy" />
  <figcaption>The first scan, 70. Both findings were scanner bugs, not site problems.</figcaption>
</figure>

## Safe to point at any address

The scanner refuses internal addresses and connects only to the address it checked. Reports live inside signed links, so I don't store anyone's page.

## The sharing system

A score is something people show off when it is good and fix when it is not, so every report is built to be passed on:

- **Link:** a permanent link that opens the exact report, no account needed.
- **Share card:** an image with the score and top fix, used as the preview on LinkedIn, X and WhatsApp.
- **Badge:** an embeddable badge that links back to the report. Its number is fixed when copied.
- **PDF:** the same report for a team or client.

<figure>
  <img src="/work/blackbox/share-card.webp" alt="The Blackbox share card with the score 85, five area bars and the top fix" loading="lazy" />
  <figcaption>The share card, 85.</figcaption>
</figure>

First users come from four places: people with a good score, agencies using the PDF as a first audit, my own outreach (a real report for a prospect), and posting my own results in public. Before a scan I ask for an email and business type, so I can tell who is a fit and keep a list.

Not built yet: tracking of which shared links get opened, a leaderboard, and shorter links. So I can't say yet which of the four plays works.

## Next

- Check pages in a real browser, so script-built content is visible.
- Rescan and show what changed.
- Count scans, shares and opened links.
