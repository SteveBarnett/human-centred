---
title: "Accessibility audit process for mobile"
layout: post
description: 
image: /img/2022/05/mobile-monocle.png
---

I don't often audit mobile apps, but when I do, I follow a process a bit like this.

It's bit trickier to do automated checking of accessibility on native apps, especially if you're not set up to do iOS or Android development. So, I tend to rely on manual testing. In particular, I focus on screen reader testing since that tends shows the most critical errors most clearly.

## What I test

- <span aria-hidden="true">🎨</span> **Check use of colour.**
	- Is information conveyed using text / icons / shapes in addition to colour?
	- Do all elements have high enough contrast?
- <span aria-hidden="true">🅰️</span> **Test with larger text.**
	- Does all text resize?
	- Is any text truncated?
- <span aria-hidden="true">🗣</span> **Test with VoiceOver.**
	- Do elements have appropriate semantics (buttons, links, forms)?
	- Do non-text elements (images, video, audio) have text alternatives that convey the content or function?
	- Are decorative images hidden?

## iOS settings

- <span aria-hidden="true">🎨</span> **Check use of colour.**
	- `Settings → Accessibility → Display & Text Size, Color Filters → Greyscale`
- <span aria-hidden="true">🅰️</span> **Test with larger text.**
	- `Settings → Accessibility → Display & Text Size, Larger text`
- <span aria-hidden="true">🗣</span> **Test with VoiceOver.**
	- [Set up shortcut and captions](/2021/07/31/testing-with-screen-readers/#first-time-set-up-2)
	- Navigate by swiping right and left

## Android settings

- <span aria-hidden="true">🎨</span> **Check use of colour.**
	- Set `System → Advanced, Developer options, Simulate colour space` to M`onochromacy`
	- Then `System → Accessibility → Colour correction`
- <span aria-hidden="true">🅰️</span> **Test with larger text.**
	- `Settings → Accessibility → Font size → Largest`
- <span aria-hidden="true">🗣</span> **Test with TalkBack.**
	- [Set up shortcut and captions](/2021/07/31/testing-with-screen-readers/#first-time-set-up-3)
	- Navigate by swiping right and left

## Things I might add to the process later

- Test with a screen magnifier.
- Test with voice control.