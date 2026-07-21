---
title: Screen reader testing workshop for WWAM
layout: post
description: An outline for a screen reader testing workshop, more social version
image: /img/2025/07/srt-ds.png
bodyclass: workshop
---

Hi, folks at the Wellington Web Accessibility Meetup! 👋

- Short URL for this page: [bit.ly/wwam20260723](https://bit.ly/wwam20260723)
- [Google doc handout](https://docs.google.com/document/d/1HZ-Mvry-3n74PpdXLJFfnTFP9EoorhGcMs6eBqzpP5g/edit?usp=sharing) with keyboard shortcuts

<h2><span aria-hidden="true">☝️</span> Before we begin (<span aria-hidden="true">⏱️</span>5m)</h2>

<details>
    <summary>We'll focus on free, laptop, screen readers</summary>
<div markdown="1">
- Laptop/Desktop screen readers
    - On Windows, we recommend NVDA (it's a bit more mature than Narrator)
    - Narrator comes bundled with Windows
    - VoiceOver (VO) comes bundled with macOS
    - JAWS (Windows only) is also good but expensive
- **For quite a lot of testing, especially simpler components, we usually find the same issues whichever SR we're testing with**
    - The jump from testing with zero screen readers to one is much bigger than the jump from one to two (or three).
- No mobile testing today (VO on iOS, TalkBack on Android)
    - Laptops a bit better to huddle around in a group
    - Tricky to do both since they're so different
</div>
</details>
<details>
    <summary>We're just covering <em>getting started</em></summary>
<div markdown="1">
- This session is short, so it can only be a taste test
- Many of the problems occur with the building blocks of the web (headings, images, links, and buttons) so there's value in testing there
- There's loads more to explore and learn if you're interested! Including: changing the voice, the speech rate, the verbosity, and more.
</div>
</details>
<details>
    <summary>Test a fairly familiar page</summary>
<div markdown="1">
- Something you use often
- Something from work!
- Google your favourite fruit or animal (hint: it should be **capybara**), then follow one of the search results
- Use some of the WebAIM practice pages: look for "examples and practice" links on [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
</div>
</details>
<details>
    <summary>Use popular browser-and-SR combinations</summary>
<div markdown="1">
Although you can use any browser, these generally give best results:

- NVDA with Firefox
- Narrator with Edge (the OS defaults)
- VoiceOver with Safari (the OS defaults).
</div>
</details>
<details>
    <summary>Do some gentle group discussion</summary>
<div markdown="1">
- After each section, we'll go around the room and ask each group to share a few sentences about how they went
- Nothing formal, no need to stand up or prepare anything
- So that we share the love around the room a bit
</div>
</details>

<h2>Agenda</h2>

* tic
{:toc}

## <span aria-hidden="true">✔️</span> Intro: What does good sound like? (<span aria-hidden="true">⏱️</span>5m)

Broadly speaking: **it should sound the same as it looks**.

<details>
    <summary><strong>Names and roles are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: "button, save"; "contact us, link".</p>
</details>
<details>
    <summary><strong>States, properties, and values are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: an expanded state on an accordion, the text in a text field</p>
</details>
<details>
    <summary><strong>Groupings and landmarks are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: a group of radio buttons; the main navigation.</p>
</details>

## <span aria-hidden="true">💁</span> Demo: on/off, next/previous, shh! (<span aria-hidden="true">⏱️</span>5m)

- Mute your sound, or press <kbd>Ctrl</kbd> to pause the speech.
- Or, turn it off entirely!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Start screen reader | <kbd>Ctrl</kbd> +<br> <kbd>Alt</kbd> +<br> <kbd>N</kbd> | <kbd>Windows</kbd> +<br> <kbd>Ctrl</kbd> +<br> <kbd>Enter</kbd> |  <kbd>Cmd</kbd> +<br> <kbd>F5</kbd> |
| Stop speech | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |  <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |
| Next item | <kbd>↓</kbd> | <kbd>↓</kbd> | <kbd>→</kbd> (Quick Nav) |
| Previous item | <kbd>↑</kbd> | <kbd>↑</kbd> | <kbd>←</kbd> (Quick Nav) |
| Turn off screen reader | <kbd>Caps Lock</kbd> +<br> <kbd>Q</kbd> | <kbd>Windows</kbd> +<br> <kbd>Ctrl</kbd> +<br> <kbd>Enter</kbd> |  <kbd>Cmd</kbd> +<br> <kbd>F5</kbd> |

### Once-off set up (<span aria-hidden="true">⏱️</span>5m)

There are a few things we can do to make testing easier. You will thank yourself later!

#### With NVDA on

- **Update the NVDA key.** `Preferences` > `Settings`, `Keyboard`, `Select NVDA Modifier Key(s)`. Set <kbd>Caps Lock</kbd> as the NVDA key.
- **Turn on Highlighting.** `Preferences` > `Vision`, check `Enable Highlighting`.
- **Turn on Speech Viewer.** `Tools` > `Speech Viewer`: `Open the Speech Viewer`.


#### With Narrator on

**Show the speech viewer (patchy!).** <kbd>Caps Lock</kbd> + <kbd>Alt</kbd> + <kbd>x</kbd> (Live Transcription)

#### VoiceOver

- **Make sure the keyboard works as expected.**
    - `System Settings` > `Keyboard` item, toggle `Keyboard navigation` on
    - `Safari` > `Settings`, `Advanced` tab > `Accessibility` item, check "Press Tab to highlight each item on a web page"
- **Turn on VO Quick Nav.** `VoiceOver Utility` > `Commands`, `Quick Nav` (QN), check `Arrow-key Quick Nav` and check `Single-key Quick Nav`. (This makes VO behave more like other screen readers by letting us omit <kbd>VO keys</kbd> (<kbd>Ctrl</kbd> + <kbd>Opt</kbd>) or <kbd>VO keys</kbd> + <kbd>Cmd</kbd> in almost all cases)
- **Turn on the caption panel.** `VoiceOver Utility` > `Visuals`: `Show caption panel`.

### <span aria-hidden="true">🗣️</span> Practice: on/off, next/previous, shh! (<span aria-hidden="true">⏱️</span>5m)

Now you try!

## <span aria-hidden="true">🤓</span> Discussion: on/off, next/previous, shh! (<span aria-hidden="true">⏱️</span>10m)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
<span aria-hidden="true">🛜</span> If you're watching this online, throw your answers in the chat!

- How was that?
- Where did you get stuck? (and how did you get unstuck?!)
- What was unexpected?

## <span aria-hidden="true">🧠</span> Theory: we're testers, not users (<span aria-hidden="true">⏱️</span>5m)

<details>
    <summary><strong>Don't worry about trying to have an "authentic" experience. That's not really possible!</strong> <span aria-hidden="true">💁</span></summary>
<div markdown="1">
- If you don't use a screen reader (SR) every day, your experience won't be the same as someone who does.
- How people use their screen reader can vary wildly from one person to the next. Like many human things!
- You can choose not to use it, some everyday users can't.
- To find out about an "authentic" experience, we can do usability testing with everyday users!

**What we're trying to do is to find barriers that someone who uses a SR every day might encounter**

- That we can do, and we can compare what it looks like and what it sounds like.
- It's not "cheating" to use your mouse, to have the voice rate slow, or to avoid the screen curtain!
</div>
</details>

## <span aria-hidden="true">🗣️</span> Practice: headings, images, links! (<span aria-hidden="true">⏱️</span>15m)

| Action | NVDA | Narrator | VoiceOver (QN) |
| ---| --- | --- | --- |
| Next heading | <kbd>h</kbd> | <kbd>h</kbd> | <kbd>h</kbd> |
| Next heading at level 1-6 | <kbd>1</kbd>-<kbd>6</kbd> | <kbd>1</kbd>-<kbd>6</kbd> | <kbd>1</kbd>-<kbd>6</kbd> |
| Next image (graphic) | <kbd>g</kbd> | <kbd>g</kbd> | <kbd>g</kbd> |
| Next link | <kbd>k</kbd> | <kbd>k</kbd> | <kbd>l</kbd> |
| Next landmark | <kbd>d</kbd> | <kbd>d</kbd> | Not available |
| Previous [thing] | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> |

## <span aria-hidden="true">🤓</span> Discussion: headings, images, links! (<span aria-hidden="true">⏱️</span>10m)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
<span aria-hidden="true">🛜</span> If you're watching this online, throw your answers in the chat!

- How was navigating around with the shortcuts?
- How are the headings on the page? Good structure? Should be a heading / shouldn't be a heading bits of text?
- How were the text alternatives?
- Any "Click here" or "Read more" or other links with confusing link text?

## <span aria-hidden="true">🧠</span> Theory: the two modes of SRs (<span aria-hidden="true">⏱️</span>5m)

Screen readers have two modes: **Browse mode** (which Narrator calls Scan Mode) and **Forms mode**. One way to think about the difference is the keyboard interactions for desktop screen readers.

- In Browse mode, keystrokes perform reading and navigation actions by the screen reader.
- In Forms mode, keystrokes perform data entry actions by the browser.

Screen readers generally change modes automatically. For example: when tabbing into a form field. You can also change modes manually.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Change mode | <kbd>Caps Lock</kbd> +<br> <kbd>Space Bar</kbd> | <kbd>Caps Lock</kbd> +<br> <kbd>Space Bar</kbd> |  Not available |

## <span aria-hidden="true">🗣️</span> Practice: form and function (<span aria-hidden="true">⏱️</span>15m)

Test some interactive elements, especially help text and errors. Tab through the page, or jump to the next form element.

Remember our "What does good sound like?" from earlier:

- Names and roles are announced
- States, properties, and values are announced
- Groupings and landmarks are announced

A new one for here: help text and error text is announced when a field gets focus.

| Action | NVDA | Narrator | VoiceOver (QN) |
| --- | --- | --- | --- |
| Next interactive element | <kbd>Tab</kbd> | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Next form element | <kbd>f</kbd> | <kbd>f</kbd> | <kbd>j</kbd> |
| Next text field | <kbd>e</kbd> | <kbd>e</kbd> | Not available |
| Next button | <kbd>b</kbd> | <kbd>b</kbd> | <kbd>b</kbd> |
| Previous [thing] | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> | <kbd>Shift</kbd> +<br> <kbd>[thing key]</kbd> |

### <span aria-hidden="true">📋</span> Aside: listing things (<span aria-hidden="true">⏱️</span>5m)

NVDA and VO both let you list stuff: all the links, buttons, headings, and so on. In usability testing we don't tend to see people using these often. These lists can be helpful to us testers though!

| Action | NVDA | Narrator | VoiceOver (Rotor) |
| --- | --- | --- | --- |
| List element | <kbd>Caps Lock</kbd> +<br> <kbd>F7</kbd> | Not available | <kbd>VO keys</kbd><br>( <kbd>Ctrl</kbd> +<br> <kbd>Opt</kbd> ) +<br> <kbd>u</kbd> |
| List all landmarks | Available in Elements list | <kbd>Caps Lock</kbd> +<br> <kbd>F5</kbd> | Available in Rotor  |
| List all headings | Available in Elements list | <kbd>Caps Lock</kbd> +<br> <kbd>F6</kbd> |Available in Rotor  |
| List all links | Available in Elements list | <kbd>Caps Lock</kbd> +<br> <kbd>F7</kbd> | Available in Rotor |

## <span aria-hidden="true">🤓</span> Discussion: form and function (<span aria-hidden="true">⏱️</span>10m)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
<span aria-hidden="true">🛜</span> If you're watching this online, throw your answers in the chat!

- What went well?
- What went weird?
- What did you learn?

<div class="boxout">
And the big question: <strong>what will you do next?</strong>
</div>

## <span aria-hidden="true">🛟</span> Get help! (<span aria-hidden="true">⏱️</span>5m)

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
