---
title: Testing with screen readers
layout: post
description: How and why I test with screen readers on my Mac
image: /img/2019/11/VoiceOver.jpg
---

Testing with a screen reader is an important part of accessibility work. It helps anyone who uses that particular assistive technology (such as blind people and people with other visual disabilities). It helps me check that my code is robust and semantic.

Note: [an updated version of this post](/2019/11/29/testing-with-screen-readers/) is available.

## What I test

The amount of time I have available for testing determines how in-depth I can test. It's only when I have plenty of time that I sit and use a screen reader to read through the whole content of the page in detail. My usual check list looks like this:

1. structure (landmarks, headings, tables);
2. interactions (links, forms);
3. content (alt text);
4. form error handling (tricky enough to be its own thing);
5. order of the content from top to bottom.

I work on a Mac, so I mostly test with VoiceOver. It's not a very popular combo: the [Screen Reader / Browser Combinations in WebAIM's latest Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey8/#browsercombos) show that JAWS and NVDA are both much more popular. There are always compromises and trade-offs to be be made. In this case I'm trading-off testing with an unpopular screen reader and browser combination rather with not testing at all. When I have more time and support I test with TalkBack on Android and with NVDA on Windows.

![Screenshot of me using VoiceOver on a Mac showing "heading level 2"](/img/2019/11/VoiceOver.jpg){: .boxed }

## First time set up

Before getting going for the first time, I needed to do some once-off set up of my system and Safari. I use Firefox and Chrome as my usual browsers, but VoiceOver and Safari work better together.

1. System Preferences:
   1. Keyboard item > Shortcuts tab > tick "Use keyboard navigation to move focus between controls"
2. Safari Preferences:
   1. Advanced tab > Accessibility item, tick "Press Tab to highlight each item on a web page."
   2. AutoFill tab > untick all. (I do this to make VoiceOver less noisy on form fields)

## Getting some help

Both Deque University and WebAIM have great guides to using VoiceOver: [Deque University's VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-basics) and [WebAIM's Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/). I'm a big fan of [Deque's single-page printer-friendly PDF version of their guide](https://dequeuniversity.com/assets/pdf/screenreaders/voiceover-macos-guide.pdf).

## Getting started

Here's what I do each time to get started testing.

- Open Safari. Since it's not my default browser I often forget this step! This leads to me spending a few moments confused about why VoiceOver isn't working properly...
- Start VoiceOver (VO) with <kbd>Cmd</kbd> + <kbd>F5</kbd>;
- Lock VO activation keys with <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>;</kbd>.
  - This means I can use the activation keys without having to hold <kbd>Ctrl</kbd> + <kbd>Option</kbd> each time.
- Press <kbd>Shift</kbd> + <kbd>↓</kbd> to jump into the page.

And here are the commands I use for testing.

- Open the Rotor with <kbd>U</kbd> (and later exit it with <kbd>Esc</kbd>).
  - Use the <kbd>←</kbd> and <kbd>→</kbd> keys to move between menus and <kbd>↑</kbd> and <kbd>↓</kbd> inside menus.
- Cycle through images using <kbd>Cmd</kbd> + <kbd>G</kbd>.
- Use <kbd>R</kbd> and <kbd>C</kbd> to hear row and column headers of tables.
- Start reading with <kbd>A</kbd>. Jump through the page with <kbd>→</kbd>. Stop reading with <kbd>Ctrl</kbd>.
- Jump to the top of the page with <kbd>Fn</kbd> + <kbd>←</kbd>.

## Do the checks

1. Check **structure**
   - Rotor > **Landmarks**
     - do they exist and do they have helpful names?
   - Rotor > **Headings**
     - are they nested correctly?
   - Rotor > **Tables**
     - is there a `caption`?
     - are row and column headers correctly `scope`d?
2. Check **interactions**
   - Rotor > **Links**
     - does the link text describe the destination?
   - Rotor > **Form controls**
     - do fields have associated labels?
     - does button text describe the action?
     - is help text associated with the control (using `aria-describedby`)?
     - do radio and checkboxes have a group name (using `fieldset` and `legend`)?
3. Check **alt text** of images
   - Does the alt text convey the content and function of the image?
4. Check **form error handling**. (Warning! This could get a bit hairy.)
   - Is the error message with the field (added to the `label`, or in an associated `aria-labelledby`)?
   - Is the field marked as invalid (with an `aria-invalid="true"` attribute)?
   - If there's a list of errors at the top of the page:
     - are there in-page links down the page to the fields with errors (and is focus set to that field on jump)?
     - are errors announced? (add `aria-live="assertive"` so it announces and `aria-relevant="additions removals"` so it isn't overly verbose. `role="alert"` gets `aria-atomic="true"` by default, so re-reads the whole thing each time.)
5. Does the **order of content** make sense?

## Summary

Testing with a screen reader has the potential to be complicated and time-consuming. To do a full-on test, it kinda is. I've tried to get around this a bit by:

- getting some experience so I'm a bit faster using one;
- being more choosy about what I test;
- having a standardised way of testing.

I found that after the first few times I started to get the hang of VoiceOver. I got started by using the Rotor. VoiceOver Utility > Web > Web Rotor has a list of items that can be enabled or disabled. At first, I ticked just headings, links, and buttons. As I became more confident, I ticked a few more, then a few more. And now I have that big checklist above. :)
