---
title: Accessibility and usability considerations for disabling buttons
layout: post
description: Why it's best not to disable buttons, and instead provide help or error text.
image: /img/2020/06/disabled-buttons-table.png
---

Broadly speaking, it's best not to disable buttons. Instead we can provide help or error text (either inline on-the-go or on form submission).

Help and error text is clearest way to convey the form requirements to sighted mouse users, sighted keyboard users, and to screen reader users. An exception to this is very short forms with clear requirements.

### Who does it work for?

| HTML                                            | Sighted mouse users | Sighted keyboard users | Screen reader users |
| ----------------------------------------------- | ------------------- | ---------------------- | ------------------- |
| hover tooltip on button                         | ✔️                  | ❌                     | ❌                  |
| visible message attached to button              | ✔️                  | ✔️                     | ❌                  |
| visible message attached to relevant control(s) | ✔️                  | ✔️                     | ✔️                  |
| visible message attached to the form            | ✔️                  | ✔️                     | ✔️                  |

### Disabled buttons

HTML buttons accept a Boolean `disabled` attribute. This stops the button from receiving events like clicks and keyboard focus. Browsers usually present the button as greyed out.

The most important question is: **how does the user know why the button is disabled?**

- A sighted user can see that the button is greyed out, but might not know why.
- A low vision or blind screen reader user won't know about the disabled button as it's invisible to them.

If a form is very short, and the requirements are explicit (e.g. when there are two fields both marked as required), it's probably clear to the user why the button is disabled.

### If we really have to set a button to `disabled`

- We could add a hover-based tooltip to the disabled button. This isn't ideal though: since the button doesn't receive focus, sighted keyboard users won't see the message; screen readers ignore disabled controls, so screen reader users won't hear the message at all.
- We could add visible some help / error text for the button. This would work for sighted users, but not for low vision or blind users using a screen reader since the button won't receive focus.
- We could have an error message for the whole form (with a `role="alert")`. This would work for sighted mouse users, sighted keyboard users, and screen reader users.
- We could add help / error text to the relevant form control(s). This would work for sighted mouse users, sighted keyboard users, and screen reader users. In this case, though, I would argue that setting the button to `disabled` is unnecessary: the form already communicates why the form submission is unsuccessful.

### Summary

It's best not to disable buttons since it won't be clear to all users why the form can't be submitted. It's better to use help and text error to explain to the user what went wrong. This works for the widest range of users.
