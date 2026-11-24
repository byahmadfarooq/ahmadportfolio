---
title: Kai
tag: Internal platform
description: A local operations platform where ten agents do the repetitive work of outreach and a human approves everything that leaves the building.
problem: In a small agency one person finds prospects, checks addresses, writes emails, sends them without burning the domain, and reads replies. Each task is small. Together they eat the week.
built: A local platform with one dashboard and one chat box, and ten agents behind it. Version one was built in three days. Seven agents do real work today and three are designed but not built. Nothing is sent until I approve it.
result: Reviewing ten drafts in a row is quick and nothing embarrassing goes out. I have not measured reply rates, and with a few dozen sends I won't claim any. The screenshots here use invented demo data.
stack: Python, SQLite, SMTP and IMAP, Slack
hero: /work/kai/home.webp
heroAlt: The Kai dashboard home screen, shown with invented demo data
order: 1
---

Every screen here runs on **invented demo data**. No real leads, emails or results are shown.

<video controls preload="none" poster="/work/kai/tour-poster.webp" style="width:100%;border-radius:12px;margin:0 0 8px">
  <source src="/work/kai/guided-tour.mp4" type="video/mp4" />
</video>

*A 35-second tour of the dashboard.*

## Built in three days, then improved

Version one took three days and already had almost everything in the dashboard. Since then the changes have been small: better accessibility, a cleaner interface, and improving what the agents do.

## How it works

You tell Kai what you want in plain language, such as "draft 10 emails for the roofers wave, short and casual". Kai sends the work to the right agent. Anything risky waits in an approval queue until a human presses Approve.

<figure>
  <img src="/work/kai/lead-flow.webp" alt="Diagram showing how one lead moves from verification to drafting, approval, sending and review" loading="lazy" />
  <figcaption>How one lead moves through Kai.</figcaption>
</figure>

## The approval queue

The queue is the point of the product. Every email is a draft until I approve it. An approval is tied to the exact text, so an edited email needs a new one. Chat can queue work but can never approve or send.

<figure class="scroll">
  <div class="frame"><img src="/work/kai/approval-queue.webp" alt="The Kai approval queue with draft emails waiting for review, using demo data" loading="lazy" /></div>
  <figcaption>The approval queue, with demo data. Scroll inside the frame.</figcaption>
</figure>

## The ten agents

Each agent has one job and a named hand-off.

- **Live:** Kai (dispatch), Locke (checks addresses), Ember (writes drafts), Relay (sends, reads replies), Prism (drafts content), Bearing (reviews results), Helm (tasks).
- **Planned, not built:** Sonar (prospecting), Lumen (video), Reef (files).

<figure>
  <img src="/work/kai/agents.webp" alt="The Kai agents page listing ten agents, with Sonar, Lumen and Reef marked as planned" loading="lazy" />
  <figcaption>The agents page. Sonar, Lumen and Reef are shown as planned.</figcaption>
</figure>

Prism drafts content for the agency's own posts, using the same brand templates. This carousel was made earlier with that template system.

<figure>
  <img src="/work/kai/carousel-strip.webp" alt="Three slides from a Zotir Labs carousel titled Five things your website says about you" loading="lazy" />
  <figcaption>Slides 1, 3 and 6 of a carousel for Zotir Labs, my agency.</figcaption>
</figure>

## Decisions that mattered

- **Plain Python, no frameworks.** Nothing to break on another machine, and the whole system is readable in an afternoon.
- **Approval for anything that leaves the building.** One bad email costs more than ten slow reviews.
- **Limits that protect the domain.** A daily cap per mailbox, a random 2 to 5 minute gap between sends, and an automatic halt if two of the last 50 emails bounce, or more than 2% once 20 are sent.
- **A tamper-evident log and an encrypted vault.** Every action is logged, and passwords never appear on screen.
- **Cheapest model that can do the job,** cloud or local.

## What went wrong

- Approvals expired while emails waited for the daily limit, so approved emails silently failed. I found it by looking at the data, and fixed it.
- The drafts were too template-like. I now steer the style per batch from chat.
- The follow-up step was missing for a while.
- One automated test still fails.

## Next

Switch on Sonar once there is a lead source worth paying for, build scheduling for Prism, and measure properly with more volume before claiming anything works.
