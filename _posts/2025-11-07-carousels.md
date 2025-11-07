---
title: 'Carousels'
layout: post
description: Some thoughts on carousel and when to never use them (😏)
image: /img/2025/11/c.png
---

Also know as slide shows and sliders, carousels come and go out of fashion. They tend to fall into the bucket of "designers like them, customers don't".

There are a few approaches we can take.

## Try not to use a carousel

- **Don't bring up carousels at all.** Mike Monteiro's excellent [The Market Is Always Out of Carousels](https://deardesignstudent.com/the-market-is-always-out-of-carousels-1b8036f39344) talks about this from a design perspective.
- **Discuss the reasons why they're usually not a good choice.** "[Should I use an carousel](https://shouldiuseacarousel.com/)" brings a humorous take on it, and some quotes and links out to sources.
    - They're often not very accessible, in particular auto-playing ones failing under WCAG SC 2.2.2 Pause, Stop, Hide (A) and a lack of keyboard accessibility
    - Users tend to ignore them, sometimes mentally classifying them as advertising
    - The content tends to chosen from motives that are not user-centred
- **Offer some alternatives.**
    - [Anton Sten's Why carousels don't work](https://www.antonsten.com/articles/why-carousels-dont-work/) suggests considering prioritised messaging and content hierarchy.
    - Choose more carefullly and show fewer things, removing the need for a carousel
    - Use a different pattern like an accordion or a "Show more" button for hiding less important content

## Make a good carousel

Follow some good advice on making the most usable and accessible carousel we can.

- [Brad Frost's Carousels article](https://bradfrost.com/blog/post/carousels/) has some advice and a call-to-action to gather data to measure their actual effectiveness
- Smashing Magazine has an in-depth article: [A Step-By-Step Guide To Building Accessible Carousels](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/)
- [Heydon Pickering's Inclusive components includes A Content Slider](https://inclusive-components.design/a-content-slider/)
- The [ARIA Authoring Practices Guide includes a Carousel (Slide Show or Image Rotator) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).
    - As with all APG patterns, follow their Keyboard Interaction and WAI-ARIA Roles, States, and Properties guidance, but don't rely too much on their example code. As they say at the start of each example page: "The code in this example is not intended for production environments."

## Four common carousel issues found in accessibility audits

Like any component, it's possible to make carousel technically accessible (noting that it may still not be very usable). Here are some common accessibility problems with carousels.

### Carousel isn't identified programmatically

- Screen reader users won't be told about that it's a carousel
- To fix it: wrap the carousel in a `role="region"`{: .attr} and give it an accessible name

### Carousel auto-plays and can't be stopped 

- This is distracting for many users, and the content may move too quickly to be read
- This fails under WCAG SC 2.2.2 Pause, Stop, Hide (A)
- To fix it: ideally don't auto-play, but otherwise have a Pause/Play button

### Screen reader users don't get any feedback after pressing the next or previous button

- Screen reader users won't know if anything happened after they pressed the button
- This fails under WCAG SC 4.1.3 Status Messages
- To fix it: use a (polite) live region to announce the current item after pressing the next or previous button

### Current slide (in list of slides) is not programmatically indicated

- Screen reader users will have to puzzle out where they are in the carousel
- This fails under WCAG SC 4.1.2 Name, Role, Value (A)
- To fix it: add `aria-current="true"`{: .attr} to the current slide in the list
