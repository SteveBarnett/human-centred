---
title: Tables and links and things
layout: post
description: When faced with long tables of data, users often want to open several things in new tabs. When we do this we need to be careful that we don’t make things broken or annoying for some users.
image: /img/2022/10/link-link-link.png
category: "how-to guide"
---

When faced with long tables of data, users often want to open several things in new tabs. When we do this we need to be careful that we don’t make things broken or annoying for some users.

## Some constraints to bear in mind

- Link text needs to describe the destination of the link.
- Links need to look distinct from text, ideally by being blue and underlined.
- Table headers and cells can’t become links (or buttons): that would mean losing their `role`, their meaning as table headers or cells. Table headers and cells can **contain** links (or buttons, or form fields).
- Table rows can’t become links (or buttons): that would mean losing their `role`, their meaning as a table row. Table rows can only contain table cells.

## A solution

1. Choose one column that will contain links.	- It should be the one where the link text will make most sense. For example: invoice number or contact name.
	- Make sure the links look distinct from text. 
2. Optionally, carefully, as an enhancement for mouse/trackpad users, add a click handler on the row.
	- It should not be keyboard-focusable.

Note: `Control` + click / `Command` + click / “Right click, open in new tab” is only available on the link, the `a[href]` itself. It’s not available on `button`s or things we add `onClick` events to. This is browser behaviour and we should not try and change it.

## Demo page

Here's a [Table and links and things demo page](https://stevebarnett.github.io/a11y-demos-and-tests/tables-and-links-and-things.html) if you want to test out what these sound like.