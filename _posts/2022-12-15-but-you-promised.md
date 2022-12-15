---
title: But you promised!
layout: post
description: 
image: /img/2022/12/byp.png
category: explanation
---

Summary: adding ARIA attributes is a promise that the interface will behave as expected for that role. Making an element focusable is a promise that the element is interactive.

A guide to making good choices is the [First Rule of ARIA Use](https://www.w3.org/TR/using-aria/#firstrule). It says “Use HTML instead of ARIA if you can.” When we’re adding a `role`, some ARIA attributes, or a `tabindex` to make something focusable, we can ask “how would we do with this with Plain Old Semantic HTML (instead of the way we’re doing it now)?”. If the POSH version seems… a bit peculiar, that can be a signal to us that we’re not making a good choice.

It’s rarely the case that it’s impossible to use POSH. It’s more often the case that it’s more fiddly because of existing technical constraints.

## Adding a role is a promise

> I promise this element has the interactivity and behaviours expected from this role. 

The [ARIA Authoring Practices Guide has a great “Read Me First” page](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#x2-1-1-principle-1-a-role-is-a-promise). It says that “No ARIA is better than Bad ARIA.” More specifically, it says that [a role is a promise](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/#x2-1-1-principle-1-a-role-is-a-promise).

Adding a `role` only changes the element in the accessibility tree, which changes what it **sounds like** to screen readers. It does not change how the element **behaves**.

The classic example is adding a `role` of `button` to a `div`. We need to add keyboard focusability and `click` events to make it behave like a `button`.

Other form elements are similar. Adding a `role` of `checkbox` or `radio` to a `div` or a `span` means we need to add JavaScript to control the behaviour.

The question to ask ourselves is: can I use the HTML version instead? Can I use a `button` element, an `input[type=“checkbox”]`, or `input[type=“radio”]` instead?

There are a few weirder ones too, such as the `menu` and `menuitem` roles. Can we use HTML instead? Well, there [is a `menu` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) (surprise!). But it’s quite an unusual element. And the `menuitem` element has been deprecated. So our question is “Is `menu` the right thing for the job?” Usually it’s not.

## Adding ARIA attributes is a promise

It’s not just roles that we can apply the First Rule of ARIA Use to.

> I promise the experience is equivalent whether you’re using assistive technology or not.

The promise to ourselves is to add ARIA attributes when the feature is not available in HTML.

When we use a button to show and hide some content, we need to add `aria-expanded=“true|false”` on the `button`. This communicates the shown / hidden state of the content. Some examples of this are a [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), and a sub-menu in a navigation menu. In these cases, we’ll probably have already added the behaviour with JavaScript. Now we want to add the ARIA attributes to communicate that state to screen reader users.

Other attributes also have HTML equivalents too.

`aria-label` supplies an accessible name for an element. A common use case is supplying an accessible name for a field with no visible label. It’s possible to supply a (visible) accessible name to a field using the `label` element. The First Rule of ARIA Use tells we should use a `label` element instead of an `aria-label` attribute when we can.

Depending on how we’re using it, this can apply to `aria-labelledby` too.

## Adding keyboard-focusability is a promise

> I promise that elements that receive focus are interactive.

The Third Rule of ARIA Use says: “All interactive ARIA controls must be usable with the keyboard.” If something is interactive with a pointer device (like a mouse or trackpad), it must be interactive using the keyboard. The opposite is true too: if something is **not** interactive with a pointer device, it must **not** be interactive using the keyboard.

The APG has a page on [Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/).  There are couple of great bits in there. It talks about predictability of movement: people expect that only interactive elements will receive focus. It also talks about Keyboard Navigation Between Components: “the default tab sequence of a web page includes **only links and HTML form elements.**”

## Recap

We need to be careful what we promise our users! Adding ARIA attributes is a promise that the interface will behave as expected for that role. Adding keyboard-focusability is a promise that the element is interactive.

