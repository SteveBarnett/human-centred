---
title: Accessibility scorecard
layout: post
description: 'An Accessibility Scorecard is a way to get a high-level answer to “How well is our team doing (in terms of accessibility)?”'
image: /img/2022/11/as.png
category: reference
---

An Accessibility Scorecard is a way to get a high-level answer to “How well is our team doing (in terms of accessibility)?”

This pulls together a few different ideas from [What to do when – Accessible Design Edition](/2022/07/19/what-to-do-when-accessible-design-edition/), [What to do when – Accessible Engineering Edition](/2022/07/19/what-to-do-when-accessible-engineering-edition/), and more.

## 📈 Score

For each of the four big “We...” statements below, pick a score between -2 to +2. The score follows something like a classic Likert scale:

| Score | Meaning |
|--|--|
| -2 | Strongly disagree |
| -1 | Disagree |
| 0 | Neither agree nor disagree |
| 1 | Agree |
| 2 | Strongly agree |

Use the list in each "We..." section to help inform your score. If you do most of the activities on the list, you’ll probably be Agree. If you do none of them, you’ll probably be Strongly disagree.

Your overall score is the average of the four scores of the big “We...” statements. Add the scores together and divide by four.

## 🤔 We understand our customers

- Checking our biases.
- Recruiting diverse participants, including people with disabilities.
- Using usability testing to understand more about assistive technologies.
- Checking the accessibility of our research tools.

## 🖥️ We create accessible experiences

- Following the accessibility design checklist.
- Doing accessibility-focused design reviews.
- Prototype reviewing with people with disabilities.
- [Annotating designs](/more-accessible-products/#add-annotations-to-designs).

## ⌨️ We develop accessibly

- Writing semantic HTML.
- Being familiar with [WCAG](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl) and [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def) and [ARAI patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).
- Being familiar with [the accessibility tree](/2022/06/08/the-accessibility-tree/).
- [Using the design system accessibly](/2022/05/25/how-to-get-the-most-(accessibility)-out-of-a-design-system/).

## 🧪 We test accessibly

- Including `jest-axe` in some unit tests and `axe-playwright` (or `cypress-axe`) in some E2E tests.
- Doing some [QACs (Quick Accessibility Checks) 🦆](/2021/12/13/qac/).
- Testing with assistive technology, in particular [testing with screen readers](/2022/10/14/testing-with-a-screen-reader/).
- Doing (or asking for) an [accessibility audit](/2022/01/24/accessibility-audit-process/).
