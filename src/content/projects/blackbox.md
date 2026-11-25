---
title: Blackbox
tag: Conversion scanner
description: A free scanner that scores a B2B landing page from 29 fixed checks and ranks the fixes by points gained. No AI in the score.
problem: Teams know a landing page underperforms but not why. Audits are opinions, and AI scorers give a different answer each run, so nobody trusts the number.
built: A Next.js scanner with a fixed rubric of 29 checks in five areas. Every check shows its evidence, every fix shows its points, and the same page always gets the same score. Reports come with a share link, a share card, a badge and a PDF.
result: Live and free to use. I scanned my own site first. It scored 70, I found two bugs in the scanner, fixed them, and it scored 85. Usage numbers will go here once they are real.
stack: Next.js, TypeScript, Tailwind, pdf-lib
url: https://blackboxcheck.vercel.app
hero: /work/blackbox/report-top.webp
heroAlt: Blackbox report for a personal site showing a score of 85 out of 100 and the first fix ranked by points gained
order: 2
---

## Why I built it

I write about landing pages and I audit them, and my audits always ended the same way, as a list of opinions. A founder could not tell which point mattered most, and I could not show that I was not just guessing. The tools that score pages automatically had the opposite problem. Many of them ask an AI to judge the page, so the same page can get a different score each time you run it, and after the second run nobody believes the number.

I wanted a scanner that gives the same answer every time, shows what it found on the page, and ranks the fixes by how much each one is worth. Blackbox is that scanner. You paste an address, say what kind of business it is for, and get a report.

<figure>
  <img src="/work/blackbox/landing.webp" alt="The Blackbox home page with the address field, email field, business type and an animated wireframe of a page being scanned" loading="lazy" />
  <figcaption>The home page. The wireframe on the right is an illustration of a scan, with no real numbers in it.</figcaption>
</figure>

## No AI in the score

The first version leaned on AI analysis, and I took it out of the score. The score now comes from a fixed rubric of 29 checks in five areas: how easy it is to act, how clear the message is, how much proof the page shows, how fast and light it is, and whether the basics are in place. Each check passes, warns or fails, and each carries a weight, so the same page always gets the same number.

Every result also shows the evidence, a plain line saying what the scanner actually found, such as "Main button: Book 20 minutes with me". When the scanner cannot tell, for example because a page is built entirely by scripts and has little in its source, it says "not confirmed" and leaves that check out of the score, with the coverage shown next to it. A tool that fails you for something it could not see is guessing, and I did not want it to guess.

<figure class="scroll">
  <div class="frame"><img src="/work/blackbox/report-full.webp" alt="A full Blackbox report from top to bottom, with the score, ranked fixes, scores by area and every check" loading="lazy" /></div>
  <figcaption>A full report. The fixes come first, then the five areas, then every check with its evidence.</figcaption>
</figure>

## I ran it on my own site, and it was wrong

The first scan of this site scored 70. It told me there was no clear main button near the top and that my headline was one word long. I did not take that on trust, so I opened the page and checked. There was a "Book 20 minutes with me" button on it, and the headline was a full sentence. The scanner was wrong in two ways. My headline puts each word in its own element for the animation, so the scanner read the text without spaces and counted one word. And it did not recognise "Book 20 minutes with me" as an action, because it only knew phrases like "book a call".

I fixed both problems, added tests that fail if either one comes back, and scanned again. The score became 85, which is the report at the top of this page. The four fixes it still lists are real ones: this site shows no numbers from real work, no named customer quotes, only an email address for contact, and it does not say who it is for. A scanner that finds its own author's blind spots is more useful than one that flatters him.

<figure>
  <img src="/work/blackbox/first-scan.webp" alt="The first Blackbox report for this site, scoring 70, with a fix saying no action button was found" loading="lazy" />
  <figcaption>The first scan, which scored 70. Both of its main findings were scanner bugs and not problems with the site.</figcaption>
</figure>

## Built to be safe to point at any address

A scanner that fetches any address a stranger types in is a risk, because someone could point it at an internal address and read what comes back. So Blackbox resolves the address first and refuses private and internal ranges. It then connects to the exact address it checked, so it cannot be redirected after the check, and every redirect is checked again. Pages that are too large or too slow are cut off.

Reports are not stored in a database. Each report lives inside its own link, together with a signature, so the link cannot be edited without breaking. I do not keep anyone's page, which also means there is nothing to leak.

## The sharing system

Blackbox is free, so the product has to bring its own users. The plan rests on a simple idea: a score is something people want to show off when it is good and want to fix when it is not. Either way they pass it on, so everything that comes out of a scan is built to be shared.

Every report has a permanent link that opens the exact report, and nobody needs an account to read it. Each report also generates an image with the score, the five areas and the top fix, which is what appears as the preview when the link is pasted into LinkedIn, X or WhatsApp. A square version exists for Instagram. The card names Blackbox and carries the address, so every post that shows a score also works as an advert.

<figure>
  <img src="/work/blackbox/share-card.webp" alt="The Blackbox share card with the score 85, five area bars and the top fix" loading="lazy" />
  <figcaption>The share card, which also appears as the link preview on LinkedIn, X and WhatsApp.</figcaption>
</figure>

There is also a small badge that people can put in a site footer or a README. It shows the score and links back to the report. The number in it is fixed at the moment it is copied, so it does not update, and the product says so. And the report downloads as a clean PDF, named after the site and the date, for the person who needs to forward it to a team or a client who will never open the web page.

<figure>
  <img src="/work/blackbox/badge.webp" alt="The Blackbox badge reading Blackbox check 85 out of 100" loading="lazy" />
  <figcaption>The badge. My first version let the label collide with the score on some fonts, so I fixed the text widths.</figcaption>
</figure>

I am not assuming that people will find a free tool by themselves, so I have four places to start. People with a good score have a reason to post the card or add the badge. Agencies and freelancers can use the PDF as a first audit and send it to a prospect. I can scan a prospect's page myself and send the real report with one line about the top fix, which is a better opening than a cold pitch because it is about their page. And I can post my own report in public, including the 70 that turned out to be wrong, because showing the method is more convincing than showing only the result.

Before a scan, Blackbox asks for an email address, a business type, and a ticked box agreeing to be contacted. That has a cost, because every field loses some people, so I only ask for what I will use. The business type matters most. It tells me whether someone is the kind of company I can help or just curious, and it turns a pile of emails into a list I can act on.

<figure>
  <img src="/work/blackbox/pdf-report.webp" alt="The first page of the Blackbox PDF report with the score, five area bars and the top three fixes" loading="lazy" />
  <figcaption>The PDF. It has the same score and the same ranked fixes as the web report.</figcaption>
</figure>

## What is not built yet

I do not track which shared links get opened, so I cannot yet say which of the four plays works. The badge links are long because the report lives inside them. A public leaderboard is an idea and not a feature, because it needs a database and I do not want to publish anyone's score unless they choose to. There are also no usage numbers on this page, because there are no real ones yet, and I would rather leave the space empty than fill it with a guess.

## What is next

The next step is to check pages in a real browser, so that content built by scripts becomes visible to the scanner. After that I want to let people rescan a page and see what changed since last time, and to count scans, shares and opened links, so that the sharing plan is tested and not only argued. Once people have used it and agreed to be shown, I will add real reports from real customers to this page.
