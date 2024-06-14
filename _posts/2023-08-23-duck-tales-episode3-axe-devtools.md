---
title: "Duck Tales Episode 3: axe DevTools"
layout: post
description: "Episode 3 of Duck Tales: How to QAC more gooder."
image: /img/2023/08/ducktales3.png
category: tutorial
---

A 30 minute session to get some practice with a part of QACing.

Make sure you have axe DevTools installed before the session: 

- [axe Chrome browser extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)
- [axe Firefox browser extension](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)
- [axe Edge browser extension](https://microsoftedge.microsoft.com/addons/detail/axe-web-accessibility-t/kcenlimkmjjkdfcaleembgmldmnnlfkn)

## Warm-up

Here are a few questions about axe DevTools. Pick one and bring your answer along to the session!

- What’s axe’s Manifesto?
- Roughly speaking, how many issues does axe’d automatic tests catch?
- Where / how else can you run axe?
- Can automated testing cover every accessibility issue?

### Share your answers

Here are some example answers. Don't peek until you've shared your own, though!

<details>
	<summary>What’s axe’s Manifesto?</summary>
<div markdown="1">
[Among other things: zero false positives](https://github.com/dequelabs/axe-core#about-axe---our-manifesto) and highly configurable.
</div>
</details>

<details>
	<summary>Roughly speaking, how many issues does axe’d automatic tests catch?</summary>
<div markdown="1">
“On average 57% of WCAG issues” according to [their docs on GitHub](https://github.com/dequelabs/axe-core#the-accessibility-rules). But the most accurate answer is “It depends”.
</div>
</details>

<details>
	<summary>Where / how else can you run axe?</summary>
<div markdown="1">
Lots of places! In particular: in unit tests with `jest-axe` and in end-to-end tests with `cypress-axe` or `playwright-axe`.
</div>
</details>

<details>
	<summary>Can automated testing cover every accessibility issue?</summary>
<div markdown="1">
No! But it can pick up lots. As you might expect, it’s good at quantitative stuff, but not so good at qualitative stuff. Check out [Automated accessibility testing](/2022/04/09/automated-accessibility-testing/) for more detail.
</div>
</details>

## Check that axe DevTools returns few (or no!) issues

> After five minutes of testing, stop and do a one-minute review with a partner. What did you do, what did you learn?

- How many Critical issues did axe flag?
- How many Serious issues did axe flag?
- How many Moderate issues did axe flag?
- How many Minor issues did axe flag?
- How many Best Practice issues did axe flag?

### How to run and read axe

If you’d like a detailed guide, check out [Running and reading axe DevTools](/2023/08/22/running-and-reading-axe-devtools/).

## Videos

- [Clip of Getting Started with the axe DevTools Browser Extension](https://youtube.com/clip/UgkxTkjPTBc-Uyy7qH28wh_D6BmSFtgG5rDL)

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
- How confident do you feel running and reading axe DevTools now?

## Further Reading

[List of Axe HTML versions](https://dequeuniversity.com/rules/axe/html). Choose the latest version to read a List of Axe HTML Rules with Description and Impact. Follow the rule link to read How to Fix the Problem, Why it Matters, and Compliance Data & Impact.
