---
title: Quick notes on WCAG 3.0
layout: post
description: ???
image: /img/2022/07/wcag-3.0.png
category: reference
---

The other day I was looking at WCAG 3.0 again. In particular I was interested in the new, more granular, way it looks at conformance to the standard.

## Changes from WCAG 2.x

[WCAG 3.0](https://www.w3.org/TR/wcag-3.0/) has a new conformance model that’s **more focused on user journeys and functional categories**.

- Conformance claims will be short and include: date; conformance level; a concise description of the pages and states of pages; testing tools and technology used.
- Functional categories will include: Visual, Auditory, Motor, Cognitive, and Intersections of these.

## How Conformance is tested

Conformance is tested against Outcomes and given a Rating.

- Outcomes are broadly equivalent to Success Criteria in 2.x. Note that **any Critical errors means a Rating of 0**.
- Ratings will go from 0 (any Critical errors or a low score) to 4 (no Critical errors and a high score).
- Total scores will be the average Rating across all Outcomes.
- Functional Category Score will be the average Rating across all Outcomes in the category.

## Conformance levels

Conformance levels will be Bronze, Silver, or Gold.

- **Bronze will require: no Critical errors**; a total Score and functional category Scores of at least 3.5. Testing will be partly automated and partly manual.
- Silver will require conformance to Bronze, plus extra manual tests including assistive technology testing and both user and expert usability testing.
- Gold will require conformance to Silver, plus extra manual tests including assistive technology testing and both user and expert usability testing.


