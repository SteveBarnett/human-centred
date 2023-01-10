---
title: Testing with a screen reader (QE / AC edition)
layout: post
description: "Testing with a screen reader: Quality Engineering / Acceptance Criteria edition"
image: /img/2022/10/twasr.png
category: "how-to guide"
---

# Testing with a screen reader

This is a more QE (Quality Engineering) / AC (Acceptance Criteria) kind of script for testing with a screen reader. [The other testing with screen readers page](/2021/07/31/testing-with-screen-readers/) is a bit more broad, and includes set-up instructions.

You can also read more about [the two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/):

- In Browse mode, the whole page is read out in order.
- In Forms mode, the person uses Tab to move to the next focusable element or group. 

The best screen readers to test with are the ones our customers use. But some testing is way better than no testing.

## 1. Test the page title

The title appears in the tab and search engine results.

### Acceptance Criteria

- The title describes the contents or purpose of the page.

## 2. Test the `h1`

The `h1` is the main heading of the page.

### Acceptance Criteria

- The `h1` describes the contents or purpose of the page.
- The `h1` is similar to the title.
- There is only one `h1`.

### Acceptance Criteria (optional)

- The `h1` is the first heading on the page.

## 3. Test the headings

The headings divide up the page into sections.

### Acceptance Criteria

- Everything that looks like a heading (big, bold) is marked up as a heading (`h1` to `h6`)
- The headings are nested correctly.
    - The sections of the page have start with an `h2`.
    - The sub-sections (of the above sections) start with an `h3`.
    - And so on.

## 4. Test interactive elements

Interactive elements are focusable elements on the page: links, buttons, and form fields.

### Acceptance Criteria

- The element receives keyboard focus.
- The element can be used with only the keyboard.
- The element has an accessible name.
- The element has a good accessible name.
- Groups of related fields have an accessible name.
- The order of the elements follow reading order (left to right, top to bottom).

### Element-specific Acceptance Criteria

- Link text describes the destination.
- Button text describes the action.
- Field name describes the input.
- Field group names describe the group.

## 5. Test images

Since images are non-text content, they must (usually) have a text alternative. You might want to use your screen reader's list functionality to go through all the images in order.

More information and context: [A quick guide to text alternatives for images](/2022/04/25/a-quick-guide-to-text-alternatives-for-images/).

### Acceptance Criteria

- If the image is decorative: the image is hidden (via empty alt text `alt=""` or `aria-hidden="true"`).
- If the image is not decorative: the image has a text alternative describing the content or function (for example icon buttons).


## 6. Test help text and error messages

Help text and errors must be linked to their fields.

### Acceptance Criteria

- The field's help text is announced when the field receives focus.
- The field's error message is announced when the field receives focus.
- The field is marked as containing an error (`aria-invalid="true”`)
- Error-related icons have text alternatives, unless it would mean repeated text.

## 7. Test error handling and focus management

When submitting a form, the user should be guided through what the errors are and how to fix them.

### Acceptance Criteria

On submitting a form with errors, either:

- focus is sent to the first field with an error;
- an error summary is provided at the top of the page and focus is sent to the summary.

## 8. Test status messages and loading

Any visual indication of loading or updating should have a text equivalent. 

### Acceptance Criteria

- Loading states are announced (probably with an `aria-live` region).

## 9. Test tables

### Acceptance Criteria

- The `table` has a `caption`.
- The `table` has row and column headers as appropriate (`td`, with `scope` if needed)
- If the table contains interactivity (such as sorting, or data entry), these do not interfere with the underlying table semantics: the interactive elements are inside table cells.

