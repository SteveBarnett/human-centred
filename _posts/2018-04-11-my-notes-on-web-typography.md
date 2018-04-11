---
title: 'My notes on "Web Typography"'
layout: post
description: My notes on Richard Rutter's book "Web Typography"
image: /img/2018/04/web-typography.jpg
---

I bought [Richard Rutter](http://clagnut.com/)'s book [Web Typography](http://book.webtypography.net/) quite a while ago, as part of [the Kickstarter campaign](https://www.kickstarter.com/projects/clagnut/web-typography-a-handbook). I've had the paperback on my shelf for a while, but finally got around to reading it.

I found some new things, some excellent reminders of old things, and confirmations of things I thought were good ideas. Here's some stuff that stood out for me.

- Using `rem`s for global sizing (pages) and `em`s for local sizing (components). I use `em` almost by reflex and have shied away from `rem`s for a while. I'm going to fix that.
- While it can be fun to set margins and paddings and use media queries and things to get a good measure (line length), sometimes just setting a `max-width` will do.
- The importance of using a typographic scale, especially one that's relevant. This site uses an off-the-shelf scale. I plan to change that.
- I've not really used `min-height` media queries, but they're useful for adjusting (or not adjusting) `font-size`. A `min-height` of about half the `min-width` is a good guideline, given the widescreen proportions of many modern screens.
- Long strings of CAPS or numbers can sometimes do with about `0.05em` or `5%` of `letter-spacing`.
- One thing that has stuck with me is a reminder that **vertical-rhythm is not the same as a baseline grid**. A baseline grid can be tricky to do on the web, but vertical rhythm is not. Having a system for using the multiples of line-height to space things properly is high up my To Do list.
- Choose odd over even grid systems. You'll get consistency, but not monotony.
- A good set of characters for checking legibility is **I1l0Oij** (Eye one ell zero Oh eye jay). How do they look for you?
- Look for **similar structure and form when comparing and combining typefaces**: x-height; cap heights; ascenders; descenders; similar **eaTgfM** and **GWy**; contrast, colour, proporation; designer or foundry.

I also made a few immediate changes to the CSS of [naga.co.za](//naga.co.za):

- added a bunch of hypenation (`hyphens: auto; hyphenate-limit-lines: 2; hyphenate-limit-chars: 6 3 2; hyphenate-limit-zone: 8%; hyphenate-limit-last: always`)
- adjusted `blockquote` size to slightly smaller that body text, with no left margin;
- adjusted the margins around `ul`s and `ol`s for better alignment.

If you've read [Web Typography](http://book.webtypography.net/), what were your take-aways?
