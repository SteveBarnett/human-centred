---
title: Infinite scroll accessibility and usability
layout: post
description:
---

Infinite scroll is hard to do well in terms of UX and accessibility. We're usually better off using a "load more" button or paging, depending on the context.

At work the other day we were discussing implementing an infinite scroll. I took the chance to do a bit of a deep dive into the details. Here's a summary of what I found.

## The options

Broadly speaking, there are four options for pages with a lot of items (like a category listing or a search results page):

- show some results, and have a load more button;
- have pagination;
- show some results, and have infinite scrolling;
- show all the items (usually impractical and bad for performance).

Infinite scrolling has its pros, but some heavy cons for users, especially those with disabilities.

## Fit for purpose?

Goal-oriented (search / finding a specific thing in the list, comparing things in the list) tasks tend not to be a good fit for infinite scroll. Search results, for example, tend to be sorted by relevance, so we don't expect users to go through many (pages of) items.

Browsing and exploring tasks tend to be a better fit for infinite scrolling, especially when items in the list are at the same level of hierarchy.

As with most things, though, it's still best to test with our users and see what works best for them.

## Infinite scrolling pros

- A smooth and seamless experience of browsing items.
- Easy product discovery as it lets users browse more items.
- Can show a whole list, so it's good for scanning the whole result set.

## Infinite scrolling cons

- Harder or impossible (e.g. for keyboard users) to get to the footer.
- Breaks the scrollbar, which people use as a guide to page length.
- As the list grows, the page gets heavier and slower.
- Can result in user uncertainty and anxiety since there's no paging to hint at size of list.
- No way to jump ahead a few "pages" to quickly get to content further down the list (e.g. stuff from a few weeks ago).
- Most implementations don't return the user to the same spot in the list when returning via the browser's back button.

## Accessibility concerns

The [ARIA pattern `role="feed"`](https://w3c.github.io/aria-practices/#feed) was introduced to make infinite scrolling more accessible for screen readers users. It does still cause problems for users with other disabilities.

- Users with motor disabilities. Endless navigation is time consuming, difficult to navigate, and can be triggered accidentally.
- Users with low vision. They use zoom and magnification assistive technology which means that either they don't trigger the loading of new items or they don't see them appear.
- Uses with cognitive disabilities. Infinite scroll has a high cognitive load that is extremely taxing.
- Users who are new to screen readers. They may not know about this (uncommon) widget type.

## User-initiated Infinite Scroll

A pattern that takes the good bits of infinite scroll and mitigates the bad bits is to have short bursts of infinite scrolling, prompted by the user.

- Initially load a small number of items. Infinite scroll for a few result sets.
- Show a "load more" button to set off another few result sets worth of infinite scroll.

The pause in the infinite scroll gives the user a chance to access the footer and think about whether search or filtering would be better.

## Accessible infinite scroll summary

Don't use `role="feed"`. It requires a fair amount of extra work (keyboard support, scroll listeners) for a solid implementation.

- Load the first set of items.
- Have a "Load more" button to load the next set of items.
  - insert the next set of items after the current set and before the "Load more" button
  - move `focus` to the first item in the new set of items
- The button text should be as explicit as possible "load more 'health and safety' articles." Some of this text could be wrapped in `span`s with `.sr-only`s to visually hide them, e.g. if we just want the button to visually show "load more".
- Make sure there's a bit of text describing the list, such as "Showing 20 results for 'health and safety' articles". It can be visually hidden, if required.
  - add `aria-live="polite" role="status" aria-atomic="true"` to it.
  - update the text after new items have been added to the list.

I made a (very!) light sketch of this at [SteveBarnett / Accessible-Infinite-Scroll](https://stevebarnett.github.io/Accessible-Infinite-Scroll/index.html).

---

## Resources

- [Automatic infinite scrolling & accessibility](http://simplyaccessible.com/article/infinite-scrolling/)
- [Infinite Scrolling, Pagination Or “Load More” Buttons? Usability Findings In eCommerce](https://www.smashingmagazine.com/2016/03/pagination-infinite-scrolling-load-more-buttons/)
- [Infinite Scrolling Is Not for Every Website](https://www.nngroup.com/articles/infinite-scrolling/)
- [7 reasons why infinite scrolling is probably a bad idea](https://medium.com/simple-human/7-reasons-why-infinite-scrolling-is-probably-a-bad-idea-a0139e13c96b#.okmknw88o)
- [So You Think You’ve Built a Good Infinite Scroll](https://adrianroselli.com/2014/05/so-you-think-you-built-good-infinite.html)
- [Infinite Scrolling & Role=Feed Accessibility Issues](https://www.deque.com/blog/infinite-scrolling-rolefeed-accessibility-issues/)
- [Feed pattern on WAI-ARIA Authoring Practices 1.2](https://w3c.github.io/aria-practices/#feed)
