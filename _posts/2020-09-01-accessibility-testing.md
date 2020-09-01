---
title: Accessibility testing, for testers and QA folk
layout: post
description: a short and sweet guide to accessibility testing for testers and QA folk.
---

Here's a short and sweet guide to accessibility testing for testers and QA folk.

Since we usually have limited time to do these things, I've suggested must, should, and could activity, plus a bonus extra credit one.

- **Must**: test with a keyboard, no mouse or trackpad. It's an accessibility requirement that all content is available from the keyboard.
- **Should**: run the [axe browser extension](https://www.deque.com/axe/) (more on axe). This will pick up any big accessibility problems (such as form controls missing labels).
- **Could**: use the [Accessibility Bookmarklets](https://accessibility-bookmarklets.org/install.html) to visually check the content. This checks that semantic HTML was properly used (meaning that screen reader users will be be able to access the content properly).
- **Extra credit**: test with a screen reader ([detailed guide to testing with screen readers](/2019/11/29/testing-with-screen-readers/)).
