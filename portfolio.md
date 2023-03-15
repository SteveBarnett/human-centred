---
layout: page
title: Portfolio
bodyclass: portfolio
---

Over the past year and a bit, I've written quite a lot of help documentation about accessibility-related things. I've covered: [Process](#process), [Design reviews](#design-reviews), [Auditing](#auditing), [Testing](#testing), and [User Interfaces and Patterns](#user-interfaces-and-patterns).

I would watch for patterns in questions and audit results, and write up docs to address these things.

## Process

Getting a feel for how teams are working, questions they seem to have are:

- how do we "do" accessibility?
- how do we know if we're doing a good job?

### What to do when

Some teams look for clarity on "what to do when": what activities should we be doing, and at what point in the process should we be doing them?

- [What to do when – Accessible Design Edition](/2022/07/19/what-to-do-when-accessible-design-edition/)
- [What to do when – Accessible Engineering Edition](/2022/07/19/what-to-do-when-accessible-engineering-edition/)

### Measuring and metrics

Product people often want metrics, or measurements. Thinking about [Measuring accessibility](/2022/05/05/measuring-accessibility/) and how ["100% accessible" is impossible](/2022/09/21/100-percent-accessible-is-impossible/) I focused on leading (rather than lagging) measurements.

- [Tiny Accessibility Statement](/2022/03/05/tiny-accessibility-statement/)
- [Accessibility scorecard](/2022/11/23/accessibility-scorecard/)

## Design reviews

I'm a strong believer in the power of [shifting left](/more-accessible-products/#shift-left). Catching potential issues at the Design stage is better than catching after things have been built.

- [Accessibility Design Review process](/2022/01/24/accessibility-design-review-process/)
- [Quick A11y Checks for Design](/2022/01/24/qac-for-design/)

## Auditing

I have a confession to make: I **enjoy** auditing. I think this makes me a little unusual (but I'm okay with that). I like doing detailed analysis of a UI. I really like being able to suggest fixes, and showing the impact of the fix on our customer's experience.

### The process

Over the months, I've refined, revised, and standardised our audit process. The mobile one is still a bit in flux.

- [Accessibility audit process](/2022/01/24/accessibility-audit-process/)
- [Accessibility audit process for mobile](/2022/05/31/accessibility-audit-process-mobile/)

### The results

Presenting the results of an audit can be tricky. It's not helpful to make it a blame game or just a big list of problems. Some ways to make it a bit better are to be clear on the severity of issues (to help teams prioritise) and being clear and consistent.

- [Accessibility Audit Severity examples](/2022/12/06/accessibility-audit-severity-examples/)
- [Accessibility Audit Guide: writing good words](/2023/01/13/accessibility-audit-guide-writing-good-words/)
- [Delivering the results of an accessibility audit](/2022/04/09/delivering-the-results-of-an-accessibility-audit/)
- [Classifying and prioritising accessibility bugs](/2022/01/28/classifying-and-prioritising-a11y-bugs/)

### Compliance and standards

I am in the accessibility business for the people, for making human-centered things. I prefer [the carrot to the stick](/2022/09/28/the-carrot-not-the-stick/). But, sometimes we need to talk about compliance, and WCAG.

- [Parsing errors and compliance (ugh)](/2022/07/05/parsing-errors-and-compliance/)
- [Quick notes on WCAG 3.0](/2022/07/29/quick-notes-on-wcag-3-0/)

### Quick checks

Audits can be a big deal. They feel heavy for the team receiving the results, and they can be time-consuming for the team doing the audit. To soften both of those, I thought about "mini-audits".

- [Quick A11y Checks (QAC! 🦆)](/2021/12/13/qac/)
- [Quick Accessibility Checks (QAC! 🐥) for mobile](/2023/01/09/qac-for-mobile/)

## Testing

For now at least, automated testing can only find some issues. We need manual, human, testing to find the rest.

[Automated accessibility testing](/2022/04/09/automated-accessibility-testing/)

### Keyboard

Testing with the keyboard is by far the best "value for money" when doing accessibility testing. A good keyboard-friendly interface helps power users, keyboard-only users, screen reader users, and more.

- [What key does what?](/2021/11/02/what-key-does-what/)
- [What the focus?! 🤬](/2022/07/25/what-the-focus/)

### Screen readers

Screen readers can seem intimidating at first. But they are a really powerful way to test our UI.

- [Sounds like a good idea: how to get started testing with a screen reader](/2022/10/15/sounds-like-a-good-idea/)
- [The two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/)
- [Testing with a screen reader (QE / AC edition)](/2022/10/14/testing-with-a-screen-reader/)

## User Interfaces and Patterns

I've written a few things about working with a design system, and about specific UI patterns that crop up. Sometimes I throw together a reduced test cases and add it to my list of [a11y demos and tests](https://stevebarnett.github.io/a11y-demos-and-tests/).

- [How to get the most (accessibility) out of a design system](/2022/05/25/how-to-get-the-most-(accessibility)-out-of-a-design-system/)
- [Accessibility and usability considerations for disabling buttons and inputs](/2021/08/06/accessibility-and-usability-considerations-for-disabling-buttons-and-inputs/)
- [Tables and links and things](/2022/10/05/tables-and-links-and-things/)
- [Opening in a new tab](/2022/10/26/opening-in-a-new-tab/)
- [More accessible headings](/2022/12/12/more-accessible-headings/)

## Images

Writing alternative text for images can feel tricky. I wrote up a guide with some worked examples.

[A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/)

### Data visualisation

- [More accessible data visualisations](/2021/10/10/accessible-data-visualisations/)
- [Accessible data visualisation: text alternatives](/2022/06/29/accessible-data-visualisation-text-alternatives/)
- [Accessible data visualisation: keyboard interactions](/2022/07/24/accessible-data-visualisation-keyboard-interactions/)