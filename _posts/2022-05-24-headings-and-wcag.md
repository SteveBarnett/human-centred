---
title: Headings and WCAG
layout: post
description: What WCAG says about heading levels (and other heady things)
image: /img/2022/05/headings-and-wcag.png
---

Here are some heading-related situations you might find on a web page and whether they are WCAG fails or just a bit weird.

## An element looks like a heading, but isn’t marked up as a heading

For example `div class=“looks-like-a-heading”` instead of `h2`.

<span aria-hidden="true">❌ </span>WCAG fail!

This comes under [1.3.1 Info and Relationships – Level A](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl#info-and-relationships): “Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.”

If it looks like a duck, it should quack like a duck. Hey, did you do a [QAC](http://127.0.0.1:4000/2021/12/13/qac/)? 🦆

## There are multiple `h1`s (or no `h1`)

<span aria-hidden="true">✋ </span>Not a WCAG fail!

It’s a bit weird though. Ideally every page should have one `h1` at the start of the main content. The text content of the `h1` should be similar to the page `title`.

## Skipped heading levels

For example: `h1` then `h3` then `h4`.

<span aria-hidden="true">✋ </span>Not a WCAG fail!

It’s a bit weird though. Keeping a correct hierarchy lets people use the headings a bit like a table of contents.

## Out of order headings

For example: `h1` then `h3` then `h2`.

<span aria-hidden="true">❌ </span>WCAG fail!

This is 1.3.1 Info and Relationships – Level A again.

The markup needs to match the meaning. The `h`-level should match its importance in the hierarchy of the page.

## Further reading for the extra-eager

- [Heading off confusion: When do headings fail WCAG?](https://www.tpgi.com/heading-off-confusion-when-do-headings-fail-wcag/)
- [WebAIM Projects > Screen Reader User Survey #9 Results: Finding Information and Heading Levels](https://webaim.org/projects/screenreadersurvey9/#finding)
- [Accessible heading structure on the A11y Project](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)
- axe rules: [Heading levels should only increase by one](https://dequeuniversity.com/rules/axe/4.4/heading-order) and [Page must contain a level-one heading](https://dequeuniversity.com/rules/axe/4.4/page-has-heading-one)