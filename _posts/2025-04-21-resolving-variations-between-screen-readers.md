---
title: Resolving variations between screen readers
layout: post
description: What to do when we testing with screen readers and getting different results for the same thing.
image: /img/2025/04/ar.png
---

Following on from [Supported Assistive Technology](/2025/04/21/supported-assistive-technology/), here's a note on what to do when we test something and get ... different results for the same thing.

It's expected that different screen reader and browser combinations may announce the same component slightly differently. We confirm that no information is missing across these variations.

1. We check in the accessibility tree that the object properties are being reported as expected (name, role, value, state)
    - If there are any errors or omissions, we fix them and test again
2. We check in Browse mode for missing information
    - If no information is missing, there's no issue
    - If information is missing
        - we check that we are following our Accessibility Ready Principles and Guides: [no ARIA is better than bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/); Follow the [Rules of ARIA](https://www.w3.org/TR/using-aria/#NOTES)
        - we consider using a different approach that is more widely supported
        - we log a bug with the browser or screen reader vendor, if possible
        - if the screen reader and browser combination is not in Assistive Technology Testing Suite, it can be considered Low priority
