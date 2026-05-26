---
title: Screen reader testing workshop
layout: post
description: An outline for a screen reader testing workshop
image: /img/2025/07/srt-ds.png
---

- **We'll focus on the free screen readers.**
    - Testing with JAWS is fairly similar to testing with NVDA.
    - Narrator comes with Windows and VoiceOver comes with macOS
    - NVDA is a free download, Windows only
- **We're just covering getting started**
    - Most of the problems occur with foundational stuff, the building blocks of the web.
    - There's loads more to explore and learn if you're interested!

If you just want the keyboard shortcuts, go to "Get help!" at the bottom of the page.

<h2>Agenda</h2>

* tic
{:toc}

Depending on how we go with time, we may jump to "Get help!", which is a list of resources.

## 1. Dive right in (practical 🫱)

### Be prepared to make it hush!

- Mute your sound, or press <kbd>Ctrl</kbd> to pause the speech.
- Or, turn it off entirely!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Turn off screen reader | <kbd>`NVDA key`</kbd> (<kbd>Insert</kbd> or <kbd>Caps Lock</kbd>) + <kbd>Q</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |

We'll come back to `NVDA key` later!

### Start the screen reader

Search for it, click the logo, or use a keyboard shortcut.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Start screen reader | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |

Although you can use any browser, we generally suggest using these combinations for best results:

- NVDA with Firefox
- Narrator with Edge
- VoiceOver with Safari.

### Move around the page

| Action | NVDA | Narrator | VoiceOver 
| ---| --- | --- | --- |
| Next item | <kbd>↓</kbd> | <kbd>↓</kbd> | <kbd>↓</kbd> |
| Previous item | <kbd>↑</kbd> | <kbd>↑</kbd> | <kbd>↑</kbd> |
| Next interactive item | <kbd>Tab</kbd> | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Previous interactive item | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |

**If you get stuck**, try:

- going backwards
- pressing <kbd>Tab</kbd> a few times
- refreshing the page!

### Briefly discuss

How was that? 🙃

## 2. Think about it (theory 🧠)

### Testers, not users

- **Don't worry about trying to have an "authentic" experience. That's not really possible!**
    - If you don't use a SR (screen reader) every day, your experience won't be the same as someone who does.
    - Your familiarity with the SR and the way of browsing is very different.
    - You can choose not to use it, some everyday users can't.
    - To find out about an authentic experience, we can do usability testing with everyday users!
- **What we're trying to do is to find barriers that someone who uses a SR every day might encounter.**
    - That we can do, and we can compare what it looks like and what it sounds like.

### The two modes of screen readers

Screen readers have two modes: **Browse mode** (which Narrator calls Scan Mode) and **Forms mode**. One way to think about the difference is the keyboard interactions for desktop screen readers.

- In Browse mode, keystrokes perform reading and navigation actions by the screen reader.
- In Forms mode, keystrokes perform data entry actions by the browser.

Screen readers generally change modes automatically. For example: when tabbing into a form field. You can also change modes manually.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Change mode | <kbd>`NVDA key`</kbd> + <kbd>Space Bar</kbd> | <kbd>Caps Lock</kbd> + <kbd>Space Bar</kbd> + <kbd>Enter</kbd> |  Not available |

### What does good sound like?

Broadly speaking: **it should sound the same as it looks**.

- **Names and roles are announced**
    - For example: "button, save"; "contact us, link".
- **States, properties, and values are announced**
    - For example: an expanded state on an accordions, the text in a text field
- **Groupings and landmarks are announced**
    - For example: a group of radio buttons; the main navigation.

#### Variations between SRs

Some screen readers announce 'button, save' and some announce 'save, button'.

**Different screen reader and browser combinations may announce the same thing slightly differently.** That's fine, and expected!

Briefly check that no information is missing across these variations. The order doesn't matter, only the content of the announcement.

## 3. Set it up (practical 🫱)

Okay, let's make our testing slightly easier by updating a shortcut key and turning on highlighting.

### NVDA only: `NVDA key` and Turn on highlighting

- Set a new `NVDA key`. Some people prefer <kbd>Caps Lock</kbd> as the NVDA key. In the menus, go to `Tools` > `Speech Viewer` (by using your mouse or <kbd>NVDA key`</kbd> + <kbd>N</kbd>).
- Turn on Highlighting. In the menus, go to `Preferences` > `Vision`, and check `Enable Highlighting`. This lets you see where NVDA's cursor is.

### Speech viewer

NVDA and VoiceOver both let you view a text version of the speech. It doesn't always match what's announced, though, so be wary of relying on it.

| Action | NVDA | Narrator | VoiceOver 
| --- | --- | --- | --- |
| Turn on the speech viewer | `Tools` > `Speech Viewer`: `Open the Speech Viewer` | Not available | `VoiceOver Utility` > `Visuals`: `Show caption panel` |

## 4. Set if off (practical 🫱)

Quick aside for VoiceOver:

Interact with (go into/out of) objects (like iframes, menus, application regions, etc.) : <kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd> / <kbd>↑</kbd>

### Test the headings

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Next heading | <kbd>h</kbd> | <kbd>h</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> |
| Previous heading | <kbd>Shift</kbd> + <kbd>h</kbd> | <kbd>Shift</kbd> + <kbd>h</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>h</kbd> |
| Next heading at level 1-6 | <kbd>1</kbd>-<kbd>6</kbd> | <kbd>1</kbd>-<kbd>6</kbd> | Not available |

Trying moving down the page after jumping to a heading!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Start reading from here | <kbd>`NVDA key`</kbd> + <kbd>↓</kbd> | <kbd>Caps Lock</kbd> + <kbd>↓</kbd> | <kbd>VO</kbd> + <kbd>a</kbd> |

### Test the images

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Next image (graphic) | <kbd>g</kbd> | Not available | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>g</kbd> |
| Previous image (graphic) | <kbd>Shift</kbd> + <kbd>g</kbd> | Not available | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>g</kbd> |

### Test the title

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Announce title | <kbd>`NVDA key`</kbd> + <kbd>t</kbd> | <kbd>Caps Lock</kbd> + <kbd>w</kbd> | Not available |

## 5. Share it out (theory 🧠)

- What went well?
- What went weird?
- What did you learn?

## 6. Something went wrong (practical 🫱)

Test some interactive elements, especially help text and errors. Tab through the page, or jump to the next form element.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Next form element | <kbd>f</kbd> | <kbd>f</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>j</kbd> |

**If you get stuck**, try:

- going backwards
- pressing <kbd>Tab</kbd> a few times
- switching modes
- refreshing the page!

## 7. Get help!

- [Desktop Screen Readers Survival Guide - Basic Keyboard Shortcuts at Deque](https://dequeuniversity.com/screenreaders/survival-guide) (Shortcut Keys for JAWS, NVDA, Narrator, VoiceOver)
- NVDA
    - [NVDA Keyboard Shortcuts at Deque](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
    - [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
    - [Keyboard Shortcuts for NVDA at WebAIM](https://webaim.org/resources/shortcuts/nvda)
- Narrator
    - [Narrator Keyboard Shortcuts at Deque](https://dequeuniversity.com/screenreaders/narrator-keyboard-shortcuts)
- VoiceOver
    - [VoiceOver Keyboard Shortcuts at Deque](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)
    - [Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/)
