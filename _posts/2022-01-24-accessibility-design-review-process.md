---
title: Accessibility Design Review process
layout: post
description: My process, at time of posting, for conducting accessibility design reviews
image: /img/2022/01/review.png
---

Here's my process for conducting accessibility design reviews. I try to present the results as tune-ups rather than tell-offs.

## Low complexity

1. <span aria-hidden="true">🧭</span> **Check the page title.** It should be unique and describe the page content.
2. <span aria-hidden="true">🔡</span> **Check the page headings.** Check for order and nesting.
3. <span aria-hidden="true">🖼</span> **Check all non-text information has a text equivalent.** Images (including icons) have alt text that conveys the content or function of the image. Audio and video have transcripts and captions.
4. <span aria-hidden="true">🗣</span> **Check for high quality link and button text.** Link text describes the destination, button text describes the action, .
5. <span aria-hidden="true">🏷</span> **Check that every form control has an accessible name** (visible or not). Placeholders aren't used instead of label.
6. <span aria-hidden="true">🗂</span> **Check that every group of related forms controls has an accessible name** (visible or not) that provides context for the individual questions in the group.
7. <span aria-hidden="true">🎨</span> **Check colour contrast**. At least 4.5:1 for text (including text over images) and 3:1 for graphics and UI components.

## Medium complexity

1. <span aria-hidden="true">📖</span> **Check that standard controls are used wherever possible.** Interactive elements match standard components from the design system.
2. <span aria-hidden="true">🎹</span> **Check that non-standard keyboard interactions are annotated.** The reasoning behind using a custom component is clearly explained.
3. <span aria-hidden="true">🔍</span> **Check for responsive annotations.** Consider what the UI will look like zoomed in to 400%.
4. <span aria-hidden="true">❗️</span> **Error messages are clear and helpful.**
	- State clearly and precisely the reason for the error (don’t make the user guess what went wrong).
	- Give constructive advice on how to fix the problem (Help them fix it).
	- Don’t use jargon or error codes: express everything in the user’s vocabulary. (Most humans don’t speak developer).
5. <span aria-hidden="true">📏</span> **Fields are sized appropriately** to hint at the required input.

## High complexity

1. <span aria-hidden="true">🤷</span> **Check that the language used is plain and clear.**
2. <span aria-hidden="true">☯</span> **Check colour isn’t used as the only way of conveying information.**
3. <span aria-hidden="true">👮</span> **Do a final read-through of the WCAG SC.** [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl) (filtered for levels A and AA, excluding SMIL, PDF, Flash, and Silverlight) is more readable way of doing this than going straight to the official specification.