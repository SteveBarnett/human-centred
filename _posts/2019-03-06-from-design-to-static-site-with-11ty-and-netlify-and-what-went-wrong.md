---
title: "From design to static site (with 11ty and Netlify), and what went wrong"
layout: post
description: "From design to static site (with 11ty and Netlify), and what went wrong"
image: /img/2019/03/home.jpg
---

I like lists. I especially like checklists. And I like step-by-step descriptions of how to Do A Thing. Here's how I Did A Thing recently.

I've included where I got **stuck** and what I did to fix it. I feel like How To's don't often include that. (Spoilers: I cheated. Ahem. Well, actually: I made a compromise.)

## Tech set up

I started a new repository on my machine, then pushed it to [BitBucket](https://bitbucket.org/). I usually use [GitHub](https://github.com/), because I'm used to it and I like how it does [Pull Requests](https://help.github.com/en/articles/about-pull-requests). But, GitHub's free plan is open source only, which is fair enough, and this project wasn't open source. Using BitBucket meant no [GitHub Pages](https://pages.github.com/) (which I'm a big fan of), so I went to [Netlify](https://www.netlify.com/) and clicked a few buttons to connect to BitBucket and select the repo.

For this project, I wanted to play with [Eleventy](https://www.11ty.io/). I use [Jekyll](https://jekyllrb.com/) **a lot** (for this site, for example), but I like trying out new tools. I also wanted to make a (in this case, tiny) style guide. I did a bit of googling and found [Eleventy shortcomps](https://github.com/adamduncan/eleventy-shortcomps). That would get me off to a flying start. It uses [Nunjucks](https://mozilla.github.io/nunjucks/) for templating. I hadn't used that before, but it looked very similar to [Jinja](http://jinja.pocoo.org/) (that I've used in Django apps) and [Liquid](https://github.com/Shopify/liquid/wiki) which I've used a bunch in Jekyll projects.

## Turning the design into code

[![A rough and ready sketch of the design, looking kinda like a wireframe](/img/2019/03/thumbs/home.jpg)](/img/2019/03/home.jpg)
{: .pull-left }

I received a PDF with desktop screen designs. At this point I'd usually press for Sketch files (or similar) and more guidance for responsiveness. In this case, the site design was fairly simple, the number of pages small, and the client was quick to respond, so the PDF was enough. I grabbed some bits of paper and scribbled on them ideas for the markup I would use, and some initial ideas for the CSS.

### Static HTML & CSS

I updated the main layout of my repo with my favourite starter-from-zero HTML: the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/dist/index.html). I changed the CSS to [Sass](https://sass-lang.com/guide). I didn't change H5BP's styles (normalise and some small starter styles), just added a new `style.scss` that `@import`-ed those two as `.scss` files. I like to try and use the least complicated thing for any given task. Since this was a short, quick, project, I didn't want to add Gulp just to do Sass-y things. Instead I went old school and ran `sass sass/style.scss:css/style.min.css -t compressed -w` in a terminal tab (watch `sass/style.scss` for changes, output it as `css/style.min.css`, and compress it).

From the copy of the repo, I moved the `index.njk` page to `style-guide.njk`: where I'd do most of the work. In the SG, I wrote some [plain old semantic HTML](http://microformats.org/wiki/posh) for components I needed.

I added styling for the (static) example components. Then I started doing some testing across devices, running some tests (like [tests for accessible HTML](https://naga.co.za/2018/02/21/writing-accessible-html/), [Lighthouse in Chrome](https://developers.google.com/web/tools/lighthouse/) (although I've switched back to Firefox as my main browser)).

### Templatifying it

When I was happy, I refactored the static stuff to turn it into dynamic, loopable, Nunjuck-flavoured things. I used a `json` file for the data. 11ty made it easy to grab that and loop over it: stick your JSON file (or files) in the `_data` directory and you have access to it as a variable. I made a component called `Card` (not very inventive, I know) and looped like this for my `fishes.json`:

{% highlight nunjucks %}
{% raw %}
{% for fish in fishes %}
{% Card fish.name, fish.size %}
{% endfor %}
{% endraw %}
{% endhighlight %}

With things like Cards as components, it was fairly straightforward to build up the individual pages using the components.

And that's when the wheels started to come off.

## Deploy

Deploying to Netlify is, like GitHub Pages, quite automatic. You `git push` to the linked BitBucket repo, and Netlify triggers a build (either from what you set in the Netlify dash, or via a `netlify.toml`).

At the end of the work day I decided to deploy to Netlify again. Something was wonky, though: it wouldn't build. It worked on my machine (ahem), but Netlify was giving errors in the deploy logs. I read them through, but nothing there seemed to be helpful to me (possibly because I was new to 11ty). I know I have a tendency to get carried away with these kind of investigations, so I timeboxed myself to 30 minutes.

I tried a whole bunch of different things. I made a new branch and did lots of tiny commits, but couldn't figure it out. Given that time was short, that the project was going to have a short shelflife, that the job wasn't 11ty-focused (or me-learn-11ty-focused), and that I was going to be the only one working on it, I decided to brute-force it. I added the output directory (`_site`) to the repo. This is not a good thing to do. But! Given the above factors I thought it was an okay compromise. It was definitely the customer-focused choice. I've rather have the project done and working (but me a bit confused about 11ty and Netlify deploys) than unfinished (but me having figured out what was going wrong).

I got some feedback from the client, made some more changes, then we were done!

## Summary

I suppose my takeaway from this is that even the stuff that's supposed to be easy can become a headache. Most of the time it "just works." But when things go wrong and the solution isn't quickly clear, you need to weigh up the pros and cons of further investigation, make a decision, make a compromise.
