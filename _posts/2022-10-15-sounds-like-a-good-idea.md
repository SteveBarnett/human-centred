---
title: "Sounds like a good idea: how to get started testing with a screen reader"
layout: post
image: /img/2022/10/slagi.jpg
category: "how-to guide"
---

This is a text version of the [PDF of the slides](/img/2022/10/Sounds like a good idea.pdf) for [a talk I'm giving at A11y Camp 2022](https://a11ycamp.org.au/speakers-and-presentations-2022/#steve).

## Chapter 1: Introduction. Why test, and a demo

### Why test with a screen reader?

1. People who use our products use screen readers.
2. It highlights problems quickly and clearly.

**Disclaimer:** I'm a tester, not an everyday user

## Chapter 2: Testing tips. What to test, what good sounds like

### 1. Testing the page title

Does it describe the contents or purpose of the page?

### 2. Testing the `h1`

Is it the first heading?
Does it describe the contents or purpose of the page?
Is similar to the title?

### 3. Testing the headings

Is everything that looks like a heading marked up as a heading?
Are the headings nested correctly?

### 4. Testing everything else (LOL OMG wat 😱)

Hold on. Let's take a break.

### Aside: the two modes of (desktop) screen readers.

#### Browse mode

The page is read out in the HTML source order.

There are single-key shortcuts for headings, links, images, and more.

#### Forms mode

The person uses the `Tab` key to move to the next focusable element.

Text, images, and disabled form elements do not receive focus.

Okay, let's try again.

### 4. Testing everything else (for real this time)

Hmm, well. Maybe it's more like...

### 4. Testing interactive elements

- Links
- Buttons
- Form fields

#### What to test

1. Can I reach it and use it?
2. Does it have an accessible name?
3. Does it have a good name?

#### What's good text for a link?

Links go places.

Link text should describe the destination.

#### What's good text for a button?

Buttons do stuff.

Button text should describe the action.

#### What's a good name for a field?

Fields gather data.

Field name describes the input.

## Chapter 3: Setup tips. Getting started getting started

### Setup Part 1: "Have you tried turning it off and on again?"

- Desktop: keyboard shortcuts
- Mobile: accessibility shortcut
- Details (and some other tweaks) in the Appendix

### Setup Part 2: "Quiet, please!" and "Speak up!"

- Desktop: `Control` to stop
- Desktop: `Insert` + `↓`, `VO` + `a` to start
- Mobile: Two-finger tap

## Epilogue: How to continue testing with a screen reader

Deque guides: [NVDA](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts); [JAWS](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts); [VoiceOver Mac OS](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts); [VoiceOver iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts); [TalkBack](https://dequeuniversity.com/screenreaders/talkback-shortcuts)

### What else to test

- Field help text
- Error handling
- Focus management

### What screen reader(s) should we test with?

The ones our customers use.
But some testing is way better than no testing.

## Appendix

### Setup Part 1: VoiceOver on iOS

- Settings → Accessibility → General > Accessibility Shortcut → select VoiceOver
- Use the Accessibility Shortcut to switch VoiceOver on and off quickly. This lets you triple-click the side button to stop / start VoiceOver

### Setup Part 1: TalkBack on Android

- Settings → Accessibility → Volume key shortcut. Select Use service and choose TalkBack as the Shortcut service.
- Use the shortcut service to switch TalkBack on and off quickly. This lets you hold both volume keys for 3 seconds to start / stop TalkBack.

### Tweaks for testing: NVDA

- Preferences > Vision, check “Enable Highlighting”
- Tools > Speech Viewer: Open the Speech Viewer

### Tweaks for testing: VoiceOver on iOS

If you want to see the text of VoiceOver on screen, go to Settings → Accessibility → VoiceOver, Caption Panel

### Tweaks for testing: TalkBack on Android

If you want to see the text of TalkBack on screen, go to Settings → Accessibility, Caption preferences → Use captions
