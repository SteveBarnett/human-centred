---
title: Mobile screen reader testing workshop
layout: post
description: An outline for a mobile screen reader testing workshop
bodyclass: workshop
image: /img/2025/09/msrw.png
---

<h2><span aria-hidden="true">☝️</span> Before we begin</h2>

Here's [a Google doc handout](https://docs.google.com/document/d/1b3YY-Zf_gzhaLkK0T11lwYPVWH4wFhqwTiZRDNHqluY/edit?usp=sharing) with the gesture guides.

<details>
    <summary>We'll focus on the two most popular mobile screen readers</summary>
<div markdown="1">
- VoiceOver on iOS
- TalkBack on Android
    - If you don't have TalkBack installed, grab the [Android Accessibility Suite](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback)
</div>
</details>

<details>
    <summary>We're covering websites, not mobile apps</summary>
<div markdown="1">
- Websites and mobile apps are built with different technologies
- Navigation and interaction is a bit different on websites and mobile apps
- Screen readers announce them a little differently
</div>
</details>

<details>
    <summary>We're just covering how to get started</summary>
<div markdown="1">
- Most of the accessibility problems occur with foundational stuff, the building blocks of the web
- There's loads more to explore and learn if you're interested!
</div>
</details>

<details>
    <summary>Choosing a page to test</summary>
<div markdown="1">
- Something from work!
- For testing content: [Research insight: accessibility of images](https://tetralogical.com/blog/2022/07/21/research-insight-accessibility-of-images/)
- For testing forms: [NVDA Practice: Forms](https://webaim.org/articles/nvda/forms.htm)
</div>
</details>

<h2>Agenda</h2>

* tic
{:toc}

Depending on how we go with time, we may jump to "Get help!", which is a list of resources.

## <span aria-hidden="true">✔️</span> Intro: What does good sound like?

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


## <span aria-hidden="true">💁</span> Demo: on/off, next/previous, shh!

- Mute your sound, or <kbd class="gesture">two-finger tap</kbd> to pause the speech.
- Or, turn it off entirely!

| Action | iOS | Android |
| ---| --- | --- |
| Start screen reader | <kbd class="gesture">triple-click side button</kbd> | <kbd class="gesture">hold both volume keys</kbd><br>for 3 seconds |
| Stop speech | <kbd class="gesture">two-finger tap</kbd> <span aria-hidden="true">✌️</span> | <kbd class="gesture">two-finger tap</kbd> <span aria-hidden="true">✌️</span> |
| Next item | <kbd class="gesture">Swipe right</kbd> <span aria-hidden="true">➡️</span> | <kbd class="gesture">Swipe right</kbd> <span aria-hidden="true">➡️</span> |
| Previous item | <kbd class="gesture">Swipe left</kbd> <span aria-hidden="true">⬅️</span> | <kbd class="gesture">Swipe left</kbd> <span aria-hidden="true">⬅️</span> |
| Navigate by touch | <kbd class="gesture">Drag one finger</kbd> <span aria-hidden="true">☝️</span> | <kbd class="gesture">Drag one finger</kbd> <span aria-hidden="true">☝️</span> |
| Activate control | <kbd class="gesture">Double tap</kbd> | <kbd class="gesture">Double tap</kbd> |
| Start reading from here | <kbd class="gesture">two-finger swipe down</kbd> | <kbd class="gesture">two-finger triple-tap</kbd> |
| Turn off screen reader | <kbd class="gesture">triple-click side button</kbd> | <kbd class="gesture">hold both volume keys</kbd><br>for 3 seconds |

## <span aria-hidden="true">⚙️</span> Once-off set up: on/off, text, cursor

There are a few things we can do to make testing easier: set a shortcut and show the speech on screen. You will thank yourself later!

(We'll do some more short set up stuff later, as we need it)

### VoiceOver on iOS

- Set the Accessibility Shortcut at `Settings` → `Accessibility` → `General` section > `Accessibility Shortcut` → select `VoiceOver`
    - Then <kbd class="gesture">triple-click side button</kbd> to start/stop VoiceOver
- For a more visible cursor, go to `Settings` → `Accessibility` → `VoiceOver`, `Cursor` section, toggle `Large Cursor` on
- To see a text version of VoiceOver's speech, go to `Settings` → `Accessibility` → `VoiceOver`, toggle `Caption Panel` on

### TalkBack on Android

- Set the Shortcut service at `Settings` → `Accessibility` → `Volume key shortcut`. Select `Use service` and choose `TalkBack`.
    - Then <kbd class="gesture">hold both volume keys</kbd> for 3 seconds to start/stop TalkBack
- For a more visible cursor, go to `Settings` → `Accessibility` → `TalkBack` → `TalkBack settings` → `Change focus indicator` → toggle `Thick borders` on
- To see a text version of TalkBack's speech, go to `Settings` → `Accessibility` → `TalkBack` → `TalkBack settings` → toggle `Display speech output`

## <span aria-hidden="true">🗣️</span> Practice: on/off, next/previous, shh!

Now you try!

## <span aria-hidden="true">🤓</span> Discussion: on/off, next/previous, shh!

- How was that?
- Where did you get stuck? (and how did you get unstuck?!)
- What was unexpected?

## <span aria-hidden="true">🧠</span> Theory: we're testers, not users

<details>
    <summary><strong>Don't worry about trying to have an "authentic" experience. That's not really possible!</strong> <span aria-hidden="true">💁</span></summary>
<div markdown="1">
- If you don't use a screen reader (SR) every day, your experience won't be the same as someone who does.
- How people use their SR can vary wildly from one person to the next. Like many human things!
- To find out what an "authentic" experience is like, we can do usability testing with SR users!

**What we're trying to do is to find barriers that someone who uses a SR every day might encounter**

- *That* we can do, and we can compare what it looks like with what it sounds like.
- It's not "cheating" to look at the screen or to have the voice rate slow!
</div>
</details>

## <span aria-hidden="true">⚙️</span> Once-off set up: Navigate by elements

VoiceOver and TalkBack both have ways to jump around the page, to things like headings, links, and images. VoiceOver has the Rotor and TalkBack has Reading Controls.

We recommend unticking most items, and leaving just some of the most useful ones for testing: Headings, Links, Images, Form Controls, Landmarks, Speech Rate.

- Set VoiceOver's Rotor items at `Settings` → `Accessibility` → `VoiceOver` → `Rotor` → `Rotor Items`
- Set TalkBack's Reading Control items at `Settings` → `Accessibility` → `TalkBack` → `Settings` → `Edit menus` → `Customise reading controls`

## <span aria-hidden="true">🗣️</span> Practice: headings, images, links

| Action | iOS | Android |
| ---| --- | --- |
| Name of tool | Rotor | Reading controls |
| Choose next category | <kbd class="gesture">Two-finger rotation</kbd><br><kbd class="gesture">clockwise</kbd> <span aria-hidden="true">🤌</span><br>(like twisting a knob) | <kbd class="gesture">Swipe up then down</kbd> <span aria-hidden="true" class="flip-vertical">✌️</span><br><kbd class="gesture">in one motion</kbd><br>(like an inverted "V") |
| Choose previous category | <kbd class="gesture">Two-finger rotation</kbd><br><kbd class="gesture">anti-clockwise</kbd> <span aria-hidden="true">🤌</span><br>(like twisting a knob) | <kbd class="gesture">Swipe down then up</kbd> <span aria-hidden="true">✌️</span> <br><kbd class="gesture">in one motion</kbd><br>(like a "V")|
| Next item in category | <kbd class="gesture">swipe down</kbd> <span aria-hidden="true">⬇️</span> | <kbd class="gesture">swipe down</kbd> <span aria-hidden="true">⬇️</span> |
| Previous item in category | <kbd class="gesture">swipe up</kbd> <span aria-hidden="true">⬆️</span>| <kbd class="gesture">swipe up</kbd> <span aria-hidden="true">⬆️</span> |

To stop navigating by items in a category with up and down, go back to swiping right (or left) to go the next (or previous) piece of content on the page. 

## <span aria-hidden="true">🤓</span> Discussion: headings, images, links

- How was navigating around with the shortcuts?
- How are the headings on the page? Good structure? Should-be-a-heading / shouldn't-be-a-heading bits of text?
- How were the text alternatives?
- Any "Click here" or "Read more" or other links with confusing link text?

## <span aria-hidden="true">⚙️</span> Once-off set up: Typing

VoiceOver and TalkBack both have typing options that let you choose how to type: <kbd class="gesture">double tap</kbd> or <kbd class="gesture">lift</kbd>.

### VoiceOver on iOS

Set VoiceOver's typing style at `Settings` → `Accessibility` → `VoiceOver` → `Typing` → `Typing Style`.

- Standard Typing: navigate by touch, double tap to type
- Touch Typing: navigate by touch, lift to type
- <span aria-hidden="true">👉</span> Direct Touch Typing: tap to type (recommended for testing)

### TalkBack on Android

Set TalkBack's typing style items at `Settings` → `Accessibility` → `TalkBack` → `Settings` → `Typing` section, `On-screen keyboard` → `Typing preference`

- Hold finger to select any key, then double-tap
- Hold finger to select letter key, then lift. Double-tap for other keys.
- <span aria-hidden="true">👉</span> Hold finger to select any key, then lift (recommended for testing)

## <span aria-hidden="true">🗣️</span> Practice: forms

Test some interactive elements, especially help text and errors. On desktop, you can <kbd>Tab</kbd> to the next interactive element. On mobile, it's just swipes! But/and you can use the Rotor/Reading Controls.

| Action | iOS | Android |
| ---| --- | --- |
| Next item | <kbd class="gesture">Swipe right</kbd> <span aria-hidden="true">➡️</span> | <kbd class="gesture">Swipe right</kbd> <span aria-hidden="true">➡️</span> |
| Previous item | <kbd class="gesture">Swipe left</kbd> <span aria-hidden="true">⬅️</span> | <kbd class="gesture">Swipe left</kbd> <span aria-hidden="true">⬅️</span> |
| Activate control | <kbd class="gesture">Double tap</kbd> | <kbd class="gesture">Double tap</kbd> |

## <span aria-hidden="true">🤓</span> Discussion: forms

- What went well?
- What went weird?
- What did you learn?

<div class="boxout">
And the big question: <strong>what will you do next?</strong>
</div>

## Get help!

### VoiceOver on iOS

- [VoiceOver on Mobile](https://webaim.org/articles/voiceover/mobile)
- [VoiceOver Gestures on iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts) on Deque
- [Learn VoiceOver gestures on iPhone](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios) on iPhone User Guide.

### TalkBack on Android

- [Using TalkBack to Evaluate Web Accessibility](https://webaim.org/articles/talkback/) on WebAIM (only Evaluation section is very web-specific)
- [TalkBack Gestures on Android](https://dequeuniversity.com/screenreaders/talkback-shortcuts) on Deque
- [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=3529932) on Android Accessibility Help

### Testing and demos

- [Browsing with a mobile screen reader](https://tetralogical.com/blog/2021/10/05/browsing-with-a-mobile-screen-reader/) on TetraLogical. Includes a [4-minute video demo:  Browsing with a mobile screen reader](https://www.youtube.com/watch?v=ev8ERS5Z3NU).

## See also

Two versions of a desktop version of this workshop: [Screen reader testing workshop](/2026/05/25/screen-reader-testing-workshop/) and [Screen reader testing workshop for WWAM](/2026/07/12/screen-reader-testing-workshop-for-wwam/).