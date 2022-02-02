---
title: Accessibility audit process
layout: post
description: My process, at time of posting, for conducting accessibility audits
image: /img/2022/01/audit.png
---

Here's my process for conducting accessibility audits. I try to present the results as tune-ups rather than tell-offs.

## Set up

<span aria-hidden="true">📝</span> Make a page-level testing list.

- For each page, make a state-level testing list (tabs, modals)
- Note: WCAG 2.1 conformance at any level [can only be claimed for whole pages](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conf-req2) (not parts of pages).

## Low complexity

1. <span aria-hidden="true">🧭</span> **Check the page title.** It should be unique and describe the page content. It will usually match the `h1`.
2. <span aria-hidden="true">🔡</span> **Check the page headings.** Check for order and nesting. Highlight them visually using the [Headings accessibility bookmarklet](https://accessibility-bookmarklets.org/install.html).
3. <span aria-hidden="true">🎹</span> **Test with the keyboard.** Check for clear focus styles and that all functionality is available.
4. <span aria-hidden="true">🔍</span> **Test zoomed in to 400%.** Check for visibility of all content (no truncation) and that all functionality is available.
5. <span aria-hidden="true">🪓</span> **Run the [aXe browser extension](https://www.deque.com/axe/).** This is a good tool to run first since its philosophy of 'zero false positives' means the list of errors is usually short.

## Medium complexity

6. <span aria-hidden="true">⤵️</span> **Run the [ARC toolkit browser extension](https://www.paciellogroup.com/toolkit/)** (Chrome only). This is a good tool to run next since it will flag more errors, and provides an easy way of inspecting the accessibility of semantic structures such as headings, landmarks, links, buttons, form controls, and alt text. In particular, check that:
    - link text describes the destination of the link;
    - button text describes the action that will happen;
    - alt text conveys the content and function of each image.
7. <span aria-hidden="true">👀</span> **Do the assessment option of the [Microsoft Accessibility Insights browser extension](https://accessibilityinsights.io/)** (Chrome only). This is a good tool to use next because it offers good coverage of the WCAG SC (Success Criteria). It's a reasonably lengthy process, but gets faster with practice.
8. <span aria-hidden="true">💫</span> **Check if some common AAA SC have been met**
    - 2.4.9 Link Purpose (Link Only) (good, unique, link text)
    - 2.4.10 Section Headings (for the page)
    - 3.2.5 Change on Request (only user-initiated changes)
    - 3.3.5 Help (Context-sensitive help is available, text instructions for forms)
    - 3.3.6 Error Prevention (All) (Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.)

## High complexity

9. <span aria-hidden="true">🗣</span> **Test with a screen reader.**
    - As a minimum, we test with NVDA with Chrome on Windows or VoiceOver with Safari on MacOS.
    - Where possible we also test with (in order of preference) JAWS on Windows, VoiceOver on iOS, TalkBack on Android.
10. <span aria-hidden="true">👮</span> **Do a final read-through of the WCAG SC.** [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl) (filtered for levels A and AA, excluding SMIL, PDF, Flash, and Silverlight) is more readable way of doing this than going straight to the official specification.

## Additional review

1. <span aria-hidden="true">🃏</span> Review any existing `jest-axe` tests
2. <span aria-hidden="true">↔️</span> Review any existing E2E tests 
