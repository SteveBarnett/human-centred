---
title: What key does what?
layout: post
description: A quick guide to keyboard interactions
---

It depends on the HTML element that has focus and what is selected, but some keyboard interactions are similar for every focusable element.

## General keyboard interactions

- <kbd>Tab</kbd>: moves to the next focusable element / group.
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: moves to the previous focusable element / group.
- <kbd>Escape</kbd>: closes the open selection list or dismisses the open modal.
- <kbd>Space</kbd>: enters a space in the text input or toggles the selected option.
- <kbd>Enter</kbd>: performs the action of the focused or selected element.

A group is a set of items where only one item can be selected. For example: `radio`s, tabs, or `select`s. Slightly confusingly this does not include `checkbox`es, because you can select multiple items.

## Terminology clarification

### Name, Role, Value

Every interactive element must have a name, a `role`, and a `value`.

- The name comes from associated text, such as a `label`.
- The `role` is usually implied from the HTML element. For example, a `button` has `role` of `button`.
- The `value` is the data, such as the typed-in text in a text input.

### Focus and selection

When tabbing to an HTML `select`, it gains **focus**. When the `select` is opened using <kbd>Space</kbd>, it still has **focus**. Using <kbd>↑</kbd> <kbd>↓</kbd> to move changes the option **selection**. Using <kbd>Enter</kbd> performs the action of accepting the current **selection**, and sets the `value` of the `select`.

## Specific keyboard interactions

### Single-line text inputs (`input type=“text”`)

- Printable characters (e.g. letters, punctuation, <kbd>Space</kbd>)
  - enters the characters, setting the `value` of the input
- <kbd>→</kbd>, <kbd>←</kbd>
  - moves the cursor inside the text input

### Autocomplete

Note: these use an `input type=“text”` to enter the text and follow those keyboard interactions, plus the following.

- <kbd>↑</kbd>, <kbd>↓</kbd>
  - moves between elements in the current list
- <kbd>Enter</kbd>
  - chooses the selected option in the current list, sets the `value` of the autocomplete.

Note: for _inline_ autocomplete the first match is automatically selected, and the `value` of the autocomplete is set.

### `button`s

- <kbd>Space</kbd>
  - presses the `button`
- <kbd>Enter</kbd>
  - presses the `button`

### `select`s

- <kbd>Space</kbd>
  - opens the focused `select`
- Printable characters (e.g. letters, punctuation, <kbd>Space</kbd>)
  - moves focus to the next item that starts with those characters
- <kbd>Enter</kbd>
  - accepts the focused selection
- <kbd>↑</kbd>, <kbd>↓</kbd>:
  - moves between items

### `radio`s (pick only one)

- <kbd>Space</kbd>
  - selects the focused radio
- <kbd>Enter</kbd>
  - presses the `button`
  - follows the link
  - submits the containing form
  - accepts the focused selection
- <kbd>↑</kbd>, <kbd>→</kbd>, <kbd>↓</kbd>, <kbd>←</kbd> (Arrow keys):
  - moves between elements in the group

### `checkbox`es (pick multiple)

- <kbd>Space</kbd>
  - toggles the focused checkbox

## Which elements receive focus?

Only interactive elements (a link, a button, any kind of form control) automatically get keyboard focus. We can send focus to other elements, but this should be done infrequently and carefully. We can autofocus elements on page (or modal) load, but this should be done infrequently and carefully.

## What if no interactive element has focus?

The default keyboard action takes place:

- <kbd>Tab</kbd>: moves focus to the first interactive element on the page
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: moves focus to the last interactive element on the page
- <kbd>Space</kbd>: moves down the page
- <kbd>Enter</kbd>: does nothing
- <kbd>↑</kbd>, <kbd>↓</kbd>: moves up and down the page
- <kbd>→</kbd>, <kbd>←</kbd>: does nothing
- <kbd>Esc</kbd>: does nothing

## Who uses just the keyboard?

- Power users use the keyboard because it's faster.
- People with motor impairments use the keyboard because it doesn't require precise movement like pointers do.
- People who use screen readers often use just the keyboard.

## Where can I read more?

For more complex examples, we consult the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/). The examples tend to be solid technically, but not very visually appealing!
