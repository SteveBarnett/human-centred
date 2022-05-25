---
title: How to get the most (accessibility) out of a design system
layout: post
description: 
image: /img/2022/05/htgtmaooads.png
---

Last week I was lucky enough to give a talk at the excellent [A11y Bytes conference](https://a11ybytes.org/). I talked about accessibility and design systems.

Here's the [9 and a half minute video of the talk](https://www.youtube.com/watch?v=E5l7eGVfJNM&list=PLuWM-v_C0DZTHJbMxxy_CvEWqQd4ntAQB&index=6) and here are the [slides of the talk on Speaker Deck](https://speakerdeck.com/stevebarnett/how-to-get-the-most-accessibility-out-of-a-design-system). This post is a short, bullet-y, summary of the main points.

The most important thing to remember is that **we need to be careful how we put the pieces (of the Design System) together**. A Design System can't give us accessibility "for free", but it can nudge us (perhaps strongly) in the right direction.

We could say there are three parts to using a Design system:

- **Make** the thing with components and documentation;
- **Check** the thing against examples;
- **Improve** the system with feedback.

## Make

- **Use the right components**.
	- Use semantic elements: buttons for actions, links for navigation, form elements for data.
- **Use components in the right place**.
	- Put groups in helpful containers.
	- Be careful with nesting.
- **Follow the documentation**.
	- Help on good button and link text.
	- Prefer `label`s over `aria-label`s.

## Check

- **Compare to the examples**.
	- Check our accessible names, `role`s.
	- Run an automated test (good for errors and omissions).
- **Find where the problem is**.
	- A bug in the design system?
	- Our usage of the design system?
	- Our implementation?

## Improve

- **Give feedback on the components**.
	- Report any bugs we find.
	- Offer suggestions for fixes.
- **Give feedback on using the components**.
	- Say what was easy and what was hard.
	- Offer suggestions for improvements.
- **Give feedback on the documentation**.
	- Let them know what was most helpful, what could be expanded on.
