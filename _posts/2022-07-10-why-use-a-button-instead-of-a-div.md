---
title: Why use a button element instead of adding stuff to a div?
layout: post
description: 
image: /img/2022/07/wuabioad.jpg
---

The `button` element is old, solid, technology that gives us all the interactions and accessibility we need out of the box. Using a `div` instead means we need to add a whole bunch of stuff just to fake a button.

## What buttons need to be buttons

My two favourite places for checking HTML-y accessibility-y stuff are MDN and ARIA Authoring Practices Guide. 

- [`<button>`: The Button element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [The Button pattern on APG](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

A button must:

- look like a button;
- receive keyboard focus;
- activate on <kbd>Space</kbd>;
- activate on <kbd>Enter</kbd>;
- have an accessible name;
- have a `role` of `button`.

A `button` element gives you all of these things for free. And because it’s very old, very basic, HTML, it’s very well supported across different operating systems / browser / assistive technology combinations. 

### Accessible name

One thing to point out is where the accessible name comes from. A button can get its accessible name from:

- the text inside the button;
- the text alternative of an image inside the button (`alt` for an `img` and `title` for an `svg`);
- an `aria-label` attribute;
- an `aria-labelledby` attribute

We prefer earlier items on the list. This is because of the [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#rule1): use HTML instead of ARIA if we can (and we usually can).

## What we need to add to a `div` to make it a button

We need to add pretty much all the things that buttons do out of the box. It must:

- look like a button. We can add styles.
- receive keyboard focus. We can add `tabindex=“0”`.
- activate on <kbd>Space</kbd>. We can add event listeners.
- activate on <kbd>Enter</kbd>.  We can add event listeners.
- have an accessible name.  We can add an `aria-label` attribute or an `aria-labelledby` attribute.
- have a `role` of `button`. We can add `role=“button”`.

Although all these are relatively low complexity, it’s a lot to add to a `div`, when a `button` would give us all this for free. In addition, it requires us to add ARIA, which gives us a reason to think about the First Rule of ARIA Use again, and wonder if we couldn’t do this with HTML instead.

## Conclusion

Use a `button`, not a `div`. :)