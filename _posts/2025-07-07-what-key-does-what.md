---
title: What key does what?
layout: post
description: A quick guide to keyboard interactions
---

It depends on the HTML element that has focus and what is selected, but some keyboard interactions are similar for every focusable element.

(This is a quick update and tidy up of [an older page version of this same page](/2021/11/02/what-key-does-what/))

## Where to check

To manually check things for myself, I like to go to the [Mozilla Developer Network](https://developer.mozilla.org/) (MDN) and search for the HTML element in question. That gives me a reduced test case so my testing is more clear.

MDN doesn't always list what the default keyboard interactions are, so sometimes I check the Keyboard Interactions section of a pattern on the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) site. I follow [the first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1), though, and use HTML instead of ARIA where I can.

## Keyboard interactions

- <kbd>Tab</kbd>: moves to the next focusable element / group.
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: moves to the previous focusable element / group.
- <kbd>Escape</kbd>: closes the open selection list or dismisses the open modal.
- <kbd>Space</kbd>: enters a space in the text input or toggles the selected option.
- <kbd>Enter</kbd>: performs the action of the focused or selected element.

A group is a set of items where only one item can be selected. For example: `radio`s, tabs, `select`s, , `combobox`es, toolbars`. Slightly confusingly this does not include `checkbox`es, because you can select multiple items.

### Links

- <kbd>Enter</kbd> navigates to the link destination.
- ( <kbd>Space</kbd> does not navigate to the link destination. (It does scroll the page, though: the default action for <kbd>Space</kbd>) )

### `button`s

- <kbd>Space</kbd>: presses the `button`
- <kbd>Enter</kbd>: presses the `button`

### Single-line text inputs (`input type=“text”`)

- Printable characters (e.g. letters, punctuation, <kbd>Space</kbd>): enters the characters, setting the `value` of the input
- <kbd>→</kbd>, <kbd>←</kbd>: moves the cursor inside the text input

### Autocomplete, `combobox`es, `select`s

- <kbd>↑</kbd>, <kbd>↓</kbd>: moves between elements in the current list
- Printable characters (e.g. letters, punctuation, <kbd>Space</kbd>): moves focus to the next item that starts with those characters
- <kbd>Enter</kbd>: chooses the selected option in the current list, sets the `value` of the autocomplete.

Note: for _inline_ autocomplete the first match is automatically selected, and the `value` of the autocomplete is set.

### `radio`s (pick only one)

- <kbd>↑</kbd>, <kbd>→</kbd>, <kbd>↓</kbd>, <kbd>←</kbd> (Arrow keys): moves between elements in the group, checking the current item
- <kbd>Space</kbd>: checks the focused radio

### `checkbox`es (pick multiple)

<kbd>Space</kbd>: toggles the focused checkbox

### Inside a form

<kbd>Enter</kbd>: submit form (when an element inside a form has focus, and the element has no default action for <kbd>Enter</kbd>)

## Which elements receive focus?

Only interactive elements (a link, a button, any kind of form control) automatically get keyboard focus.

We can send programmatic focus to other elements, but this should be done infrequently and carefully. For example:

- when opening a modal: sending focus to a modal's heading;
- when closing a modal: sending focus to the button that opened the modal.

## What if no interactive element has focus?

The default keyboard action takes place:

- <kbd>Tab</kbd>: moves focus to the next interactive element on the page
- <kbd>Shift</kbd> + <kbd>Tab</kbd>: moves focus to the previous interactive element on the page
- <kbd>Space</kbd>: moves down the page
- <kbd>Enter</kbd>: does nothing
- <kbd>↑</kbd>, <kbd>↓</kbd>: moves up and down the page
- <kbd>→</kbd>, <kbd>←</kbd>: does nothing
- <kbd>Esc</kbd>: does nothing
