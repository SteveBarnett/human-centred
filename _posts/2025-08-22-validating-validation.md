---
title: Validating validation
layout: post
description: Notes on validating validation and handling error handling.
image: /img/2025/08/vv.png
category: how-to guide
---

How do we validate validation? How do we prevent our error handling having errors?

Here's a short version of what to do for high quality, accessible, validation.

- Show which fields have errors, with more than just colour
- Show an informative error message, programmatically associated with its field
- Manage focus on submit: to the first invalid field for short forms; to the heading of an error summary for longer forms

Here's a short version of potential issues, with the relevant Success Criteria (SC) from WCAG. All them are considered Severity High.

- **Error show by colour alone.** SC: [1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#use-of-color).
    - Add an icon or "Error: " to the label
- **No error message.** SC: [3.3.1 Error Identification (Level A)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#error-identification).
- **Not a helpful error message.** SC: [3.3.3 Error Suggestion (Level AA)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#error-suggestion).
    - Make it clear that something has gone wrong (don’t leave the user guessing whether everything is okay or not)
    - State clearly and precisely the reason for the error (don’t make the user guess what went wrong)
    - Avoid negative words if you can, don’t blame (no-one likes being told off or that it’s their fault)
    - Don’t use jargon or error codes: express everything in the user’s vocabulary. (Most humans don’t speak developer)
    - Constructive advice on how to fix the problem (Help them fix it)
- **Not a programmatically associated error message.** SC: [1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#info-and-relationships).
    - Add `aria-describedby="id-of-the-error-text"` to the field 
    - And `aria-invalid="true"` on the field with an error
- **Focus not managed on error.** SC: [2.4.3 Focus Order (Level A)](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#focus-order).
    - Manage focus on submit: to the first invalid field for short forms, to the heading of an error summary for longer forms
