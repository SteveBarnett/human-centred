---
title: "Accessibility audit process for mobile"
layout: post
description: 
image: /img/2022/05/????????.?????????
---

I don't often audit mobile apps, but when I do, I follow a process a bit like this.

It's bit trickier to do automated checking of accessibility on native apps, especially if you're not set up to do iOS or Android development. So, I tend to rely on manual testing. In particular, I focus on screen reader testing since that tends shows the most critical errors most clearly.

## iOS

- <span aria-hidden="true">🎨</span> **Check use of colour.**
	- Settings → Accessibility → Display & Text Size, Color Filters → Greyscale
- <span aria-hidden="true">🅰️</span> **Test with larger text.**
	- Settings → Accessibility → Display & Text Size, Larger text
	- Does all text resize?
	- Is any text truncated?
- <span aria-hidden="true">🗣</span> **Test with VoiceOver.**
	- [Set up shortcut and and captions](/2021/07/31/testing-with-screen-readers/#first-time-set-up-2)
	- Navigate by swiping right and left

## Android

- <span aria-hidden="true">🎨</span> **Check use of colour.**
	- Set System → Advanced, Developer options, Simulate colour space to Monochromacy
	- Then Monochromacy set, System → Accessibility → Colour correction
- <span aria-hidden="true">🅰️</span> **Test with larger text.**
	- Settings → Accessibility → Font size → Largest
- <span aria-hidden="true">🗣</span> **Test with TalkBack.**
	- [Set up shortcut and and captions](/2021/07/31/testing-with-screen-readers/#first-time-set-up-3)
	- Navigate by swiping right and left

## Things I might add to the process later

- Test with a screen magnifier.
- Test with voice control.