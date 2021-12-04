---
title: The difference between WCAG AA and AAA
layout: post
description: The practical difference between WCAG AA and AAA, and how to approach it in a pragmatic manner.
image: /img/2019/11/thumbs/wcag-quick-ref.png
---

Sometimes the difference between, and the importance of, WCAG AA vs AAA levels aren't entirely clear. Here's my take on it.

## To AA or to AAA?

Broadly speaking I aim for AA, and try for AAA where I can, given the time, money, and other constraints. In terms of the [MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method): **Must have** AA compliance (everything passes AA); **Should have** some AAA Successes; **Could have** AAA compliance (but unlikely to).

Achieving AA means we're doing great at making our sites accessible. This is also what legal and compliance types will want. Achieving AAA means we're doing **amazing** at making our sites accessible. It's difficult and not always possible, though.

## What's the difference between AA and AA

To really get into it, we need to read through the WCAG docs. I'm a fan of [the Quick Reference version of the docs](https://www.w3.org/WAI/WCAG21/quickref/).

![WCAG quick reference doc showing just AAA items](/img/2019/11/thumbs/wcag-quick-ref.png)

It takes a while to go through the whole lot, though, so I like to think of the differences between AA and AAA as falling into a few broad categories.

- **Enhancements**
  - Things that are included at a base level in AA, but have **an enhanced version for AAA**. I think of these as doing the best possible version of a thing I was doing already.
  - These include: higher contrast ratio, better warnings about potential data loss, better link text, bigger target sizes, better error prevention.
  - Language is worth mentioning as a thing of its own. AAA says to make sure all the language is plain and clear. Wherever there are unusual words or jargon, they're explained or defined.
- **Alternatives**
  - Things that aren't inherently accessible need to have alternative version that are.
    - Any time-based elements need to have **an alternative version that is not time-based**.
    - Any not keyboard-based interaction need to have **an alternative version that is keyboard-based**.
    - E.g. a video of a presentation with slides would need an article with lots of pictures (and excellent alt text) that conveys the same information and effect.
- **Extras**
  - Additional things that improve accessibility (and usability).
    - These include: **extra navigation** like breadcrumbs, a site map, highlighting the current page and section in the nav; **extra semantic markup** and ARIA; **help documentation**.

## Easy AAA

A handful of the AAA items feel like they just need a little bit of extra work from me. Here are a few AAA itesms that I try to always include.

- [1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#images-of-text-no-exception): images of text only for decoration.
- [2.4.8 Location](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&showtechniques=248#location): include breadcrumbs, a site map, show current page in nav.
- [2.4.9 Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&showtechniques=248%2C127&levels=a%2Caa#link-purpose-link-only): use meaningful text for links (and buttons).
- [2.4.10 Section Headings](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&showtechniques=127%2C248%2C249&levels=a%2Caa#section-headings): use correctly nested headings.
- [2.5.5 Target Size](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&showtechniques=127%2C248%2C249&levels=a%2Caa#target-size)

It's important to note that we must meet all the AA criteria to be AA compliant. It's great for our users to meet some AAA items on top of the AA ones. We should do that from a base of AA compliance, though.

## Summary

Achieving WCAG AAA is pretty tricky and isn't always a practical option. However, if we're already aiming at (or achieving) AA, there are a handful of things we can stretch a little further to achieve AAA for those. Doing so makes our stuff more accessible to more people. Yay!
