---
title: Classifying and prioritising accessibility bugs
layout: post
description: How I classify and prioritise accessibility bugs 
image: /img/2022/01/bugs.png
---

At work the other day we were discussing accessibility bugs. How do we know when a bug is genuine, how important it is? Two big ways came to mind

## Severity

One way to classify accessibility bugs is by Severity: the impact on the user.

1. **The issue stops users from accessing content or completing a task.** We call that a Critical Severity issue. These are **important and urgent**. Common Critical issues:
    - Functionality is not available from the keyboard.
    - Form fields don't have an accessible name.
    - Links or buttons don't have an accessible name (often because of missing alternative text on an icon link or button).
2. **The issue causes problems for users.** Depending on how big the problems are, we call that a High, Medium, or Low Severity issue.
    - High Severity issues are **important, but less urgent than Critical issues**.
    - Medium and Low Severity issues are **less important and less urgent than Critical issues** (but we should still fix them when we can!).

## WCAG Success Criteria Level

Another way to classify bugs is by the WCAG Success Criteria Level.

1. **Issues that fail a Level A SC are important and urgent.** Level A is minimum compliance
2. **Issues that fail a Level AA SC are important and less urgent.** Level AA is acceptable compliance, and most people's target compliance level.
