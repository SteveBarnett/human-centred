---
title: Implementing ARIA Live Regions
layout: post
description: 'Technical and user experience considerations for implementing ARIA Live Regions'
image: /img/2023/06/ialr.png
category: how-to guide
---

Reminder: live region content is output as unstructured text. No headings, lists, or interactive elements!

In summary: 

- Add live regions as early as possible.
- Add as few live regions as possible.
- Prefer slightly more verbose live region text to `aria-atomic` and `aria-relevant` usage.

Below are suggestions for **reliable results: most widely supported across different screen readers.** Although adopting the “worst” options below can still be successful, it’s unlikely to be successful across all screen readers. At best we’ll get inconsistent behaviour and at worst it just won’t work for some people.

## Add live regions as early as possible

1. Have an empty element with an `aria-live` attribute in the DOM on page load.
2. Add an `aria-live` attribute to an empty element already in the DOM soon after page load.
3. Add an empty element with an `aria-live` attribute to the DOM soon after page load.
4. Add an empty element with an `aria-live` attribute to the DOM as needed. Allow time for the screen reader to register the live region before injecting content into it.
5. Add an element with an `aria-live` attribute and text content to the DOM as needed.

On page load, screen readers buffer the content and keep track of live regions. Announcements are made when the **content** of a live region is updated.

Prefer live regions as static DOM elements: don’t remove and add them.

Clear a live region’s contents before inserting a new message. We can do this by removing the child elements of the live region, or by overwriting the existing contents.

## Add as few live regions as possible

1. Have one live region per page.
2. Have two live regions for `polite` and `assertive` (one live region each) announcements when a page needs both.
3. Have one live region per visible status message (such form validation messages), when appropriate.

There are several reasons for limiting the number of live regions:

- Content changes in live regions are only announced once, and cannot be cannot be listened to again by the user. Multiple live regions can lead to a long queue of announcements, making it difficult to associate the announcement with the user action(s).
- It can lead to interrupted announcements. Changing the content of a live region before an announcement has completed has inconsistent behaviour across screenreader. This applies to both replacing content and appending content. It can result in clearing the queue and an announcement being cut short or missed entirely.

Note: Assertive announcements interrupt, so any announcement in progress may be cut short. Assertive regions clear all currently queued changes, polite and assertive. 

## Prefer slightly more verbose live region text to `aria-atomic` and `aria-relevant` usage

- `aria-relevant` has a mix of inconsistent support and unclear experience for the user.
	- Don’t set `aria-relevant`: leave it as the implicit default `aria-relevant=“additions text”.
	- To announce removals, inject text describing the removal. This could be a negated version of the addition announcement. For example: “Filters cleared” instead of “Filters added”.
- `aria-atomic` support is mixed.

### Live Region attributes

Note! `aria-live=“assertive”` live regions have implicit `aria-atomic=“true”`.

- `aria-atomic=“false”` (default) announce only the changed nodes of the live region.
- `aria-atomic=“true”` announce all of the live region, based on aria-relevant value.
	- aria-relevant=“additions text” (default) added nodes, text, and text alternatives are announced.
	- `additions` added nodes are announced.
	- `text` added text and text alternatives are announced.
	- `removals` removed nodes, text, and text alternatives are announced.
	- `all` (equivalent to `additions removals text`) added or removed nodes, text, and text alternatives are announced.
	
## Some test cases

- [ARIA Live regions: dynamically changing politeness](https://stevebarnett.github.io/a11y-demos-and-tests/aria-live-regions-dynamically-changing-politeness.html)
- [ARIA Live regions: multiple live regions](https://stevebarnett.github.io/a11y-demos-and-tests/aria-live-regions-multiple-live-regions.html)
- [ARIA Live regions: appending content](https://stevebarnett.github.io/a11y-demos-and-tests/aria-live-regions-appending-content.html)

## References

- [ Clarify support or non-support for multiple aria-live regions on the same page #1689 ](https://github.com/w3c/aria/issues/1689)
- [Using aria-live by Ire Aderinokun](https://bitsofco.de/using-aria-live/#applyingarialiveanexample)
- [Clarify expectations for live regions rendered with text already present #1216](https://github.com/w3c/aria/issues/1216)
- [role="status" live region not announced when injected into DOM #696](https://github.com/FreedomScientific/VFO-standards-support/issues/696)
- [Draft guidance section for live region roles and attributes #78](https://github.com/w3c/aria-practices/issues/78)
- [General recommendations](https://github.com/w3c/aria-practices/issues/78#issuecomment-529846994)
- [aria-live on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [ARIA: alert role on MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role)
- [Technique ARIA19:Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19)
