---
title: Links vs Buttons and Do's & Don'ts for Accessibility
layout: post
description: "Links and Buttons, when to use which, and what the accessibility implications are."
includesyntaxhighlight: true
---

Summary: links go places, buttons do things.

Using the right element for the job is not just about doing the right thing for users of assistive tech like screen readers. It's also about ease of understanding and readability of the code (is it clear what this thing does?) and consistent and clear UX for all users (what will happen when we click / <kbd>Tab</kbd> / <kbd>Enter</kbd> / <kbd>Space</kbd> this?).

Jeremy Keith calls it [material honesty](https://resilientwebdesign.com/chapter2/): using the right element lets users know what to expect. For example: if it looks like a link, we should be able to open it in a new tab, copy the address or bookmark it for later. We can't do that with a button.

## Red flags

A few things that stop me in my tracks and make me ask questions.

- Adding a `tabindex="0"` to make an element focusable. Can we use a already focusable element like an `a` or a `button` instead?
- Adding a `role="button"` or `role="link"`. Can we use a `button` or `a` element instead?
- Making a `div` or a `span` or a text element act like a link or a button. Can we use an `a` or a `button` instead?
- Using `href="#"` on an `a` (i.e. a link that goes nowhere). Can we use a button instead?
- Omitting the `href` attribute on an `a` element (i.e. a link without a destination). Can we use a button instead?
- Using the `disabled` attribute on an `a`. That's not a valid attribute on an `a`. Can we non-interactive text or a button instead?

We can make a `div` or a `span` into a link or a button by adding a `role`, `tabindex="0"`, and handlers for click and <kbd>Enter</kbd> (and <kbd>Space</kbd> if it's a `button`) events. But we're making more work for ourselves! We can use an `a` or a `button` instead! 😅

## Links

**Links go places**. They navigate the user to a new page or view or bit of a page: they move away from the current context. They:

- are focusable by default when they have an `href` attribute (no need to add a `tabindex`);
- respond with a click event to the <kbd>Enter</kbd> key;
- can't be disabled (they can be made inert with `tabindex="-1"` and `aria-hidden="true"`, but be sure that's what you need. );
- accept `:link`, `:visited`, `:focus`, `:hover`, `:active` styles;
- are communicated as links to screen readers (no need to add `role="link"`)

```html
<!-- yes! -->
<a href="/profile">View your profile</a>
<a href="/profile">View your profile <img src="/icons/profile.png" alt="" /></a>
<a href="/profile"><img src="/icons/profile" alt="View your Profile" /></a>

<!-- please no -->
<a href="#">View your profile</a> <!-- Link goes nowhere. Should be a button? -->
<a>View your profile</a> <!-- Link is missing a destination. Add the missing href. -->
<a href="#" title="View your profile">View your profile</a> <!-- Title is redundant. Remove it! -->
<a href="/profile" role="link">View your profile</a> <!-- role="link" is redundant. Remove it! -->
<a href="/profile" tabindex="0">View your profile</a> <!-- tabindex="0" is redundant. Remove it! -->
<strong onclick="navigate()">View your profile</strong> <!-- Not a link! Use an a[href] instead. -->
<span role="link" tabindex="0" href="/profile">View your profile</a> <!-- Faking a link. Use an a[href] instead. -->
```

### Link Do's

- Do make sure links are visually distinct from the surrounding text.
- Do try and make link text unique on the page. This benefits users of assistive tech and makes for better UX.
- Do make sure `:focus` styles are clear and distinct from the regular styles.
- Do add `alt` text to an image that's the content of an `a`.
- Do add `aria-current="page"` to the `a` in a nav list, if it's the current page.

### Link Don'ts

- Don't use a link with `href="#"`. We should probably be using a button instead.
- Don't omit the `href`. A link needs a destination.
- Don't add a `title` attribute. Use the text of the link instead.
- Don't wrap chunks of content in an `a`. It's technically allowed in the spec. But Screen readers read the whole chunk of content as the content of the link.

## Buttons

**Buttons do things**. They can submit forms or show / hide things.

- A `button` inside a `form` has an implicit `type="submit"` (no need to add it).
- Other buttons should have a `type="button"` to avoid automagically submitting a form.

They:

- receive keyboard focus by default (no need to add `tabindex`);
- respond with a click event to the <kbd>Space</kbd> key or <kbd>Enter</kbd> key;
- can be disabled with the `disabled` attribute;
- are communicated as buttons to screen readers (no need to add `role="button"`);
- accept `:focus`, `:hover`, `:active`, `:disabled` styles.

```html
<!-- yes! -->
<button type="button">Show messages</button>
<button type="button">
  Show messages <img src="/icons/messages.png" alt="" />
</button>
<button type="button">
  <img src="/icons/messages.png" alt="Show messages" />
</button>

<!-- please no -->
<button type="button"><img src="/icons/messages.png" /></button>
<!-- no accessible name -->
<button type="button"><div>Show messages</div></button>
<!-- divs aren't valid inside buttons -->
```

### Button Do's

- Do always provide an accessible name.
  - Put text inside the button. If there's also an image, that can have `alt=""`.
  - Use an `aria-label` on the `button` **or** `alt` text on the image if the image is the only thing inside the `button`.
- Do make the accessible name describe the action that will occur when the user hits the button. Ideally it should be unique too: "Show messages" rather than just "Show". This benefits users of assistive tech and makes for better UX.
- Do have an explanation why if you make a `button` disabled.

### Button Don'ts

- Don't add `div`s as children elements of a `button`. But you can add inline things like `span`s.

## Further Reading

- [A Complete Guide to Links and Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)
- [Links vs. Buttons in Modern Web Applications](https://marcysutton.com/links-vs-buttons-in-modern-web-applications)
- [Buttons shouldn’t have a hand cursor](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b)
- [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)
