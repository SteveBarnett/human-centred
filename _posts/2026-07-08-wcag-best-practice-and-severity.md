---
title: WCAG, Best Practice, and Severity
layout: post
description: Notes for a session at the Digital Accessibility Discussion Group
image: /img/2025/07/wcagbps.png
---

Notes for a session at the [Digital Accessibility Discussion Group](https://wellingtonuni-professional.nz/course/digital-accessibility-discussion-group/).

## WCAG or EO/BP?

- When doing an accessibility audit/assessment/review we log WCAG failures and accessibility problems that WCAG doesn't cover. These are generally called Expert Observations (EO) or Best Practice (BP).
    - BP can mean different things in different contexts. Here we mean anything outside of our local baseline. For most places, the baseline is WCAG 2.2 AA. That means the following are BP:
        - Anything at Level AAA
        - Anything not covered by a WCAG SC
- A WCAG issue needs to make clear the connection to the Success Criteria (SC).

### An EO example

- Links that opens in a new tab without warning. There's no WCAG SC that addresses this, but it's not good practice.
    - We recommend adding text "opens in a new tab" or an icon with a text alternative.

Links that have an "opens in a new tab" icon without a text alternative would fail 1.1.1 Non-text Content (A).

### WCAG and EO examples: headings

The following are WCAG issues:

- Text that looks like a heading but isn't marked up as one. 1.3.1 Info and Relationships (A)
- Text that is marked up as a heading but isn't one. 1.3.1 Info and Relationships (A)
- Heading order that doesn't match the structure (usually seen as headings going up instead of down). 1.3.1 Info and Relationships (A)
- Heading text that isn't descriptive. 2.4.6 Headings and Labels (AA).

But! The following are EO/BP (at Level AA):

- No headings
- No `<h1>`, or more than one `<h1>`
- Heading levels skipped (E.g. `<h1>` to `<h3>`, then `<h4>`).

## Severity

WCAG only has Pass or Fail, not Severity. A fail of any WCAG Success Criteria means a page is not conformant. If we're aiming for conformance, we have to fix every issue.

Almost every tool or company who assesses using WCAG will also include a Severity or Priority rating. We have Severity levels to help people prioritise what to fix first.

The Severity is about the amount of user impact, not just the technical compliance or failure. The problem that the user, the human being, encounters.

Here's one version.

- **Critical.** The issue stops users from accessing content or completing a task. It does not have a workaround.
- **High.** The issue causes serious problems or major inconvenience to users. It has a workaround but it is difficult and not obvious.
- **Medium.** The issue causes problems or frustrations for users. It has a workaround.
- **Low.** The issue causes inconvenience or irritation to users. It may not need a workaround.

### Deciding on Severity

Things to consider:

- who is impacted (for example: everyone, keyboard users, screen reader user)
- how they are impacted (the barriers, problems, inconveniences, frustrations, irritations)
- where they can't get to or what they can't do
- what workarounds they can do.

### Process for deciding Severity

1. **Is the issue Critical?** Does it stop a user from completing a task? Is this the only way a user could do a task? If there are multiple ways to complete the task, and only this one is inaccessible, the issue is High instead of Critical.
2. **Is the issue High, Medium, or Low?** How serious is the problem? How difficult is it to complete the task compared to how easy it is if we fix the problem?

## Severity examples

These are just a guide: the actual severity depends on context and implementation. For example: it's quite common to have a contrast-related issue at Low severity when the ratio is quite close to the WCAG required ratio.

### Critical

- Functionality is not available from the keyboard. 2.1.1 Keyboard (A).
- Functionality breaks when zoom is increased / Content not available when zoom is increased. 1.4.10 Reflow (AA).
- Conformance Requirement 5: Non-Interference stuff: 
    - 1.4.2 Audio Control (A)
    - 2.1.2 No Keyboard Trap (A)
    - 2.2.2 Pause, Stop, Hide  (A)
    - 2.3.1 Three Flashes or Below Threshold (A)

### High

- 1.1.1 Non-text Content (A)
- 1.3.1 Info and Relationships (A)
- 1.4.10 Reflow (AA)
- 2.4.3 Focus Order (A)
- 2.4.7 Focus Visible (AA)
- 2.5.3 Label in Name (A)
- 4.1.2 Name, Role, Value (A)

### Medium

- 1.3.1 Info and Relationships (A)
- 1.4.1 Use of Colour (A)
- 1.4.3 Contrast (Minimum) (AA)
- 1.4.11 Non-text Contrast (AA)
- 2.4.2 Page Titled (A)
- 2.5.8 Target Size (Minimum) (AA)
- 4.1.3. Status Messages (AA)

## Prioritisation

The Severity is just one aspect of prioritisation. Other aspects might be:

- how many users the issue affects (for example by role: user, admin, super-admin)
- the user journey (for example: the main user flow, or an occasional or side flow)
- importance to business goals
- effort to fix
- lots of other things!
