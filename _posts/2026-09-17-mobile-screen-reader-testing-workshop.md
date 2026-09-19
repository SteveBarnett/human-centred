---
title: Mobile screen reader testing workshop
layout: post
description: An outline for a mobile screen reader testing workshop
bodyclass: workshop
image: /img/2025/09/???.png
---

<h2><span aria-hidden="true">☝️</span> Before we begin</h2>

<details>
    <summary>We'll focus on the two most popular mobile screen readers</summary>
<div markdown="1">
- VoiceOver on iOS, and TalkBack on Android.
- There are other Android ones, but TalkBack is the most popular.
</div>
</details>

<details>
    <summary>We're covering web sites, not apps</summary>
<div markdown="1">
- Web sites and apps announce things a little differently, particularly headings
- Some apps have web views in them!
</div>
</details>

<details>
    <summary>We're just covering getting started</summary>
<div markdown="1">
- Most of the problems occur with foundational stuff, the building blocks of the web.
- There's loads more to explore and learn if you're interested!
</div>
</details>

<details>
    <summary>Ideally, test a fairly familiar page</summary>
<div markdown="1">
- Something you use often
- Something from work!
- Google your favourite fruit or animal (hint: it should be **capybara**), then follow one of the search results
- Two suggestions: "Examples and practice" links on [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/) or [Research insight: accessibility of images](https://tetralogical.com/blog/2022/07/21/research-insight-accessibility-of-images/)
</div>
</details>

If you just want the shortcuts, go to ["Get help!"](#get-help) at the bottom of the page.

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
| Turn off screen reader | <kbd class="gesture">triple-click side button</kbd> | <kbd class="gesture">hold both volume keys</kbd><br>for 3 seconds |

## <span aria-hidden="true">⚙️</span> Once-off set up

There are a few things we can do to make testing easier: set a shortcut and show the speech on screen. You will thank yourself later!

### VoiceOver on iOS

- Set the Accessibility Shortcut at `Settings` → `Accessibility` → `General` section > `Accessibility Shortcut` → select `VoiceOver`
    - Then <kbd class="gesture">triple-click side button</kbd> to start/stop VoiceOver
- To show the VoiceOver's speech on screen, go to `Settings` → `Accessibility` → `VoiceOver`, toggle `Caption Panel` on
- For a more visible cursor, go to `Settings` → `Accessibility` → `VoiceOver`, `Cursor` section, toggle `Large Cursor` on

### TalkBack on Android

- Set the Shortcut service at `Settings` → `Accessibility` → `Volume key shortcut`. Select `Use service` and choose `TalkBack`.
    - Then <kbd class="gesture">hold both volume keys</kbd> for 3 seconds to start/stop TalkBack
- To show TalkBack's speech on screen, go to `Settings` → `Accessibility` → `TalkBack` → `TalkBack settings` → toggle `Display speech output`

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
- How people use their screen reader can vary wildly from one person to the next. Like many human things!
- You can choose not to use it, some everyday users can't.
- To find out about an "authentic" experience, we can do usability testing with everyday users!

**What we're trying to do is to find barriers that someone who uses a SR every day might encounter**

- That we can do, and we can compare what it looks like and what it sounds like.
- It's not "cheating" to look at the screen or to have the voice rate slow!
</div>
</details>

## <span aria-hidden="true">⚙️</span> Once-off set up, part 2

VoiceOver and TalkBack both have ways to jump around the page, to things like headings, links, and buttons. VoiceOver has the Rotor (where you "twist" your fingers in the screen) and TalkBack has Reading Controls (where swipe up then down).

We recommend unticking most items, and leaving just a few. For example: Headings, Links, Form Controls, Landmarks

- Set VoiceOver's Rotor items at `Settings` → `Accessibility` → `VoiceOver` → `Rotor` → `Rotor Items`.
- Set TalkBack's Reading Control items at `Settings` → `Accessibility` → `TalkBack` → `Settings` → `Edit menus` → `Customise reading controls`

## <span aria-hidden="true">🗣️</span> Practice: headings, images, links!

| Action | iOS | Android |
| ---| --- | --- |
| Choose item (what) | Rotor | Reading controls |
| Choose item (how) | <kbd class="gesture">Two-finger rotation</kbd> <span aria-hidden="true">🤌</span> | <kbd class="gesture">swipe up then down</kbd><br>(or down then up) <span aria-hidden="true">✌️</span> |
| Next item | <kbd class="gesture">swipe down</kbd> <span aria-hidden="true">⬇️</span> | <kbd class="gesture">swipe down</kbd> <span aria-hidden="true">⬇️</span> |
| Previous item | <kbd class="gesture">swipe up</kbd> <span aria-hidden="true">⬆️</span>| <kbd class="gesture">swipe up</kbd> <span aria-hidden="true">⬆️</span> |

After swiping down or up, go back to swiping right (or left) to continue from where you are.

## <span aria-hidden="true">🤓</span> Discussion: headings, images, links!

- How was navigating around with the shortcuts?
- How are the headings on the page? Good structure? Should-be-a-heading / shouldn't-be-a-heading bits of text?
- How were the text alternatives?
- Any "Click here" or "Read more" or other links with confusing link text?

## <span aria-hidden="true">⚙️</span> Once-off set up, part 3

VoiceOver and TalkBack both have typing options that let you choose how to type: <kbd class="gesture">double tap</kbd> or <kbd class="gesture">lift</kbd>.

### VoiceOver on iOS

Set VoiceOver's typing style at `Settings` → `Accessibility` → `VoiceOver` → `Typing` → `Typing Style`.

- Standard Typing: navigate by touch, double tap to type
- Touch Typing: navigate by touch, lift to type
- Direct Touch Typing: tap to type

### TalkBack on Android

Set TalkBack's Reading Control items at `Settings` → `Accessibility` → `TalkBack` → `Settings` → `Typing` section, `On-screen keyboard` → `Typing preference`

## <span aria-hidden="true">🗣️</span> Practice: form and function

Test some interactive elements, especially help text and errors. On desktop, you can <kbd>Tab</kbd> to the next interactive element. On mobile, it's just swipes! But/and you can use the Rotor/Reading Controls.

## <span aria-hidden="true">🤓</span> Discussion: form and function

- What went well?
- What went weird?
- What did you learn?

<div class="boxout">
And the big question: <strong>what will you do next?</strong>
</div>

## Get help!

### VoiceOver on iOS

- [VoiceOver on Mobile](https://webaim.org/articles/voiceover/mobile) (only Evaluation section is very web-specific)
- [VoiceOver Gestures on iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts) on Deque
- [Learn VoiceOver gestures on iPhone](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios) on iPhone User Guide.

### TalkBack on Android

- [Using TalkBack to Evaluate Web Accessibility](https://webaim.org/articles/talkback/) on WebAIM (only Evaluation section is very web-specific)
- [TalkBack Gestures on Android](https://dequeuniversity.com/screenreaders/talkback-shortcuts) on Deque
- [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=3529932) on Android Accessibility Help

### Testing and demos

- [Browsing with a mobile screen reader](https://tetralogical.com/blog/2021/10/05/browsing-with-a-mobile-screen-reader/) on TetraLogical. Includes a [4 minute video demo:  Browsing with a mobile screen reader](https://www.youtube.com/watch?v=ev8ERS5Z3NU).