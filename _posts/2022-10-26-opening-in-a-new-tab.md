---
title: Opening in a new tab
layout: post
description: Open in a new tab infrequently and carefully!
image: /img/2022/10/olint.png
category: "how-to guide"
---

Open in a new tab infrequently and carefully!

Opening in a new tab breaks the browser’s back button and breaks the users flow. So:

- choose when to **open in a new tab carefully**;
- **tell the user** that you’re opening in a new tab;
- **make the link text clear**.

## When (and when not) to open in a new tab

A good rule of thumb for not opening in a new tab is if the main menu or navigation is the same on the two linked pages.

- [NNG say](https://www.nngroup.com/articles/new-browser-windows-and-tabs/): “There is generally one good reason to open a page in a new window, and that is that **the user will need to refer to that content in order to complete a task in another window**.”
- The Web Content Accessibility Guidelines say: [only open a new tab when necessary](https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html):
	- **opening a page containing context-sensitive information**;
	- following a link to a page outside of the secured area **would terminate the user's logon**.

## How to tell the user you’re opening in a new tab

Add an external icon in the link text, at the end. Add a text alternative “opens in a new tab” for the icon in: the title tag for an svg; the alt attribute for an img.

Also check out the Web Content Accessibility Guidelines: [give users advanced warning when opening a new window](https://www.w3.org/WAI/WCAG21/Techniques/general/G201.html). This can be with text in the link, or with an icon.

## How to make the link text clear

The link text should be similar to the title of the target page. This is especially important for links that open in a new tab.
