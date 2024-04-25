---
layout: page
title: "Accessibility testing: Busting barriers with ARIAs, axes, and audits (NZTestingConf 2024)"
---

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

Four blocks of 1h15m. About 1h doing stuff, about 15m reflecting.

Session 4 will include 10 minutes for feedback for Steve and for NZTC.

Post-lunch: check it with your goals from Session 1. Any questions?

### Schedule vibes

- Session 1
    - big, bold, opening
    - get quickly to **doing** something, a taste test. QAC?
        - could use this for the connections
    - introductions and connections
    - agenda
- Session 3
    - post-lunch, so something active, ideally moving
- Session 4
    - bring it together, look back
    - strong finish
    - make a plan for keeping on keeping on, look forward
- could increase in complexity as the day goes along

## Outline-ish from my [MAP](/more-accessible-products/)
 
1. Think non-binary. Think on a spectrum, not a binary.
    - 1.1 Acknowledge and embrace human diversity (look more closely to more differences)
    - 1.2 Consider what's between the human and the UI
    - 1.3 Go off The Happy Path (and the "just like me" path)
2. Avoid barriers to access (Auditory, Cognitive, Physical, Vision (and device))
    - 2.1 Make it more usable for more people (Essential for some, useful for all)
    - 2.2 Remove existing barriers
    - 2.3 Avoid adding barriers 
3. Understand the pros and cons (meet people where they are)
    - 3.1 Offer good motivations
    - 3.2 Be ready for objections
    - 3.3 Celebrate good accessibility 
4. Know the technology (at a high level)
    - 4.1 Think in semantic HTML
    - 4.2 Understand the accessibility tree
    - 4.3 Understand ARIA
        - Rules of ARIA
        - Handle of ARIA attributes
        - APG
5. Follow the Standards (Understand they're the minimum)
    - 5.1 Remember the Priority of Constituencies
    - 5.2 Know the Standards
    - 5.3 Know the big names 
6. Shift Left (quicker, simpler, cheaper, when done earlier)
    - 6.1 Choose accessibility as a priority
    - 6.2 Check for common omissions (titles, headings, colours and use of colour, error states and messages)
    - 6.3 Offer feedback to the previous step 
7. Design Accessibly
    - 7.1 Design in layers (text, HTML, off The Happy Path)
    - 7.2 Add annotations to designs
    - 7.3 Use standard controls where possible 
8. Develop Accessibly
    - 8.1 Write semantic HTML
    - 8.2 Do Static Analysis
    - 8.3 Write Automated Tests
    - 8.4 Do Code Reviews
    - 8.5 Use the Design System carefully 
9. Test Accessibly
    - 9.1 Test with the keyboard
    - 9.2 Test with browser extensions
    - 9.3 Test with Screen Readers
    - 9.4 Do an audit 

## Ideas

Things for slides to talk through

- The big picture
    - The framing: Barriers (the social model; Essential for some, useful for all)
        - "All models are wrong, but some are useful". Social model is very useful!
            - Not the only model, not the "best" one, or the "right" one, but useful.
            - "creates a disability" - the wording is awkward, yes.
        - This is the root of it. Not "those disabled people over there" but "us humans right here."
        - When we choose to draw a line between disabled people and not-disabled people, the line will be in the wrong place.
            - "The map is not the territory"
        - Our work might be digital, but people are analogue, and a11y is about people.
    - ARIAs (clean code)
    - axes (automated testing)
    - audits (manual test, including Browser extensions)
        - as the backbone
        - [Accessibility audit process (web)](/2022/01/24/accessibility-audit-process/)
        - [Accessibility audit process for mobile](/2022/05/31/accessibility-audit-process-mobile/)
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
- a11y bugs are bugs
- Talk through WCAG
    - what is is
    - 2.2 vs 2.1 etc
    - POUR
    - SC
    - A, AA, AAA
    - The standards are the minimum. We set the maximum.
        - It can technically accessible, but not very usable!
        - Something like an [Accessibility Engineering scorecard](/2023/06/22/accessible-engineering-scorecard/)
    - Issue Severity: Critical, High, Medium, Low
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

### Training techniques reminders

Some notes-to-self reminders from [Writing, Workshops, and Talks](/writing-workshops-and-talks/), [Teaching and learning](/teaching-and-learning/), and [Persuasion](/persuasion/).

Also see [Train the trainer](/2023/08/20/train-the-trainer/).

- Social.
    - Pairs, groups.
    - Pair share, teachback.
- Physical.
    - Movement.
    - Show of hands.
- Active recall.
- Positive.
    - Empathy, compassion.
    - Love and charm, not guilt and blame.
- Better > Worse.
    - Movement > Sitting
    - Talking > Listening
    - Images > Words
    - Writing > Reading
    - Shorter > Longer
    - Different > Same
- Shared responsibility.
    - Big problems need complex, systemic, changes.
    - But we can act now, steer the tanker.
    - Ask for help, cooperation.
- Structure. Have and publish an agenda.
- Practical.
    - Small things that stack up.
    - Low to Medium to High Complexity.
    - Right technique, best fit.
- Short. Simple, prioritised.
- Flexible.
    - Vary type, length.
    - Responsive curriculum.
- Concrete.
    - Good examples, analysed for why.
    - Images and metaphors for memory.
- TODO for later: PACT
    - Purposeful
    - Actionable
    - Continuous
    - Trackable
- Do 1 minute reviews
- Knowledge: retrieve, predict, interleave
- Ask questions rather than give answers, create a curiosity gap
- Identity-based
    - Connect to past and familiar
    - Highlight values and beliefs
    - Widely relevant
- Put the why before the what