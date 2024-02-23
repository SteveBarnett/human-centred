---
title: How I turn a design into HTML
layout: post
description: A bit of a sketch of my process for turning a picture of a website into a website.
image: /img/2024/02/hitadih.png
category: how-to guide
---

Part of what I do is turn designs into code (and help others do that). I use plain old semantic HTML as my guide for how to do that.

My sales pitch for doing this is clarity and usability: matching the look with **what the designer intended the interaction to be.** It's sort of like taking [WCAG Success Criteria 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_overview&technologies=smil%2Cpdf%2Cflash%2Csl&showtechniques=123%2C242#info-and-relationships) and applying it with real vim and vigour.

## My process

Here's what I do for design to development, for turning a picture of a website into a website.

1. Ignore what it looks like for now.
2. Think about what the interaction is. Pick the right HTML for that. Some questions to consider:
	- What am I doing?
	- What am I choosing?
	- What are the states?
3. Don't change the look of the native HTML element much. It's okay to make things bigger or clearer, but don't change their essence: it messes with the affordance. For example:
	- don't make checkboxes round (like radios);
	- don't make links look like buttons (or vice versa);
	- make sure the button part of accordions / disclosures looks interactive, usually an arrow or chevron.

A fairly common objection is that this limits creativity, or doesn't let us make anything exciting. There's some truth to that. But I like to bring it back to the "what's the intended interaction?" UI needs to be at least a little familiar for people to know what to do with it.

## Red flags

Things in a design that make me go "hol' up a minute, let's think about this..."

- Something very fancy.
- Something "clever".
- Something weird / very unusual.
- Something trying to do two (more more!) things at once.
- A visual design that's a big mismatch with the native HTML element.

## Also worth considering: feasibility

I think of this as [The Feasibility Spectrum](https://naga.co.za/2019/06/24/the-feasibility-spectrum/). Pretty much anything can be built, with enough time and effort and money. What we want to consider are the trade-offs of the current idea / design, and other options.

## Summary

When turning a picture of a website into a website, it's helpful to start from the intended interaction. Make that in HTML, then start making it look **good**.
