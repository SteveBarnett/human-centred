---
title: Running and reading axe DevTools
layout: post
description: A How-to guide for running and reading axe Devtools. 
image: /img/2023/08/adt.png
category: how-to guide
---

[axe DevTools](https://www.deque.com/axe/browser-extensions/) is great! I find it particularly good for picking up any big accessibility problems (such as form controls missing labels).

Here's how to run and read it for best results.


1. [Install it](https://www.deque.com/axe/browser-extensions/), open it in DevTools, and run **Scan All Of My Page**.
	- Toggle off Best Practices.
	- The paid version has extra bells and whistles and things, but the free version is very helpful.
	- If you want a more guided experience, check out the (free) assessment option of [Microsoft Accessibility Insights browser extension](https://accessibilityinsights.io/) (Chrome only).
2. Look at the Critical issues. (Click on the numbers in the summary panel to filter the issue list.)
	- Open one of the issue accordions.
	- Use "Highlight" to see where on the page the issue is occurring.
	- Use the `>` (Next Issue) and `<` (Previous Issue) buttons to view each issue in the group.
	- Read the “To solve this problem…” section for an HTML-level solution.
	- Follow the “more information” link for detail on the issue (How to Fix the Problem (with Correct / Incorrect markup solutions), Why it Matters (who it affects and how), Rule Description, and Compliance Data & Impact).
	- Make a Jira ticket using the text of the axe issue. For example, for an axe issue of “Images must have alternate text” could have:
		- Summary could be “Banner image is missing text alternative”
		- Description could include: “Determine if image is content or just presentational”
		- Acceptance Criteria could be: “Image has a text alternative that describes the image’s purpose or content.” Or “Image is marked and presentational”. 
		- Priority could align with axe’s User Impact. To match [audit terminology](/2022/12/06/accessibility-audit-severity-examples/) (axe → Xero): Critical → Critical; Serious → High; Moderate → Medium; Minor → Low.
		- WCAG Success Criteria can be found as tags /pills on an issue in DevTools (e.g .`wcag412` is WCAG SC 4.1.2), or under WCAG Success Criteria in the Compliance Data & Impact section of the “more information” linked page.)
3. Look at the Serious issues
4. Look at the Moderate issues
5. Look at the Minor issues
6. Toggle Best Practice back on, and click on the Best Practice number in the summary panel to filter the issue list.