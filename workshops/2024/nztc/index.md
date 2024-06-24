---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits"
---

Hi!

Live list of links lives in the [Accessibility workshop channel](https://discord.com/channels/1229661457168465952/1251784545691504660) of the Software Testing New Zealand Discord group.

Table of contents for this page:

* TOCalosh
{:toc}

## About the workshop

### Schedule

<ul>
    <li><strong>9.30am&ndash;10.45am: Session 1</strong></li>
    <li>10.45am&ndash;11.15am: Morning tea</li>
    <li><strong>11.15am&ndash;12.30pm: Session 2</strong></li>
    <li>12.30pm&ndash;1.30pm: Lunch</li>
    <li><strong>1.30pm&ndash;2.45pm: Session 3</strong></li>
    <li>2.45pm&ndash;3.15pm: Afternoon tea</li>
    <li><strong>3.15pm&ndash;4.30pm: Session 4</strong></li>
</ul>


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

- Short welcome presentation.
- 10 minutes of testing with [axe DevTools browser extension](https://www.deque.com/axe/browser-extensions/).
- Get testing!
    - Read through the [the activities list](./activities/).
    - In particular, [the accessibility tree](/2022/06/08/the-accessibility-tree/) and the [start here section](./activities/#start-here).

### Session 2

- Short WCAG presentation.
- Carry on testing using the [the activities list](./activities/). 
- Lunch activity.

### Session 3

- Follow up on lunch activity.
- Something a bit fun for 10 minutes.
    - [(Accessible) Video, audio, or both](/2023/04/11/accessible-audio-video-or-both/) (think more broadly about alternate formats).
    - Play [Hocus focus](https://focus.hteumeuleu.com/) (have a bit of fun with keyboard interactions).
- Carry on testing using the [the activities list](./activities/). 

### Session 4

- Reorient after the break.
- Bringing it all together with a 5W1H (What, When, Where, Who, Why, How) questions exercise.
- (Re)connect to Session 1 and barriers and spectrum and humans.
- Carry on testing using the [the activities list](./activities/). 
- [Feedback form](https://docs.google.com/forms/d/e/1FAIpQLScgiGPRv7uZeGXT2CyflsZvUe_JeTPR70V7QQD47FK1P-gqZg/viewform?usp=sf_link). Three open questions, all optional:
    - What worked well? 👍
    - What could we change? Δ
    - Anything else? ☺️