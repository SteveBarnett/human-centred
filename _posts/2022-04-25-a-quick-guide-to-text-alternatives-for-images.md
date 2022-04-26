---
title: A quick guide to text alternatives for images
layout: post
description: A quick guide to text alternatives for images, using pencils and a capybara. 
image: /img/2022/04/capybara.jpg
---

All images must have a text alternative, unless they are purely presentational. The text alternative must convey the content or function of the image. 

Two big questions tend to come up:

- Does this image need alternative text?
- What should the text alternative be?

## A little loop to decide

Do this for each image on the page.

### What to do

- **Replace the image with its current text alternative**. If there isn't any text alternative, just remove the image. (You can do this in your head!)
- You can use the [Images Accessibility Bookmarklet](https://accessibility-bookmarklets.org/install.html) to visually highlight all the images on the page.

### Things to check

- Is this piece of the page still **meaningful**, **understandable**, and **usable**?
- If it isn't, update the text alternative so that it is.
	- That might mean setting empty alternative text (for example `alt=""`).
	- The text alternative should convey the content or function of the image.

<hr />

## Lots of examples

### Example 1: an icon button

#### Bad example

<button><img src="/img/2022/04/edit.png" alt="Pencil" /></button>

Let's replace the image with it's text alternative.

<button><img data-src="/img/2022/04/edit.png" alt="Pencil" /></button>

The text alternative is being used for the function of the button. "Pencil" is a literal description of the image. This isn't meaningful, understandable, or usable. Let's try again.

#### Good example

<button><img src="/img/2022/04/edit.png" alt="Edit" /></button>

Let's replace the image with it's text alternative.

<button><img data-src="/img/2022/04/edit.png" alt="Edit" /></button>

The text alternative describes the function of the button. It's meaningful, understandable, and usable. Yay!

### Example 2: an icon-and-text button

#### Bad example

<button>Edit <img src="/img/2022/04/edit.png" alt="Edit" /></button>

Let's replace the image with it's text alternative.

<button>Edit <img data-src="/img/2022/04/edit.png" alt="Edit" /></button>

The doubled-up button text isn't very meaningful, understandable, or usable. Let's try again.

#### Good example

<button>Edit <img src="/img/2022/04/edit.png" alt="" /></button>

Let's replace the image with it's text alternative.

<button>Edit <img data-src="/img/2022/04/edit.png" alt="" /></button>

The button is meaningful, understandable, and usable. Yay!

### Example 3: a photo

Note: I've added a red dashed border to images to help with the demonstration.

#### Bad example

<img class="highlight" src="/img/2022/04/capybara.jpg" alt="" />

Let's replace the image with it's text alternative.

<img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="" />

The text alternative is empty: we've set `alt=""`. Removing the image means there's no content at all. This isn't meaningful, understandable, or usable. Let's try again.

#### Good example

<img class="highlight" src="/img/2022/04/capybara.jpg" alt="A very pleased capybara getting their tummy scratched with a scratching stick" />

Let's replace the image with it's text alternative.

<img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="A very pleased capybara getting their tummy scratched with a scratching stick" />

The text alternative conveys the same information as the image. It's meaningful, understandable, and usable. Yay!

### Example 4: a linked image

#### Bad example

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara"><img class="highlight" src="/img/2022/04/capybara.jpg" alt="A very pleased capybara getting their tummy scratched with a scratching stick" /></a>

Let's replace the image with it's text alternative.

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara"><img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="A very pleased capybara getting their tummy scratched with a scratching stick" /></a>

The text alternative is being used for the function of link. The current text describes the image, not the function of the link. It isn't very meaningful, understandable, or usable. Let's try again.

#### Good example

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara"><img class="highlight" src="/img/2022/04/capybara.jpg" alt="Capybara Experience at Wellington Zoo" /></a>

Let's replace the image with it's text alternative.

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara"><img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="Capybara Experience at Wellington Zoo" /></a>

The text alternative describes the function of the image: the destination of the link. The link text is meaningful, understandable, and usable. Yay!

### Example 5: an image-and-text link

#### Bad example

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara">Capybara Experience at Wellington Zoo<br /><img class="highlight" src="/img/2022/04/capybara.jpg" alt="Capybara Experience at Wellington Zoo" /></a>

Let's replace the image with it's text alternative.

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara">Capybara Experience at Wellington Zoo<br /><img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="Capybara Experience at Wellington Zoo" /></a>

The doubled-up link text isn't very meaningful, understandable, or usable. Let's try again.

#### Good example

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara">Capybara Experience at Wellington Zoo<br /><img class="highlight" src="/img/2022/04/capybara.jpg" alt="" /></a>

Let's replace the image with it's text alternative.

<a href="https://wellingtonzoo.com/things-to-do/close-encounters/capybara">Capybara Experience at Wellington Zoo<br /><img class="highlight" data-src="/img/2022/04/capybara.jpg" alt="" /></a>

The link text describes the destination of the link. It's meaningful, understandable, and usable. Yay!

## Resources

Here are some more in-depth resources on text alternatives.

- [An alt Decision Tree at W3C](https://www.w3.org/WAI/tutorials/images/decision-tree/) and [Text alternatives - a decision tree](https://4syllables.com.au/articles/text-alternatives-decision-tree)
- [Alternative Text at WebAIM](https://webaim.org/techniques/alttext/)
- [How to write great alt text at A11y Collective](https://www.a11y-collective.com/how-to-write-great-alt-text/)
- [Alt-texts: The Ultimate Guide on Axess Lab](https://axesslab.com/alt-texts/)
- [Foundations: text descriptions on Tetra Logical](https://tetralogical.com/blog/2022/01/24/text-descriptions/)