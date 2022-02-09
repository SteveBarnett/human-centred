---
title: The two modes of Screen Readers
layout: post
description: The two modes of Screen Readers
image: /img/2022/02/bmafm.png
---

Broadly speaking, all screen readers have two modes: Browse mode and Forms mode.

Note: JAWS calls Forms mode "Focus mode", and VoiceOver doesn't give it a name at all.

## Browse mode

In **Browse mode**, the whole page is read out in the HTML source order. Many screen reader users use headings to navigate around a page, then use the "Start reading" command to hear the rest of that part of the page.

Commands are available to move through words, sentences, paragraphs, lists, headings, tables, lists, images, and more. Everything on the page that is not explicitly hidden (using `aria-hidden`) is read out.

## Forms mode

In **Forms mode**, the person uses Tab to move to the next focusable element or group. Other keys like <kbd>Escape</kbd>, <kbd>Space</kbd>, <kbd>Enter</kbd>, and the arrow keys allow more interactivity with the element that has keyboard focus.

Text (including headings and lists), images, disabled form elements, do not receive focus.