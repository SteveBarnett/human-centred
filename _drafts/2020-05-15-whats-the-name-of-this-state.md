---
title: What's the name of this state?
layout: post
description: Using HTML and CSS words for states of pieces of UI can be a good way to find a shared language between designers, developers, and testers.
---

Naming things is hard. Making sure we're all using the same name for the same thing is hard.

When we're looking at interfaces and we want to use the same words for a state (e.g. active, selected). I like to lean on the HTML and CSS words for these things. They're a set, solid, standard and make for a good shared language between designers, developers, and testers.

Here's a guide to [states](#states) that pieces of UI can take, and clearing up of some [common confusions](#common-confusions).

## States

| Name         | Description                                                               | CSS selector                                                       | Notes                                                                                                                                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Focus        | An element has keyboard focus.                                            | `:focus`                                                           | Links, buttons, and inputs can receive a focus state. Navigation items, accordions, and tabs can too, usually because they're links or buttons. Note: other elements can be made to receive focus using `tabindex`, but since they're not interactive elements this should be avoided (and without additional ARIA code are a fail under WCAG) |
| Focus Within | An element which contains an element that has keyboard focus.             | `:focus-within`                                                    | Any element that contains links, buttons, or inputs can receive a focus-within state.                                                                                                                                                                                                                                                          |
| Hover        | An element is being hovered over.                                         | `:hover`                                                           | Links can receive a hover state. Buttons and form controls can too, and are often styled in this state. Note: most other elements can receive hover too (e.g. table rows, list items), but unless they are interactive elements applying hover styles should be done carefully.                                                                |
| Active       | A link or button is being used (i.e. on mousedown, before mouseup).       | `:active`                                                          | Links and buttons can receive an active state. Form controls can too, but are seldom styled in this state. Note: an active link or button also has focus state.                                                                                                                                                                                |
| Disabled     | A form control or link cannot be interacted with.                         | `[disabled]` (for form controls) or `aria-disabled="true"` (links) | Form controls (buttons, text field, selects, etc) can be disabled. They don't receive focus, but do receive hover and active. Note: `a` elements (links) can be disabled using `aria-disabled="true"` or made inert by omitting the `href` attribute.                                                                                          |
| Pressed      | A button is marked as "pressed".                                          | `[aria-pressed="true"]`                                            | Only buttons can receive this state, via `aria-pressed="true"` (This is one way of doing a toggle switch).                                                                                                                                                                                                                                     |
| Checked      | An option is selected in a radio or checkbox group.                       | `:checked`                                                         | Only radios and checkboxes can receive this state.                                                                                                                                                                                                                                                                                             |
| Current      | A nav item is the current one, or a step is the current one in a process. | `aria-current="page\|step"`                                        | Only links or text elements can receive this state, via `aria-current="page\|step"`.                                                                                                                                                                                                                                                           |
| Selected     | A piece of widget is "selected" (e.g. a tab is selected in a tab group).  | `aria-selected="true"`                                             | Buttons or links can receive this state, via `aria-selected="true"`.                                                                                                                                                                                                                                                                           |

## Common confusions

### Tabs

We visually highlight one tab in a set of tabs. It's clearest to say that the tab is **selected**. Saying it's "active" could be confused with the **active** state of a link or button. Saying it's **current** is okay, but doesn't match the functionality.

### Navigation items

We visually highlight one item in a navigation set. It's clearest to say that the item is the **current** item. Saying it's "active" could be confused with the **active** state of the link when it's clicked on.

### Button group

We visually highlight the chosen button in a button group. It's clearest to say that the chosen button is **pressed** since we'll use a button with `aria-pressed="true"`.

### Toggle button or switch

A toggle button has on and off states. In its "on" state,

- if the function is to change the UI of a page, it's clearest to say that the toggle is **pressed** since we'll use a button with `aria-pressed="true"`.
- if the function is to make a selection, it's clearest to say that the toggle is **checked** since we'll use checkbox with a checked state.

Ideally, we should use toggles for changing the UI and checkboxes for making a selection.

### Disabled elements

Form controls can be disabled using the `disabled` attribute, and links can be disabled using `aria-disabled="true"`.

More complex components like menu items and tabs will either be buttons or links, so can be disabled using one of these two approaches.

## References

- [`:focus` on MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [`:hover` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [`:active` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
- [`:checked` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
- [`aria-pressed` on WAI-ARIA docs](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-current` on WAI-ARIA docs](https://www.w3.org/TR/wai-aria-1.1/#aria-current)
- [`aria-selected` on WAI-ARIA docs](https://www.w3.org/TR/wai-aria-1.1/#aria-selected)
