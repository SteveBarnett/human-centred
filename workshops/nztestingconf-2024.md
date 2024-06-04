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
- Finalise list of activities
- Steal from my QE CoP 2023-08-01 testing with a screen reader preso
- Add some images and icons for visual interest and understandability
- Have an analogy thread
    - fun but not silly
    - water, ocean
    - building a house
    - baking a cake
    - making a meal (recipe, ingredients, nice and broad)
    - orienteering-ish (map, compass, trail)
    - maybe something that works with four sessions?
        - seasons
        - compass directions

## [Key takeaways](https://nztestingconf.nz/accessibility-testing-workshop)

- **How to think more accessibly** by thinking more broadly and being able to spot potential barriers to access.
- **How to test more accessibly** by using the keyboard, browser extensions, automated testing, and using assistive technology.
- **How to help our colleagues make more accessible things** by using the social model of accessibility, annotating and checking designs, and writing semantic HTML.
- **How to meet the Web Content Accessibility Guidelines 2.2 Level AA** and go beyond them by thinking and testing more accessibly.

## Schedule

Warm-up! Before the workshop, send a set of questions, pick one and bring your answer to the workshop. 
What do you already know about accessibility? About accessibility testing? What do you want to get out of today?

- **09:30–10:45** Session 1
- **10:45–11:15** Morning tea
- **11:15–12:30** Session 2
- **12:30–13:30** Lunch
- **13:30–14:45** Session 3
- **14:45–15:15** Afternoon tea
- **15:15–16:30** Session 4

Each Session is about 1h15m. About 1h doing stuff, about 15m reflecting.

Session 4 will include 10 minutes for feedback for Steve and for NZTC.

Post-lunch: check it with your goals from Session 1. Any questions?

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

TODO: clarify order.
{: .boxout .boxout-todo}

- introductions and connections
- agenda
- get quickly to
    - running axe? good, easy, but could be quite... confronting!
    - keyboard testing. connects well to existing manual testing
        - keyboard hero vibes?

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

### How many people?

- How many people in the world have disabilities?
- (World population is about 8 billion)
- ^ Not a test! I had to look this up.
- **About 1 billion have (at least one) disability**
    - It's about 15%, so 1.2b
    - And that's mostly "official" disabilities, and people how identify as disabled. We'll come back to that in a second.
- How many people in Aotearoa New Zealand have disabilities?
- (Population is about 5 million)
- ^ Also not a test!
- **About 1 million have (at least one) disability**
    - Actually 25%, so more like 1.25m. Again, it depends how you count.
    - ^ 2013 figure, 53% had more than one
- these numbers are about people with a permanent disability, not people who might have a situational or temporary impairemnt, and therefore benefit from things that we might have done "for disabled people."

### A human uses the web

- **(Gentle!) activity**: A human uses the Web
- **A human** using a mouse and Safari on a Mac **uses the Web**
- **A human** using a mouse / trackpad / keyboard / switch control / puffer / magnification tool / voice control / screen reader and Safari / Chrome / Firefox / Edge on a Windows / Mac / Linux desktop / laptop / tablet / phone in light / dark mode / high contrast mode with reduced motion enabled with smaller / larger text size **uses the Web**
- Delicious takeaway:**Humans interact with our product in a very wide range of ways**
- Any questions?

### Social model

- Many types of disability, for example: **Auditory Cognitive Physical Visual**
- Social model of disability: **Disability = Ability + Barrier**
- **(Gentle) activity time!**
- Let's think about the **visual** category under the social model of disability
- Raise your hand or nod your head if you or someone you know is: **blind**
- Potential barrier 🚧 **no text alternatives for non-text content**
- Raise your hand or nod your head if you or someone you know has: **low vision or poor eyesight**, **(perhaps from old age)**
- Potential barrier 🚧 **no (or poor) responsive styles**
- Raise your hand or nod your head if you or someone you know is: **colour blind**
- Potential barrier 🚧 **using only colour to convey information**
- Raise your hand or nod your head if you or someone you know has: **been outside on a sunny day**, **with a shiny screen**
- Potential barrier 🚧 **low colour contrast between text and the background**
- Delicious takeaway: **Mismatched interactions can create barriers to access for many people**
- Any questions?

Questions? Questions! Questions.

### Know the technology

TODO: this could switch with WCAG bit? Something semantic, affordances, for lunch activity?
{: .boxout .boxout-todo}

How do you know what to do? Not the rules, not the written signs and things.

- Think in semantics
    - links, buttons, radios, checkboxes, selects
- Understand the accessibility tree
    - name, role, value, state

### To organise for the talky bit

Maybe split up, ditch some bits.

- The big picture
    - The framing: Barriers (the social model; Essential for some, useful for all)
        - "All models are wrong, but some are useful". Social model is very useful!
            - Not the only model, not the "best" one, or the "right" one, but useful.
            - "creates a disability" - the wording is awkward, yes.
        - This is the root of it. Not "those disabled people over there" but "us humans right here."
        - When we choose to draw a line between disabled people and not-disabled people, the line will be in the wrong place.
            - "The map is not the territory"
        - Our work might be digital, but people are analogue, and a11y is about people.
        - Personas to demonstrate the spectrum, the (not!) us vs them
        - Journey maps, does their tech or disability really affect their task, their goal? How they do it, maybe.
        - Should we consider disabilities and AT when considering support? Yes, of course. But not in terms of stats, deciding, discriminating.
        - Someone's disability or AT is none of our business.
            - Do you ask about height, weight, religion, lefthanded/righthanded, sexual orientation, gender, religion.
                - These impact how someone is in the world (and how the world treats them), but...
            - Draft WCAG 3.0 outcome: "[Disability information privacy](https://www.w3.org/TR/wcag-3.0/#disability-information-privacy). Disability information is not disclosed to or used by third parties and algorithms (including AI)."
                - [D]eque commentary](https://www.deque.com/blog/w3c-unveils-174-new-outcomes-for-wcag-3-0/): "A person’s disability needs, preferences, and use of assistive technologies are extremely personal. It is up there with other medical information. This information can, and often is used to deny people education, housing, insurance, employment, and more."
- Note on language: disable people vs people with disabilities vs other things
- Don't need to be, or pretend to be, an everyday user to test well, to find many of the biggest barriers that everyday user will encounter.
    - Of course it's not the same. Of course we won't find all the barriers.
    - But, Leonie quote, we can make it more usable for more people.
- We can't cover everything today, but we can get started, grab a map and a compass and note a few trails.
- Be wary of people who talk in binaries, extremes, absolutes.
    - The truth is generally more complicated (and interesting!) than that.
    - There's no such thing as 100% accessible. Because (we are) humans!
        - But we can make it much better, and keep making it better.
    - 100% compliant to WCAG is tricky and doesn't necessarily mean good usability.
    - Growth Mindset.
        - It can be uncomfortable. That's the feeling of brain cells growing! (Sort of)
        - Mistakes are expected. It's what you do next that counts.
            - I am bound to make some mistakes today, please feel free to point them out!
            - But, you know, don't be a jerk about it.
- Where's the line between a11y testing and regular testing?
    - For example: keyboard testing.
    - Who uses the keyboard?
    - How do we know if they're disabled or not?
    - What if they don't identify as disabled?
    - This distinction is constructed! But it can be useful sometimes.
- meet people where they are
    - don't expect immediate perfection from yourself, or others.
    - **Leonie quote** “[It doesn't have to be perfect, just a little bit better than yesterday](https://tetralogical.com/blog/2022/07/11/meet-the-team-leonie-watson/#what's-your-top-accessibility-tip%3F)"
- "chart" for shift left
    - the later you leave it, the more difficult it is
    - need to do all the previous steps if you want to do it properly
- Start from the position of "I don't know (yet)"
- Connect to Quality, Security, Privacy
- Accessibility is part of Quality. Part of functionality. Part of Usability.
- Have separate a11y testing, AC?
    - Yes... But understand that it's a short-term remediation thing
    - The goal is to get to a place where it's part of day-to-day work
        - Does a blind screen reader user think "I'm going to do some accessible banking!" or just "I'm going to do some banking".
        - The core human need, the task. It's actually none of our business how they do it!
    - Our UIs have a "level of accessibility" whether we think about it or not
- Framing for activities.
    - Best: fix it right now, or put up a PR.
    - Great: log a ticket.
    - Good: test and find issues.
    - Oh, look, this is a spectrum too!

## Session 2

### WCAG bit

A short presentation in Session 2, leading into lunch. Ideally, something to "do" or think about over lunch, along the lines of "that's only the minimum".

- Perhaps you've noticed it's been several hours and this is the first time I'm mentioning WCAG.
    - That (hopefully) tells you something about where it sits in terms of importance and priority.
- WCAG
    - **We**b **C**ontent **A**ccessibility **G**uidelines
    - Four Principles
        - **P**erceivable, **O**perable, **U**nderstandable, **R**obust
    - w3.org/WAI/WCAG22/quickref
    - Guidelines: an example or two
    - Success Criteria. Sort of like AC.
        - SC has Sufficient (here's one way), Advisory (here's an idea), Failure (how about no)
        - Levels A, AA, AAA
    - 2.1 AA Global standard. Used by governments, private sector. Can be reported using a VPAT / ACR.
    - Everywhere has some litigation. NZ/AU/UK: no legislation (yet). US/CA: (heavy) legislation. EU: incoming!
    - Now: WCAG 2.2: (the third edition of the second edition of the Web Content Accessibility Guidelines)
    - Then: (WCAG timeline)
        - 1999 – `1.0` (Set If Off)
        - 2008 – `2.0` (The Next Generation)
        - 2018 – `2.1` (brains, eyes, and phones)
        - 2022 – `2.2`
    - the future: WCAG 3.0 (W3C Accessibility Guidelines)
- Careful of checklist-thinking
    - When we treat them as rules, we might lean towards rules-lawyering: meeting the letter but not the spirit
    - [not-checklist](https://not-checklist.intopia.digital/)
- Standards set the minimum. As in: less than this is actively bad. As in: more than this is probably good.
    - The standards have some gaps and loopholes.
    - Compliance sets the minimum level of accessibility and usability.
    - We choose the maximum.
    - It can technically accessible, but not very usable!
- Something WCAG sort-of doesn't have now, but will sort-of later:
    - Issue Severity: Critical, High, Medium, Low 
- Remember the Priority of Constituencies
    - Put our users first. "difficulties to the user should be given more weight than difficulties to implementors". DX is important, but not at the expense of UX.    
- WAI ARIA Authoring Practices
    - What is ARIA?
        - Rules of ARIA
    - good specs
    - slightly dodgy examples  
- Know the big names
    - Short URL to links page, web and mobile filterable  

Questions? Questions! Questions.

TODO: Feels like Priority of Constituencies and big names could move.
{: .boxout .boxout-todo}

Pick 'n' mix activities

### Going-into-lunch activity

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

### Back into it

- Questions? Questions! Questions.
- Pick 'n' mix activities

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
