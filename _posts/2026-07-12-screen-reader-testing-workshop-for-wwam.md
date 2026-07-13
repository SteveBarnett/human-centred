---
title: Screen reader testing workshop for WWAM
layout: post
description: An outline for a screen reader testing workshop, more social version
image: /img/2025/07/srt-ds.png
---

An outline of a workshop for the Wellington Web Accessibility Meetup.

- [ ] Review agenda
- [ ] Check key instructions for typos!
- [ ] Check the timing: we have 1.5 hours

---

- **We'll focus on the free screen readers.**
    - On Windows, we recommend NVDA (it's a bit more mature than Narrator)
    - Narrator comes bundled with Windows and VoiceOver comes bundled with macOS
    - On Windows, JAWS is great, but expensive
    - For quite a lot of testing, especially simpler components, we usually find the same issue when testing with JAWS or NVDA (or Narrator)
- **We're just covering getting started**
    - This session is short, so it can only be a taste test
    - Many of the problems occur with the building blocks of the web (headings, images, links, and buttons) so there's value in testing there
    - There's loads more to explore and learn if you're interested! Including: changing the voice, the speech rate, the verbosity, and more.
- **What page to test?**
    - Something you use often
    - Something from work!
    - Google your favourite fruit or animal, then follow the third search result
    - Use some of the WebAIM practice pages: look for "examples and practice" links on [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
- Although you can use any browser, we generally suggest using these combinations for best results:
    - NVDA with Firefox
    - Narrator with Edge
    - VoiceOver with Safari.

Aside: I use [KeyViz](https://keyviz.org/) to show on-screen what keys I'm pressed. 

<h2>Agenda</h2>

* tic
{:toc}

## What does good sound like?

Broadly speaking: **it should sound the same as it looks**.

- **Names and roles are announced**
    - Does anyone know what names and roles are?
    - For example: "button, save"; "contact us, link".
- **States, properties, and values are announced**
    - Any idea what those are? Think of something a bit interactive, like an accordion. Or a text field.
    - For example: an expanded state on an accordions, the text in a text field
- **Groupings and landmarks are announced**
    - What kinds of things come in groups?
    - For example: a group of radio buttons; the main navigation.

## The foundational bits

- Mute your sound, or press <kbd>Ctrl</kbd> to pause the speech.
- Or, turn it off entirely!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Start screen reader | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |
| Stop speech | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |  <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |
| Next item | <kbd>↓</kbd> | <kbd>↓</kbd> | <kbd>→</kbd> |
| Previous item | <kbd>↑</kbd> | <kbd>↑</kbd> | <kbd>←</kbd> |
| Turn off screen reader | <kbd>Caps Lock</kbd> (<kbd>Insert</kbd> or <kbd>Caps Lock</kbd>) + <kbd>Q</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |

Now you try!

## Share-back

- Each group share back to everyone: one or two sentence review
- What you did or
- What you learned or
- Where you got stuck (and how you got unstuck)

## Testers, not users

- **Don't worry about trying to have an "authentic" experience. That's not really possible!**
    - Why do you think I'm saying something so potentially scandalous?
    - If you don't use a screen reader (SR) every day, your experience won't be the same as someone who does.
    - How people use their screen reader can vary wildly from one person to the next. Like many human things!
    - You can choose not to use it, some everyday users can't.
    - To find out about an "authentic" experience, we can do usability testing with everyday users!
- **What we're trying to do is to find barriers that someone who uses a SR every day might encounter.**
    - That we can do, and we can compare what it looks like and what it sounds like.
    - It's not "cheating" to use your mouse, or to avoid the screen curtain!

## The next bits

| Action | NVDA | Narrator | VoiceOver 
| ---| --- | --- | --- |
| Next heading | <kbd>h</kbd> | <kbd>h</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> |
| Next heading at level 1-6 | <kbd>1</kbd>-<kbd>6</kbd> | <kbd>1</kbd>-<kbd>6</kbd> | Not available |
| Next image (graphic) | <kbd>g</kbd> | Not available | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>g</kbd> |
| Previous [thing] | <kbd>Shift</kbd> + <kbd>[thing key]</kbd> | <kbd>Shift</kbd> + <kbd>[thing key]</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>[thing key]</kbd> |
| Next link | <kbd>k</kbd> | <kbd>k</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>l</kbd> |
| Next landmark | <kbd>d</kbd> | <kbd>d</kbd> | <kbd></kbd> |
| Start reading from here | <kbd>Caps Lock</kbd> + <kbd>↓</kbd> | <kbd>Caps Lock</kbd> + <kbd>↓</kbd> | <kbd>VO</kbd> + <kbd>a</kbd> |

## Share-back

- How are the headings on the page? Do they represent the content well?
- What's not a heading, but should be? (Often big, bold, text)
- What's a heading, but shouldn't be? (Often in the hero section)

## The two modes of screen readers

Screen readers have two modes: **Browse mode** (which Narrator calls Scan Mode) and **Forms mode**. One way to think about the difference is the keyboard interactions for desktop screen readers.

- In Browse mode, keystrokes perform reading and navigation actions by the screen reader.
- In Forms mode, keystrokes perform data entry actions by the browser.

Screen readers generally change modes automatically. For example: when tabbing into a form field. You can also change modes manually.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Change mode | <kbd>Caps Lock</kbd> + <kbd>Space Bar</kbd> | <kbd>Caps Lock</kbd> + <kbd>Space Bar</kbd> + <kbd>Enter</kbd> |  Not available |

## Form (and function)

Test some interactive elements, especially help text and errors. Tab through the page, or jump to the next form element.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Next form element | <kbd>f</kbd> | <kbd>f</kbd> | <kbd>VO</kbd> + <kbd>Cmd</kbd> + <kbd>j</kbd> |

## Share-back

- What went well?
- What went weird?
- What did you learn?

## Get help!

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
