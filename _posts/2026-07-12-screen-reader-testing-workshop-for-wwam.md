---
title: Screen reader testing workshop for WWAM
layout: post
description: An outline for a screen reader testing workshop, more social version
image: /img/2025/07/srt-ds.png
bodyclass: workshop
---

An outline of a workshop for the Wellington Web Accessibility Meetup.

---

## <span aria-hidden="true">☝️</span> Before we begin (⏱️10)

<details>
    <summary><strong>We'll focus on the free screen readers</strong></summary>
<div markdown="1">
- On Windows, we recommend NVDA (it's a bit more mature than Narrator)
- Narrator comes bundled with Windows and VoiceOver (VO) comes bundled with macOS
- On Windows, JAWS is great, but expensive
- For quite a lot of testing, especially simpler components, we usually find the same issue when testing with JAWS or NVDA (or Narrator)
</div>
</details>
<details>
    <summary><strong>We're just covering getting started</strong></summary>
<div markdown="1">
- This session is short, so it can only be a taste test
- Many of the problems occur with the building blocks of the web (headings, images, links, and buttons) so there's value in testing there
- There's loads more to explore and learn if you're interested! Including: changing the voice, the speech rate, the verbosity, and more.
</div>
</details>
<details>
    <summary><strong>Pick a page to test</strong></summary>
<div markdown="1">
- Something you use often
- Something from work!
- Google your favourite fruit or animal, then follow the third search result
- Use some of the WebAIM practice pages: look for "examples and practice" links on [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)
</div>
</details>
<details>
    <summary><strong>We suggest these browser combinations</strong></summary>
<div markdown="1">
Although you can use any browser, these generally give best results:

- NVDA with Firefox
- Narrator with Edge
- VoiceOver with Safari.
</div>
</details>
<details>
    <summary><strong>There'll be some gentle group discussion</strong></summary>
<div markdown="1">
- After each section, we'll ask each group to share a few sentences about how they went
- Nothing formal, no need to stand up or prepare anything
</div>
</details>

<h2>Agenda</h2>

* tic
{:toc}

## <span aria-hidden="true">✔️</span> Intro: What does good sound like? (⏱️5)

Broadly speaking: **it should sound the same as it looks**.

<details>
    <summary><strong>Names and roles are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: "button, save"; "contact us, link".</p>
</details>
<details>
    <summary><strong>States, properties, and values are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: an expanded state on an accordions, the text in a text field</p>
</details>
<details>
    <summary><strong>Groupings and landmarks are announced</strong> <span aria-hidden="true">💁</span></summary>
    <p>For example: a group of radio buttons; the main navigation.</p>
</details>

## <span aria-hidden="true">💁</span> Demo: on/off, next/previous, shh! (⏱️5)

- Mute your sound, or press <kbd>Ctrl</kbd> to pause the speech.
- Or, turn it off entirely!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Start screen reader | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |
| Stop speech | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) | <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |  <kbd>Ctrl</kbd> (or <kbd>Mute</kbd>!) |
| Next item | <kbd>↓</kbd> | <kbd>↓</kbd> | <kbd>→</kbd> |
| Previous item | <kbd>↑</kbd> | <kbd>↑</kbd> | <kbd>←</kbd> |
| Turn off screen reader | <kbd>Caps Lock</kbd> + <kbd>Q</kbd> | <kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd> |  <kbd>Cmd</kbd> + <kbd>F5</kbd> |

## <span aria-hidden="true">🗣️</span> Practice: on/off, next/previous, shh! (⏱️5)

Now you try!

## <span aria-hidden="true">🤓</span> Discussion: on/off, next/previous, shh! (⏱️10)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
If you're watching this online, throw your answers in the chat!

- How was that?
- Where did you get stuck? (and how did you get unstuck?!)
- What was unexpected?

## <span aria-hidden="true">🧠</span> Theory: we're testers, not users (⏱️5)

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

## <span aria-hidden="true">🗣️</span> Practice: headings, images, links! (⏱️15)

**Note for VO users:**

- The <kbd>VO keys</kbd> are <kbd>Ctrl</kbd> + <kbd>Opt</kbd>.
- You can lock <kbd>VO keys</kbd> on by pressing <kbd>VO keys</kbd> + <kbd>;</kbd>. Don't forget to unlock them!

| Action | NVDA | Narrator | VoiceOver 
| ---| --- | --- | --- |
| Next heading | <kbd>h</kbd> | <kbd>h</kbd> | <kbd>VO keys</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> |
| Next heading at level 1-6 | <kbd>1</kbd>-<kbd>6</kbd> | <kbd>1</kbd>-<kbd>6</kbd> | Not available |
| Next image (graphic) | <kbd>g</kbd> | Not available | <kbd>VO keys</kbd> + <kbd>Cmd</kbd> + <kbd>g</kbd> |
| Previous [thing] | <kbd>Shift</kbd> + <kbd>[thing key]</kbd> | <kbd>Shift</kbd> + <kbd>[thing key]</kbd> | <kbd>Shift</kbd> + <kbd>[thing key]</kbd> |
| Next link | <kbd>k</kbd> | <kbd>k</kbd> | <kbd>VO keys</kbd> + <kbd>Cmd</kbd> + <kbd>l</kbd> |
| Next landmark | <kbd>d</kbd> | <kbd>d</kbd> | Not available |
| Start reading from here | <kbd>Caps Lock</kbd> + <kbd>↓</kbd> | <kbd>Caps Lock</kbd> + <kbd>↓</kbd> | <kbd>VO keys</kbd> + <kbd>a</kbd> |

## <span aria-hidden="true">🤓</span> Discussion: headings, images, links! (⏱️10)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
If you're watching this online, throw your answers in the chat!

- How was navigating around with the shortcuts?
- How are the headings on the page? Good structure? Should be a heading / shouldn't be a heading bits of text?
- How were the text alternatives?
- Any "Click here" or "Read more" or other links with confusing link text?

## <span aria-hidden="true">🧠</span> Theory: the two modes of SRs (⏱️5)

Screen readers have two modes: **Browse mode** (which Narrator calls Scan Mode) and **Forms mode**. One way to think about the difference is the keyboard interactions for desktop screen readers.

- In Browse mode, keystrokes perform reading and navigation actions by the screen reader.
- In Forms mode, keystrokes perform data entry actions by the browser.

Screen readers generally change modes automatically. For example: when tabbing into a form field. You can also change modes manually.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Change mode | <kbd>Caps Lock</kbd> + <kbd>Space Bar</kbd> | <kbd>Caps Lock</kbd> + <kbd>Space Bar</kbd> + <kbd>Enter</kbd> |  Not available |

## <span aria-hidden="true">🗣️</span> Practice: form and function (⏱️15)

Test some interactive elements, especially help text and errors. Tab through the page, or jump to the next form element.

Remember our "What does good sound like?" from earlier:

- Names and roles are announced
- States, properties, and values are announced
- Groupings and landmarks are announced

A new one for here: help text and error text is announced when a field gets focus.

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Next form element | <kbd>f</kbd> | <kbd>f</kbd> | <kbd>VO keys</kbd> + <kbd>Cmd</kbd> + <kbd>j</kbd> |
| Next interactive element | <kbd>Tab</kbd> | <kbd>Tab</kbd> | <kbd>Tab</kbd> |

### <span aria-hidden="true">📋</span> Aside: listing things (⏱️5)

NVDA and VO both let you list stuff: all the links, buttons, headings, and so on. In usability testing we don't tend to see people using these often. This lists can be helpful to us testers though!

| Action | NVDA | Narrator | VoiceOver |
| --- | --- | --- | --- |
| Elements list | <kbd>Caps Lock</kbd> + <kbd>F7</kbd> | Not available | Has Rotor |
| Rotor | Has Elements list | Not available | <kbd>VO keys</kbd> + <kbd>u</kbd> |
| List all landmarks | Available in Elements list | <kbd>Caps Lock</kbd> + <kbd>F5</kbd> |Available in Rotor  |
| List all headings | Available in Elements list | <kbd>Caps Lock</kbd> + <kbd>F6</kbd> |Available in Rotor  |
| List all links | Available in Elements list | <kbd>Caps Lock</kbd> + <kbd>F7</kbd> | Available in Rotor |

## <span aria-hidden="true">🤓</span> Discussion: form and function (⏱️10)

We'll do a quick go around the room. Pick one or two of these and give us a few sentences.
If you're watching this online, throw your answers in the chat!

- What went well?
- What went weird?
- What did you learn?

<div class="boxout">
And the big question: <strong>what will you do next?</strong>
</div>
## <span aria-hidden="true">🛟</span> Get help! (⏱️5)

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
