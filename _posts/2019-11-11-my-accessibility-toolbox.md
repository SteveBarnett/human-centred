---
title: My Accessibility toolbox
layout: post
description:
image: /img/2019/11/WAM.jpg
---

One of the things that’s important to me in the work I do is accessibility. I keep a toolbox of things to do to help me design and develop more inclusively.

Which tools I use depends on the project, the team, where we are in the process, and how much time we have. The majority of the work I do is front-end development. I tend to think about accessibility as happening before, during, and after development. Another way of putting it is during design, development, and testing. There’s some cross-over between the phases, but these are handy buckets to use for sorting what to do when.

My goal is [WCAG 2.1 compliance](https://www.w3.org/WAI/WCAG21/quickref/), ideally at AAA level. The spec is long and little tricky, though. I don’t find it particularly easy or practical to use it as a checklist for day to day work. So, I try and find ways of working that’ll get me passing WCAG as automagically as possible. I want these to be a part of my process, not something that I have to remember to do.

## Quick check

If I’m really pressed for time, I check a handful of things: the six most common problems from [the WebAIM Million](https://webaim.org/projects/million/)

- A `lang` attribute on the `html` element.
- Link text describes the destination of the link.
- Every `form` control has an associated `label`.
- `button` text describes the action that will happen.
- `alt` text for images conveys the content and function of each image.
- Colour contrast is at least 4.5:1 for text and 3:1 for graphics and UI components.

I use a picture as a memory aid to remember these six things together.

![](/img/2019/11/WAM.jpg){: .boxed }.

## Design

This is the best time to consider accessibility. It’s more expensive to make changes later on: it might be mean rework in the code or redesign of the UI or the whole flow. (The very excellent Deque call this [Shift Left Accessibility Testing](https://www.deque.com/shift-left/).)

### High level things

Review the [WCAG POUR Guidelines](https://github.com/SteveBarnett/Checklists/blob/master/wcag-pour-framework.md): Perceivable, Operable, Understandable, Robust. Some key things to check:

- Perceivable
  - all non-text information has a text equivalent.
  - colour contrast is at least 4.5:1 for text and 3:1 for graphics and UI components.
- Operable
  - everything can be used with a keyboard only.
  - clear, consistent, helpful navigation, especially any relative navigation (you are here, next and previous, etc.).
- Understandable
  - standard controls are used instead of custom ones.
  - check the reading level and that the language used is plain and clear (look for jargon, check button text, link text).
- Robust
  - each page has areas clearly mapped to primary, secondary, (page-level) header, (page-level) footer.
  - headings and their levels are marked, no heading levels are skipped.

Use UX and accessibility guidelines as a quick-review checklists. Improving usability improves accessibility, and vice versa. I tend to work with teams to: pick a checklist that fits well; update it a a bit; apply it.

- [Accessible User Experience Framework](https://github.com/SteveBarnett/Checklists/blob/master/accessible-user-experience-framework.md).
- [Ten Principles of Inclusive Web Design](https://github.com/SteveBarnett/Checklists/blob/master/the-ten-principles-of-inclusive-web-design.md).
- the classic [10 Usability Heuristics for User Interface Design](https://github.com/SteveBarnett/Checklists/blob/master/10-usability-heuristics-for-user-interface-design.md) by NNg).
- [other checklists too](https://github.com/SteveBarnett/Checklists).

### Make the sure the content is well-structured

Review the design through the lens of [HTML for IA](https://naga.co.za/html-for-ia/)

- Check that the following are marked up:
  - header block,
  - main,
  - aside (e.g. sidebar),
  - footer block,
  - nav block,
- headings (levels 1 to 6, don’t skip levels).
- Check for the following form elements, if needed:
  - a heading for every form;
  - a label for every control (text fields, checkboxes, radios, etc.);
  - a name for every group of related controls;
  - headings for each block of content.

### Check the colour palette visually

Use different colours modes to see how robust the colour palette is.

- Windows: Use High Contrast mode. Start button, Settings > Ease of Access > High contrast.
- Mac OS: System Preferences > Accessibility > Display. Select Display > Invert Colours for high contrast. Select Colour Filters > Greyscale.

### Interactions and forms

Check that interaction states are designed:

- `:focus` states;
- error states and error messages (lots more detail below).

Take special care with forms and errors. Have a look at these [Form and error guidelines](https://naga.co.za/form-and-error-guidelines/).

Some key things to check for forms:

- Use a progress indicator for forms spread over multiple pages (tells people scope, status, and position)
- Show help text instead of hiding it behind a tooltip (people might actually read it)
- Size fields appropriately (gives a hint to required input)
- Button text should describe the action (generic words like “submit” aren’t clear)
- Don’t use placeholder text as labels (confuses people: labels are clearer)

Some key things to check for errors:

- Use inline validation to validate before submission (give immediate feedback)
- Show errors very clearly, for example: outline the field and use red text and use a heavier font (makes sure people don’t miss the error)
- State clearly and precisely the reason for the error (don’t make the user guess what went wrong)
- Give constructive advice on how to fix the problem (Help them fix it)
- Don’t use jargon or error codes: express everything in the user’s vocabulary. (Most humans don’t speak developer)

### Data / Contents

- Have as few fields as possible (quicker to complete)
- Have smart defaults (less to fill in)
- Pre-fill fields where you can (less to fill in)

## Development

### Write semantic HTML for structured content

Semantic HTML gives us lots of accessibility things for free. Browsers and Assistive Technology know what to do with the markup.

- Check for the following elements as direct children of `body`:
  - `<header>`;
  - `<main>`;
  - `<aside>`;
  - `<footer>`;
- Check for `<nav>`s (with a `ul` of links inside).
- Heading elements (`<h1>` to `<h6>`, don’t skip levels).
- Check the following for every form:
  - a heading for every form;
  - a `<label>` for every control (text fields, checkboxes, radios, etc.);
  - a `<fieldset>` for every group of related controls, with a `<legend>`.
- `<section>`s to group content thematically, each with a header;
- `<article>`s for self-contained stuff like a blog post or a single product, each with a header.
- Add a skip link for keyboard users as the first thing on the page, pointing at `main`.

### Make the dev environment visually help you

Use debug CSS in the `dev` environment to pick up potential errors in HTML.

- [Heydon Pickering’s revenge.css](https://github.com/Heydon/REVENGE.CSS).
- [a11y.css accessibility checker](https://github.com/ffoodd/a11y.css)
- add `component-name.test.css` to check for component specific stuff

### Use tools manually or tie into CI

Use CLI tools [Pa11y](https://pa11y.org/) and [axe](https://www.deque.com/axe/) to check for errors on web pages.

- Run `axe <the_url>`. Since axe returns zero false positives, it’s a good first one to run.
  - Use `--include <css-selector>` to test a component.
- Run `pa11y --standard WCAG2AA -i "notice;warning" <the_url>` as a first pass: ignore notices and warnings, and check for AA compliance. Pa11y tends to be more “noisy” than axe, so it’s a good second one to run to not get scared off!
  - if using with CI add `--threshold 10`, for example, to allow 10 errors. Aim to bring this number down with each build.
- Run `pa11y --standard WCAG2AAA <the_url>` once you’re pretty confident it’s all good: check All The Things for AAA compliance.
  - Use `--root-element “<css-selector>”` to test a component
- Double whammy! Run: `pa11y --runner axe --runner htmlcs <the_url>` for both the above. I tend to prefer running them separately though, since they have very different approaches.

## Testing

### DevTools, Browser Extensions, and bookmarklets

- Firefox or Chrome
  - [axe extension](https://www.deque.com/axe/)
  - [WAVE extension](https://wave.webaim.org/extension/)
  - [a11y.css accessibility checker extension](https://ffoodd.github.io/a11y.css/)
- Firefox
  - Dev Tools, Accessibility
    - Run "Check for issues"
    - Use the accessibility inspector for specific bits
- Chrome
  - Dev Tools, Audits (in particular Accessibility)
  - [Microsoft’s Accessibility Insights](https://accessibilityinsights.io/en/), powered by axe
    - FastPass for a quick automated check
    - Ad hoc tools for quick manual checks
    - Assessment for a guided walk-through of testing <3
  - [ARC Toolkit extension](https://www.paciellogroup.com/toolkit/)
- Bookmarklets. Good for eyeballing a page that’s been built.
  - [Accessibility Bookmarklets](https://accessibility-bookmarklets.org/install.html). Good for checking what semantic markup has been used.
  - [a11y.css accessibility checker](https://ffoodd.github.io/a11y.css/). Good for showing errors.
  - [Khan Academy’s tota11y](https://khan.github.io/tota11y/). Good for an overview.

### Web-based

- Web-based tools
  - [WebAIM’s WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)

### Manual testing

- Desktop app
  - [ Koa11y](https://open-indy.github.io/Koa11y/) (uses pa11y)
- Check out [Inclusive Design tips](https://inclusivedesign.xyz/tips/) for bunch of things to test. Some key activities:
  - Disable styles and check that the content has a linear, logical, order.
  - Use the High Contrast display mode of your computer.
  - Zoom in on your page.
  - Test across a wide range of devices, especially older and slower ones.
  - Check the page weight in MB and consider ways to make it smaller.

### Test using a Screen Reader.

This is tricky and takes practice!

Popular screen reader and browser combinations

- **Windows:** [NVDA](https://www.nvaccess.org/) (free) and [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/) (free)
  - [Keyboard Shortcuts for NVDA](http://webaim.org/resources/shortcuts/nvda) on [WebAIM](http://webaim.org/)
- **Windows:** [JAWS](http://www.freedomscientific.com/Downloads/JAWS) (free trail) and [Microsoft Internet Explorer](https://www.microsoft.com/en-za/download/internet-explorer.aspx) (free)
  - [Keyboard Shortcuts for JAWS](http://webaim.org/resources/shortcuts/jaws)
- **iOS:** VoiceOver (`Settings > General > Accessibility`) and Safari
  - [Using VoiceOver to Evaluate Web Accessibility](http://webaim.org/articles/voiceover/)
- **Android:** TalkBack `(Settings > Accessibility`) and Google Chrome
  - [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en)
- **MacOS:** VoiceOver (`Command-F5` or `System Preferences > Accessibility`) and Safari
  - [Using VoiceOver to Evaluate Web Accessibility](http://webaim.org/articles/voiceover/)

This list is heavily based on [Screen readers and web browsers – what’s the best pairing for testing?](http://hollier.info/browserpairing/).

### Automated testing

- Use Pa11y and Puppeteer ([example on GitHub](https://github.com/pa11y/pa11y/blob/master/example/puppeteer/index.js)).

## Summary

There’s lots we can do to make our stuff more accessible.

If we’re pressed more time or money, we can check for [the six big things](/img/2019/11/WAM.jpg) from the [WebAIM Million](https://webaim.org/projects/million/).

If we have more time, we can do more things in each phase.

- In the Design phase, we can:
  - design more inclusively by considering a wider range of people, abilities, devices, and networks connections using our stuff;
  - design more robust and widely supported interfaces by thinking in HTML.
- In the Development phase we can:
  - write semantic HTML.
  - use debug CSS.
  - use CLI tools to help catch our slip-ups.
- In the Testing phase we can:
  - use browser extensions to do quick checks.
  - use browser extensions to give us a guided, step-by-step, walkthrough.
