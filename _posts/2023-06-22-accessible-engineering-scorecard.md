---
title: Accessible Engineering scorecard
layout: post
description: 'An Accessibility Scorecard is a way to get a high-level answer to “Where might we want to improve (in terms of accessibility)?”'
image: /img/2022/11/as.png
category: reference
---

An Accessibility Scorecard is a way to get a high-level answer to “Where might we want to improve (in terms of accessibility)?” We do this by looking at a few areas, and indicative behaviours in each.

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

When picking our current level of confidence, consider frequency and depth of **doing**, **documenting**, and **discussing**.

<details>
	<summary>Examples of confidence levels</summary>
	<ul>
		<li>A score of “5 / Very confident” might look like: we <strong>do</strong> these things with the appropriate frequency; we have quite a lot of <strong>documentation</strong> about them; we <strong>discuss</strong> them at the right times, probably quite often.</li>
		<li>A score of “3 / Somewhat confident” might look like a mix. We <strong>do</strong> these things quite often, and we <strong>discuss</strong> them sometimes, but we don’t have any <strong>documentation</strong>. Or: we don’t <strong>do</strong> these things often, but we do <strong>discuss</strong> them sometimes, and have scattered bits of <strong>documentation</strong>.</li>
		<li>A score of “1 / Not confident at all” might look like: we <strong>do</strong> these things rarely or not at all; we don’t have any <strong>documentation</strong> about them; we don’t <strong>discuss</strong> them often.</li>
	</ul>
</details>

**Note:** scores are always whole numbers. These measures are subjective and approximate. That means it’s a better fit to say our score is “about 4” instead of ”exactly 4.25”. Any average of scores should be rounded to the nearest whole number.

## Deciding on the scores

We want to answer:

- What's your confidence level for the team as a whole?
- Optional extra: what's your confidence level for yourself?

Fill in the scores in a similar way to how some teams do planning poker: decide in secret before writing it down.

<details>
	<summary>An example of a scoring process</summary>
	<ol>
		<li>Read out the category we’re deciding on. For example: “We think accessibly.”</li>
		<li>Read through the list of behaviours for the category (at the top of this page).</li>
		<li>Briefly discuss the behaviours as they apply to your team. Use the “Examples of confidence levels” section above.</li>
		<li>Set a short timer for everyone to privately decide their score, then enter the numbers.</li>
		<li>Discuss any numbers at the edges. For example: One vote for 5 among four votes for 3.</li>
    	<li>Calcolate the rounded average. That’s your score!</li>
	</ul>
</details>

## 🙋 Getting help

After you’ve scored the three “We”s, have a think about which area you’d like to make a change in first. What could you do to increase your score in the next few months?

If you’re not sure which area to start with, prefer developing to testing, and prefer thinking to developing. Each area builds on top of the previous one. More accessible thinking leads to more accessible developing. More accessible developing leads to more accessible testing.