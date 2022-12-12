---
title: More accessible headings
layout: post
description: We can make our headings more accessible by checking their usage, nesting, and order.
image: /img/2022/12/mah.png
category: how-to guide
---

## How are headings used?

Headings are used by:

- search engines to figure out what’s on the page;
- screen reader users to hear what’s on the page, and to jump to a section of the page;
- sighted users who are visually scanning a page.

## 1. Plan out our headings

- What’s the topic or purpose of this page? That text should be in an `h1` near the top of the page.
- What are the sections of the page? The name of each section should be in an `h2`, at the start of the section.
- What (if any) are the subsections of each section? The name of each subsection should be in an `h3`, at the start of the subsection.
- What (if any) are the sub-subsections of each subsection? The name of each sub-subsection should be in an `h4`, at the start of the sub-subsection.
- And so on.

The list of headings should read a bit like a table of contents for the page.

## 2. Check our headings

### High-level checks

- Headings are nested correctly and ordered correctly.
- Headings divide the page into meaningful sections and describe the content immediately after the heading.

### Detailed Acceptance Criteria

- Page should contain an `h1`.
- Page should contain only one `h1`.
- `h1` **must** describe the topic or purpose of the page.
- `h1` should be similar to the `title`.
- `h1` could be the first heading on the page.
- Heading levels should increase only be one.
- Headings **must** describe the topic or purpose of content immediately after it.
- Text that looks like a heading **must** be marked up as a heading.

## Summary

People use headings to scan the page. Some people use them as additional navigation aids too.

We can make our headings more accessible by checking their usage, nesting, and order.
