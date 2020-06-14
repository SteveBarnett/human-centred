---
title: Accessible Design 🌈
layout: post
description: 3 lenses to consider and 3 things to note for designing more accessibly
image: /img/2020/06/favourite-colour-example-annotated.jpg
---

Here are some things we can think about when trying to design more accessible interfaces.

I like to frame the thinking as "What level of difficulty do we want our product to be for our users?" With a bit of extra thinking, we can make it easier. And in some cases take it from can't use to can use.

### 3 lens and 3 things

There's a lot to think about when designing accessibly. I like to find little lists and shortcuts that can help me remember things to think about.

When making or review a design, I like to look at it through three lens: Cognitive, Physical, Visual.

When I'm designing forms specifically, I try note these three things: every form control needs a name; every group of controls needs a name; standard controls are much better for accessibility.

### Most important takeaway for designing more accessibly

**Every interactive thing needs a name**.

What's a "thing"? Inputs, button, links.
If it has no name, it's invisible / opaque. Users either won't understand it or won't even see it!
In forms mode, a screen reader sees only the thing (not the surrounding text).

### 3 lenses to consider

Here are three examples of lenses to consider when designing User Interfaces.

#### Cognitive lens

Example: a user reading content in their second language.

What might make things more difficult for this kind of user?
Weird words or jargon might mean they don't get it.

#### Physical lens

Example: a keyboard-only user. They don't use a mouse for moving around, dragging and dropping. They use the tab key to move through the page.

What might make things more difficult for this kind of user?
Interactions like drag and drop will take longer. Moving through the page is more jumpy as they're moving in discrete steps not a continuous movement.

#### Visual lens

Example: a (blind) screen reader user. Not all screen reader users are blind, but for this thought experiment, let's consider a blind user. They get a text-only version of the interface.

What might make things more difficult for this kind of user?
They can't see layout. They can't see icons. What will they hear?

### 3 things to note

#### 1st thing to note: every form control needs a name (visible or not)

Example: buttons that are just icons.

It's best to be explicit in the design: annotate every control with its accessible name. (Unless it's already clear, such as a label next to a form control). We can use the word "label" as a shorthand, but "accessible name" is better. It's a bit more precise as form controls can have HTML `label`s, but groups of form controls use other HTML structures.

#### 2nd thing to note: every group of controls needs a name (visible or not)

Example: a set of radios buttons for choosing your favourite colour: red, green, or blue.

Each radio has name (red, green, blue). But we need a name for the group too ("Favourite colour"), so that the user knows what they're choosing red, green, or blue for. Without a group name, the user loses the context: "red, green, or blue _what_?".

#### 3rd thing to note: standard controls are much better for accessibility

Examples: radio buttons, checkboxes, text inputs.

They're well supported by the technology and they're well known by users.
They can be combined, but don't forget thing to note 1 and 2.
There are some standard (accessible!) patterns for more complex things, but it's extra work, might be not be so well supported by the technology and known by users.

### Summary

3 lenses to consider

- Cognitive lens: is the language plain and clear?
- Physical lens: how will a keyboard-only user interact with this?
- Visual lens: how will a blind user interact with a text-only version of this?

3 things to note

- Every form control needs a name (visible or not)
- Every group of controls needs a name (visible or not)
- Standard controls are much better for accessibility
