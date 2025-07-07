---
title: Screen reader testing for a Design System
layout: post
description: Notes on screen reader testing, focusing on design system components
image: /img/2025/07/srt-ds.png
---

At work the other day we were talking about screen reader testing for design system components. Here are my gathered notes.

Screen reader testing for a whole page includes lots about context: page title, headings, landmarks, and more. Screen reader testing for a single component is more narrow and tight. 

## Summary

- **Information and relationships available through presentation are announced**
    - name, role, state, value, grouping, landmark
    - which (mostly) means they're available in the accessibility tree
- **Can be used with a keyboard and a screen reader**
    - Test in Browse mode, then Focus mode
    - Test focus management
- **ARIA Authoring Practices Guide patterns are (mostly) followed**
    - Keyboard Interactions
    - WAI-ARIA Roles, States, and Properties

## Details

### Name

- Each interactive element has an accessible name
- The accessible name matches the visible name
- `aria-label` is not placed on static elements

### Role

- Each interactive element has a role
- The role matches the visual presentation
- Elements with a role have an accessible name

### State

State is communicated. For example: checked, expanded / collapsed, selected, required, invalid, current (true, page, step, date, time), disabled.

### Relationships

- Content is announced in the same sequence as the visual order
- Field help text and error text are linked to the field
- Related fields are grouped. For example: fieldset and legend; group or radiogroup; ordered or unordered list.
- Group help text and error text are linked to the group

### Keyboard

- All content is accessible using a keyboard and a screen reader
- Focus order is logical
- Skip links move focus and work as intended when using a screen reader
- Static, `disabled`, `readonly`, and `inert` elements do not receive focus
- Focus is managed appropriately

### Notifications and friends

- Status messages are announced
- Auto suggestions are announced
- Loading states are announced

### Hidden content

- Hidden content is hidden from all users: it cannot be reached in Browse mode. For example: content in a collapsed Disclosure.
- Visually hidden elements do not receive focus.

## Guides

It can be tricky figuring out how to use a screen reader. Deque and WebAIM both have great guides for the major screen readers.

### JAWS on Windows

- [Deque's JAWS Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts).
- [WebAIM's Using JAWS to Evaluate Web Accessibility](https://webaim.org/articles/jaws/).

### NVDA on Windows

- [Deque's NVDA Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts).
- [WebAIM's Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/).

### VoiceOver on MacOS

- [Deque's VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-basics).
- [WebAIM's Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/).

### VoiceOver on iOS

- [Deque's VoiceOver Gestures on iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts)
- [WebAIM's VoiceOver on Mobile](https://webaim.org/articles/voiceover/mobile)

### TalkBack on Android

- [Deque's TalkBack Gestures on Android](https://dequeuniversity.com/screenreaders/talkback-shortcuts)
- [WebAIM's Using TalkBack to Evaluate Web Accessibility](https://webaim.org/articles/talkback/)
