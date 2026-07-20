---
title: Severity and WCAG vs best practice
layout: post
description: Notes for a session at the Digital Accessibility Discussion Group
image: /img/2025/07/wcagbps.png
---

Notes for a session at the [Digital Accessibility Discussion Group](https://wellingtonuni-professional.nz/course/digital-accessibility-discussion-group/).

Designed to help answer: **"I've found an accessibility issue. How serious is it?"**.

- We can use severity and [WCAG](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242) or BP to decide this. One reason we want to get this appropriate and consistent is to build trust with teams doing the work. We want them to be able to believe us when we something is High severity.
- Every issue is important. But when everything is urgent, nothing is urgent. Getting the seriousness of issue right helps team fix the things with most impact first.

## Severity

WCAG only has pass or fail, not severity. A fail of any WCAG Success Criteria means a page is not conformant. If we're aiming for conformance, we have to fix every issue.

Almost every tool or company who assesses using WCAG will also include a severity or priority rating. The severity is about the user impact, not just the technical compliance or failure. The problem that the user, the human being, encounters. Here's one version.

Here's one version.

- **Critical.** The issue stops users from accessing content or completing a task. It does not have a workaround.
- **High.** The issue causes serious problems or major inconvenience to users. It has a workaround but it is difficult and not obvious.
- **Medium.** The issue causes problems or frustrations for users. It has a workaround.
- **Low.** The issue causes inconvenience or irritation to users. It may not need a workaround.

### Deciding on Severity

Severity is inherently subjective and contextual. Some things to consider:

- who is impacted (for example: everyone, keyboard users, screen reader user)
- the assistive technology that's impacted
- how they are impacted (the barriers, problems, inconveniences, frustrations, irritations)
- where they can't get to or what they can't do
- how far from the ideal or the standard that the implementation strays
- what workarounds they can do.

### Process for deciding Severity

1. **Is the issue Critical?** Does it stop a user from completing a task? Is this the only way a user could do a task? If there are multiple ways to complete the task, and only this one is inaccessible, the issue is High instead of Critical.
2. **Is the issue High, Medium, or Low?** How serious is the problem? How difficult is it to complete the task compared to how easy it is if we fix the problem?

### Severity examples

These are just a guide: the actual severity depends on context and implementation. For example: it's quite common to have a contrast-related issue at Low severity when the ratio is quite close to the WCAG required ratio.

#### Critical

> The issue stops users from accessing content or completing a task. It does not have a workaround.

- Functionality is not available from the keyboard. 2.1.1 Keyboard (A)
    - People who use only a keyboard (or similar input like a switch or voice control) cannot use this functionality at all
- Functionality breaks or content not available when zoom is increased. 1.4.10 Reflow (AA)
    - People with low vision who have to zoom the page to use it will not be able to use the page or access the content.
- [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG20/#cc5). Failing any these SC means a page does not conform since it could mean a person can't use the page:
    - 1.4.2 Audio Control (A)
        - People using a screen reader won't be able to use the page as the audio interferes with the speech output
        - People will find the auto-playing content distracting, making it hard to focus on the rest of the page
    - 2.1.2 No Keyboard Trap (A)
        - People who use only a keyboard can only exit the trap by reloading the page and starting their task from scratch
    - 2.2.2 Pause, Stop, Hide  (A)
        - People using a screen reader won't be able to use the page as the accompanying audio interferes with the speech output
        - People with a vestibular disorder may feel dizzy or nauseous
        - People will find the auto-playing video content distracting, making it hard to focus on the rest of the page
    - 2.3.1 Three Flashes or Below Threshold (A)
        - People may feel dizzy or nauseous, or have a seizure triggered

#### High

> The issue causes serious problems or major inconvenience to users. It has a workaround but it is difficult and not obvious.

- 1.1.1 Non-text Content (A)
    - Screen reader users will miss out on the information that the image conveys to other users
- 1.3.1 Info and Relationships (A)
    - Screen reader users will miss out on the information or relationships that are available to other users, such as grouping or listing
- 1.4.10 Reflow (AA)
    - People with low vision who zoom in, and people on small screens, are forced to scroll in two directions, making the content hard or impossible to read
- 2.4.3 Focus Order (A)
    - Screen reader users may miss information or find the ordering of interface confusing
    - People who only use a keyboard may be frustrated by the extra effort required to complete the task
- 2.4.7 Focus Visible (AA)
    - People who use the keyboard cannot tell what has focus. They may activate the wrong element or lose their place, and have to spend extra effort to complete the task.
- 2.5.3 Label in Name (A)
    - Speech recognition software users might not be able to directly access the element
    - Sighted screen reader users may be confused by mismatched speech and visuals
- 4.1.2 Name, Role, Value (A)
    - Screen reader users won't know the link's destination, the button's action, or what to enter in the form field
    - Speech recognition software users won't be able to directly activate the element

#### Medium

> The issue causes problems or frustrations for users. It has a workaround.

- 1.3.1 Info and Relationships (A)
    - The information or relationship that isn't conveyed is minor or can be worked out from context, so people can still complete the task with some extra effort.
- 1.4.1 Use of Colour (A)
    - When only colour is used, people with colour perception differences may not see the change in state or meaning
- 1.4.3 Contrast (Minimum) (AA) and 1.4.11 Non-text Contrast (AA)
    - People with low vision, colour blindness, or older adults may find it difficult or impossible to read or distinguish text or UI elements from surrounding colours
- 2.4.2 Page Titled (A)
    - If the title is missing, it's harder to find the tab again
    - If the title is not clear, it's harder to understand the topic or purpose of the page
- 2.5.8 Target Size (Minimum) (AA)
    - People, including those with limited dexterity or hand tremors, can miss the target or hit the wrong one

## WCAG or best practice?

- When doing an accessibility audit/assessment/review we log WCAG failures and accessibility problems that WCAG does not cover. These are generally called best practice (BP).
    - BP can mean different things in different contexts. Here we mean anything outside of our local baseline. For most places, the baseline is WCAG 2.2 AA. That means the following are BP:
        - Anything at Level AAA
        - Anything not covered by a WCAG SC
- A WCAG issue needs to make clear the connection to the Success Criteria (SC).
- Some things that are currently considered BP are being worked into WCAG 3.

### WCAG and BP example: new tab

The following is a BP issue: links that opens in a new tab without warning. There's no WCAG SC that addresses this, but it's not good practice. We recommend adding text "opens in a new tab" or an icon with a text alternative.

But! The following is a WCAG issue: links that have an "opens in a new tab" icon without a text alternative. That fails 1.1.1 Non-text Content (A).

### WCAG and BP examples: headings

The following are WCAG issues:

- Text that looks like a heading but isn't marked up as one. 1.3.1 Info and Relationships (A)
- Text that is marked up as a heading but isn't one. 1.3.1 Info and Relationships (A)
- Heading order that does not match the structure (usually seen as headings going up instead of down). 1.3.1 Info and Relationships (A)
- Heading text that isn't descriptive. 2.4.6 Headings and Labels (AA).

But! The following are BP:

- No headings are present
- There's no `<h1>` element
- There's more than one `<h1>` element
- Heading levels are skipped (E.g. `<h1>` to `<h3>`, then `<h4>`, missing the expected `<h2>`)

## Prioritisation

The severity and the WCAG/BP classification are two aspects of prioritisation. Other aspects might be:

- how many users the issue affects (for example by role: user, admin, super-admin)
- the user journey (for example: the main user flow, or an occasional or side flow)
- importance to business goals
- effort to fix
- lots of other things!
