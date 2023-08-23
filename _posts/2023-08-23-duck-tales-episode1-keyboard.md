---
title: "Duck Tales Episode 1: Keyboard"
layout: post
description: "Episode 1 of Duck Tales: How to QAC more gooder."
image: /img/2023/08/ducktales1.png
category: tutorial
---

A 30 minute session to get some practice with a part of [QAC](/2021/12/13/qac/)ing.

## Warm-up 

Here are a few questions about keyboard testing. Pick one and bring your answer along to the session!

- Who uses the keyboard?
- What key does what?
- What do the Web Content Accessibility Guidelines say about keyboard accessibility?
- What keyboard testing do you already do?

### Share your answers

Here are some example answers. Don't peek until you've shared your own, though!

<details>
	<summary>Who uses the keyboard?</summary>
<div markdown="1">
- “Power users” use the keyboard because it’s more efficient. More accurate, easier muscle memory.
- People with motor impairments find the keyboard easier or more comfortable to use.
- Desktop screen reader users only use the keyboard. So many keyboard shortcuts! 🤩
</div>
</details>

<details>
	<summary>What key does what?</summary>
<div markdown="1">
- `Tab`: next focusable element / group, `Shift` + `Tab`: previous focusable element / group.
- `↑ ↓ ← →`: between options in group.
- For specific UI elements, choose the pattern in [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/) and go to the Keyboard Interaction section.
</div>
</details>

<details>
	<summary>What do the Web Content Accessibility Guidelines say about keyboard accessibility?</summary>
<div markdown="1">
<p>Lots! Some under Perceivable, more under Operable. [Filter the Quick Reference by the keyboard tag](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&showtechniques=123%2C242&tags=keyboard&technologies=smil%2Cpdf%2Cflash%2Csl#keyboard-accessible) to see them all.</p>
</div>
</details>

## Check that everything works with the keyboard

After five minutes of testing, stop and do a one-minute review with a partner. What did you do, what did you learn?
{:.boxout }

- Can you use every interactive element (links, buttons, form controls) on the page?
- Can you see where you are on the page?
- Can you complete your task easily, compared to using a mouse or trackpad?

### How to move around

- `Tab`: moves to next interactive element / group.
- `Shift` + `Tab`: moves to previous interactive element / group.
- `↑` `↓` `←` `→`: moves between options in a group.
- `Space`: toggles the selected element.
- `Enter`: performs the action.
- `Escape`: escapes! Closes things that are open.

What’s a group? A “pick only one” set of fields.
{:.boxout.boxout-alt }

If you're only testing part of a page, you can skip some `Tab`s by clicking on any element just before your testing section. The clicked element doesn't have to be interactive!
{:.boxout }

## Video

[Keyboard Compatibility video (1 minute)](https://www.w3.org/WAI/perspective-videos/keyboard/) from the WAI (Web Accessibility Initiative) Perspectives Videos.

## Cool-down

### What next?

Set yourself a goal to put what you learned into practice.

- **What** will you do?
- **When** will you do it?
- **Where** will you do it?
- **Who** will be involved?
- **How** will you do it?
- **Why** do _this_?

Write a sentence starting with "I will...". Include as many of the 5Ws and 1H as you can for best results!

### Quick reflection

Pick one to answer and share with the group.

- What did you enjoy about the session?
- What surprised you?
- How confident do you feel testing with the keyboard now?

## Further Reading

- [Keyboard access and visual focus section](https://www.w3.org/WAI/test-evaluate/preliminary/#interaction) of Easy Checks – A First Review of Web Accessibility.
- [Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_focus_vs_selection) on APG.
- [Keyboard Accessibility at WebAIM](https://webaim.org/techniques/keyboard/).
- [WCAG Guideline 2.1 – Keyboard Accessible](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#keyboard-accessible): Make all functionality available from a keyboard.
