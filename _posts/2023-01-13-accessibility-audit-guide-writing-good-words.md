---
title: "Accessibility Audit Guide: writing good words"
layout: post
description: A brief guide, and note to self, about how to write better words for accessibility audits
image: /img/2023/01/aag-wgw.png
category: how-to guide
---

The results of [an accessibility audit](/2022/01/24/accessibility-audit-process/) can be in many different formats. A report, Jira tickets, a spreadsheet, or something else. Whatever the format, it’s useful to be as clear as possible.

Some popular fields in audit reports are: summary, user impact, Ideas for how to fix it. Different teams use different names for these. Below I explain what each one means, give an example, and provide links to sources that I consult for finding good wording.

## Summary

**A one sentence summary of the issue describing what’s missing or incorrect.**

For example: the page title is not unique and does not describe the page content.

### Writing guidance

Use [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#page-titled). 

- Take the Success Criteria.
- Flip it to describe the “failure criteria”.
- Reword it to make it more readable and less formal.
- Add specifics: the page, the element.

## User Impact

**A one sentence description of who the issue affects and the barrier they are facing.**

- Aligns with [the Severity](https://naga.co.za/2022/12/06/accessibility-audit-severity-examples/). Describes the problem, inconvenience, or frustrations.
- Includes the Functional Category (or Categories): vision (blind, low vision, colourblind), motor / physical, cognitive.
- Uses bold and unqualified language: “users can not” rather than “users may not be able to”.
- Includes the technology: keyboard, magnification tools, increased text size, screen reader, voice control.

### Writing guidance

- [The A11y Project Checklist](https://www.a11yproject.com/checklist/)
- The Benefits section from an individual Success Criteria in [the WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/).
- “Why it Matters” from the relevant [axe rule](https://dequeuniversity.com/rules/axe/html).

## Ideas for how to fix it

**A one sentence description of the change(s) needed to resolve the issue.**

- Where possible, the HTML to use.
- Where possible, the technology-specific code to use (e.g. which component in the design system, which props of a React component to use).

### Writing guidance

- For HTML: check the name and Rule Description for [axe rules](https://dequeuniversity.com/rules/axe/html).
- For technology-specific code: the design system documentation.

## Solutions

When describing the solution, tailor the text to the team.

- Some teams want to know the required outcome. For example: “the `button` must have an accessible name.”
- Some teams want more specific and detailed descriptions of how to fix the issue. For example: “Give the `button` an accessible name by adding an `aria-label` of `Save` to the `button`”. Another example:  “Give the `button` an accessible name by adding by setting the `ariaLabel` prop of the `Button` React component to `Save`”.

## Fixed it?

Ways to know if the fix has resolved the issue:

- check that the Summary sentence is now false;
- check that the User Impact is no longer applicable.