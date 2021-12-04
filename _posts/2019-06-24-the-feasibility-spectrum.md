---
title: "The Feasibility Spectrum (aka how difficult is it to build this?)"
layout: post
description: "A look at the feasibility spectrum between design and development."
---

Anything a designer imagines, a developer can build. It comes with a caveat though: is it worth it, given the time and money it'll cost to build? The answer, as always, is: "it depends."

## Feasi-whut-now?

Over the years I've come across various versions of the "ooh, this is good" Product Venn diagram. It's the sweet spot for a team building a product. One I've seen recently in [Sense and Respond](https://senseandrespond.co/) states it like this:

- **Product** asks "Is it viable?" Is there room in the market for it? Will people buy it?
- **Design** asks "Is it desirable?" Does it work well? Does it look good?
- **Development** asks "Is it feasible?" How long will it take to build? What are the complexities?

Feasibility is a spectrum. It's almost never the case that it's a hard no: "it's not possible to build this." **Almost anything can be built, given enough time and money.** We need to look at the cost-benefit analysis, though.

Will it be worth the time and money building **this version of the design**? What about a "good enough" alternative that will be faster and cheaper to build? This doesn't mean that the the fastest and cheapest version is the right choice. It only means that there are options, choices to be made.

## Designs are fixed but websites are fluid

The UI design (e.g. Sketch files) is not the thing. The UX design (e.g. wireframes) is not the thing. Even the code, until it's done and out there in the real world, is not the thing.

### A small selection of things that will "break" a design

As a front-end developer, one of the things I try and keep in mind is that the real world is a hot mess 💩.

- Device
  - Different OSes have different browsers that will render the same code a little differently. Screen sizes aren't only mobile, tablet, and desktop. There's a lot of wiggle room between mobile and tablet, especially.
- Network
  - The speed and latency of a person's network connection will affect their experience of a design. A complex, custom, interface will usually be "heavier" than a more standard one. That means laggy or janky interactions and sad faces all around.
- Disability
  - A person may have a contextual, temporary, or permanent disability that affects their interaction with the product. Using it may be difficult or impossible for them, because of barriers the code or design has put in their way.

Here are two testing services worth looking at, if only to be shocked 😱 by the variety of things out there: [Browsers on crossbrowsertesting.com](https://crossbrowsertesting.com/browsers) and [Screenshots on BrowserStack.com](https://www.browserstack.com/screenshots).

I call these wobbles "breaking" a design, because that's how we tend to think about it. We tend to think that the design represents the "real" version, the perfect version.

The thing is, for websites, **we only provide suggestions.** Suggestions to the browser of how we, ideally, would like the site to be shown. It's up to the browser, the user, and any custom settings they've applied (zoomed-in text, custom stylesheets, using an ad blocker, and so on) to decide how they actually end up seeing it.

## Pessimism-Driven Development

The best we can realistically hope for is "Looks and works good enough everywhere." "Looks and works identically everywhere" is impossible, in practical terms. Even "Looks and works great everywhere" is tricky if you have or want a broad user base. Looking back at the CrossBrowserTesting and BrowserStack links helps remind us of that.

It's not all doom and gloom, though. If we start from this slightly pessimistic position, we're likely to **design and develop more resilient and robust things**. To design things that are **fluid and flexible**, rather than fixed and fragile.
