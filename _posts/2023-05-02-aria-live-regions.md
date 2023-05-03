---
title: ARIA Live Regions
layout: post
description: "ARIA Live Regions: what they are, when we need them, and examples"
image: /img/2023/05/alr.png
category: tutorial
---

## What are live regions?

Live regions are containers for text status messages (including errors) that tell screen reader users about a change in content **somewhere else** on the page.

### Technical notes

- **They’re a container to inject text into.** Note that content in a live region gets “flattened”: the HTML structure is ignored and only the text content of all nodes is announced.
- **The element should be added to the DOM as early as possible.** First prize: on initial page load. Second prize: the ARIA attributes are added before the text is injected.
	- The region is empty when it’s added. (If it has text inside when it’s addded, it will be announced)
	- The region can be anywhere on a page and will be announced at the appropriate time.
	- The text in the container may or may not be visible on screen. We prefer visible text because it more easily works for more people.
- They can be status-based (`polite`) or alert-based (`assertive`).

## When do we need a live region?

- To let the user know about a change in content that is not a change of context. 
- To give them information about success or results of an action, about state or progress, or about errors.
- In a way that doesn’t interrupt them without very good reason.

A change in context would mean a change in focus, which would inherently interrupt the user. There’s no need for a live region for that. It’s worth asking: is the change important enough to interrupt the user?

Note: we need to have a light touch when adding live regions. From [Dynamic Content Updates](https://webaim.org/techniques/aria/#dynamic) in WebAIM’s Introduction to ARIA:

> Care is necessary with all live regions to ensure that screen reader users are not needlessly interrupted or overwhelmed with notifications, especially if there are multiple live regions on a page. 

### Examples of live regions

- **Auto-save messages** like “Saving…”, “Changes saved.”
- **Search-related messages** like “Searching...", “5 results found”, "No results returned”. (But not the details of the search results. That’s a better fit for a change of context: the results will be announced as the user moves through them.)
- **Filter-related messages** like “Filtering…”, “Showing 5 rows”, “No rows match your filters.” ((But not the details of the filter results.)
- **Error messages** like “First name is required”, “Date is not valid.”
- **Loading and progress messages** like “Loading”, “Document uploading…”, “Document upload completed.”


### Counter examples of live regions

- **Content that’s shown / hidden by a user’s actions** on a menu, an accordion, or a tab list. If coded correctly, these already convey the relevant changes (with `aria-expanded=“true|false”` on buttons or `aria-selected=“true”` on `tab`s).
- **When we move focus for the user.** This will not be often!
- **Moving to a new page in a SPA**. Instead, move focus to the main heading (`h1`) of the new page.

## Types of Live Regions

There are two common types of Live Region.

(There are also `log`, `marquee`, and `timer` types, but they’re a bit obscure.)

### Talky

- The “quiet” version.
- `role=“status”` / `div[aria-live=“polite”]`.
- Use carefully.
- Announced at the next graceful opportunity: the end of speaking the current sentence or when the user pauses typing.

Good for: status messages. Could be presented visibly as a status bar.

### Shouty

- The “loud” version.
- `role=“alert”` / `div[aria-live=“assertive”]`.
- Use infrequently.
- Announced immediately, interrupting other announcements.
- Could clear the speech queue of previous updates.

Good for: error messages; important and time-sensitive information.

**Note:** using a shouty live region inappropriately is a WCAG Failure. [Failures for Success Criterion 4.1.3 (Status Messages – Level AA)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#status-messages):

> Using `role="alert”` or `aria-live="assertive”` on content which is not important and time-sensitive.

## Add live regions early

Having live regions in the DOM on page load is the most reliable and robust way of doing it. When that’s not possible, add the ARIA attributes before injecting the text.

From [Are we live? \| scottohara.me](https://www.scottohara.me/blog/2022/02/05/are-we-live.html)

> Many developers, reasonably, have tried to make these notifications clear by injecting a live region containing the necessary text on an as-needed basis. However, if testing beyond macOS VoiceOver, one would find that this is consistently the least supported way to ensure a live region is properly announced by screen readers.
>  … ensuring an empty live region exists in your DOM, and injecting content into it when necessary, proves to be the most robust way to ensure a live region will be announced. 

From  [Using aria-live](https://bitsofco.de/using-aria-live/#applyingarialiveanexample):

> Assistive technology will initially scan the document for instances of the aria-live attribute and keep track of elements that include it. This means that, if we want to notify users of a change within an element, we need to include the attribute in the original markup.

From [Dynamic Content Updates](https://webaim.org/techniques/aria/#dynamic) in WebAIM’s Introduction to ARIA.

> This attribute must be set when the page first loads; injecting it later doesn't work reliably.

## Further references

- [Live Region Definition](https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region) at WAI ARIA.
- [`aria-live` property](https://www.w3.org/TR/wai-aria-1.2/#aria-live) at WAI-ARIA.
- [Live Region Roles](https://www.w3.org/TR/wai-aria-1.2/#live_region_roles) at WAI-ARIA.
- [Technique ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19.html) at WAI.
- [Technique ARIA22:Using role=status to present status messages](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22) at WAI.
- [Understanding SC 4.1.3: Status Messages (Level AA) – Examples](https://www.w3.org/WAI/WCAG21/Understanding/status-messages#examples): Status Message Examples and Examples of Changes That Are Not Status Messages.
- [PF/ARIA/BestPractices/LiveRegion](https://www.w3.org/wiki/PF/ARIA/BestPractices/LiveRegion) at w3.org.
- [`aria-live` at MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [Basic example: Dropdown box updates useful onscreen information](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) at MDN’s ARIA live regions.