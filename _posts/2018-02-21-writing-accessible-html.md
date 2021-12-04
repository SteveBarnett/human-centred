---
title: Writing accessible HTML
layout: post
description: A quick round-up of how I try and write accessible HTML
image: /img/2018/02/naga-wave.jpg
---

Here's a quick round-up of how I try and write accessible HTML. I use a handful of tools that do similar things from different angles. It's a mix of command line things, CSS, and my brain.

I use a mix of tools because I try and be a bit pessimistic about how good I'll be at fixing everything. I want to give future-me several chances to catch the things that past-me overlooked or missed.

## My process

[![](/img/2018/02/thumbs/naga-wave.jpg)](/img/2018/02/naga-wave.jpg)
{: .pull-right}

Here are the three big steps I do when working on something running on my machine.

1. **Write semantic HTML**. Use the right element for the right thing. Write valid HTML.
2. **Add CSS debuggers** and look in browser. I could have them as bookmarklets, but I prefer them inside the (development) styles. This way I can't avoid them or forget to test with them.
3. **Run CLI tools**. I use [Pa11y](https://github.com/pa11y/pa11y) and am getting into [aXe](https://github.com/dequelabs/axe-core).

See below for more detail on the [CSS debuggers](#css-debuggers) and [CLI tools](#cli-tools). For things that aren't running on my machine, I use:

- the [aXe Chrome extension](https://www.deque.com/products/axe/);
- [Khan Academy's tota11y](http://khan.github.io/tota11y/);
- [Accessiblity Bookmarklets](http://accessibility-bookmarklets.org/);
- [WebAIM's WAVE](http://wave.webaim.org/) when I want to test a page and share the results with someone;
- the **Audits** tab in Chrome dev tools.

## CSS debuggers

{: tabindex="-1"}

I use [my fork of Heydon Pickering's Revenge.css](https://github.com/SteveBarnett/REVENGE.CSS) and the warnings and errors files from [a11y.css](https://github.com/ffoodd/a11y.css) to highlight where I've made HTML mistakes.

In [the (Jekyll-flavoured) header of this site](https://github.com/SteveBarnett/nagacoza/blob/master/_includes/header.html#L10:L13), you can see that I include some extra CSS files: [a11y-en_error.css](https://github.com/SteveBarnett/nagacoza/blob/master/css/a11y-en_error.css), [a11y-en_warning.css](https://github.com/SteveBarnett/nagacoza/blob/master/css/a11y-en_warning.css) and [revenge.css](https://github.com/SteveBarnett/nagacoza/blob/master/css/revenge.css). These add high visibility (especially in revenge's case!) borders, backgrounds, and words to things that are inaccessible. It's very difficult to miss them!

Where appropriate, I also add a `component-name.test.css` that has more specific rules.

## CLI tools

{: tabindex="-1"}

[![](/img/2018/02/thumbs/naga-pa11y.jpg)](/img/2018/02/naga-pa11y.jpg)
{: .pull-right}

I use [Pa11y](https://github.com/pa11y/pa11y). It can be quite verbose and a bit intimidating, though. For a full check, I run

    $ pa11y -s WCAG2AAA the_url

(using `-s` lets you set the standard you want to use). I usually run just the error check first (ignoring notices and warnings), like this:

    $ pa11y -s WCAG2AAA -i "notice;warning" the_url

I'm still figuring out the best way of integrating this with other tests and things. I want to use [Gulp aXe web driver](https://github.com/felixzapata/gulp-axe-webdriver) as part of the build process in my next project. aXe has a different approach to pa11y. Where pa11y is loud, aXe is quiet: they aim for no false positives, so they output is much quieter.

## And you?

**How do you test your stuff for accessibility?** And if you don't yet, what's the first thing you'll test? Putting a (publicly accessible) URL into [WAVE](http://wave.webaim.org/) is a great, low effort, first step. Here's [this site put through the wringer](http://wave.webaim.org/report#/naga.co.za). When starting work on a new site, I like to run WAVE and see if there's one error that I can do a tiny, quick, fix for.
