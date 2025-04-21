---
title: Supported Assistive Technology
layout: post
description: Notes on an approach to which Assistive Technology to support
image: /img/2025/04/ar.png
---

Following on from [Accessibility Ready](/2025/04/10/accessibility-ready/), here's a note on one approach to which Assistive Technology to support.

> We support a wide range of assistive technology. We test with screen readers on desktop and mobile, and with contrast themes. We use the latest version of browsers and assistive technology, unless stated otherwise.

## Screen readers

We test on multiple screen readers across multiple platforms. Different screen readers:

- handle the same content differently
- have different levels of support for HTML and ARIA features
- appeal to different people

### Desktop screen readers

We test with the two most popular Windows screen readers and with VoiceOver on macOS.

1. JAWS (two versions back) with Chrome on Windows
    - This is the the most popular screen reader, and is a paid product
2. NVDA with Firefox on Window
    - This is a close second in popularity, and is free
3. VoiceOver with Safari on macOS
    - This has a low user count compared to JAWS and NVDA, but is free and built-in to macOS

### Mobile screen readers

We test with both major mobile screen readers.

1. VoiceOver with Safari on iOS
2. Talkback on Android (any version)
    - Note: on Samsung devices TalkBack needs to be installed separately]

## Contrast themes

We test with one Contrast theme on Windows.

Note: Contrast themes are called Windows High Contrast Mode in Windows 10 and earlier.