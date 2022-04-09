---
title: Delivering the results of an accessibility audit
layout: post
description: 
image: /img/2022/01/audit.png
---

One of the things I do at my current job is accessibility audits. I've been thinking about how to improve them.

I think calling it an audit already makes it a bit scary. "Audit" has a different feeling to "review" or "check" or "test." It can feel formal and dry. It can feel like the goal is to report what a team has done wrong. To some degree that's correct: the goal is to find any accessibility issues. To find any things that create barriers.

I trawled through my notes from various books and I came up with a three-step set of things for me to think about it: use a positive framing; address the short-term; address the long-term.

## Use a positive framing

- Assume best intent: focus on the fixes and their impact, not the issues. Talk to the barriers to access that are removed once the fix is applied.
- Highlight the connections to quality, usability, technical debt, meaningful work, simplicity, robustness, human-centeredness, growth mindset.

## Address the short-term with low effort & high impact fixes

- Start with low estimated complexity & critical severity.
- Pull it together with a narrative. Demonstrate the customer journey and highlight areas for improvement.
- Refer to a bank of good examples. Explain why they’re good. Show before and after to motivate the change.
- Engage tension, but don’t indulge drama. Discuss priorities, referring back to the connections above.
- Suggest one fix to start with.

## Address the longer-term with (positive injunctive) process and system(ic) improvements

- For example: update Definition of Done; add automated unit tests (jest-axe); add automated E2E tests (cypress-axe); add and check the Storybook accessibility add-on; add short manual tests (title, headings, keyboard, axe in the browser); test with a screen reader.
- Understand why the change is difficult and frustrating. It takes time and needs support. Find a starter champion, connect them with an existing champion in another team.
- Suggest one improvement to start with.