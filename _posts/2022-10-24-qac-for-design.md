---
title: Quick A11y Checks for Design
layout: post
description: Three quick checks to see how accessible a design is
image: /img/2022/01/QACD.png
---

[The QAC (Quick A11y Checks)](/2021/12/13/qac/) work well for things that are already in code. For when there's an interface in HTML (and CSS and JS) that can we can poke and prodd a bit. But I'm a fan of [Shifting Left](https://www.deque.com/shift-left/): making things accessible earlier in the process is simpler and quicker.

Here are three quick checks you can do to check the accessibility of your design. These are remixes and updates and revisions of various lists from workshops and talks from the past few years.

## 1. Headings

### Why do it

Screen reader users often use headings to navigate around a page. Sighted users often scan a page's headings to get a quick summary of the content.

### What to do

Identify every element in the design that acts as a heading.

### Things to check

- Is everything that looks like a heading annotated as a heading, with its heading level (1 to 6)?
- Are the headings nested correctly (Heading 3 inside heading 2, heading 2 inside heading 1)?

## 2. Accessible names

### Why do it

Assistive technology like screen readers need extra information about interactive elements when there isn't visible text on the screen. When there is visible text it's used as the accessible name of the element. Voice control users benefit from visible names for elements.

### What to do

Identify every interactive element: form fields, buttons, and links.

### Things to check

- Interactive elements that don't have visible text do have an annotation with their accessible name. Check if it's possible to use visible text instead.
- Groups of interactive elements (e.g. multiple choice, multi-part data selector) that don't have visible text do have an annotation with their accessible name. The name provides context for the individual items in the group.

## 3. Unique text

### Why do it

Users of assistive technology benefit from interactive elements (e.g. `button`s and links) having unique, clear, names. This adds context and clarity (e.g. "Edit row 1", "Edit row 2",... instead of "Edit", "Edit", ...)

### What to do

Identify repeated interactive elements: form fields, buttons, and links.

### Things to check

- Repeated links or buttons (ones with the same text or icon) have a longer accessible name that's unique. For example: "View details of January 2022" instead of just "View details".