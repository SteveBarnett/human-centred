---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits (NZTestingConf 2024)"
---

* Do not remove this line (it will not be displayed)
{:toc}

## TODO

- Finalise template / format
    - QAC-style
    - Take notes from Jira / Acceptance Criteria
    - Use yml front matter for sorting, ranking
- Finalise list of activities
- Steal from my QE CoP 2023-08-01 testing with a screen reader preso
- Add some images and icons for visual interest and understandability
- Have an analogy thread
- Finalise the presentations for talky bits
- Make bridging slides
- Clarify **barriers** as a thread throughout
    - Bring this into lunch activity?
- Dual also theme: not-separate.

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

## Session 0

### Warm-up email

Hello there. Thank you for signing up for the Accessibility testing workshop. You rock!

To help get you ready, we've got a little warm-up exercise for you. Pick one (or more!) of the following questions to answer before the workshop. We'll be sharing and discussing our answers in the first session.

- What do you already know about accessibility?
- What do you already know about accessibility testing?
- What do you want to get out of the workshop?

Regards,

Steve (the facilitator) and the NZTestingConf team

### Warm-up activity

Up on screen as they come in.

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

[welcome slides](../welcome.pdf)

Think more broadly, in a more human-centred way. This helps us understand the wide range of human experience, that abilities exist on a spectrum, and that things seldom go as planned.

- Most important thing: think more broadly
    - Acknowledge and embrace human diversity
        - Consider gender identity and expression, sexual orientation, race, religion, first language, disability (permanent, temporary, contextual), and how these things can change over time.
        - Unless you're here with your twin or your clone, you may notice that the other people in the room are **different** to you. Of course, you immediately notice similarities, because humans brains are (among other things) pattern recognition machines. But the more attention you pay, the more you zoom in on the details, the more differences you notice.
    - Consider what's between the human and the UI
        - Think about input methods, browser, operating system, screen size and resolution, user preferences and choices, network connection (cost, speed, latency), age and condition of hardware, age of the person, experience level, assistive technology.
        - Think about options and preferences, not accessibility options.
    - Go off The Happy Path
        - Consider what’s messy, fragile, unpredictable. We already know that sometimes people will encounter problems with our products. That’s why we have error states and messages. We just need to widen this lens.

Questions? Questions! Questions.

[Mind your business slides](../mind-your-business.pdf)

### Know the technology

TODO: this could switch with WCAG bit? Something semantic, affordances, for lunch activity?
{: .boxout .boxout-todo}

How do you know what to do? Not the rules, not the written signs and things.

- Think in semantics
    - links, buttons, radios, checkboxes, selects
- Understand the accessibility tree
    - name, role, value, state

## Session 2

### WCAG bit

A short presentation in Session 2, leading into lunch. Ideally, something to "do" or think about over lunch, along the lines of "that's only the minimum".

[WCAG slides](../wcag.pdf)

TODO: Feels like Priority of Constituencies and big names could move.
{: .boxout .boxout-todo}

Pick 'n' mix activities

### Going-into-lunch activity

TODO: Something about **barriers**.
{: .boxout .boxout-todo}

Maybe this idea, but definitely some "activity."
   
- What things are you happy with people doing the absolute bare minimum of?
    - The Food Safety standards?
        - How well cleaned are the plates?
        - How warm is the tea or coffee?
    - How closely are cars following the road traffic guidelines?
    - If you buy something: the bare minimum encryption and security on your bank account.

## Session 3

- After lunch: follow up on "lunch activity"
    - What bare minimums did you spot? Or going-the-extra-mile-s?

### Post-lunch activity 10m

- Keep broadening our minds, expanding our spectrums
- Audio description or Halloween keyboards
- Something a bit fun to get back into it

#### Audio desc

- Pick one of the videos, we'll just watch a minute or two
    - Frozen - Trailer with Audio Description - YouTube
    - Lion King Audio Description - Full Clip - YouTube
    - Pulp Fiction Audio Description Sample on Vimeo
- Headphones on!
    - Watch it, note what they include.
    - Watch it, note what they exclude.
    - Discuss! Facts? Moods? Viiiiibes?
    - What's the lesson? Identical experience is impossible. Humans can be very different! But we can aim for equivalent experience, similar.

#### Halloween keyboards

- Play Hocus Focus

### Back into it: screen reader testing

TODO: Is this a good spot for it? Before lunch better?
{: .boxout .boxout-todo}

- Break after about halfway through for Questions? Questions! Questions.
    - If you have a question, chances are somebody else does too.
    - Do screen reader users do {thing}?
    - What's "good" for {thing}?

### Automated vs manual

- Automated testing can catch a lot, but not everything
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
