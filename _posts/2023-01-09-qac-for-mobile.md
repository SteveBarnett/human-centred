---
title: Quick Accessibility Checks (QAC! 🐥) for mobile
layout: post
description: A first draft of a QAC for mobile apps
image: /img/2023/01/qacm.png
category: "how-to guide"
---

Here are three things you can do as an initial test of the accessibility of your mobile app. They can only give you a **quick, rough, idea**. For a more complete picture, have a look at the [Audit process for mobile apps](https://naga.co.za/2022/05/31/accessibility-audit-process-mobile/).

The first two checks are designed to test “at the extremes” a bit. It’s worth remembering that under these conditions we’re not aiming for an identical experience to the default settings. What we want is something **equivalent and usable**.

## 1. Larger text

Increase the text size above the default.

### Why do it

People with visual impairments increase the text size to make things easier (or possible) to read. Everyone’s eyesight gets worse as they get older.

We want to check that all text resizes so that it’s readable. We want to check that no content or information is lost when the text size is increased.

### What to do

- iOS: `Settings → Accessibility → Display & Text Size, Larger text`
- Android: `Settings → Accessibility → Font size → Largest`

### How to check

- Does all text resize? (Text that doesn’t may still be too small too read)
- Is any text cut short? (For example: only some of the digits of a bank account number are visible instead of all the digits.)
- Do components reflow, resize, and stack appropriately? (Watch our for broken layouts)

## 2. Greyscale

Visually check contrast and use of colour by making everything grey.

We want to check that the colour contrast of the text and the UI elements are high enough, and that we don’t use only colour to convey information.

### Why do it

People in bright environments, those who are colour blind, and those with low vision need good contrast to be able to tell the text and UI elements from the background.

All user benefits from information being presented in multiple channels, not just colour. People who are colour blind may not see information that’s presented only in colour.

### What to do

- iOS: `Settings → Accessibility → Display & Text Size, Colour Filters → Greyscale`
- Android: `Set System → Advanced, Developer options, Simulate colour space to `Monochromacy`. Then System → Accessibility → Colour correction`.

### How to check

- Is information conveyed using text / icons / shapes in addition to colour? (This helps all users, but is particular important for those with colour vision deficiency: they may not be able to see the information otherwise)
	- If an element is decorative, it does not need to have high enough contrast. Read [A quick guide to text alternatives for images](https://naga.co.za/2022/04/25/a-quick-guide-to-text-alternatives-for-images/) for help on decided whether or not an element is decorative. A short version: if I remove it and the user can still complete their task, it’s decorative.
- Do all elements have a good level of contrast? (Is all text readable? Are UI elements clearly distinguished from the background and from each other?).

## 3. Scanner

Use a scanning tool to check for common or obvious errors. These include things like touch targets that are too small and fields and buttons that are missing accessible names (used by screen readers and voice control users).

Read more about [Automated accessibility testing on Confluence](https://naga.co.za/2022/04/09/automated-accessibility-testing/). In particular what it can and can’t catch. The difference often comes down to the difference between “wrong” (clear errors, omissions) and “bad” (debatable quality, unusual code).

### Why do it

Automated accessibility tests can save us time by picking up some of the common, obvious, issues. Things that are “wrong”, such as clear errors and/or omissions.

### What to do

- iOS: run XCode’s Accessibility Inspector Audit Tool.
- Android: run the [Android Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor).

### How to check

- Does the scanning tool report zero errors?
