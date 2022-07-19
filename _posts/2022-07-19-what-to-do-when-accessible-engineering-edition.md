---
title: What to do when – Accessible Engineering Edition
layout: post
description: This is a trimmed and jiggled version of things from a larger (and Work In Progress) list.
image: /img/2022/07/wtdwaee.png
category: explanation
---

This is a trimmed and jiggled version of things from a larger (and Work In Progress) list: [More Accessible Products](https://naga.co.za/more-accessible-products/).

## Before

- Remember [the Priority of Constituencies](https://www.w3.org/TR/html-design-principles/#priority-of-constituencies) and put our users first.
- Know the Standards:
    - [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/)
    - [WCAG POUR](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
    - [WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl)
- Know the big names
  - MDN: [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML); [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
  - Deque: [axe](https://www.deque.com/axe/); [Deque university](https://dequeuniversity.com/).
  - WebAIM: [WebAIM Million](https://webaim.org/projects/million/); [Articles](https://webaim.org/articles/).
  - TPGi: [ARC toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/); [Blog](https://www.tpgi.com/blog/).
  - Microsoft: [Inclusive Design](https://www.microsoft.com/design/inclusive/); [Accessibility Insights](https://accessibilityinsights.io/).
- Know the technology
    - Think in semantic HTML
    - Understand the accessibility tree
- Understand ARIA
    - Know the [Rules of ARIA](https://www.w3.org/TR/using-aria/#NOTES). Use HTML if we can, and add any ARIA carefully.
    - Have a handle on [ARIA attributes](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def). Know which ones we can get from the HTML, and which ones needs to be added.
    - Check new ideas and patterns against the [ARIA Patterns](https://www.w3.org/TR/wai-aria-practices-1.2/) for ideas for best practice.


## During

- Write semantic HTML
- Do Static Analysis
    - [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) for VS Code
    - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) for the command line
- Use [XUI carefully]()
- Include a11y in Code Reviews. Check that new Pull Requests are “axe clean” (there are no errors flagged by a11y automated tests).

## Automated Testing

Add accessibility-related tests in our unit, integration, and end-to-end tests.

- For unit and some integration tests use [jest-axe](https://www.npmjs.com/package/jest-axe)
- For End-to-End tests, use [cypress-axe](https://www.npmjs.com/package/cypress-axe) or [axe-playwright](https://www.npmjs.com/package/axe-playwright)

## Manual Testing

- [Do a QAC](/2021/12/13/qac/)
- [Test with Screen Readers](/2021/07/31/testing-with-screen-readers/)
- [Do an audit](/2022/01/24/accessibility-audit-process/)