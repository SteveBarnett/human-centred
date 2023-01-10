---
title: Quick Accessibility Checks (QAC! 🐥) for mobile (draft)
layout: post
description: A first draft of a QAC for mobile apps
image: /img/2023/01/qacm.png
category: "how-to guide"
---

## 1. Larger text

Increase the text size above the default.

### Why do it

People with visual impairments increase the text size to make things easier (or possible) to read. Everyone’s eyesight gets worse as they get older.

### What to do

- iOS: `Settings → Accessibility → Display & Text Size, Larger text`
- Android: `Settings → Accessibility → Font size → Largest`

### Things to check

- Does all text resize?
- Is any text truncated?


## 2. Greyscale

Visually check contrast and use of colour by making everything grey.

### Why do it

People with low vision, those who are colour blind, and those who are in bright environments need good contrast to be able to tell the text from the background. People who are colour blind may not see information that’s presented only in colour.

### What to do

- iOS: `Settings → Accessibility → Display & Text Size, Color Filters → Greyscale`
- Android: `Set System → Advanced, Developer options, Simulate colour space to `Monochromacy`. Then System → Accessibility → Colour correction`.

### Things to check

- Is information conveyed using text / icons / shapes in addition to colour?
- Do all elements have high enough contrast? (Note: the ratios of the colours should manually checked as well. This quick check may only highlight very low contrast combinations).

## 3. Scanner

Use a scanning tool to check for errors.

### Why do it

Automated accessibility tests can save us time by picking up some of the common, obvious, issues. Things that are “wrong”, such as clear errors and/or omissions.

### What to do

- iOS: run XCode’s Accessibility Inspector Audit Tool.
- Android: run the [Android Accessibility Scanner](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor).

### Things to check

- Are there no errors?
