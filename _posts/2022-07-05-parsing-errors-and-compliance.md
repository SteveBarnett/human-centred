---
title: Parsing errors and compliance (ugh)
layout: post
description: 
image: /img/2022/07/nu-html-checker.png
---

Accessibility is about a lot more than compliance or errors in the code. But, accessibility audits are a thing, and sometimes they uncover parsing errors.

These fall under [“Robust,” WCAG SC 4.1.1 Parsing](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=411#parsing). Sometimes these are misleading or incorrect. In those cases, we want to be ready with a retort / justification for a compliance-focused audit.

## The structure of the retort

- Parsing checks code, not UX.
- These errors don’t impact the UX. We tested it. The issues are Low Severity.
- Other stuff we’ve done.
- Other stuff we’re doing.

## An example / template retort

- The checks for “WCAG Success Criteria 4.1.1 Parsing” are an automated test of the rendered HTML of the page.
	- It is not a test of the accessibility tree: how the browser communicates the page to assistive technology.
	- It is not a test of the usability of the page.
- The parsing errors do not affect the accessibility and user experience of the page. We have conducted usability tested with People with Disabilities and confirmed this. [details of the results of the testing]. We can therefore classify the parsing errors as Low Severity issues.
- We have made the following improvements to this component: …
- In addition, we have the following improvement on our backlog: …

## Some examples of parsing errors and their impact

Parsing errors that do cause issues will probably be picked up by running [axe](https://www.deque.com/axe/browser-extensions/). This might be indirectly, such as a duplicate ID (parsing error) causing a field to lose its accessible name (an axe issue).

### Usually won’t impact the accessibility and user experience

- CSS: incorrect operator, too many values, unrecognised values, unites numbers, incorrect values. **Watch out for:** `display` changes.
- Element “ABC” is missing required attribute “XYZ”. **Watch out for**: images; interactive elements.

### Might impact the accessibility and user experience

- Element “ABC” not allowed as child of element “XYZ” in this context. **Watch out for:** nested interactive elements; complex widgets with lots of ARIA.
- ID-related: missing, empty, contains whitespace, duplicates. **Watch out for:** IDs that are targets for form fields (`for`, `aria-labelledby`, `aria-describedby`) or for skip links.
