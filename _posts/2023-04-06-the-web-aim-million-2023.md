---
title: The WebAIM Million 2023
layout: post
description: "The bad news, the good news, and the what-you-can-do(s) from this year's WebAIM Million."
image: /img/2023/04/wam.png
category: reference
---

The bad news, the good news, and the what-you-can-do(s).

[The WebAIM Million](https://webaim.org/projects/million/) is:

- an annual report on the accessibility of the top 1,000,000 home pages;
- automated tests using [WAVE](https://wave.webaim.org/standalone);
- it's good for "taking the temperature of web accessibility".

## 1. The bad news 😬

### 1.1 The big picture

- Almost every site had WCAG failures (96.3% in you want to be precise).
- Average of 50 errors per page.

### 1.2 The details

Almost all the errors fall into one of six categories. LLBALC: lang, links, buttons,<br>alt text, labels, contrast

- **Page language isn't set.** 19% of pages. This affects text to speech users, translations, and dictionaries.
- **Link text is empty.** 50% of pages. This affects text to speech and voice control users. Link text can be empty in linked images when alt text for the image isn't set.
- **Button text is empty.** 28% of pages. This affects text to speech and voice control users. This is most commonly found in icon buttons.
- **`alt` text for images missing.** 58% of pages. This affects screen reader users. Not all images need `alt` text? Decoratie images can have `alt=""`, marking them as decorative (and therefore ignored by assistive technology like screen readers).
- **Form inputs not labelled.** 46% of pages. This affects text to speech and voice control users.
- **Low colour contrast text.** 19% of pages (and average of 30 instances per page). This affects Low Vision and Colour blind people, plus anyone is a bright environment.

### 1.3 The sad news

In 2019, 97.8% of pages had errors. In 2023, it was 96.3%. This is not much of an improvement!

In 2019, the average errors per page was 60. In 2023, the average is 50. This is a good improvement, but is still a lot of errors per page!

These six categories (LLBALC) are in WCAG 1.0. That was published in 1999! That says that these six categories are fundamental to how the work works.

### Aside: In other news

- **Headings.** 43% of pages had skipped levels. This most directly impacts screen reader users.
- **ARIA.** Pages with ARIA averaged 69% more errors (than those without). This most directly impacts screen reader users.
- **Link text.** 17% of pages had unclear link text. This most directly impacts... people who use links.
- **Alt text.** 1 in 3 pages had dodgy alt text. This most directly impacts screen reader users.
- **Tables.** 83% of pages had invalid markup . This most directly impacts screen reader users.

## 2. The good news 🥳

- **These are automatically detectable errors.** The errors that are most common are also the easiest to find.
- **They're relatively low complexity to fix.** One or two lines of annotation. One or two lines of code.
- **This is a chance for us to be awesome.** Be more gooder than our competitors.

## 3. The what-you-can-do(s) 💪

Catch the errors using robots 🪓🤖

- axe extension in your browser
- jest-axe in your unit tests
- axe-playwright (or cypress-axe) in your E2E tests

Even better: avoid errors next time, or this time 😍

- Zoom out and see where these errors were introduced.
- LLBALC Attack ™ © ®
	- Set the page language
	- Annotate link text
	- Label form inputs
	- Annotate button text
	- Annotate alt text
	- Check colour contrast

## Resources

- [The WebAIM Million](https://webaim.org/projects/million/)
- [We need accessibility action — Now! · Eric Eggert](https://yatil.net/blog/accessibility-action)
- [Web Content Accessibility Guidelines 1.0](https://www.w3.org/TR/WCAG10/)
- [Testing for the six most common WCAG failures from the WebAIM Million](https://naga.co.za/2019/11/22/testing-for-the-six-most-common-wcag-failures-from-the-webaim-milion/)

