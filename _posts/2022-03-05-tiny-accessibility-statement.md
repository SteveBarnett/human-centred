---
title: Tiny Accessibility Statement
layout: post
description: Some quick ideas on what a Tiny Accessibility Statement could include.
image: /img/2022/03/TAS.jpg
---

I'm having a bit of a thing at the moment with MVPs (Minimum Viable Products). By that I mean finding the smallest version of an idea and getting a version of it finished. Then it can be tested, played with, jiggled around, and iterated on. 

A popular way to document a web site's level of accessibility is an ACR (Accessibility Conformance Report). This is usually done in the [VPAT](https://www.itic.org/policy/accessibility/vpat) (Voluntary Product Accessibility Template) format. At the start of the report is usually a section on "Evaluation Methods Used" and "Accessibility support baseline" (which browsers and assisstive technology are supported, were tested against).

Another popular document is the Accessibility Statement. Here's an example at the [Web Accessibility Initiative](https://www.w3.org/WAI/planning/statements/complete-example/). This usually includes "Measures to support accessibility" and "Compatibility with browsers and assistive technology".

## A little bit ACR, a little AS

As you might have noticed, there's a bit of a crossover. I was wondering about this testing and support bit of these two documents specifically, and if there's an MVP of that we could do.

So I pulled together a quick sketch of a TAS: a Tiny Accessibility Statement. And because I'm a developer I added some [Shields.io](https://shields.io/) badges. The [TAS is also available as a gist](https://gist.github.com/SteveBarnett/16826b051ae424f2dc15bae8a221b62a).

## Tiny Accessibility Statement

We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards

### We did these checks to make our UI more accessible

<ul>
<li>
  <input type="checkbox"> Design reviews using the WCAG POUR framework</li>
<li>
  <input type="checkbox"> Added <code>jest-axe</code> to our unit tests</li>
<li>
  <input type="checkbox"> Added <code>cypress-axe</code> to our end-to-end test</li>
<li>
  <input type="checkbox"> Ran the DevTools version of Deque's aXe</li>
<li>
  <input type="checkbox"> Used Microsoft's Accessibility Insights to do a manual assessment</li>
<li>
  <input type="checkbox"> Included accessibility in our Pull Request code reviews</li>
</ul>

### We tested with these browsers and assistive technology pairings

<ul>
<li>
  <input type="checkbox"> NVDA on Chrome on Windows</li>
<li>
  <input type="checkbox"> VoiceOver on Safari on MacOS</li>
<li>
  <input type="checkbox"> VoiceOver on Safari on iOS</li>
<li>
  <input type="checkbox"> TalkBack on Chrome on Android</li>
</ul>

### We meet WCAG 2.1

<ul>
<li>
  <input type="checkbox"> At Level A</li>
<li>
  <input type="checkbox"> At Level AA</li>
</ul>

<hr />

Show these for the ticked ones:

<ul>
	<li>
		<img src="https://img.shields.io/static/v1?label=Design%20review&message=WCAG%20POUR&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Unit%20tests&message=jest-axe&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=End-to-end%20tests&message=cypress-axe&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Manual%20tests&message=aXe&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Manual%20tests&message=Accessibility%20Insights&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Pull%20Requests&message=Accessibility&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Screen%20Reader%20tests&message=NVDA%20%2F%20Chrome%20%2F%20Windows&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Screen%20Reader%20tests&message=VoiceOver%20%2F%20Safari%20%2F%20MacOS&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Screen%20Reader%20tests&message=VoiceOver%20%2F%20Safari%20%2F%20iOS&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=Screen%20Reader%20tests&message=TalkBack%20%2F%20Chrome%20%2F%20Android&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=WCAG&message=2.1%2C%20Level%20A&color=informational&style=flat/" />
	</li>
	<li>
		<img src="https://img.shields.io/static/v1?label=WCAG&message=2.1%2C%20Level%20AA&color=informational&style=flat/" />
	</li>
</ul>

### What next?

I'm still working on the name. I want it to be another animal noise to pair well with the [QAC (Quick Accessibility Checks)](/2021/12/13/qac/) 🙈.

And it feels too long still. I think the next version will be something like:

- Added `jest-axe` to our unit tests
- Added `cypress-axe` to our end-to-end test
- Ran the DevTools version of Deque's aXe
- Included accessibility in our Pull Request code reviews

and

We tested with these browsers and assistive technology pairings

- NVDA on Chrome on Windows
- VoiceOver on Safari on MacOS