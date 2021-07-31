---
title: Testing with screen readers (updated to include mobile Screen Reader instructions)
layout: post
description: How and why I test with screen readers using VoiceOver on MacOS, NVDA on Windows, VoiceOver on iOS, and TalkBack on Android
image: /img/2019/11/VoiceOver.jpg
---

Testing with a screen reader is an important part of accessibility work. It helps anyone who uses that particular assistive technology (such as blind people and people with other visual disabilities). It helps me check that my code is robust and semantic.

This is another update to "notes to self" on how I test with Screen Readers. I've added (brief) instructions for testing with VoiceOver on iOS and TalkBack on Android.

### What I test

The amount of time I have available for testing determines how in-depth I can test. It's only when I have plenty of time that I sit and use a screen reader to read through the whole content of the page in detail. My usual check list looks like this:

1. Check **structure**.
   - **Landmarks**: do they exist and do they have helpful names?
   - **Headings**: are they nested correctly?
   - **Tables**: is there a `caption`? Are row and column headers correctly `scope`d?
2. Check **interactions**.
   - **Links**: does the link text describe the destination?
   - **Form controls**
     - do fields have associated labels?
     - does button text describe the action?
     - is help text associated with the control (using `aria-describedby`)?
     - do radio and checkboxes have a group name (using `fieldset` and `legend`)?
3. Check **alt text** of images: does it convey the content and function of the image?
4. Check **form error handling**. (Warning! This could get a bit hairy. 😬)
   - Is the error message with the field (added to the `label`, or in an associated `aria-labelledby`)?
   - Is the field marked as invalid (with an `aria-invalid="true"` attribute)?
   - If there's a list of errors at the top of the page:
     - are there in-page links down the page to the fields with errors (and is focus set to that field on jump)?
     - are errors announced? (add `aria-live="assertive"` so it announces and `aria-relevant="additions removals"` so it isn't overly verbose. `role="alert"` gets `aria-atomic="true"` by default, so re-reads the whole thing each time.)
5. Does the **order of content** make sense?

![Screenshot of me using VoiceOver on a Mac showing "heading level 2"](/img/2019/11/VoiceOver.jpg){: .boxed }

### Getting some help

Both Deque University and WebAIM have great guides.

- VoiceOver on MacOS
  - [Deque's VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-basics)
  - [WebAIM's Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/).
- NVDA on Windows
  - [Deque's NVDA Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)
  - [WebAIM's Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)

### Testing with VoiceOver on MacOS

#### First time set up

Before getting going for the first time, I needed to do some once-off set up of my system and Safari. I use Firefox and Chrome as my usual browsers, but VoiceOver and Safari work better together.

1. System Preferences:
   1. Keyboard item > Shortcuts tab > tick "Use keyboard navigation to move focus between controls"
2. Safari Preferences:
   1. Advanced tab > Accessibility item, tick "Press Tab to highlight each item on a web page."
   2. AutoFill tab > untick all. (I do this to make VoiceOver less noisy on form fields)

#### Each time set up

Here's what I do each time to get started testing.

- Open Safari. Since it's not my default browser I often forget this step! This leads to me spending a few moments confused about why VoiceOver isn't working properly...
- Start VoiceOver (VO) with <kbd>Cmd</kbd> + <kbd>F5</kbd>;
- Lock VO activation keys with <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>;</kbd>.
  - This means I can use the activation keys without having to hold <kbd>Ctrl</kbd> + <kbd>Option</kbd> each time.
- Press <kbd>Shift</kbd> + <kbd>↓</kbd> to jump into the page.

#### Testing

- Open the Rotor with <kbd>U</kbd> (and later exit it with <kbd>Esc</kbd>).
  - Use the <kbd>←</kbd> and <kbd>→</kbd> keys to move between menus and <kbd>↑</kbd> and <kbd>↓</kbd> inside menus. (Test landmarks, headings, links, and forms from here.)
- Cycle through images using <kbd>Cmd</kbd> + <kbd>G</kbd>.
- Use <kbd>R</kbd> and <kbd>C</kbd> to hear row and column headers of tables.
- Start reading with <kbd>A</kbd>. Jump through the page with <kbd>→</kbd>. Stop reading with <kbd>Ctrl</kbd>.
- Jump to the top of the page with <kbd>Fn</kbd> + <kbd>←</kbd>.

### Testing with NVDA on Windows

#### First time set up

Turn on Speech Viewer in Tools. This displays the speech as text on the screen. I find it very helpful!

#### Testing

- Turn off Num Lock. (I tend to have it on for day to day use)
- Start NVDA with <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>N</kbd>.
- Open the helper with <kbd>Ins</kbd> + <kbd>F7</kbd>. (Test landmarks, headings, links, forms from here.)
- Cycle through images using <kbd>G</kbd>.
- Use <kbd>T</kbd> to cycle through tables. Use <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + arrow keys to move around table cells.
- Use <kbd>Ins</kbd> + <kbd>Space</kbd> to switch between Browse mode (reading) and Focus mode (entering data in forms) if needed.
- Jump to the top of the page with Numpad <kbd>+</kbd>.

### Testing with VoiceOver on iOS

VoiceOver is most frequently used with Safari, so test with that.

#### First-time set up

- Use the Accessibility Shortcut to switch VoiceOver on and off quickly
  - This lets you triple-click the side button to stop / start VoiceOver
  - Settings → Accessibility → General > Accessibility Shortcut → select VoiceOver
    - If you want to see the text of VoiceOver on screen, enable Caption Panel
- Customise the Rotor
  - This lets you choose what appears in the Rotor
  - Settings → Accessibility → VoiceOver → Rotor. Tick the following: Buttons, Form Controls, Headings, Images, Landmarks, Links, Lists, Search fields, Static Text, Zoom. 

#### Testing

- Navigate by touch
  - Drag your finger over the screen
  - Double tap to open links, press buttons, etc.
- Navigate by swiping
  - Swipe right to move to the next item (text or interactive controls)
  - Swipe left to move to the previous item
- Scroll by flicking with three fingers
- Use the Rotor to navigate by elements
  - Open the Rotor by twisting two fingers like a dial
  - Swipe up or down to jump between elements in the the selected category

### Testing with TalkBack on Android

TalkBack is most frequently used with Chrome, so test with that.

#### First-time set up

- Use the shortcut service to switch TalkBack on and off quickly.
  - This lets you hold both volume keys for 3 seconds to start / stop TalkBack.
  - Settings → Accessibility → Volume key shortcut. Select Use service and choose TalkBack as the Shortcut service.
- If you want to see the text of TalkBack on screen, go to Settings → Accessibility > Caption preferences → Use captions

#### Testing

- Navigate by touch
  - Drag your finger over the screen
  - Double tap to open links, press buttons, etc.
- Navigate by swiping
  - Swipe right to move to the next item (text or interactive controls)
  - Swipe left to move to the previous item
- Scroll with two fingers

### Summary

Testing with a screen reader has the potential to be complicated and time-consuming. To do a full-on test, it kinda is. I've tried to get around this a bit by:

- getting some experience so I'm a bit faster using one;
- testing the most important things first;
- having a standardised way of testing.
