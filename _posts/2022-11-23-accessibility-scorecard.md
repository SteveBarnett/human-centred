---
title: Accessibility scorecard
layout: post
description: 'An Accessibility Scorecard is a way to get a high-level answer to “How well is our team doing (in terms of accessibility)?”'
image: /img/2022/11/as.png
category: reference
---

An Accessibility Scorecard is a way to get a high-level answer to “How well is our team doing (in terms of accessibility)?”

Note: this is an older version. The latest version is [Accessibility scorecard (updated)](/2023/04/13/accessibility-scorecard-updated/).

This pulls together a few different ideas from [What to do when – Accessible Design Edition](/2022/07/19/what-to-do-when-accessible-design-edition/), [What to do when – Accessible Engineering Edition](/2022/07/19/what-to-do-when-accessible-engineering-edition/), and more.

## 📈 Score

For each of the four big “We...” statements below, pick a score from 1 to 5. The score follows something like a classic Likert scale:

| Score | Meaning |
|--|--|
| 1 | Strongly disagree |
| 2 | Disagree |
| 3 | Neither agree nor disagree |
| 4 | Agree |
| 5 | Strongly agree |

We choose a score for each of the four sections below. The list of activities is to help us decide what our score is. If we do most of the activities on the list, we’ll probably be **Agree**. If we do none of them, we’ll probably be **Strongly disagree**.

**Note:** scores are always whole numbers. These measures are subjective and approximate. That means it’s a better fit to say our score is “about 4” instead of ”exactly 4.25”.

### Scores

We can choose how much detail we want for the score.

- Four scores, one for each section below.
- Two scores, one for Accessible Design and one for Accessible Engineering.
  - The Accessible Design score is the average of the two Design sections (We understand our customers and We create accessible experiences).
  - The Accessible Engineering score is the average of the two Engineering sections (We develop accessibly and We test accessibly).
- One score, for Overall Accessibility.
  - This is the average of the four individual scores (We understand our customers, We create accessible experiences, We develop accessibly, and We test accessibly).

**Note:** averages are rounded to the nearest whole number.

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

- Including accessibility in some unit tests and in some end-to-end tests. (For example: `jest-axe` for units tests and `axe-playwright` or `cypress-axe` for E2E tests).
- Doing some [QACs (Quick Accessibility Checks) 🦆](/2021/12/13/qac/).
- Testing with assistive technology, in particular [testing with screen readers](/2022/10/14/testing-with-a-screen-reader/).
- Doing (or asking for) an [accessibility audit](/2022/01/24/accessibility-audit-process/).
