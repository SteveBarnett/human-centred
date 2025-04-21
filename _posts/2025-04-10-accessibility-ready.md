---
title: Accessibility Ready
layout: post
description: 
image: /img/2025/04/ar.png
category: explanation
---

I've been working on and thinking about design systems, especially accessibility in and around them.

Here's an example of **Accessibility Ready** for a design system.

## Principles

- We make components that work well for as many people as possible, with a broad range of disabilities and access needs
- We believe that [no ARIA is better than bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/), so we use as little ARIA as we can
- We treat meeting WCAG 2.2 at Level AA as our bare minimum
- We help consumers of the design system have a high level of confidence in creating accessible experiences, including clear and concise documentation
- We regularly gather feedback by conducting user testing with people with disability

## "Accessibility Ready" Status

Our **minimum requirements** for a component to be released as "Accessibility Ready" are:

- automated tests all pass
- manual tests all pass, across our Supported Assistive Technology
- an Accessibility Specialist has checked the component and confirmed that
    - all WCAG 2.2 Level AA Success Criteria are met
    - no High Severity usability issues exist
- clear and concise documentation is present, describing how to use the component to build conformant experiences
    - including that the Storybook a11y-addon reports no "Violations" or "Incomplete" in the Accessibility tab

We have **additional internal requirements** to align with our principle of exceeding WCAG 2.2 at Level AA:

- The following Level AAA Success Criteria are met:
    - 1.4.6 Contrast (Enhanced)
    - 2.4.13 Focus Appearance
    - 2.5.5 Target Size (Enhanced)
- Any Medium or Low Severity usability issues are resolved or prioritised

### Conformance

- A design system can not conform to WCAG 2.2 at Level AA: [Requirement 2 of Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conf-req2) states that "conformance" is for full web pages or processes only
- Using the design system is not enough on its own for conformance to WCAG 2.2 at Level AA
    - Formal accessibility testing is still required for experiences built using the design system
- "Accessibility Ready" means consumers can have a high level of confidence that a component can be used to build conformant experiences
    - Clear and concise documentation on when and how to use a component, as well when and how to combine components, helps consumers build conformant experiences

## Guides

- We follow the [Rules of ARIA](https://www.w3.org/TR/using-aria/#NOTES)
- We ensure name, role, state, value, grouping, and/or landmark information available through presentation is also available in the accessibility tree
- We follow the Keyboard Interaction and WAI-ARIA Roles, States, and Properties sections of [ARIA Authoring Practices Guide (APG) patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) rather than their example code
- We conduct user testing of any components that follow APG Patterns
- We restrict attributes and values that consumers can set, to ensure high levels of accessibility

## Supported Assistive Technology

We support a wide range of assistive technology. We test with screen readers on desktop and mobile and with contrast themes.

- JAWS and NVDA on Windows and with VoiceOver on macOS
- VoiceOver on iOS and Talkback on Android
- Contrast themes on Windows

Note: full details appear in our **[Supported Assistive Technology](/2025/04/21/supported-assistive-technology/)**.

### Screen readers

We test on multiple screen readers and multiple platforms to best support our users.

- Different screen readers handle the same content differently
- Different screen readers have different levels of support for HTML and ARIA features
- Different people prefer different screen readers

## Testing overview

- Code is semantic and valid
- ode linting does not report any errors
- Automated tests all pass and cover each state
- Manual tests all pass, across our Supported Assistive Technology

Note: full details of **Accessibility Testing** tools and processes appear in a separate document.

### User testing

We regularly test with users of a wide range of assistive technologies. We prioritise testing components that are non-native or that are based on the ARIA Authoring Practices or similar guides.

