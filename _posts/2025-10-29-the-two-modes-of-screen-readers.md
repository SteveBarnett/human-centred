---
title: The two modes of Screen Readers
layout: post
description: The two modes of Screen Readers (updated)
image: /img/2022/02/bmafm.png
---

This is an updated version of [an older post of the same name](/2022/02/10/the-two-modes-of-screen-readers/).

Screen readers have two modes: Browse mode and Forms mode (also known as Focus mode). One way to think about the difference is the keyboard interactions.

- In Browse mode pressing keys performs reading and navigation actions. For example: pressing <kbd>h</kbd> goes to the next heading; pressing <kbd>b</kbd> goes to the next button.
- In Forms mode pressing keys enters data. For example: pressing <kbd>h</kbd> enters "h" into a text field; pressing <kbd>b</kbd> enters "b" into a text field.

Screen readers generally change modes automatically, particularly when entering a form field. With JAWS or NVDA the user can manually change modes. With VoiceOver on MacOS, VoiceOver on OS, or TalkBack on Android, the user cannot manually changes modes.

### Browse mode

Browse mode is for reading. In Browse mode pressing the <kbd>↓</kbd> key moves the virtual cursor forward in the document and reads the next item. Keyboard focus does not move. The <kbd>↑</kbd> key moves the virtual cursor backward and reads the previous item. The page is read out in the HTML source order.

Keyboard shortcuts are available to move through words, sentences, paragraphs, lists, headings, tables, lists, images, and more. Some screen reader users use headings to navigate around a page. Everything on the page that is not explicitly hidden (using `aria-hidden`) is read out.

### Forms mode

Forms mode is for entering data in forms. In Forms mode, pressing the <kbd>Tab</kbd> key moves the virtual cursor and keyboard focus to the next focusable element. Other keys like <kbd>Escape</kbd>, <kbd>Space</kbd>, <kbd>Enter</kbd>, and the arrow keys allow more interactivity with the element that has keyboard focus.

Text (including headings and lists), images, and disabled form elements, do not receive focus.
