---
title: Automated accessibility testing
layout: post
description: Automated accessibility testing is great. But it misses some stuff too.
image: /img/2022/04/robot-yep-nope.png
includesyntaxhighlight: true
---

Automated accessibility testing is great. It can pick up some of the common, obvious, issues. It misses some stuff too, though.

Accessibility done well with almost always pass an automated test. Accessibility done not so well won't always fail an automated test. That difference often comes down to the difference between "wrong" (clear errors, omissions) and "bad" (debatable quality, unusual code).

The best thing to use for our tests is some form of [axe](https://www.deque.com/axe/). It's the industry-leading testing engine, made by Deque, and it's used inside lots of other tools. Deque has [a lot of axe-related repos](https://github.com/orgs/dequelabs/repositories?language=&q=axe&sort=&type=all). There are packages for most unit and E2E testing frameworks.

## Some examples

### Alternative text

Does an automated test catch it?

- Missing alternative text for images: yes.
- Bad alternative for images : no.

Code sample:

```html
<!-- Missing text alternative -->
<!-- 🤖 caught by automated test -->
<img src="pup.jpg">

<!-- Bad text alternative -->
<!-- Not actually an alternative -->
<!-- 🧐 not caught by automated test -->
<img src="pup.jpg" alt="dog">

<!-- Great text alternative -->
<!-- Conveys the same information as the image -->
<!-- ✔ passes automated test -->
<img src="pup.jpg" alt="Cute puppy frolicking in a field">
```

### Link or button text

Does an automated test catch it?

- Empty links or empty buttons: yes.
- Bad link text or bad button text: no.

Code sample:

```html
<!-- Empty link text -->
<!-- No link text and no text alternative for the SVG -->
<!-- 🤖 caught by automated test -->
<a href="/view/1/">
	<img src="eye.svg">
</a>

<!-- Bad link text -->
<!-- Doesn't say where the link goes -->
<!-- 🧐 not caught by automated test -->
<a href="/view/1/">1</a>

<!-- Great link text -->
<!-- Says where the link goes -->
<!-- ✔ passes automated test -->
<a href="/view/1/">View item 1</a>
```

### HTML errors

Does an automated test catch it?

- Some HTML errors: yes.
- Weird HTML: no.

Here are some ways of pretending to do buttons in HTML.

Code sample:

```html
<!-- No thank you! -->
<!-- Even with added styles and click handlers. -->
<!-- 🧐 not caught by automated test -->
<div>Edit</div>

<!-- Better, but not there yet. -->
<!-- It sounds like a button now. -->
<!-- 🧐 not caught by automated test -->
<div role="button">Edit</div>

<!-- Better again. -->
<!-- It gets keyboard focus now. -->
<!-- 🧐 not caught by automated test -->
<div role="button" tabindex="0">Edit</div>

<!-- Use a <button> instead! -->
```

Here are some ways of doing buttons in HTML.

Code sample:

```html
<!-- Yes please! -->
<!-- ✔ passes automated test -->
<!-- Works for everybody. -->
<button>Edit</button>

<!-- Uh, yes, technically. -->
<!-- ✔ passes automated test -->
<!-- But use text in the button instead. -->
<button aria-label="Edit"></button>

<!-- Well, yes. -->
<!-- ✔ passes automated test -->
<!-- But alt on the img is a little better. -->
<button aria-label="Edit">
	<img src="pencil.svg">
</button>
```

## Summary

Automated testing can catch a lot of errors. But there are many things it can't catch. In particular, things we might think of as "quality"; where we need a human's judgement. If it's "wrong" (clear errors, omissions), an automated test might pick it up. If it's "bad" (debatable quality, unusual code) an automated test probably won't.