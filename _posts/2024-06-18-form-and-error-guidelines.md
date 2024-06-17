---
title: Form and error guidelines
layout: post
description: An update on an old page about form and error guidelines.
image: /img/2024/06/faeg.png
bodyclass: many-headers
---

Forms and errors are probably the biggest, most complex, topic web accessibility. It's where, when thing go wrong, they can go badly wrong for our users.

Here's a sketch of a bunch of things to keep in mind when making forms on the web, and [a smorgasboard of links for further reading](#further-reading).

* TICTOC
{:toc}

## Forms

### Data / Contents

- Have as few fields as possible (quicker to complete)
    - Remove optional fields
    - Collect the data some other way
    - Combine fields
    - Guess fields from other data
    - Don’t require “seemingly unnecessary” fields: must be clear, or explained, why it’s needed.
- Have smart defaults (less to fill in)
- Pre-fill fields where you can (less to fill in)

### Layout / Design

#### The form as a whole

- Follow conventions (people know and understand conventions better than custom things)
- Make sure the form has a header (tells the user what they’ll get when completing this form)
- Use a logical order of fields (helps understanding of form)
- Make forms one column (less intimidating)
- Use a progress indicator for forms spread over multiple pages (tells people scope, status, and position)

#### Optional things

- Ask for optional things at the end (quicker, more likely, to complete required fields)
- Show optional fields rather than required ones (nudges people to fill in more)

#### The form in pieces

- Top align labels with fields (easier to scan)
- The label should describe the expected input.
    - Don’t use `placeholder` text as labels (confuses people: labels are clearer)
- Only use a `placeholder` where it’ll really help (usually they’re confusing)
- Add help text for unfamiliar or concerning inputs, next to the label (clarifies the why)
    - Show help text instead of hiding it behind a tooltip (people might actually read it)
- Place triggers for user-activated help text, like a ? icon, next to labels and not input fields
- Size fields appropriately (gives a hint to required input)
- Show all options if there are only a few: `radio`s instead of a `select` (quicker to use, easier to scan)
- Avoid using a `select` if you can (they’re harder to use than other inputs)
- Put radios and checkboxes under each other (easier to scan)
- Group related fields using `fieldset` (easier to scan)
    - Add `legend` with `fieldset` (Provides context / heading for the group)
- Button text should describe the action (generic words like “submit” aren’t clear)

#### End of the form

- Show primary and secondary actions very differently (helps choose the correct action), but only show one action if you can
- Allow preview of results (prevents errors)
- Confirm before destructive actions (prevents panic)
- Support undo (helps recover from errors)
- Don’t have a reset / clear (too easy to do by mistake)

### HTML

- Have labels for, and placed before, every input (makes inputs clear)
- Use HTML5 `input` types - `date`, `url`, `email`, etc (makes input of data easier and faster)
- Make it keyboard-friendly (people tab through fields)

## Errors

### Layout / Design

- Have large click / tap areas: use `label`s with `radio`s and `checkbox`es (bigger areas are easier to hit)
- Explain any input or formatting requirements, e.g. password rules (helps prevent errors)
- Show error messages where the error is (that’s where people look for the error)
- Use a gentle, not eye-blearing, red (less intimidating)
- Show errors very clearly: outline the field AND use red text AND use a heavier font (makes sure people don’t miss the error)
- Visible and highly noticeable (makes sure people don’t miss the error)

### Wording / messaging

- Make it clear that something has gone wrong (don’t leave the user guessing whether everything is okay or not)
- State clearly and precisely the reason for the error (don’t make the user guess what went wrong)
- Avoid negative words if you can, don’t blame (no-one likes being told off or that it’s their fault)
- Don’t use jargon or error codes: express everything in the user’s vocabulary. (Most humans don’t speak developer)
- Constructive advice on how to fix the problem (Help them fix it)

### Approach

- Use inline validation (give immediate feedback)
    - after a field has been filled
- Avoid false negatives for validation. Rather allow some bad data through. (Don’t block task completion when everything is actually okay)
- Use warnings rather than blocking with errors (Let them achieve their goal if we can)
- For large forms, try a error-Fields only step (Hide some of the noise and let them focus on fixing things)
- Use adaptive error message: provide as much detail on the error as you can (Be specific about the problem)
- Validate before submission (Don’t make them wait to find out there’s a problem)
- Preserve as much of the user's work as possible (Don’t make them re-do work)
- Reduce the work of correcting the error (Help them get done as quickly as they can)

## Further reading

### Shorter overviews

- [Form design: from zero to hero all in one blog post](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/#form-validation)
- [A beginner’s guide to form accessibility: the 5 things accessible forms need and how to fix common mistakes](https://blog.pope.tech/2022/10/03/a-beginners-guide-to-form-accessibility/)

### Longer overviews

- [Creating Accessible Forms – WebAIM](https://webaim.org/techniques/forms/)
- [Usable and Accessible Form Validation and Error Recovery – WebAIM](https://webaim.org/techniques/formvalidation/)
- [Forms Tutorial - WAI](https://www.w3.org/WAI/tutorials/forms/)
- [Form fields in depth on web.dev](https://web.dev/learn/forms/fields/)
- [A Guide To Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/)

### Some specific code examples

- [Accessible form validation - Intopia CodePen](https://codepen.io/intopia/pen/BaKyWLx/14c076ec10d5f71c1c1283404b44e2a7)
- [Error message](https://design-system.service.gov.uk/components/error-message/) and [Error Summary](https://design-system.service.gov.uk/components/error-summary/) on the gov.uk Design System.
- [Progressively Enhanced Form Validation, Part 3: Validating a checkbox group](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-3-validating-a-checkbox-group/). Worked example of building up a form.

### Wording and copy

- [Writing Accessible Form Messages](https://www.tpgi.com/writing-accessible-form-messages/)
- [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)


### Sites to search for a specific topic

- [Scott O'Hara](https://www.scottohara.me/writing/)
- [Adam Silver](https://adamsilver.io/blog/)
- [Adrian Roselli](https://adrianroselli.com/)
- [Baymard's E-Commerce UX Research Articles](https://baymard.com/blog). Focused on ecommerce, but widely applicable lessons.
- [Inclusive Components](http://book.inclusive-components.design/)

### Grab bag

- [Accessibility acceptance criteria for forms ](https://kb.iu.edu/d/biev)
- Local peeps [Formally](https://www.getformally.com/) (It has a 'no code' form builder and an SDK for developers.)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/)