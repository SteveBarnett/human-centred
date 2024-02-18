---
title: The importance of the frame
layout: post
description: In which I talk about a particular angle on the carrot vs the stick.
image: /img/2024/02/tiotf.png
category: reference
---

I'm a fan of [the carrot, not the stick](/2022/09/28/the-carrot-not-the-stick/); using positive rather than negative approaches. The approach we take usually ends up being a mix of compliance and human-centred usability, but leaning too heavily towards the compliance side is not helpful.

In particular, this came to mind last week: aiming for compliance as an accessibility goal sets you up for failure from the start. Aiming for continuous improvement, including human-centred usability and accessibility, sets us up to succeed. It says this work, going along this path, that is the goal.

## Compliance frame

It can be pretty difficult to become and stay compliant with WCAG 2.1 Level AA. Especially if accessibility hasn't been considered before, or if we know there are already a bunch of issues to fix.

Measuring compliance is usually done with an [accessibility audit](/2022/01/24/accessibility-audit-process/). This compliance and audit framing, for the vast majority of sites and apps, says "**You're already failing for some people.** Fix the things in this audit report to fail less." Even if all the issues in an audit report are fixed, the result is still framed something like "We found no evidence of your failure. That doesn't mean you're not failing, just that we didn't find any evidence."

Testing tools like axe DevTools necessarily take this approach too. Their goal is to find issues, so "You have (0) automatic issues, nice!" is a reasonable result. It's an automated tool, and can't test for everything, so it can't reliably say "You've met WCAG 2.1 Level AA."

## Human-centred frame

The alternative is a human-centred approach, focusing on making it more usable for more people. This approach says: "**You're already succeeding for some people.** Change these things to make it succeed more." Every thing we fix is progress, moving in a good direction. 

Using a little of the compliance frame can be helpful here in terms of prioritisation. Where are the biggest barriers that we can remove? Human-centred sprinkles help here too. What changes can we make that will most improve the usability?

## Same changes, different story

What's interesting to me is that the frame changes the story and the feeling about doing the work. Two teams might make near-identical sets of changes to their product. For example: adding missing ARIA on some tabs; adjusting colours to meet contrast ratios; making link text describe the target. 

A team doing these changes from a compliance frame is more likely to feel tired and demoralised after finishing them. "We still aren't compliant, we haven't got the "tick" that says we're accessible."

A team doing these changes from a human-centred frame is more likely to feel energised and excited after finishing them. "We've made it much better! What's next? :)"