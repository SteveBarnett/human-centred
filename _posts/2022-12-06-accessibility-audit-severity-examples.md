---
title: Accessibility Audit Severity examples
layout: post
description: When we do Accessibility Audits, each issue usually comes with a Severity. Here are some examples of what each one means.
image: /img/2022/12/aase.png
category: reference
---

When we do [Accessibility Audits](/2022/01/24/accessibility-audit-process/), each issue usually comes with a Severity. Here are some examples of what each one means.

Here's a recap of the four levels. Different places and tools use different words, but most places have four levels.

- **Critical** - The issue stops users from accessing content or completing a task. It does not have a workaround.
- **High** - The issue causes serious problems or major inconvenience to users. It has a workaround but it is difficult and not obvious. 
- **Medium** - The issue causes problems or frustrations for users. It has a workaround.
- **Low** - The issue causes inconvenience or irritation to users. It may not need a workaround.

The distinction between High, Medium, or Low is inherently subjective. One useful heuristic is to compare it to what the experience would be like if the issue was not present.

## 💁 Examples

Here are a handful of examples for each severity. It’s not an exhaustive list!

The way we usually decide on a Severity is to first decide if it's Critical or not: does it stop a user from completing a task? If it's not Critical, we look at how serious the problem is.

### ⛔️ Critical

- Functionality is not available from the keyboard.
- Functional image is missing text alternative. (Often in an icon-only link or icon-only button).
- Missing accessible name for an element (when no visible label is present and no aria-label is set).
- Incorrect accessible name for an element (when no visible label is present and the aria-label is set to the value of the field, not the name of the field).
- Content is not accessible by screen reader (`aria-hidden=“true”` is used incorrectly, highlighted items in a dropdown are not announced).

### ⚠️ High

- Page title doesn’t represent the page contents.
- The visual relationship isn’t in the code (usually about semantic HTML, headings that aren’t `h` elements, field labels that aren’t programatically linked to their fields).
- Focus styles aren’t visible.
- Essential content is hidden when zoomed in.
- Colour contrast isn’t high enough.

### 🗒️ Medium

- Focus order doesn’t follow reading order.
- Label doesn’t describe the input required.
- Error messages aren’t helpful.

### ℹ️ Low

- Invalid markup that doesn’t affect the user experience.
- Images that are decorative aren’t hidden from assistive technology (SVGs are missing `aria-hidden=“true”`
- Best Practice issues

## Prioritisation

The Severity is just one aspect of prioritisation. Other aspects might be how many users the issue affects (for example by role: user, admin, super-admin) or the user journey (for example: the main user flow, or an occasional or side flow).

## Summary

Once an issue has been identified, we can figure out a Severity. First we decide if it's Critical or not. That is: does it stop a user from completing a task? 

If it's not Critical, we look at how serious the problem is. How difficult is it to complete the task compared to how easy it is if we fix the problem?