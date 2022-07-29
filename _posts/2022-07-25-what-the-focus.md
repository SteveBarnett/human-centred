---
title: What the focus?! 🤬
layout: post
description: What should receive focus? What shouldn't receive focus?
image: /img/2022/07/what-the-focus.png
category: tutorial
includesyntaxhighlight: true
---

Here's a write-up of a talk I gave at work about focus. The keyboard kind, not the mind kind.

## We'll cover

- What should receive focus?
- What shouldn't receive focus?

## Precap

**Most important thing:** Use the right element. Instead of changing an element. We often want a button. Buttons do stuff.

## Who uses the keyboard?

- Expert users ("power users")
- People with motor disabilities
- Desktop screen reader users

On top of that, the Web Content Accessibility Guidelines (WCAG) say: "Make all functionality available from a keyboard."

## Doesn't a design system do this for me?

Some of it, yes! But.

1. We can make mistakes. Design systems are flexible. That means we can end up using the right thing in the wrong way, or using the wrong thing in the right way.
2. The design system team can make mistakes. Design systems welcome feedback and improvement.
3. Design systems don't cover everything. So sometimes we need to build custom components.

## What receives focus?

Let's build up to it, starting with something perhaps more intuitive: the mouse.

```html
<!-- What do people expect? What are the conventions? -->

<!-- 👇 What will happen if I click on this? -->
<p>This is a paragraph of text</p>
<!-- Nothing! -->

<!-- 👇 What will happen if I click on this? -->
<a href="/wtf/">This is a link</a>
<!-- Links go places. I'll go to /wtf/. -->

<!-- 👇 What will happen if I click on this? -->
<button type="button">This is a button</button>
<!-- Buttons do stuff. It'll do what we coded it to do. -->
```

If something happens when we mouse-click it, something must happen when we keyboard-click it.

So, **it must receive focus.**

```html
<!-- 👇 Should this receive focus? -->
<p>This is a paragraph of text</p>
<!-- No! I can't mouse-click it. -->

<!-- 👇 Should this receive focus? -->
<a href="/wtf/">This is a link</a>
<!-- Yes. I can mouse-click it. -->

<!-- 👇 Should this receive focus? -->
<button type="button">This is a button</button>
<!-- Yes. I can mouse-click it. -->
```

## What doesn't receive focus?

```html
<!-- What do people expect? What are the conventions? -->
<!-- What doesn't receive focus? Text or image elements -->

<h1>This is a heading level 1</h1>
<!-- The heading does not receive focus -->

<p>This is a sentence with <em>Emphasised</em>,
<strong>bolded</strong>, and <mark>highlighted</mark> text.</p>
<!-- The paragraph does not receive focus -->
<!-- The emphasised, bolded, and highlighted text do not receive focus -->

<ul>
	<li>Unordered list item 1</li>
	<li>Unordered list item 2</li>
</ul>
<!-- The list does not receive focus -->
<!-- The list items do not receive focus -->

<img src="capybara.jpg" alt="A very pleased capybara" />
<!-- The image does not receive focus -->
```

## Tiny case study: What's the best way to build a sortable table header?

![Screenshot of a table. The first column header has an arrow pointing down, indicating a descending sort being applied.](img/sortable-table.png)

Here's the table cell without any extra stuff.

```html
<th>First Name</th>
<!-- has an accessible name of "First Name" -->
<!-- has an accessible role of "columnheader" (implicit) -->
<!-- It's not an interactive element, you can't click it! -->
```

Let's add some stuff.

```html
<!-- Fixed it? -->
<th onclick="sort()">First Name</th>
<!-- onclick 👉 acts interactive -->
<!-- But... it doesn't look interactive -->
```

Okay, let's fix the looks-like problem.

```html
<!-- Fixed it...? -->
<th
	onclick="sort()"
	class="btn-sort"
>
	First Name
</th>
<!-- onclick 👉 acts interactive -->
<!-- .btn-sort 👉 looks like a button -->
<!-- But... it doesn't get focus -->
```

Okay, let's fix the focus problem.

```html
<!-- Fixed it?! -->
<th
	onclick="sort()"
	class="btn-sort"
	tabindex="0"
>
	First Name
</th>
<!-- onclick 👉 acts interactive -->
<!-- .btn-sort 👉 looks like a button -->
<!-- tabindex="0" 👉 gets focus -->
<!-- But... it doesn't sounds like a button to a screen reader -->
```

Okay, let's fix the sounds-like problem.

```html
<!-- Fixed it?! -->
<th
	onclick="sort()"
	class="btn-sort"
	tabindex="0"
	role="button"
>
	First Name
</th>
<!-- onclick 👉 acts interactive -->
<!-- .btn-sort 👉 looks like a button -->
<!-- tabindex="0" 👉 gets focus -->
<!-- role="button" 👉 sounds like a button -->
<!-- But... it's not a column header! 😱 -->
```

Some HTML elements automagically receive focus...

```html
<!-- Almost fixed it! -->
<th>
	<button type="button">First Name</button>
</th>
<!-- button acts like, looks like, sounds like a button, and receives focus -->

<!-- the th has a name of "First Name" and an implicit role of "columnheader" -->
<!-- the button has a name of "First Name" and an implicit role of "button" -->
```

...but sometimes we do need a little ARIA help

```html
<!-- Actually fixed it! 🎉 -->
<th aria-sort="ascending">
	<button type="button">First Name</button>
</th>

<!-- Add JS to: sort the column; update the aria-sort value -->
<!-- Note! ARIA doesn't provide behaviors. E.g. adding a role just changes the role -->
```

## What else receives focus?

Let's look at a few examples, and note some keyboard interactions too.

### Text input elements

```html
<!-- The label does not receive focus, the input does receive focus. -->
<!-- Enter: submits the form it's inside. -->
<label for="first-name">First name</label>
<input type="text" name="first-name" id="first-name">

<!-- The input is not in the accessibility tree.
The label does not receive focus, the input does not receive focus. -->
<label for="first-name-disabled">First name</label>
<input type="text" name="first-name-disabled" id="first-name-disabled" disabled>

<!-- Can't be edited.
But is in the accessibility tree.
The label does not receive focus, the input does receive focus 🥴. -->
<label for="first-name-readonly">First name</label>
<input type="text" name="first-name-readonly" id="first-name-readonly" readonly>

<!-- The label does not receive focus, the textarea does receive focus. -->
<!-- Enter: new line. 
	pace: add a space. -->
<label for="comment">Comment</label>
<textarea id="comment"></textarea>
```

### Other form elements 

```html
<!-- The label does not receive focus, the select does receive focus. -->
<!-- Space: open the list.
Arrow keys: choose an option.
Enter: choose an option.
Esc: close the list. -->
<label for="medal">Choose medal</label>
<select id="medal">
	<option>Bronze</option>
	<option>Silver</option>
	<option>Gold</option>
</select>

<!-- The label does not receive focus, the checkbox does receive focus. -->
<!-- Checkboxes are inputs. They're for entering form data. -->
<!-- If we want to do stuff, we should use a button. -->
<!-- Space: check/uncheck the box. -->
<input type="checkbox" id="tsandcs" />
<label for="tsandcs">
	I accept the terms and conditions
</label>

<!-- The label does not receive focus, the radios do receive focus. -->
<!-- Radios are inputs. They're for entering form data. -->
<!-- If we want to do stuff, we should use a button. -->
<!-- Arrow keys: choose an option. -->
<fieldset>
	<legend>My favourite RGB</legend>

	<input type="radio" name="agree" id="red">
	<label for="red">Red</label>

	<input type="radio" name="agree" id="green">
	<label for="green">Green</label>

	<input type="radio" name="agree" id="blue">
	<label for="blue">Blue</label>
</fieldset>
```

### The form itself

```html
<!-- Forms themselves don't receive keyboard focus, but the interactive elements inside them do. -->
<!-- Tab key: move to the next focusable element or group. -->
<form>
	<label for="first-name-form">First name</label>
	<input type="text" id="first-name-form">

	<input type="checkbox" id="tsandcs" />
	<label for="tsandcs">
		I accept the terms and conditions
	</label>

	<button>Send</button>
</form>
```

## Recap

**Most important thing:** Use the right element. Instead of changing an element. We often want a button. Buttons do stuff.

## Links! 🔗

- [The Button element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#rule1), [Second Rule of ARIA Use](https://www.w3.org/TR/using-aria/#secondrule)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [The two modes of Screen Readers](/2022/02/10/the-two-modes-of-screen-readers/)