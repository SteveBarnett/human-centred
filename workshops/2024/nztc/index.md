---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits"
---

Hi!

Live list of links lives at [bit.ly/nztc24](https://bit.ly/nztc24).

Table of contents for this page:

* TOCalosh
{:toc}

## About the workshop

### Schedule

- **`09:30—10:45` — Session 1**
- `10:45—11:15` — Morning tea
- **`11:15—12:30` — Session 2**
- `12:30—13:30` — Lunch
- **`13:30—14:45` — Session 3**
- `14:45—15:15` — Afternoon tea
- **`15:15—16:30` — Session 4**

### [Key takeaways](https://nztestingconf.nz/accessibility-testing-workshop)

- **How to think more accessibly** by thinking more broadly and being able to spot potential barriers to access.
- **How to test more accessibly** by using the keyboard, browser extensions, automated testing, and using assistive technology.
- **How to help our colleagues make more accessible things** by using the social model of accessibility, annotating and checking designs, and writing semantic HTML.
- **How to meet the Web Content Accessibility Guidelines 2.2 Level AA** and go beyond them by thinking and testing more accessibly.

For a really wide view of accessibility, check out [More Accessible Products](/more-accessible-products/).

### The big picture

- **Barriers** to access is one of way of thinking about accessibility. A disability, a mismatch, occurs when someone's ability comes into contact with a barrier in the product or service. It's our job to find and remove the barriers, and to avoid putting more up in the future.
- **ARIA** stands for Accessible Rich Internet Applications and is the add-on, extra, stuff ([states and properties using HTML attributes](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def)) we can put in our HTML to make it more accessible.
    - [The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1) is: "use HTML instead, if you can."
    - There's also the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/) for guidance on how to build accessibility semantics into web patterns and widgets.
- [**axe**](https://www.deque.com/axe/) is a widely used and respected [engine of rules for checking accessibility](https://github.com/dequelabs/axe-core). It can be run as a linter, as [a browser extension](https://www.deque.com/axe/browser-extensions/), or as part of your automated testing ([Projects that use axe-core](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md#projects-that-use-axe-core)).
- **Audits** are a common way to formally review a product for accessibility. This is commonly done against a standard, often the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242), Version 2.1, Level AA. Version 2.2 was finalised in October 2023.


## Agenda

### Session 1

- Short welcome preso: [session-1.pdf](session-1.pdf).
- 10 minutes of testing with [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/).

### Session 2

- Short WCAG preso: [session-2.pdf](session-2.pdf).
- Carry on with your next test(s) from [the activities list](./activities/). 
- Lunch activity

### Session 3

- Guide slides: [session-3.pdf](session-3.pdf).
- Follow up on lunch activity.
- Something a bit fun for 10 minutes.
    - [(Accessible) Video, audio, or both](/2023/04/11/accessible-audio-video-or-both/) (think more broadly about alternate formats)
    - Play [Hocus focus](https://focus.hteumeuleu.com/) (have a bit of fun with keyboard interactions).

### Session 4

- Guide slides: [session-4.pdf](session-4.pdf).
- Reorient after the break.
- Bringing it all together with a 5W1H.
- (re)connect to Session 1 and barriers and spectrum and humans.
- [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScgiGPRv7uZeGXT2CyflsZvUe_JeTPR70V7QQD47FK1P-gqZg/viewform?usp=sf_link). Three open questions, all optional:
    - What was great? 👍
    - What could we change? Δ
    - Anything else? ☺️