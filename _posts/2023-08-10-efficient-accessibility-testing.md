---
title: Efficient accessibility testing
layout: post
description: How doing some Quick Accessibility Checks and testing with a screen reader is a very efficent way to test for accessiblity.
image: /img/2023/08/eat.jpg
category: reference
---

Doing a [QAC](/2021/12/13/qac/) **and** [testing with a Screen Reader](/2022/10/15/sounds-like-a-good-idea/) will cover a lot of ground: most WCAG 2.1 AA Success Criteria and most famous issues.

## Accessibility by the book and by the numbers

There are 50 Success Criteria (SC) at WCAG 2.1 Level AA. 30 are Level A and 20 are Level AA. Some issues are particularly "famous": they’ve come up in the [2023 WebAIM Million](https://webaim.org/projects/million/) and [Intopia’s Top 6 Accessibility Problems in 2022 - Intopia](https://intopia.digital/articles/top-5-critical-accessibility-issues-in-2022/) (5 plus a bonus 1).

One way to test for all of these things is to do an [Accessibility Audit](/2022/01/24/accessibility-audit-process/).

 - However! Some of the SC aren’t applicable (they refer to audio and video, which often don't occur in web application pages).
 - And! A few key checks can cover a lot of the issues.
 - Which! Means a more accessible and usable experience for our customers.

## By Success Criteria

- Doing a QAC will cover between about 30 SC.
	- Testing with the keyboard will cover about 10 SC.
	- Checking the headings will cover about 3 (important! (but not `!important`)) SC.
	- Running axe DevTools will cover between about 20 SC (but `It Depends…`).
- Testing with a screen reader will cover about 30 SC. (A different 30 to the QAC!)
- Doing both will cover between about 40 SC.

The main things that aren’t covered are audio and video, Reflow (aka “Is it responsive?”), and pointer gestures.

## By Famousness

- Doing a QAC covers about 10 of the 12 famous issues from both sources. (It doesn’t cover Reflow and Parsing.)
- Testing with a screen reader covers about 9 of the 12 famous issues. (It doesn’t cover Reflow, Contrast, and Info and Relationships (it should be coded the same as it looks)).
- Doing both will cover 

Note: Parsing is “Is the HTML valid?” This rule is removed in WCAG 2.2.

## Obligatory Call To Action

If you don’t already have QACing or brief screen reader testing in your process, now’s a good time to add it! 🙃
