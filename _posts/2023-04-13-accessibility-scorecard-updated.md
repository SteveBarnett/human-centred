---
title: Accessibility scorecard (updated)
layout: post
description: 'An Accessibility Scorecard is a way to get a high-level answer to “Where might we want to improve (in terms of accessibility)?”'
image: /img/2022/11/as.png
category: reference
---

An Accessibility Scorecard is a way to get a high-level answer to “Where might we want to improve (in terms of accessibility)?” We do this by looking at a few areas, and indicative behaviours in each.

## 📈 Scores

For each of the “We...” sections below, review the list of behaviours. Pick a score from 1 to 5.

| Score | Meaning |
|--|--|
| 1 | Not confident at all |
| 2 | Not confident |
| 3 | Somewhat confident |
| 4 | Confident  |
| 5 | Very confident |

The score follows something like a classic [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).

When picking our current level of confidence, consider things like frequency of the behaviour, how well-documented the processes are, what level of depth they cover, what kind of conversations we tend to have around the topic.

Reviewing the list of behaviours and deciding that we do them appropriately frequently, they’re well-documented, go to a good level of depth, and the topics are raised in team conversations? We’ll probably be **Confident.**

Reviewing the list of behaviours, realising that we do none of them, haven’t done them before, we won’t have any docs on them, and we never talk about them? We’ll probably be **Not confident at all.**

**Note:** scores are always whole numbers. These measures are subjective and approximate. That means it’s a better fit to say our score is “about 4” instead of ”exactly 4.25”. Any average of scores should be rounded to the nearest whole number.

## 🧠 We think accessibly

Behaviours that demonstrate this include being familiar with:

- The [accessibility tree](/2022/06/08/the-accessibility-tree/);
- The [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) and the [Quick Reference version of the Success Criteria](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl);
- The [Rules of ARIA](https://www.w3.org/TR/using-aria/#NOTES);
- [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def) and [ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

## ⌨️ We develop accessibly

Behaviours that demonstrate this include:

- Writing semantic HTML;
- Doing Static Analysis (For example [axe Accessibility Linter for VS Code](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) or [eslint-plugin-jsx-a11y in `eslint-config`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y));
- [Using the design system accessibly](/2022/05/25/how-to-get-the-most-\(accessibility\)-out-of-a-design-system/);
- Doing some [QACs (Quick Accessibility Checks)](/2021/12/13/qac/).

## 🧪 We test accessibly

Behaviours that demonstrate this include:

- Including accessibility in some unit tests (For example: `jest-axe` in unit tests);
- Including accessibility in some end-to-end tests (For example: `axe-playwright` or `cypress-axe` for E2E tests);
- Testing with assistive technology, in particular [testing with screen readers](/2022/10/14/testing-with-a-screen-reader/);
- Doing (or asking for) an [accessibility audit](/2022/01/24/accessibility-audit-process/).

## 🙋 Getting help

If you're not sure which "We..." to start with, it's usually more effective to start with the earlier one(s). These build patterns of thinking and behaviour that lead more easily into later "We..."s.