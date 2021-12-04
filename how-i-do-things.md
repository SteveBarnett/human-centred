---
layout: page
title: How I do things
---

The web is being accessed by an increasing number of devices (especially mobile ones). This leads to a large variety in operating systems, browsers, and screen sizes. This makes building for the web a very challenging, but stimulating, job.

Here's a brief round up on some things that are important to me, and what they mean for our web sites. Pulling all these things together means that we end up with the best site possible for our visitors. Our sites will be easier to maintain, be faster, and have better search engine results.

## One Web

I'm a strong believer in the [One Web](http://adactio.com/journal/1716/): people should be able to access all of your web site quickly and easily, regardless of the device they're using, the type of connection they are on, or any disabilities they have.

To do this, I build sites using the latest and emerging technologies, in a [future friendly](http://futurefriend.ly/) way. This means I adhere to [Web Standards](http://www.webstandards.org/learn/faq/) and build sites in layers. The technical bits:

- HTML5 for the content;
- WAI-ARIA roles, landmarks, and labels to improve accessibility;
- [Schema.org](http://schema.org/) to add extra semantics;
- CSS3 for the presentation;
- JavaScript for enhanced functionality and interactivity.

## Progressive Enhancement

Every device that views a site has a different set of capabilities. [Progressive Enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement) means that I add the layers above piece by piece, adding only the features the device says it supports. This results in a lean site, that each device might experience differently: the experience is tailored to the capabilities of the device.

## Responsive Web Design

[Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/) is about embracing the flexibility of the web as a medium. The structure of a site, the content, and the blocks that contain the content, should be fluid and flexible so that they can respond to the device viewing them. This means using CSS3 media queries or flexbox to emulate container queries.

Rather than spending time trying to make a site look identical across every device, we can focus on the business objectives. Then we send the most appropriate modules of the site to each device. A site might look and behave quite differently on the small screen of a smartphone and the large, widescreen, monitor of a desktop computer, but it will look and feel great on both.

## Mobile First / Content First

[Mobile First](http://www.lukew.com/ff/entry.asp?933) is a Progressive Enhancement version of Responsive Web Design, with a strong focus on screen sizes. I build the small screen version of your site first. Then, we add extra rules (and features) for progressively larger screen sizes.

Mobile First is also about simplifying and streamlining. This means focusing on what tasks users want to do, what functionality they need, and what content they want. It also means avoiding adding any extra cruft or distractions that would get in the user's way, so that can do what they want to, as fast as possible.

Content First is about focusing on the content as the most powerful part of your site. This means providing relevant, interesting, and well-written content. It also means keeping an eye on your content, and having a plan for updating on a regular basis if necessary.

## Performance

Keeping performance in mind is essential. A slow site loses people, loses a business money, and (because it's big and heavy) costs users more money. Taking performance steps like turning on gzip, optimising images, compressing and minifying CSS and JavaScript, and only loading things that the browser will need, are the baseline for a successful site. As they say on the internet: [#perfmatters](/2017/04/10/perfmatters/).

## Accessibility

A modern, more realistic, take on disability is that it can be permanent, temporary (such as an injury), or contextual (only having one hand free). A disability is the result of a person's ability (their functional capacity) coming into conflict with a barrier (created by the product) they are trying to use.

I design and build sites with a focus on [Inclusive Design](/2017/01/27/inclusive-design-and-accessibility/): acknowledging and accepting the wide range of abilities of our users. I [write accessible HTML](/2018/02/21/writing-accessible-html/) to make things work for users of as many levels of functional ability as possible.
