---
title: Things I learned at the "Let's Get Accessible!" webinar
layout: post
description: Things I learned at the "Let's Get Accessible!" webinar
image: /img/2020/08/bad.png
---

Last week I attended "Let's Get Accessible!", [a webinar run by the Auckland Digital Accessibility and Inclusive Design Meetup](https://www.meetup.com/Auckland-Digital-Accessibility-and-Inclusive-Design-Meetup/events/271392893/). Here are my top three takeaways from the event.

## Accessibility is broken by bad decisions, not created by good ones

Standard HTML elements are accessible by default and by design. It's when we try and do something fancy or custom that we break things. In terms of what I can actually do at my job, this means two things.

### Helping people make choices that results in more accessible outcomes in the first place.

One of the things I'm doing is accessibility reviews on Pull Requests. I try and note what the problem is and what the solution is. Since the teams are under a lot of pressure at the moment, I also try and fix these myself where I can. This isn't sustainable, or a viable long-term strategy, but it'll do for now.

### [Shifting left](https://www.deque.com/shift-left/): discussing accessiblity as early as possible in the process.

I'm doing two things for this. The first is filling in an "Accessibility Considerations" section on each design system page. This is usually about keyboard interactions or what the right HTML to use is. The second is doing accessibility reviews of each wireframe or mockup. Our Jira workflow has this as a step.

## Use screen readers as a tool to teach

I really like this idea. One thing that's really stuck with me from [Switch (a great book on behaviour change)](https://heathbrothers.com/books/switch/) is "let people trip over the truth." Rather than tell people about a problem, just leave it in their way so they can see it for themselves. It's much more powerful that way. We can ask people to use a screen reader on what they've designed and developed. That way they'll "trip over the truth" of how accessible (or not) the thing is.

I've started (and stalled a bit) on a little side project that aligns nicely with this. I'm calling it [sounds like](/sounds-like/): it's HTML samples and screen reader output. My plan is to develop this into a one hour workshop.

A way to approach this a bit obliquely is to develop design patterns as visual and nonvisual patterns. For me this would mean asking for text designs of wireframes and mockups. This feels like a big step that would meet a lot of resistance. For now I just ask awkward questions about heading levels and whether a thing is a link or a button.

## Use what's implied in the organisation's strategy, comms, and policies to motivate change

In hindsight this seems really obvious, but I don't think I've ever really thought about it in these terms before. I keep a list of [ways of presenting, teaching, and persuasion for ideas](/writing-workshops-and-talks/). There's an implied "talk to people in the language and terms they understand" when you're trying to sell an idea. But this "use the language you already have" is cunning.

I'm going to review these things (strategy, communications, policies) where I work and see how and where they align with accessibility.
