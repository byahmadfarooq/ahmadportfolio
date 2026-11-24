---
title: Blackbox
tag: Conversion scanner + growth tool
description: A free scanner that reads a B2B landing page, scores it from 29 fixed checks, ranks the fixes by points gained, and gives you a link, a share card, a badge and a PDF. No AI in the score.
problem: Most teams know a landing page underperforms but cannot say why. Generic audits are slow and opinionated, and AI scorers give a different answer every time you run them, so nobody trusts the number.
built: A Next.js scanner with a fixed rubric of 29 checks across five areas. Every check shows what it found on the page, every fix shows how many points it could add, and the same page always gets the same score. Reports live inside signed links, with a share card, an embeddable badge and a downloadable PDF built in.
result: It runs live and is free to use. I tested it on my own site first. It scored 70 and told me my site had no main button and a one-word headline. I checked both against the page, found both were bugs in the scanner, fixed them, and the score became 85. Usage numbers will go here once there are real ones to show.
stack: Next.js, TypeScript, Tailwind, pdf-lib
url: https://blackboxcheck.vercel.app
hero: /work/blackbox/report-top.webp
heroAlt: Blackbox report for a personal site, with an animated score ring showing 85 out of 100 and the first fix ranked by points gained
order: 2
---

## Why I built it

I write about landing pages and I audit them. The audits always ended the same way: a list of opinions. A founder could not tell which one mattered, and I could not show that I was not just guessing.

I wanted something that gives the same answer every time, shows what it found on the page, and ranks the fixes. Blackbox is that. It reads a page, runs 29 fixed checks, and tells you what to change first and how many points each fix is worth.

<figure>
  <img src="/work/blackbox/landing.webp" alt="The Blackbox home page with the address field, email field, business type and an animated wireframe of a page being scanned" loading="lazy" />
  <figcaption>The home page. Paste an address, say what kind of business you run, and get the report. The wireframe on the right is an illustration of the scan, with no real numbers in it.</figcaption>
</figure>

## No AI in the score, on purpose

The first version leaned on AI analysis. I removed it from the score. If you run the same page twice and get two different numbers, you stop believing the tool. A rubric does not drift.

So the score comes from a fixed rubric, version 2.0, in five areas: getting visitors to act, a clear message, proof and trust, speed and weight, and search and basics. Each check passes, warns or fails, and each carries a weight. Every result shows the evidence, a plain line saying what the scanner actually found, such as "Main button: Book 20 minutes with me".

When the scanner cannot tell, it says so. A page built entirely by scripts has little in its source for a scanner to read. Those checks are marked "not confirmed" and left out of the score, with a coverage figure shown next to it. A tool that fails you for something it could not see is guessing.

<figure class="scroll">
  <div class="frame"><img src="/work/blackbox/report-full.webp" alt="A full Blackbox report, top to bottom, with the score, ranked fixes, scores by area and every check" loading="lazy" /></div>
  <figcaption>A full report. Ranked fixes first, then the five areas, then every check with its evidence. Scroll inside the frame.</figcaption>
</figure>

## I ran it on my own site, and it was wrong

The first scan of this site scored 70. It said there was no clear main button near the top and that my headline was one word long.

I did not take that on trust. I opened the page. There was a "Book 20 minutes with me" button on it, and the headline was a full sentence, not one word. The scanner was wrong in two ways:

- My headline puts each word in its own element for the animation. The scanner read the text with no spaces and counted one word.
- It did not recognise "Book 20 minutes with me" as an action. It only knew phrases like "book a call".

I fixed both, added tests that fail if either comes back, and scanned again. The score went from 70 to 85. The four fixes it still lists are real: this site shows no numbers, no named customer quotes, only an email address for contact, and it does not name who it is for.

<figure>
  <img src="/work/blackbox/first-scan.webp" alt="The first Blackbox report for this site, scoring 70, with a fix that says no action button was found" loading="lazy" />
  <figcaption>The first scan. The 70 and the first fix were both caused by the scanner, not the site.</figcaption>
</figure>

## Built to be safe to point at any address

A scanner that fetches any address a stranger types is a risk. Someone could point it at an internal address and read what comes back. So it checks the destination first: it resolves the address, refuses private and internal ranges, and then connects to the exact address it checked, so it cannot be redirected after the check. Every redirect is checked again. Pages that are too large or too slow are cut off.

Reports are stored inside the link rather than in a database. The link carries the report and a signature, so it cannot be edited without breaking. There is nothing to leak because I do not keep your page.

## The sharing system

Blackbox is free, so the product has to bring its own users. The plan rests on one idea: a score is something people want to show off when it is good, and want to fix when it is not. Both ways, the person shares or acts. So everything that comes out of a scan is built to be passed on.

**The link.** Every report has its own permanent link that opens the exact report. Nobody needs an account to read it. Whoever receives it sees the work, then the option to run their own page.

**The share card.** Each report generates an image: the score, the five areas and the top fix. It is made for LinkedIn and X at one size and for Instagram at a square size. The card names Blackbox and carries the address, so it works as an advert when someone posts it.

<figure>
  <img src="/work/blackbox/share-card.webp" alt="The Blackbox share card, with the score 85, five area bars and the top fix" loading="lazy" />
  <figcaption>The share card. It also appears as the preview when the link is pasted into LinkedIn, X or WhatsApp.</figcaption>
</figure>

**The badge.** A small embeddable badge shows the score and links back to the report. It is for the footer of a website or the top of a README. The score in it is fixed at the moment it is copied, so it does not update, and I say so in the product.

<figure>
  <img src="/work/blackbox/badge.webp" alt="The Blackbox badge reading Blackbox check 85 out of 100" loading="lazy" />
  <figcaption>The badge. I first built it with fixed-size text and the label collided with the score on a normal font. I fixed the text widths so they cannot overlap.</figcaption>
</figure>

**The PDF.** The report downloads as a clean PDF named after the site and the date. This one is for a team, a client or a boss, and it is the version people forward to colleagues who will never see the web page.

<figure>
  <img src="/work/blackbox/pdf-report.webp" alt="The first page of the Blackbox PDF report, with the score, five area bars and the top three fixes" loading="lazy" />
  <figcaption>The PDF. Same score, same ranked fixes, built on the server so the file name and contents match the report.</figcaption>
</figure>

**Where the first users come from.** I am not assuming people will find a free tool by themselves. Four plays, in the order I will use them:

1. **People with a good score.** Anyone who scores well has a reason to post the card or add the badge. A strong score is a small piece of proof they can use, and each post carries my name and link.
2. **Agencies and freelancers.** The PDF doubles as a first audit. An agency can scan a prospect's page and send the report. Those reports point back to Blackbox.
3. **My own outreach.** I scan a prospect's page and send the real report with one line about the top fix. It is a better opening than a cold pitch, because it is specific to their page.
4. **Founders in public.** Posting my own report, including the 70 that was wrong, shows the method and not just the result.

**Knowing who uses it.** Before a scan, Blackbox asks for an email, a business type, and a ticked box agreeing to be emailed. That is a real cost, because every field loses some people, so I only ask for what I will use. The business type matters most. It tells me whether a user is the kind of company I can help or just curious, and it is what turns a pile of emails into a list I can act on.

**What I have not built yet.** There is no tracking of which shared links get opened, so I cannot yet say which of the four plays works. Badge links are long because the report lives inside them. A public leaderboard is an idea, not a feature, because it needs a database and I do not want to publish anyone's score without them choosing to. And there are no usage numbers on this page because there are no real ones yet.

## What I would do next

- Check pages in a real browser so scripted headers and content can be seen.
- Rescan a page and show what changed since last time.
- Shorter links, through a small database.
- Count scans, shares and opened links, so the sharing plan is tested and not just argued.

I would also add real customer reports to this page once people have used it and agreed to be shown.
