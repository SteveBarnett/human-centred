---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits"
bodyclass: many-headers
---

Hi!

List of links lives at [bit.ly/nztc24](https://bit.ly/nztc24)

- **Barriers** to access is one of way of thinking about accessibility. A disability, a mismatch, occurs when someone's ability comes into contact with a barrier in the product or service. It's our job to find and remove the barriers, and to avoid putting more up in the future.
- **ARIA** stands for Accessible Rich Internet Applications and is the add-on, extra, stuff ([states and properties using HTML attributes](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def)) we can put in our HTML to make it more accessible.
    - [The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1) is: "use HTML instead, if you can."
    - There's also the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/) for guidance on how to build accessibility semantics into web patterns and widgets.
- [**axe**](https://www.deque.com/axe/) is a widely used and respected [engine of rules for checking accessibility](https://github.com/dequelabs/axe-core). It can be run as a linter, as [a browser extension](https://www.deque.com/axe/browser-extensions/), or as part of your automated testing ([Projects that use axe-core](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md#projects-that-use-axe-core)).
- **Audits** are a common way to formally review a product for accessibility. This is commonly done against a standard, often the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242), Version 2.1, Level AA. Version 2.2 was finalised in October 2023.

## Table of contents

* TOCalosh
{:toc}

## Timing

- **`09:30—10:45` — Session 1**
- `10:45—11:15` — Morning tea
- **`11:15—12:30` — Session 2**
- `12:30—13:30` — Lunch
- **`13:30—14:45` — Session 3**
- `14:45—15:15` — Afternoon tea
- **`15:15—16:30` — Session 4**

## [Key takeaways](https://nztestingconf.nz/accessibility-testing-workshop)

- **How to think more accessibly** by thinking more broadly and being able to spot potential barriers to access.
- **How to test more accessibly** by using the keyboard, browser extensions, automated testing, and using assistive technology.
- **How to help our colleagues make more accessible things** by using the social model of accessibility, annotating and checking designs, and writing semantic HTML.
- **How to meet the Web Content Accessibility Guidelines 2.2 Level AA** and go beyond them by thinking and testing more accessibly.

For a really wide view of accessibility, check out [More Accessible Products](/more-accessible-products/).

## Activities

Something to know about before you start: [The accessibility tree](/2022/06/08/the-accessibility-tree/).

Three(ish) lists. Pick one!

- [Accessibility audit process](/2024/06/16/accessibility-audit-process/).
    - [Accessibility audit process for mobile](/2022/05/31/accessibility-audit-process-mobile/).
- [Accessibility Not-Checklist ](https://not-checklist.intopia.digital/)
- [Checklist - The A11y Project](https://www.a11yproject.com/checklist/)

- For understanding seriousness of issues: [Accessibility Audit Severity examples](/2022/12/06/accessibility-audit-severity-examples/).
- For writing up results: [Accessibility Audit Guide: writing good words](/2023/01/13/accessibility-audit-guide-writing-good-words/).

### Quick accessibility (a11y) checks

A bit of framing / thinking: [Efficient accessibility testing](/2023/08/10/efficient-accessibility-testing/).

Overview and high-level version, good for just doing the testing:

- [Quick A11y Checks (QAC! 🦆)](/2021/12/13/qac/) (Keyboard, Headings, axe DevTools). 
- [Quick Accessibility Checks (QAC! 🐥) for mobile](/2023/01/09/qac-for-mobile/) (Larger text, Greyscale, Scanner).

Some other quick versions.

- [Easy Checks – A First Review of Web Accessibility - WAI](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/#form-validation)

### QAC in detail

More detailed version, good for understanding the why and the how and the nuances: 

- [Duck Tales Episode 1: Keyboard](/2023/08/23/duck-tales-episode1-keyboard/).
- [Duck Tales Episode 2: Headings](/2023/08/23/duck-tales-episode2-headings/).
- [Duck Tales Episode 3: axe DevTools](/2023/08/23/duck-tales-episode3-axe-devtools/).

#### Further reading

- [What key does what?](/2021/11/02/what-key-does-what/).
- [More accessible headings](/2022/12/12/more-accessible-headings/).
- [Running and reading axe DevTools](/2023/08/22/running-and-reading-axe-devtools/).

### More thorough checks

- [A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/).
- [Form and error guidelines](/2024/06/18/form-and-error-guidelines/). Extensive!
- [Sounds like a good idea: how to get started testing with a screen reader](/2022/10/15/sounds-like-a-good-idea/).
    - [Testing with screen readers](/2021/07/31/testing-with-screen-readers/).
    - [Testing with a mobile screen reader](/2023/08/02/testing-with-a-mobile-screen-reader/).
    - [Testing with a screen reader (QE / AC edition)](/2022/10/14/testing-with-a-screen-reader/).
    - [The two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/).

### Manual and automated testing, tool-assisted and experiential testing

- [Automated accessibility testing](/2022/04/09/automated-accessibility-testing/).
- [The WebAIM Million 2023](/2023/04/06/the-web-aim-million-2023/).

Go to [Projects that use axe-core](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md#projects-that-use-axe-core) and (hopefully!) find axe for your setup. Prefer end-to-end flavours to unit flavours: axe is best at testing a whole page, as it appears to the user.

Have a read through of [the config options](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure). It can handy to tweak these in the beginning, before running the default set eventually. For example: (temporarily!) including or excluding particular elements, or (temporarily!) excluding certain rules.

## Agenda

### Session 1

Short [welcome preso](welcome.pdf).

Let's get started with 10 minutes of testing. Install the [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/), open it, toggle off Best Practices, and run Scan All Of My Page. We're just having a poke around for now. We'll come back to it later for more detail.

The paid version has extra bells and whistles and things, but the free version is very helpful. I still use the free version!

- What is axe finding?
- Anything unexpected?

### Session 2

- Short [WCAG preso](wcag.pdf).
- Carry on with your next test(s) from [the activities list](#activities).

#### Barriers activity for lunch

- During lunch, try and notice any barriers, any mismatches.
- Can be for yourself, or for someone else.

### Session 3

- After lunch: follow up on “lunch activity” 
- Something a bit fun for about 10 minutes, to get back into it after lunch. Pick one of these:
    - [(Accessible) Video, audio, or both](/2023/04/11/accessible-audio-video-or-both/) (think more broadly about alternate formats)
    - Play [Hocus focus](https://focus.hteumeuleu.com/) (have a bit of fun with keyboard interactions).
- Okay, back into it. Pick your next your next activity from [the activities list](#activities). Highly recommended: headphones on, and get going with (or continue with) screen reader testing. It's medium effort, but very high value.

### Session 4

- after break, reorient
    - how do you want to tie a bow around today?
    - Questions? Questions! Questions.
- Carry on with your next test(s) from [the activities list](#activities).
- bringing it all together, (re)connect to Session 1 and barriers and spectrum and humans
- Feedback form