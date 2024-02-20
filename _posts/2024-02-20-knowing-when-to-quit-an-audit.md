---
title: Knowing when to quit (an audit)
layout: post
description: Some thoughts on stopping an audit early.
image: /img/2024/02/kwtqaa.png
category: reference
---

I really enjoy doing accessibility audits. There's something about the detail-digging, QA-like-ness, of it that's a good fit for me. But sometimes, I stop before I'm finished.

## Summary

My line of thinking with an accessibility specialist person hat on is as follows.

- We want to make our sites more accessible.
- We do that by supporting the teams making the sites (not by doing the work ourselves).
- We do that by helping them learn about accessibility.
- Accessibility audits, especially ones that find a lot of issues, are not the best way to do that. (Education and training is!)

## Why do audits?

For me, the purpose of an audit is not compliance. It's not about ticking (or tickling, thank you autocorrect) all the WCAG boxes. In an ideal world, **an audit is a way of highlighting areas for improvement.**

**Our broader goal is to make the site more usable for more people.** The most effective way to do this, in the longer term, is to help teams change their behaviour to make more accessible things. A list of bugs to fix is helpful in the short term, but on its own won’t make and keep a site more accessible. This helps them avoid issues in the future, and discover current issues for themselves.

My approach is to prefer upstream to downstream: address root causes rather than symptoms; help teams change their behaviour rather than give them solutions to specific problems.

A spreadsheet or a report of issues is unlikely to be the thing that changes a team’s behaviour. This is especially true for sites with many accessibility issues. It's easy to get disheartened by a 100 (or more!) rows in a spreadsheet, outlining all the things you did wrong.

### Aside: why have accessibility as a specialist role?

To my mind, the role of an accessibility specialist is to (sort of) put ourselves out of a job. 

- train and educate developers, designers, and product people so that they know most of the foundational aspects of accessibility.
- provide expert support for the trickier, more complicated, issues. Things that non-standard UI and fiddlier [ARIA Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) or attributes.

I would love to live in a world where this role isn't necessary. Where everyone makes very accessible things by default. For now, that's not the world we live in.

## Audit orange flags

Like red flags, but not as scary: things that make me stop and check if it's worth continuining an audit.

- Finding many issues on one page.
- Finding very similar issues across several pages.
- Finding many Critical issues.
- The audit taking a long time. (This can be as a result of the previous items!)

**These suggest that the team probably has low experience and/or low interest in accessibility.** If that's the case, then a spreadsheet of issues really won't help the team make the site more usable for more people!

## What to do instead

- When writing code, I like the "early return" pattern. It's a way of making code efficient and readable.
- When doing audits, I like to watch for orange flags. It's a way of making good use of my time and of the product team's time. It’s also a way to meet them where they’re at, and help them there.

Stop the audit and talk to the team.

1. **Explain why we stopped the audit.**
    - Be kind!
    - It seemed like we’d be finding quite a lot of issues, and a big spreadsheet isn’t the most helpful thing.
2. **Give a brief summary of what we found.**
    - Make it clear that there are very likely other issues that we didn't find and log.
3. **Do some research.**
    - Find out what their attitude and approach to accessibility is at the moment.
    - Find out where in their current processes they think about accessibility.
4. **Help them get started.**
    - Help them think more broadly. I like to take the inclusive design angle of “disability is a spectrum, not a binary” or the WAI classic “accessibility is essential for some, useful for all.”
    - Help them see that accessibility is part of the work, not separate or an add-on.
    - Get them started “testing” themselves. I’ve found that the [QAC (Quick Accessibility Checks)](https://naga.co.za/2021/12/13/qac/) (keyboard, headings, axe DevTools) is a good way to get people started. The checks are relatively simple to do and can be quite high impact.

## Aside: a note on binary thinking

Anytime you hear someone say “It’s not accessible,” ask them what they mean. Accessibility is more nuanced than yes or no, 0% or 100%. It’s not really possible or practical to reach “100% accessible”: I’m not even sure what that means! We can keeping making it more accessible: more usable for more people. We can keep removing barriers.

## Potential objections

My answers / retorts tend to come down to: I partially agree, but/and an presenting the team with an audit with many issues is not the most effective way to solve this problem.

- “If we tell them we only found a few issues, they’ll think the site is fine.” I think this is a communication issue from our side. We need to be clear that there are many more issues, but these are just the ones that we found before we stopped.
- “People want to see the how to fix the issues.” Yes! But an audit is not the best method of showing that. It’s giving treatments for symptoms rather than addressing the root cause. Training the team to be able to find most of the issues themselves is an effective long-term strategy.
- “People don’t have time to do the fixes.” Then an audit is not a good use of our time: we’re just making a list that no-one's going to use. A more effective approach would be to find ways to piggyback accessibility fixes onto other bits of work. Or, even better, help them see how accessibility is already part of their work, not something they need to make "extra time" for.