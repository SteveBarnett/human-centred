---
title: Automated Accessiblity Testing
layout: post
description: An overview of Automated Accessiblity Testing, with a few examples
image: /img/2025/06/aat.png
---

Automated tests are good for checking that our code is in good shape. I'll focus on `axe` here because it's the most popular.

I don't quite mean using the `axe` browser extension. That's more like tool-assisted testing. What I mean here is unit tests, maybe integration tests. Things that are in a Continuous Integration pipeline.

There's a little overlap between adding an `axe` engine integration (most often `jest-axe`) and testing things directly ourselves. Given that most of the things we want to test are relatively low complexity, and `axe`'s tests might change, it's okay that we have a little overlap.

## Go wide and go narrow

There are two common ways of doing automated accessibility tests: using `axe` and using custom assertions.

Using the `axe` engine in an add-on to our unit, integration, or end-to-end testing framework is a good idea. It's great for picking up many common errors and omissions. It answers the question "did we make any obvious mistakes?"

Writing our own assertions — testing specific attributes, values, and programmatic associations — is even more important. They have particularly high value when we use [Patterns from the ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/). The "Keyboard Interaction" and "WAI-ARIA Roles, States, and Properties" sections are great, but the example code is not really intended to be used. We follow the "spec" in the pattern and are guided by the example. We write some tests to make sure we follow the "spec". Our own assertions answer the question "are we doing the right thing?"

## Good coverage of states

We don't need to cover every single change and interaction exhaustively. We do want to have good coverage. A rough guide to when to another test is: whenever we've changed an ARIA attribute.

For example: for a [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) or [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern we want tests (`axe` and some of our own assertions) for the closed state and the open state.

## Good use of selectors, Queries, Matchers

In the widely used [Testing Library](https://testing-library.com/), Queries like <a href="https://testing-library.com/docs/queries/byrole/">`ByRole`</a> and <a href="https://testing-library.com/docs/queries/bylabeltext">`ByLabelText`</a> are great because they target information in the accessibility tree. 

Matchers like `toBeInTheDocument` tend to less useful than others. The position and relation of an element to other elements is usually more important than its mere presence. 

## Good test / assertion names

Names that clearly and precisely describe the test are better than those that are a bit vague. In terms of accessibility, that can mean use more accessibility- or WCAG-flavoured language.

`it 'renders'` is a classic base check. That could imply that `it 'renders with axe'` would be a good name for a block with an axe-powered `expect(results).toHaveNoViolations();`. That's okay, but we can do better. `it 'renders with no accessibility violations'` is more clear.

Let's say we're testing that an `input` is correctly using an `aria-describedby` attribute for its help text. `it 'has related help text'` is okay. `it 'has programmatically associated help text'` is probably better. That uses words we can find in [WCAG 2.2 Success Criteria 1.3.1 Info and Relationships — Level A](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242%2C131#info-and-relationships) and related [Technique ARIA1:
Using the `aria-describedby` property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1.html).

## Good focus testing

When we move focus for the user, which we do rarely, we should make sure we add tests covering that behaviour. 

For example:

- when we send focus to the heading of an opened modal
- when we send focus to the triggering button when closing a modal

## Some (very draft!) examples

In [Accessibility Ready](/2025/04/10/accessibility-ready/), we have that:

> We follow the Keyboard Interaction and WAI-ARIA Roles, States, and Properties sections of [ARIA Authoring Practices Guide (APG) patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

Here are some sketches of how we could write automated tests to check that. I'll use code that's a bit [Jest](https://jestjs.io/) and RTL (React Testing Library) flavoured, in particular [RTL Queries](https://testing-library.com/docs/queries/about).

- Some of the testing will be direct: "this attribute has this value".
- Some will be indirect: selecting the element in such a way that not finding it is a failure. For example using `getByRole`.

### [Breadcrumbs](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

- Use `getByRole('navigation', { name: BREADCRUMB_NAME } )` // check the role and that it has a name
- Use `getByRole('link', { name: CURRENT_LINK_NAME; current: true } )` // check the role and that it has aria-current

Although it's not in the APG text, we also want to check that the nav contains an ordered list of links. A list because that's what the links are. And ordered because there's a hierarchy, an order.

- `getByRole('list')` isn't quite enough, because we need it to be an `ol` not a `ul`
- How to resolve this? I do not know. RTL is designed to not care about implementation details.

### [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

- Use `getByRole('button', { name: DISCLOSURE_BUTTON_TEXT } )`
- Use `getByRole('button', { name: DISCLOSURE_BUTTON_TEXT; expanded: true } )` // when it's open
- Use `not.toBeVisible();` // on the content when it's open
- Use `getByRole('button', { name: DISCLOSURE_BUTTON_TEXT; expanded: false } )` // when it's closed
- Use `toBeVisible();` // on the content when it's closed

### [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

This one is fiddly, because the implementation details do matter. In particular the presence and nesting of attributes.

- Use `getByRole('tablist`)` for the tabs container
- Use `getByRole('tablist`, { name: TABS_NAME } )` for the tabs container
- Use `getByRole('tab') for each tab, as direct children of the `tablist`
- Use `getByRole('tab', { name: SELECTED_TAB; selected: true }) for the selected tab, `getByRole('tab', { name: OTHER_TAB; selected: false }) for every other tab
- Each tab has `aria-controls="ID_OF_THE_ASSOCIATED_TABPANEL`
- Use `getByRole('tabpanel')` for each tab content container, as siblings of the `tablist`
- Use `getByRole('tabpanel', { name: ASSOCIATED_TAB })` for each tab content container, as siblings of the `tablist`

## Conclusion

For good automated accessibility testing, we need a mix of `axe` and custom assertions. This lets us check for obvious mistakes, and lets us check we're following the APG keyboard and ARIA guidance. We should also make sure we have: 

- Good coverage of states
- Good use of selectors, Queries, Matcher
- Good test / assertion names
- Good focus testing
