---
title: "The accessibility tree"
layout: post
description: The accessibility tree is a tree of nodes that assistive technology, like screen readers, use to let the human know what's on the page.
image: /img/2022/06/4.jpg
---

The accessibility tree is a tree of nodes that assistive technology, like screen readers, use to let the human know what's on the page.

We can make the best experience for users of assistive technology by making the best accessibility tree that we can. We can do that by writing high quality code that follows the standards, and by inspecting the accessibility tree of the pages we make.

![](/img/2022/06/1.jpg)

When a human accesses a website, they're sent code. Most humans don't read code, so they use a web browser to access websites.

![](/img/2022/06/2.jpg)

Behind the scenes, the browser takes the code (the HTML, CSS, and JS) and constructs the DOM (Document Object Model). This is a tree of nodes that the browser uses to render the page. The browser takes the code and decides "oh, this is a heading level 2, that's a text entry field", and so on.

However, our code might have:

- typos;
- missing attributes;
- attributes in the wrong place or with the wrong value;
- incorrectly nested elements, or something else.

The browser tries to help, and makes a best guess as to what we meant.

![](/img/2022/06/3.jpg)

Then, the browser takes the DOM and constructs the accessibility tree from it. This is a best guess too. Different browsers do this differently, support the standards differently, so the end result varies a bit.

![](/img/2022/06/4.jpg)

It's this accessibility tree that assistive technology, like screen readers, uses to let the human know what's on the page.

Each node in the tree has a name, a role, sometimes a value, and sometimes a state. Different assistive technologies announce these in different ways. A bit like different dialects of the same spoken language. The different assistive technologies are all saying the same thing (e.g. it's a text field, it's label is "Name", it's empty), but saying it in a different way.

## Helping the browser make good guesses

The thing to note here is that there have been two "best guess" jumps between the code and the human.

- Best guess one: the browser makes the DOM from the code.
- Best guess two: the browser makes the accessibility tree from DOM.

We can't make this perfect, but we can increase our confidence in the browser making good guesses. We do this by: 

- writing semantic, well-formed, HTML;
- using standard controls where possible (native HTML elements rather than custom-built things);
- following the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/);
- inspecting the accessibility tree.