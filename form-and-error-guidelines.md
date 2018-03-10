---
layout: page
title: Form and error guidelines
---

- what (why)

## Forms

### Data / Contents

- Have as few fields as possible (quicker to complete)
    - Remove optional field
    - Collect the data some other way
    - Combine fields
    - Guess fields from other data
    - Don’t require “seemingly unnecessary” fields: must be clear, or explained, why it’s needed.
- Have smart defaults (less to fill in)
- Pre-fill fields where you can (less to fill in)


### Layout / Design

- Top align labels with fields (easier to scan)
- Make forms one column (less intimidating)
- Put radios and checkboxes under each other (easier to scan)
- Show help text instead of hiding it behind a tooltip (people might actually read it)
- Size fields appropriately (gives a hint to required input)
- Show optional fields rather than required ones (nudges people to fill in more)
- Group related fields (easier to scan)
    - Use fieldset
- Allow preview of results (prevents errors).
- Confirm before destructive actions (prevents panic).
- Support undo (helps recover from errors).
- Don’t have a reset / clear (too easy to do by mistake)

### HTML

- Show all options if there are only a few: radios instead of select (quicker to use, easier to scan)
- Don’t use placeholder text as labels (confuses people: labels are clearer)
- Button text should describe the action (generic words like “submit” aren’t clear)
- Make it keyboard-friendly (people tab through fields)
- Avoid selects if you can (they’re harder to use than other inputs)
- Set keyboard focus to the first form field (quicker to start filling in)
- Have large click / tap areas: use labels with radios and checkboxes (bigger areas are easier to hit)
- Follow conventions (people know and understand conventions better than custom things)

## Errors

### Layout / Design

- Show error messages where the error is (that’s where people look for the error).
- Use a gentle, not eye-blearing, red (less intimidating)
- Show errors very clearly: outline the field AND use red text AND use a heavier font (makes sure people don’t miss the error)
- Visible and highly noticeable (makes sure people don’t miss the error)

### Wording / messaging

- Make it clear that something has gone wrong (don’t leave the user guessing whether everything is okay or not).
- State clearly and precisely the reason for the error (don’t make the user guess what went wrong).
- Avoid negative words if you can, don’t blame (no-one likes being told off or that it’s their fault).
- Don’t use jargon or error codes: express everything in the user’s vocabulary. (Most humans don’t speak developer).
- Constructive advice on how to fix the problem (Help them fix it).

### Approach

- Use inline validation (give immediate feedback)
    - after a field has been filled
- Avoid false negatives for validation. Rather allow some bad data through. (Don’t block task completion when everything is actually okay)
- Use warnings rather than blocking with errors. (Let them achieve their goal if we can)
- For large forms, try a error-Fields only step. (Hide some of the noise and let them focus on fixing things)
- Use adaptive error message: provide as much detail on the error as you can (Be specific about the problem).
- Validate before submission (Don’t make them wait to find out there’s a problem).
- Preserve as much of the user's work as possible (Don’t make them re-do work).
- Reduce the work of correcting the error (Help them get done as quickly as they can).
