---
title: Kai
tag: Internal platform
description: A local operations platform where ten agents do the repetitive work of outreach and a human approves everything that leaves the building. First version built in three days.
problem: In a small agency one person finds prospects, checks addresses, writes emails, sends them without burning the domain, and reads replies. Each task is small. Together they eat the week.
built: A local platform with one dashboard and one chat box, and ten agents behind it. Version one was built in three days. Seven agents do real work today and three are designed but not built. Nothing is sent until I approve it.
result: Reviewing a batch of drafts is quick and nothing embarrassing goes out. I have not measured reply rates, and with a few dozen sends I won't claim any. The screens on this page use invented demo data.
stack: Python, SQLite, SMTP and IMAP, Slack
hero: /work/kai/hero.webp
heroAlt: The Kai dashboard home screen with a morning brief and per-client cards, shown with invented demo data
order: 1
---

Every screen on this page runs on invented demo data. The names, the numbers and the email addresses are made up, and a note at the bottom of each screen says so. Nothing here shows a real lead, a real email or a real result.

## Where it started

Running outreach for a small agency is a long list of small jobs that all land on one person. Someone has to find prospects, check that their addresses work, write each email, send them without damaging the sending domain, read the replies, follow up on time, and work out afterwards what actually helped. None of these jobs is hard. Together they take the whole week, and the one that matters most, answering a reply quickly, is usually the first to slip.

The software I could find sat at two extremes. A full CRM stores everything and does none of the thinking. A sequence sender fires off mail and hopes for the best. I wanted something between the two: a system that does the repetitive work, writes the first draft of everything, and stops to ask me before anything leaves the building. Kai is that system.

## What Kai is

Kai is a local operations platform. There is one dashboard and one chat box, and behind them ten agents that each have a single job. I tell Kai what I want in plain language, for example "draft ten emails for the roofers wave, short and casual", and it passes the work to the right agent. The agent does it and puts the result in a queue. Anything risky, which in practice means any email that would be sent, waits there until I press Approve. Chat can queue work, but chat can never approve or send.

The diagram below shows the path one lead takes: found, verified, researched, drafted, approved, sent and reviewed. Each step belongs to one agent, and there is exactly one point where a human decides, which is the one that matters. Sonar, the agent that finds leads, is not switched on yet, so today the leads come from imported lists.

<figure>
  <img src="/work/kai/lead-flow.webp" alt="Diagram showing how one lead moves from found to verified, researched, drafted, approved, sent and reviewed" loading="lazy" />
  <figcaption>How one lead moves through Kai. The only human decision is the approval step.</figcaption>
</figure>

## Built in three days, then improved

Version one took three days, and it already contained almost everything you see in the dashboard: the agents, the outreach flow, the inbox, the leads table and the approval queue. The changes since then have been smaller. I have improved accessibility, made the interface cleaner, and spent most of my time on what the agents actually do, which matters more than how the screens look.

## The dashboard, one module at a time

The side navigation has thirteen places to go. I will take them in roughly the order a working day uses them. The screenshots crop out the navigation rail so that each module is shown on its own.

### Home

Home is the screen I open first. It starts with a morning brief written in plain sentences: how many replies are waiting, how many drafts are ready for me to approve, and how many follow-ups are due, with the most urgent thing first. Below it, each client has a small card showing what was sent today, how much sending room is left under the daily cap, how many replies came in and the reply rate. Under those are the totals across everything, and a strip of the agents showing what each one is doing. The aim is that I can decide what to do in the first thirty seconds without opening anything else.

<figure class="scroll">
  <div class="frame"><img src="/work/kai/m-home.webp" alt="The Kai home screen with the morning brief, client cards and totals, using demo data" loading="lazy" /></div>
  <figcaption>Home, with demo data. Scroll inside the frame to see the whole screen.</figcaption>
</figure>

### Ask Kai

Ask Kai is the chat box. I type what I want and Kai decides who should do it. In the example, I ask Ember to draft ten emails for the roofers wave, and Kai replies that Ember is drafting them, that they will wait in Outreach for my approval, and that nothing is sent until I approve. A second message asks Locke to check the coaches wave and gets a short answer back. Kai can change tasks and settings from here, but it cannot approve or send an email. In this demo the chat is read-only.

<figure>
  <img src="/work/kai/m-ask-kai.webp" alt="The Ask Kai chat screen with a request to Ember and Kai replying that drafts will wait for approval" loading="lazy" />
  <figcaption>Ask Kai. Requests go to an agent, and nothing is sent without approval.</figcaption>
</figure>

### Business tasks

Business tasks is a board with five columns: Queued, Running, Needs you, Done and Parked. Each card is a piece of work together with the agent that owns it, such as verifying addresses, drafting a batch or sending approved emails. The column that matters is Needs you, because it holds everything that is waiting on a human. Parked holds work I have chosen not to do yet, so it stays visible without cluttering the rest of the board.

<figure>
  <img src="/work/kai/m-tasks.webp" alt="The Business tasks board with Queued, Running, Needs you, Done and Parked columns" loading="lazy" />
  <figcaption>Business tasks. Every card shows the agent that owns it.</figcaption>
</figure>

### Outreach

Outreach is where a campaign actually runs, and it is the most important screen in Kai. At the top are the numbers for the selected wave: how many leads were cleared, sent, bounced, replied, booked and won. Below that is the send queue. It shows Locke's address checks, today's cap for each mailbox, the random gap between sends, a box for the instruction that applies to this batch only, the follow-ups that are due, and Ember's drafts waiting for approval. Each draft can be read, edited, approved or rejected here, one at a time. The page is long, so it sits in a scrolling frame.

<figure class="scroll">
  <div class="frame"><img src="/work/kai/m-outreach.webp" alt="The Kai Outreach screen with wave numbers, send queue, daily caps and drafts waiting for approval" loading="lazy" /></div>
  <figcaption>Outreach, with demo data. This is where drafts wait for approval.</figcaption>
</figure>

### Inbox

The inbox shows replies as full conversations. Tabs split the threads into those that need a reply, replies, sent mail and bounces, and each thread shows the lead's company, the stage it is at and the last message. Opening a thread shows the email I sent and the reply, with a box to write back. The Suggest a reply button asks an agent for a draft. A reply I write by hand counts as its own approval, because I wrote and read every word of it.

<figure>
  <img src="/work/kai/m-inbox.webp" alt="The Kai inbox with a list of threads and an open conversation with a reply box" loading="lazy" />
  <figcaption>The inbox. Replies read as conversations, not as rows.</figcaption>
</figure>

### Leads

Leads is the list of everyone in the pipeline. The filters along the top show how many leads sit at each stage: New, Contacted, Replied, Qualified, Booked, Won, Deferred and Rejected. The table shows the company, the contact, the email address, the stage, the wave the lead belongs to, the mailbox it is sent from and where the lead came from. Leads that Locke rejected stay visible with the reason, but they do not count in the pipeline, so the numbers stay honest.

<figure>
  <img src="/work/kai/m-leads.webp" alt="The Kai leads table with stage filters and columns for company, contact, email, stage, wave and mailbox" loading="lazy" />
  <figcaption>Leads, with invented companies and example.com addresses.</figcaption>
</figure>

### Reports

Reports holds the weekly review written by Bearing, the review agent. It is written in plain words instead of charts. It compares the waves on cleared leads, emails sent and replies, and says what to do next. In the demo it points out that the chiropractors wave has the highest reply rate so far, and then warns that every wave has fewer than ten sends, so the difference is a hint and not a result. That warning is deliberate. With a small sample almost any number can look like a pattern, and I want the tool to say when it is too early to trust one.

<figure>
  <img src="/work/kai/m-reports.webp" alt="Bearing's weekly review with a table comparing waves and a note that the samples are too small to trust" loading="lazy" />
  <figcaption>Reports. The review says when a sample is too small to mean anything.</figcaption>
</figure>

### Agents

Agents lists all ten agents as cards. Each card shows the agent's name, its job, whether it is live or planned, and how many tasks it has queued, running, waiting on me and done. Sonar, Lumen and Reef are marked Planned because they are designed but not built, and I did not want the demo to suggest they run. Under the cards is the same lead-flow strip as in the diagram above, so the order of hand-offs is always on screen.

<figure class="scroll">
  <div class="frame"><img src="/work/kai/m-agents.webp" alt="The Kai agents page with ten agent cards and the lead flow strip, with Sonar, Lumen and Reef marked as planned" loading="lazy" /></div>
  <figcaption>Agents. Planned agents are labelled as planned.</figcaption>
</figure>

### Agent tasks

Agent tasks is the history of every task an agent has taken. Each row shows the agent, a state of queued, running, needs you, failed or done, when it happened and how long it took. It is where I look when something seems wrong, because a failed task, such as an email to an address that refused it, shows up here together with the agent that handled it.

<figure>
  <img src="/work/kai/m-agent-tasks.webp" alt="The Kai agent tasks table showing the agent, state, time and duration for each task" loading="lazy" />
  <figcaption>Agent tasks. A failed task is easy to find.</figcaption>
</figure>

### Activity log

The activity log records everything that happened, in order: a lead rejected, drafts written, emails approved, a message sent, a reply found, a safety check passed. It is append-only, and each entry carries a short hash that links it to the one before it, so the history cannot be quietly edited afterwards. It exists to answer what happened and why, which is the first thing I need to know when something goes wrong.

<figure>
  <img src="/work/kai/m-activity.webp" alt="The Kai activity log listing time, agent, what happened and a hash for each entry" loading="lazy" />
  <figcaption>The activity log. Each entry is chained to the one before.</figcaption>
</figure>

### Connections

Connections shows what Kai is plugged into and whether each connection is working: email sending and reading, the chat app that carries the morning brief and reply alerts, a cloud model, a local model on this PC, the scheduler that wakes the agents on a timer, and the encrypted vault. The vault holds passwords and keys and never displays them. In the demo, each connection is marked as demo data.

<figure>
  <img src="/work/kai/m-connections.webp" alt="The Kai connections page listing email, chat app, cloud model, local model, scheduler and encrypted vault" loading="lazy" />
  <figcaption>Connections. Passwords live in the vault and never appear on screen.</figcaption>
</figure>

### Models

Models shows how the work is split between a free cloud model, a smaller cloud model and a model running on this PC, with a bar for how much of each daily limit has been used. Kai sends each job to the cheapest model that can do it, so quick chat can stay on the local model while drafting and review use the cloud tier. When a limit is reached, the system slows down politely instead of failing.

<figure>
  <img src="/work/kai/m-models.webp" alt="The Kai models page with usage bars for cloud and local models" loading="lazy" />
  <figcaption>Models. Each job goes to the cheapest model that can do it.</figcaption>
</figure>

### Settings

Settings holds the rules that protect the sending domain: the daily cap for each mailbox, the gap between sends, which is a random two to five minutes, and the rule that every send needs approval first. It also holds the chat model and whether replies are spoken. In the demo the page is read-only, so nothing on it can be changed.

<figure>
  <img src="/work/kai/m-settings.webp" alt="The Kai settings page with the daily cap, gap between sends and approval before every send" loading="lazy" />
  <figcaption>Settings. The rules that protect the sending domain.</figcaption>
</figure>

## The ten agents

Seven of the ten agents work today. Kai is the dispatcher that turns a sentence into work. Locke checks that an address can receive mail before anyone writes to it, because bounces damage the sending domain. Ember writes the outreach and the follow-ups in my voice. Relay sends only approved emails, spaced out, and reads the replies and bounces. Prism drafts carousels and captions for the agency's own posts. Bearing reads the numbers and writes the weekly review. Helm keeps the business tasks and the weekly plan in order.

The other three are designed but not built. Sonar would find businesses that match a target group, but good lead data usually costs money, so for now leads come from imported lists. Lumen would plan short explainer videos, and Reef would file documents and keep a searchable library. They are shown in the demo as planned, because that is what they are.

Prism is the one that produces something visible, so here is an example. This carousel was made earlier with the same template system that Prism now drafts from, and these are slides 1, 3 and 6 of it, for my agency Zotir Labs.

<figure>
  <img src="/work/kai/carousel-strip.webp" alt="Three slides from a Zotir Labs carousel titled Five things your website says about you" loading="lazy" />
  <figcaption>A carousel for Zotir Labs, made with the same templates Prism uses.</figcaption>
</figure>

## Decisions that mattered

The first decision was to write the backend in plain Python with no frameworks, using only the standard library and SQLite. There is nothing to break on another machine, the desktop app stays small, and the whole system can be read in an afternoon. The cost is more hand-written plumbing, and I accepted it.

The second was to require approval for anything that leaves the building. Every email is a draft until a human approves it, and an approval is tied to the exact text, so an edited email needs a fresh one. One bad email costs more than ten slow reviews, so I chose the slow reviews. For the same reason the sending limits are treated as a safety feature: a daily cap for each mailbox, a random gap between sends, and an automatic halt if two of the last 50 emails bounce, or if more than 2% bounce once at least 20 have been sent. These protect the sending domain, which is the one asset that is slow to rebuild.

Two smaller decisions follow from the same thinking. Every action goes into an append-only log with chained hashes, and passwords sit in an encrypted vault, so history is hard to rewrite and secrets never show up in the dashboard. And each job goes to the cheapest model that can do it, cloud or local, so the system stays free to run and degrades gracefully when a limit is reached.

## What went wrong

An early version let approvals expire while emails waited for the daily limit, so emails I had approved silently failed to send. I only found it by looking at the data. The fix was to restart the approval clock at the moment I approve, and to add a one-click way to bring the stuck emails back. The drafts were also too template-like, with the same openers and the same subject patterns. The agent was doing what it was told, but what it was told was too generic, so I now steer the style for each batch from the chat. For a while the follow-up step was missing: the morning brief told me follow-ups were due but gave me no way to act on them. One automated test still fails, and I have not fixed it yet.

## What is next

The next steps are to switch on Sonar once there is a source of leads worth paying for, to build the scheduling step for Prism, and to rework Ember's strategy and not only its wording. Most of all I want to measure properly. With a few dozen sends in each wave, nothing here proves that any approach works, and I would rather say so than quote a reply rate. The honest next step is more volume and a fair comparison.
