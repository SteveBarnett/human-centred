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

Things to turn into "cards", in shape like the [QAC](/2021/12/13/qac/): Why do it; What to do; Things to check; How serious it is.

Might have metadata on effort &times; impact.

Perhaps present as a menu, with a chef's recommendation. You can pick what you want to do, do them in any order, but here's a suggestion.

- Quick show of hands
    - What role. Tester / QA / QE? Developer? BA? What else?
    - What stack. Web? Mobile? 
- Barriers activity
    - Essential for some, useful for all
    - It's most truth-y, most close to reality, when we take this broader view
- Start with QAC
    - If you forget everything else, this will serve you well
    - Audit is the big container
- What are the rules of ARIA?
- Go to APG and pick one pattern that seems familiar. What's something new there for you?
- Big Names
    - [Accessibility resources](/2022/02/04/accessibility-resources/)
    - Pick one, spend 10 minutes on it, give back a summary. what's there, what's it good for?
- QAC
    - Using axe for WebAIM Million seems good?
    - Then keyboard and headers here?
    - [Duck Tales Episode 1: Keyboard](/2023/08/23/duck-tales-episode1-keyboard/)
    - [Duck Tales Episode 2: Headings](/2023/08/23/duck-tales-episode2-headings/)
    - [Duck Tales Episode 3: axe DevTools](/2023/08/23/duck-tales-episode3-axe-devtools/)
- Common E&O or WebAIM Million
    - page lang, empty link text, empty button text, missing alt text, missing form label, low colour contrast
    - axe Browser extension will pick up all of these!
- Testing with a SR for 1.3.1 and 4.1.2
- Video to watch: [Web Accessibility Perspectives: Keyboard Compatibility](https://www.youtube.com/watch?v=93UgG72os8M)
- Have a quick play with Microsoft Accessibility Insights.
    - Don't try and do it all, it's a lot!
- Audio description. A bit of fun.
    - [Frozen - Trailer with Audio Description - YouTube - 1m30s](https://www.youtube.com/watch?v=O7j4_aP8dWA).
    - [Lion King Audio Description - Full Clip - YouTube - 2:23](https://www.youtube.com/watch?v=7-XOHN2BWG4)
    - [Pulp Fiction Audio Description Sample on Vimeo - 3m51s](https://vimeo.com/319349157) Just watch a minute or two!
    - What's included? What's left out?
- [Sounds like a good idea: how to get started testing with a screen reader](/2022/10/15/sounds-like-a-good-idea/)
    - [Testing with a screen reader (QE / AC edition](/2022/10/14/testing-with-a-screen-reader/)
    - [Testing with a mobile screen reader](/2023/08/02/testing-with-a-mobile-screen-reader/)
- [Hocus focus](https://focus.hteumeuleu.com/)
- Who uses it? For AT, for keyboards, for tech that's not generally classified as AT but is used as such.
- Automated tests
    - Add axe to unit tests
    - Add cypress / playwright axe to Intergration / E2E tests
    - Use a11y selectors
    - Ideally, not as separate tests, but as part of existing tests
- Closing
    - What I learned
    - Most important thing from today
    - Feedback

### Things to check

- Status messages and loading states
- Tables
- Windows Contrast Themes
- Error handling and text
- Help text
- Images and alt text
    - Photos vs icons
    - My "A quick guide to text alternatives for images"
- Videos and captions (not just subtitles)
- Field names and programmatic link
- Link text, button text
- Page title
- Use of colour
- Colour contrast
- Zoom in
- axe DevTools
- Headings: level, order, text content. See [More accessible headings](/2022/12/12/more-accessible-headings/)
- Test with keyboard. Use, see, usable.

### Tests

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

### Automated vs manual

- Automated testing can catch a lot, but not everything
- [Automated accessibility testing](/2022/04/09/automated-accessibility-testing/)
- **Does an automated test catch it?**
    - ✔ Missing alternative text for images
    - ✖ Bad alternative text for images 
    - 💁 e.g. "dog"
    - ✨ "A puppy frolicking in a field"
- **Does an automated test catch it?**
    - ✔ Empty links or empty buttons
    - ✖ Bad link text or button text
    - 💁 e.g. "click here", "submit"
    - ✨ "{ The target }", "{ The action }"
- **Does an automated test catch it?**
    - ✔ Some HTML errors
    - ✖ Weird HTML
    - 💁 e.g. `<div>Upload</div>`
    - ✨ Semantic HTML like `<button>`
- a11y issues often come up in the **interaction**
- How can we **tweak** our **automated testing** to help with this?
- But! **[The WebAIM Million](https://webaim.org/projects/million/)**
    - Annual report on the accessibility of the top 1,000,000 home pages
    - **Almost every site had WCAG failures**
    - (96.3% in you want to be precise)
    - **Almost all the errors fall into one of six categories**
    - LLBALC: lang, links, buttons,<br>alt text, labels, contrast. And these can all be found with automated tests!
        - **⚠️ Page language isn't set**
        - **⚠️ Link text is empty**
        - **⚠️ Button text is empty**
        - **⚠️ `alt` text for images missing**
        - **⚠️ Form inputs not labelled**
        - **⚠️ Low colour contrast text**

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

---

### Slides to put somewhere

- Sir Timbo quote
    - > “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.” -- Tim Berners-Lee
