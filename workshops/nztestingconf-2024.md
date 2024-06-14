---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits (NZTestingConf 2024)"
---

* Do not remove this line (it will not be displayed)
{:toc}

## TODO

- Have an analogy thread?
- Theme: **barriers**, think more broadly, in a more human-centred way
- Finalise the presentations for talky bits
    - fewer words on screen
    - Combine not-binary and not-separate, include ["100% accessible" is impossible](/2022/09/21/100-percent-accessible-is-impossible/), see also [Aside: a note on binary thinking](/2024/02/20/knowing-when-to-quit-an-audit/#aside-a-note-on-binary-thinking)
- Write up barriers activity for [Going-into-lunch activity](#going-into-lunch-activity)

## [Key takeaways](https://nztestingconf.nz/accessibility-testing-workshop)

- **How to think more accessibly** by thinking more broadly and being able to spot potential barriers to access.
- **How to test more accessibly** by using the keyboard, browser extensions, automated testing, and using assistive technology.
- **How to help our colleagues make more accessible things** by using the social model of accessibility, annotating and checking designs, and writing semantic HTML.
- **How to meet the Web Content Accessibility Guidelines 2.2 Level AA** and go beyond them by thinking and testing more accessibly.

## Activities

- [Efficient accessibility testing](/2023/08/10/efficient-accessibility-testing/)
- [Accessibility audit process](/2022/01/24/accessibility-audit-process/)
    - [The accessibility tree](/2022/06/08/the-accessibility-tree/)
    - [Accessibility and usability considerations for disabling buttons and inputs](/2021/08/06/accessibility-and-usability-considerations-for-disabling-buttons-and-inputs/)
    - [Quick A11y Checks (QAC! 🦆)](/2021/12/13/qac/) (Keyboard, Headings, axe DevTools)
        - [Duck Tales Episode 1: Keyboard](/2023/08/23/duck-tales-episode1-keyboard/)
            - [What key does what?](/2021/11/02/what-key-does-what/)
        - [Duck Tales Episode 2: Headings](/2023/08/23/duck-tales-episode2-headings/)
            - [More accessible headings](/2022/12/12/more-accessible-headings/)
        - [Duck Tales Episode 3: axe DevTools](/2023/08/23/duck-tales-episode3-axe-devtools/)
            - [Running and reading axe DevTools](/2023/08/22/running-and-reading-axe-devtools/)
    - [Sounds like a good idea: how to get started testing with a screen reader](/2022/10/15/sounds-like-a-good-idea/)
        - [Testing with screen readers](/2021/07/31/testing-with-screen-readers/)
        - [Testing with a screen reader (QE / AC edition)](/2022/10/14/testing-with-a-screen-reader/)
        - [The two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/)
    - [A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/)
- [Accessibility audit process for mobile](/2022/05/31/accessibility-audit-process-mobile/)
    - [WCAG and mobile](/2023/08/02/wcag-and-mobile/)
    - [Quick Accessibility Checks (QAC! 🐥) for mobile](/2023/01/09/qac-for-mobile/)
    - [Testing with a mobile screen reader](/2023/08/02/testing-with-a-mobile-screen-reader/)
- [Accessible Engineering scorecard](/2023/06/22/accessible-engineering-scorecard/)
- [Automated accessibility testing](/2022/04/09/automated-accessibility-testing/)
    - [The WebAIM Million 2023](/2023/04/06/the-web-aim-million-2023/)

For understanding seriousness: [Accessibility Audit Severity examples](/2022/12/06/accessibility-audit-severity-examples/).

For writing up results: [Accessibility Audit Guide: writing good words](/2023/01/13/accessibility-audit-guide-writing-good-words/).

## Session 0

### Warm-up email

Hello there. Thank you for signing up for the Accessibility testing workshop. You rock!

To help get you ready, we've got a little warm-up exercise for you 💪. Pick one (or more!) of the following questions to answer before the workshop. We'll be sharing and discussing our answers in the first session.

- What do you already know about accessibility?
- What do you already know about accessibility testing?
- What do you want to get out of the workshop?

**Important!** Remember to bring: your laptop, headphones, what you're working on right now (or as close to it as you can. This will make the workshop more relevant, which means more useful and more memorable 🤓). 

Regards,

Steve (the facilitator) and the NZTestingConf team

### Warm-up activity

Up on screen as attendees come in.

- Reminder! These were the warm-up questions. If you haven't answered them yet, now's a good time!
    - What do you already know about accessibility?
    - What do you already know about accessibility testing?
    - What do you want to get out of the workshop?
- Brief welcome and warm-up
    - Quick go around your table
    - Name, job title / company / something
    - The question and your answer
- Room-share: anything particularly interesting come up?

## Session 1

- Today is very mostly DIY from a test library, but
- What do you want to hear from me about?

### Slide decks

- [welcome slides](../welcome.pdf)
- [a-human-uses-the-web slides](../a-human-uses-the-web.pdf)
- [how-many-people slides](../how-many-people.pdf)
- [Mind your business slides](../mind-your-business.pdf)
- [not-binary slides](../not-binary.pdf)
- [not-separate slides](../not-separate.pdf)

### Know the technology

How do you know what to do? Not the rules, not the written signs and things.

- Think in semantics
    - links, buttons, radios, checkboxes, selects
- Understand the accessibility tree
    - name, role, value, state

## Session 2

### WCAG bit

A short presentation in Session 2, leading into lunch. Ideally, something to "do" or think about over lunch, along the lines of "that's only the minimum".

[WCAG slides](../wcag.pdf)

Pick 'n' mix activities

### Going-into-lunch activity

TBC

## Session 3

- After lunch: follow up on "lunch activity"
    - What bare minimums did you spot? Or going-the-extra-mile-s?

### Post-lunch activity 10m

- Keep broadening our minds, expanding our spectrums
- Audio description or Halloween keyboards
- Something a bit fun to get back into it

#### Audio desc

- [(Accessible) Video, audio, or both](/2023/04/11/accessible-audio-video-or-both/)

#### Halloween keyboards

- Play [Hocus focus](https://focus.hteumeuleu.com/)

### Back into it: screen reader testing

- Break after about halfway through for Questions? Questions! Questions.
    - If you have a question, chances are somebody else does too.
    - Do screen reader users do {thing}?
    - What's "good" for {thing}?

## Session 4

- after break, reorient
    - how do you want to tie a bow around today?
    - Questions? Questions! Questions.
- activities
- bringing it all together, (re)connect to Session 1 and barriers and spectrum and humans

### Feedback form

#### Blurb

Near the end of the day, we've scheduled 10 minutes of workshop time to fill in a feedback form. This is important to us for making things better each time. It's three open questions, in a slightly classic style: what was good, what was bad, what else?

#### The form

> We'd really appreciate your help making things better. Content, logistics, lunch, any topic you have some feedback on will be helpful!
> All questions are optional. Your responses are anonymous by default, but you're welcome to add your name and/or email address.

- What was great? 👍
- What could we change? Δ
- Anything else? ☺️
- Your name 📛
- Your email address 📧

## Quotes

Sir Timbo quote

> “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.” -- Tim Berners-Lee

Leonie quote

 > "It doesn't have to be perfect, just a little bit better than yesterday" -- Leonie Watson