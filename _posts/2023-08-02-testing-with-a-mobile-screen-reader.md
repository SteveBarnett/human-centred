---
title: Testing with a mobile screen reader
layout: post
description: Brief Acceptance Criteia for testing with a mobile screen reader 
image: /img/2023/08/twamsr.png
category: "how-to guide"
---

## Getting started

### Navigation

- Navigate previous / next by swiping left / right, or navigate by touch by moving a finger over the screen
- Double tap to activate the selected item
- Scroll around
	- VoiceOver: 3-finger swipe up or down
	- TalkBack: 2-finger swipe up or down
	
### Menus

-  VoiceOver (Rotor)
	- Open and select by twisting two fingers like turning a dial.
	- Swipe up / down for previous / next item
	- Customise Rotor items in `Settings` → `Accessibility` → `VoiceOver` → `Rotor`.
- TalkBack
	- Global Context Menu: swipe down then right
	- Local Context Menus: swipe up then right

### Entering text
		
- Typing: in a text field, drag on the virtual keyboard and release on a letter
- Test with a Bluetooth keyboard
	- for easier typing (as a tester of screen readers, rather than an everyday user)
	- for testing keyboard compatibility
- Pause or resume reading: Two-finger tap

## 1. Test the headings

The headings divide up the page into sections.

### Acceptance Criteria

- Everything that looks like a heading (big, bold) is marked up as a heading. 
- (Where possible) Heading levels are set and headings are nested correctly.
	- The sections of the page have start with an h2.
	- The sub-sections (of the above sections) start with an h3.
	- And so on.

## 2. Test the interactive elements

Interactive elements should sound like they look, and make sense.

### Acceptance Criteria

- The elements has appropriate semantics (e.g. `Button`, `Link`, `Text field`) 
- The element has an accessible name.
- The element has a good accessible name.
- The order of the elements follow reading order (left to right, top to bottom).

### Element-specific Acceptance Criteria

- Link text describes the destination.
- Button text describes the action.
- Field name describes the input.

## 3. Test the images

Since images are non-text content, they must (usually) have a text alternative. We can use a screen reader’s menu functionality to go through all the images in order.

More information and context on images and when they need (and don’t need!) a text alternative: [A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/).

### Acceptance Criteria

- Images that are presentational only are it is ignored by the screen reader (having been marked as `decorative`).
- If the image has a text alternative it describes the content or function.

## 4. Test error handling and focus management

When submitting a form or entering data, the user should be guided through what the errors are and how to fix them.

### Acceptance Criteria

On submitting a form with errors, either:

- focus is sent to the first field with an error;
- an error summary is provided at the top of the page and focus is sent to the summary.

## 5. Test status messages and loading

Any visual indication of loading or updating should have a text equivalent.

### Acceptance Criteria

- Loading states are announced

## Resources

### VoiceOver on iOS

- [VoiceOver on Mobile](https://webaim.org/articles/voiceover/mobile) (only Evaluation section is very web-specific)
- [VoiceOver Gestures on iOS](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts) on Deque
- [Learn VoiceOver gestures on iPhone](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios) on iPhone User Guide.

### TalkBack on Android

- [Using TalkBack to Evaluate Web Accessibility](https://webaim.org/articles/talkback/) on WebAIM (only Evaluation section is very web-specific)
- [TalkBack Gestures on Android](https://dequeuniversity.com/screenreaders/talkback-shortcuts) on Deque
- [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=3529932) on Android Accessibility Help

### Testing and demos

- [Mobile Screen Reader Testing](https://scottvinkle.me/blogs/work/mobile-screen-reader-testing). An overview of setup, common gestures, and testing.
- [Browsing with a mobile screen reader](https://tetralogical.com/blog/2021/10/05/browsing-with-a-mobile-screen-reader/) on TetraLogical. Includes a [4 minute video demo:  Browsing with a mobile screen reader](https://www.youtube.com/watch?v=ev8ERS5Z3NU).