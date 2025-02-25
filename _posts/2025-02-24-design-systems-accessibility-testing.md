---
title: Design systems, Accessibility, and Testing (Accessibility)
layout: post
description: Discussing design systems, Accessibility, and Testing (Accessibility)
image: /img/2025/02/ds.png
category: explanation
---

Thoughts and things to watch out for when testing accessibility in a Design System (DS).

* Display TOC
{:toc}

## Design Systems in general

Understand that it's not only a technology, design, development problem / solution. It touches on wider organisational, cultural, social issues.

It's important to do our best from the start (including accessibility!). If the DS succeeds, it can scale far and fast, showing the cracks quickly.

### Balance

- **Find a good balance between customisable and prescriptive**. There are almost always trade-offs for either end. More customisable tends to means less consistent. More prescriptive tends to mean more pushback, more difficult or slow adoption, for teams that are used to high autonomy.
- **Find a good balance between few modules and many modules.** Too many modules makes is harder to find the right thing, or to use the wrong thing as "close enough". Too few modules tends to make things heavy and confusing.

### Improvement

- **Continuously improve the DS with feedback.**
    - Ask for feedback on the components and using them: qualitative and quantitative responses.
    - Have a dedicated DS channel
- **Publish updates on a regular(ish) cadence**.

### Adoption

- **Speak the language of the target audience**
    - Be specific about the what's faster, easier, clearer, more scalable, smoother, improved
- Show successful usage with examples to encourage adoption
- Measure adoption
- **Have a structured onboarding process** for getting to know the DS

## Accessibility in Design Systems

The bits of accessible design and development that are particularly relevant to Design Systems.

### Balance

Find a good balance between customisable and prescriptive

This is particularly relevant for things like required attributes. We want to steer people toward making good choices. We also want to leave them room to make the best choice in their situation. For example:

- We don't require `alt` text because some images are decorative. But we do require an `alt` attribute.
- We don't require an `aria-label` because we prefer visible text like a `label` element or text inside a button. But we do allow adding an `aria-label` (probably via a prop).

### Documentation

Good documentation can increase adoption, ease of use, and satisfaction with a DS.

- **Have accessibility throughout the DS**
    - Consumers keep coming into contact with the ideas and concerns
    - It becomes part of the work, not a separate thing
- **Link the specific accessibility concerns for a component to the general principles** 
- **Give good guidance on what component to use when.** For example: when to use a link or a button; when to use radios or checkboxes.
- **Decide when to mark a component as Accessibility Ready**
    - The general shape of the process should mirror other work (like Security Ready, Privacy Ready)
    - Definition of Ready tends to mean a ticket is actionable: there are no blockers to starting; the ticket is possible to do by the team; the team knows the value of doing the work
    - Definition of Done tends to mean the ticket has been reviewed, tested, and documented
- **Consider using A11y Acceptance Criteria (AC)**
    - Maybe using the Given / When / Then format
    - The AC doesn't need to describe a disability, or mention accessibility. It can just describe the required outcome, like a regular AC. For example: Link text describes the destination. Accordion can be opened and closed using just the keyboard.

### Things to watch out for

As in: alarm-bell-ringers, code smells.

- **Over-designing** (unnecessary complexity)
    - For example: components trying to do many things at once
    - Simpler components tend to be more accessible (and easier and quicker to build and test)
    - Engineer should push back on design if they accessibility and/or human-centred concerns
- **Over-engineering**
    - For example using ARIA when HTML for the same thing is available.
    - [No ARIA is better than Bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
    - [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#rule1): use HTML instead of ARIA if you can
- **Adding a `role` attribute**
    - See the [Second Rule or ARIA Use](https://www.w3.org/TR/using-aria/#secondrule): don't change semantics unless you really have to.
- **Missing accessible names**
    - See the [Fifth Rule of ARIA Use](https://www.w3.org/TR/using-aria/#fifthrule): all interactive elements must have an accessible name
- **Lots of "easily caught by automation" errors**
    - Ideally, these shouldn't make it into the published code at all
    - Errors that can be caught by automated tools should be caught by automated tools, to take the pressure off the humans
- **Lots of "famous" issues** (Things that come up in [the WebAIM Million](https://webaim.org/projects/million/))
    - Page language isn’t set; Link text is empty; Button text is empty; `alt` text for images missing; Form inputs not labelled
    - These errors are the most common, but are also the easiest to find using automated testing.
    - They’re also relatively low complexity and effort to fix.
- **Aiming for 100% accessible** (especially as scored by an automated tool)
    - What does 100% accessible even mean? 100% of what? 100% of the WCAG Success Criteria passed? 100% of a checklist completed? 100% score on a user survey?
    - When do we measure it? Any measurement of a product’s accessibility can only be a snapshot in time. Accessibility is an ongoing commitment to quality and usability.
    - Where do we measure it? Many web apps are complex. They have a lot of pages and states.
    - Who is it 100% accessible for? Humans beings have a very wide range of abilities and capabilities. We use a wide variety of technology. What works for some humans might not work for some others.

When reviewing usage of the DS, watch out for people **using the DS in an inaccessible way**. A Design System can’t give us accessibility “for free”, but it can nudge us (perhaps strongly) in the right direction.

- Use the right components.
- Use components in the right place.
- Follow the advice in the documentation.

## Accessibility Testing in Design Systems

The specific and peculiarities of testing and design systems more than accessibility testing and auditing.

In the long term aim to have a11y tests as part of existing tests, integrated and woven-in. In the short-term it's okay to have a11y tests separate.

### Testing

- **Document the testing process and tools in the DS**, so that other teams can use them too.
- **Mix and match tools to suit our team for where they're at.** But/and have a plan for what the next thing will be.
- **Use a mix of manual and automated testing.**
    - Start with low complexity, wide impact, tests like Keyboard and Headings.
        - They act like an early `return`: if won't work with a screen reader if it doesn't work with keyboard, so you don't need to test that (yet!)
    - Automated testing can't cover everything. Accessibility done well with almost always pass an automated test. Accessibility done not so well won’t always fail an automated test. That difference often comes down to the difference between “wrong” (clear errors, omissions) and “bad” (debatable quality, unusual code).
    - The best testing framework is the one you already have, the one you will use.
- **Be very detailed and thorough in component testing.**
    - Makes it very robust
    - Let's us find the bugs rather consumers or end-users finding them
    - Keep a record to serves as detailed proof
- **Consider an accessibility-flavoured remix of testing off The Happy Path** (everything succeeds, no errors, no exceptions, expected output).
    - Expand your understanding of The Happy Path: realise it also includes assumptions about the user and their technology. A bit like "It works on my machine!"
    - **Step off The Happy Path in a different direction.**
        - The Happy Path assumes perfect (and therefore unrealistic) conditions in an imperfect (and therefore realistic) world
        - What if they aren't using a mouse?
        - What if they can't see the information conveyed by colour?
    - **When we do find a11y errors, zoom out, investigate and find the source.** See how we can prevent similar errors occurring again.

#### Dessert: The Accessibility Testing Trifle.

A cheeky nod to [Kent C. Dodds' Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) and "Write tests. Not too many. Mostly Integration." Although noting that "[e2e tests are becoming as cheap to execute as integration tests, whilst integration tests are more complex to write in a SSR application without mocking client side or server side code](https://kentcdodds.com/calls/05/02/does-the-testing-trophy-need-updating-for-2025).

(A trifle because it has layers, but what's in them, and how big they are, varies a fair bit)

- **Do some user and usability testing, with disabled people.** Check how real, varied, users experience the app.
- **Do some Manual testing.** Check the quality of the human experience of the app beyond just functionality.
- **Have few End to End tests** (also known as functional tests). Use a robot pretending to be a human to check that user flows work correctly. BDD (Behaviour Driven Development) can be helpful here.
- **Have some Integration tests.** Check that several units interact with each other correctly.
- **Have just enough Unit tests.** Check that individual parts work in isolation. Focus on the behaviour, not the implementation.
- **Have Static Analysis.** Catch errors and typos while writing the code.

### Be clear what good looks like

This is a common problem for people new to screen reader testing. Once they get over the barrier of how to use it (and turn it off!), they're not sure what they're listening for. It's important to remember that different screen readers, on different platforms, announce things slightly differently. And each screen reader has settings so that people can customise announcements. So we can never be sure of exactly how a screen reader will announce things. However, we can check:

- **What is this?** Name, role, value, state. If we've used the right HTML, and added the right ARIA where necessary, the SR will announce these things.
    - Testing with the a11y tree
- **What are these?** Does it sound like it looks? If things look a list, does it announce as a list? If radios are grouped (and they should be!) is the name of the group announced.
- **What just happened?** When things change visually, are they announced? Things like checking checkboxes, expanding accordions, loading messages, autocomplete results showing.

Be wary of making assumptions about your users, in particular about how disabled people use assistive technology. Partly this is about the curse of knowledge: you're very familiar with your UI, you know what it's supposed to do and be.
