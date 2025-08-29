---
title: Comboboxes and keeping it simple
layout: post
description: 
image: /img/2025/08/cb.png
category: how-to guide
---

Recently I was discussing comboxes and multiselects and related fauna. Here are some gathered thoughts.

<div class="boxout" markdown="1">
When a component looks like a combobox and has interactions like a combobox, it needs to follow the combobox pattern for clarity, usability, and consistency. If we want to be fancy, we can talk about affordance and material honesty.
</div>

<div class="boxout boxout-alt" markdown="1">
When a component doesn't follow the right pattern, it may fail WCAG Success Criteria:

- 1.3.1 Info and Relationships (things conveyed through presentation must be conveyed programmatically)
- 2.4.3 Focus Order (focus order is logical and expected, following standard patterns)
- 4.1.2 Name, Role, Value (components have the required names, roles, values, and states)
</div>

## Code-related issues

When a combobox has a `listbox` (a list of options) `popup`, the `listbox` can only contain elements that have a role of `option` (or `group`).

- A `listbox` cannot contain links or button (as seen in some implementations of a combobox).
- A `listbox` cannot contain checkboxes or radios (as seen in some implementations of a multi-select combobox).
    - An element that looks like a checkbox or radio must have the appropriate role.
- An `option` can only contain text, not links or buttons.
- An `option` can only contain text, not checkboxes or radios.
- An element that has a role of `option` cannot function like a link or a button.

## Keyboard-related issues

The combobox, including the listbox popup, is one tab stop. When the combobox, including the listbox popup, has focus, pressing <kbd>Tab</kbd> moves focus to the next interactive element after the combobox. Up and down arrow keys move through the `option`s.

- The <kbd>Tab</kbd> key cannot move focus to an item inside the listbox, it must move to the next interactive element after the combobox.
- Up and down arrow keys cannot move focus to a link or button, only <kbd>Tab</kbd> can (except in very specific components, not including a combobox).

## Options

When we want a component that looks like a combobox with a popup that has a mix of elements in it, there are a few approaches.

1. **Rethink the design.**
    - Each component should try and **do only one thing at a time**. When a component is trying to do several things at once, it is often better suited to being a section of a page.
    - **When an action is required in addition to selection of an option**, the button to trigger the action must come after the combobox.
    - **When a status message such as "No results" is required**, the containing element must be after the combobox. It must also be a live region to be announced to screen reader users.
2. **Make it a [disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) instead of a combobox.**
    - This must look like a disclosure (like an accordion) and not a combobox (like an HTML select.
3. **Set the `popup` as a `dialog`.**
    - We very rarely want to use this. Users tend to expect a modal dialog, an interruption to the workflow to perform some other task.

### A note on multiselects

A `combobox` is a triggering element (a button or textbox) with an `aria-haspopup`, usually a `listbox`. Although an APG Pattern and [example for multi-select listboxes](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/#ex2_label) exist, the pattern is not widely used or understood by users. The majority of comboboxes are like HTML `select`s or like typeahead or autocomplete text inputs, both offering only one selection.

When a multi-select is used:
- A combobox cannot include buttons or links in its `listbox` popup. A `listbox` can only contain `option`s (and `group`s).
- `option`s should not be **styled** like `checkbox`es. When an element looks like a checkbox, it must convey the same information programmatically.
- `option`s should not be coded as `checkbox`es. A `listbox` can only contain `option`s (and `group`s).
