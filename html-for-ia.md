---
layout: page
title: HTML for IA
---

The building blocks of HTML are great for helping with Information Architecture. Use the points below to label up a page design or wireframe. They'll help make sure that your page has a solid structure, will make it a bit easier for developers to work with, and, as a bonus, the page will work better with assistive technology like screenreaders: yay!

### You will definitely need these

Every web page needs these blocks at their top-level (the children elements of the `<body>`, if you want to get a bit technical about it).

- A `<header>` element for stuff that applies to the whole site. This will probably include a logo, maybe search and navigation too.
- A `<nav>` element (probably with a `ul` list inside). This needs a name: either in the code, or as a nearby heading.
	- This element can (optionally) be inside the `<header>` element.
- A `<main>` element for the main content of the page. That is: not the repeated header and footer of the page, not the sidebar, not the nav.
- An `<aside>` element for stuff that's not the main content of the page. Traditionally: a sidebar.
- A `<footer>` element for stuff that applies to the whole site. This will probably include copyright stuff, contact information, and so on.

### You will probably need these

Most web pages will need to divide up the content in their `<main>` element, and let users scan the page.

- Use a `<section>` element to group content thematically.
	- Have a heading element, optionally inside a `<header>`.
- Use an `<article>` element for self-contained stuff like a blog post or a single product.
	- Have a heading element, optionally inside a `<header>`.
- Use a `<div>` element only if no other element is the right fit (i.e. more semantically correct).
- Use heading elements (`<h1>` to `<h6>`) to organise the page.
	- Don't skip levels. Heading levels should flow down; `<h1>` (the most important thing on the page) to `<h2>` to `<h3>`, down to `<h6>`.
	- Make heading levels consistent across the page as a whole.

### You may need these

Forms! Many things on the web are applications more than they are pages, which means they use `<form>` elements.

- Use a heading element for every `<form>`.
- Use a `<label>` for every control (text fields, checkboxes, radios, etc.).
- Group related controls using the `<fieldset>` element (the container for the group) and the `<legend>` element (the heading for the group).

### Additional notes

- It's usually best to have a visible heading or label and link things using `aria-labelledby="the-id-of-the-element-that-names-this-thing"`.
	- As an alternative, you can add `aria-label="The name of this thing"` to the thing itself (the `<nav>` element, heading element, or control).
- Either wrap `<label>` elements around the control, or link it with a control using `for="the-id-of-the-control"`.
- Don't use `placeholder` attributes ("ghost text") instead of labels (but do use them to show examples of inputs). Instead use additional helper text, linked to the control using `aria-labelledby="the-id-of-the-help-text-element"`.

---

Originally posted at [inclusivedesign.xyz/html-for-ia](https://inclusivedesign.xyz/html-for-ia/)