---
layout: page
title: Activities
---

Something to know about before you start: [The accessibility tree](/2022/06/08/the-accessibility-tree/).

## Start here

Three(ish) lists, they're all good! The rest of this page is my recommendation for breaking down the first one.

1. [Accessibility audit process](/2024/06/16/accessibility-audit-process/)
    - [Accessibility audit process for mobile](/2022/05/31/accessibility-audit-process-mobile/)
2. [Accessibility Not-Checklist ](https://not-checklist.intopia.digital/)
3. [Checklist - The A11y Project](https://www.a11yproject.com/checklist/)

- For understanding seriousness of issues: [Accessibility Audit Severity examples](/2022/12/06/accessibility-audit-severity-examples/).
- For writing up results: [Accessibility Audit Guide: writing good words](/2023/01/13/accessibility-audit-guide-writing-good-words/).

## Quick accessibility (a11y) checks

A bit of framing/thinking: [Efficient accessibility testing](/2023/08/10/efficient-accessibility-testing/).

Overview and high-level version, good for just doing the testing:

- [Quick A11y Checks (QAC! 🦆)](/2021/12/13/qac/) (Keyboard, Headings, axe DevTools)
- [Quick Accessibility Checks (QAC! 🐥) for mobile](/2023/01/09/qac-for-mobile/) (Larger text, Greyscale, Scanner)

Some other quick versions.

- [Easy Checks – A First Review of Web Accessibility – WAI](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/#form-validation)

## QAC in detail

More detailed version, good for understanding the why and the how and the nuances: 

- [Duck Tales Episode 1: Keyboard](/2023/08/23/duck-tales-episode1-keyboard/)
- [Duck Tales Episode 2: Headings](/2023/08/23/duck-tales-episode2-headings/)
- [Duck Tales Episode 3: axe DevTools](/2023/08/23/duck-tales-episode3-axe-devtools/)

### Further reading

- [What key does what?](/2021/11/02/what-key-does-what/)
- [More accessible headings](/2022/12/12/more-accessible-headings/)
- [Running and reading axe DevTools](/2023/08/22/running-and-reading-axe-devtools/)

## More thorough checks

- [A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/).
- [Form and error guidelines](/2024/06/18/form-and-error-guidelines/). Extensive!
- [Sounds like a good idea: how to get started testing with a screen reader](/2022/10/15/sounds-like-a-good-idea/).
    - [Testing with screen readers](/2021/07/31/testing-with-screen-readers/).
    - [Testing with a mobile screen reader](/2023/08/02/testing-with-a-mobile-screen-reader/).
    - [Testing with a screen reader (QE/AC edition)](/2022/10/14/testing-with-a-screen-reader/).
    - [The two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/).

## Manual and automated testing, tool-assisted and experiential testing

- [Automated accessibility testing](/2022/04/09/automated-accessibility-testing/).
- [The WebAIM Million 2023](/2023/04/06/the-web-aim-million-2023/).

Go to [Projects that use axe-core](https://github.com/dequelabs/axe-core/blob/develop/doc/projects.md#projects-that-use-axe-core) and (hopefully!) find axe for your setup. Prefer end-to-end flavours to unit flavours: axe is best at testing a whole page, as it appears to the user.

Have a read through of [the config options](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure). It can handy to tweak these in the beginning, before running the default set eventually. For example: (temporarily!) including or excluding particular elements, or (temporarily!) excluding certain rules.
