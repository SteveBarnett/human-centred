---
title: Introduction to Accessibility
layout: post
description: "Introduction to Accessibility: a blog post version of a talk I gave"
image: /img/2022/03/intro-to-a11y.jpg
---

One of the most important things (in an introduction to Accessibility) is that small accessibility improvements help more people than we might think.

I try to remember what [Sir Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) says:

> “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”
-- Sir Tim Berners-Lee

## 1. Accessibility and Disability

### A human uses the Web

Let's start with the interaction: a human uses the Web. There can be **a lot** of different ways this plays out! Here's one: a human using a mouse and Safari on a Mac uses the Web.

I sat down the other day and tried to think of a wide range. Here's what I came up with: a human using a mouse / trackpad / keyboard / switch control / puffer / magnification tool / voice control / screen reader and Safari / Chrome / Firefox / Edge on a Windows / Mac / Linux desktop / laptop / tablet / phone in light / dark mode / high contrast mode with reduced motion enabled with smaller / larger text size uses the Web.

Phew! That's a lot of different ways that a human might be using the web!

The delicious takeaway from this line of thinking is that **humans interact with our product in a very wide range of ways**.

### The Social model of disability

Another way to think about this is that there are many types of disability, for example: Auditory, Cognitive, Physical, and Visual. This list is by no means exhaustive, but it can be a good start.

I'm a fan of the Social model of disability. That model says something like: **Disability = Ability + Barrier**. A disability occurs when a person's ability comes into conflict with a barrier in the world or in a product. It's about mismatched interactions. I like this model because it helps me think more broadly. It helps me make better products.

## 2. Standards and Compliance

Standards and Compliance are good for helping us to know what good looks like.

By far the most widely used standards are the **We**b **C**ontent **A**ccessibility **G**uidelines (or WCAG for short). They're a list of testable little statements called Success Criteria. They're organised into four big groups: **P**erceivable, **O**perable, **U**nderstandable, **R**obust.

Most governments and big companies aim for **"WCAG 2.1 Level AA compliance"**. 2.1 is the current version of the WCAG. Each Success Criteria has a Level.

- **Level A is minimum compliance.** It means some users with disabilities are able to access and use the content.
- **Level AA is acceptable compliance.** It means that most users with disabilities are able to access and use the content. The overall accessibility is good and there are no significiant barriers for users with disabilities. 
- **Level AAA is optimal compliance.** It means that almost all users with disabilities are able to access and use the content. The overall accessibility is excellent and there are few barriers for users with disabilities.

It's important to remember that these standards set the minimum. We get to set the maximum. We can choose not just to make things technically accessible, but accessible and usable.

I find the official WCAG specification a bit dry. I prefer using [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl). It's filterable and collapsible, and a bit easier to read.

## 3. Checks and Tests

Checks and Tests are good for helping us know how to make accessible things. Here are three flavours of **QACs (Quick A11y Checks)** that are good things to start with.

### **QAC for Content creators**

Check the following:

1. Headings (levels, nesting)
2. Text alternatives (images, videos)
3. High quality text (links, buttons)

### **[QAC for Designers](https://naga.co.za/2022/01/24/qac-for-design/)**

Check the following:

1. Headings (levels, nesting)
2. Accessible names (forms, links)
3. Unique text (links, buttons)

Check the following:

### **[QAC for Developers](https://naga.co.za/2021/12/13/qac/)**

1. Headings (levels, nesting)
2. Keyboard (functionality, visibility)
3. axe DevTools (HTML errors)

### **More than a QAC**

If you want to do a bit more than a QAC, check out these.

- **[TPGi's ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/)**. This is a good tool to run to flag more errors. It provides an easy way of inspecting the accessibility of semantic structures such as headings, landmarks, links, buttons, form controls, and alt text.
- **[Microsoft Accessibility Insights](https://accessibilityinsights.io/)** (Do the assessment option). This is a good tool to use next because it offers good coverage of the WCAG SC (Success Criteria). It’s a reasonably lengthy process, but gets faster with practice.
- **[Test using a screen reader](https://naga.co.za/2021/07/31/testing-with-screen-readers/)**. 
	- Check structure.
	- Check interactions.
	- Check alt text of images: does it convey the content and function of the image?
	- Check form error handling. (Warning! This could get a bit hairy. 😬)

## Summary

One of the most important things (in an introduction to Accessibility) is that small accessibility improvements help more people than we might think. Sometimes it feels like a lot work. But I try to remember what [Léonie Watson](https://tink.uk/) says:

> "It doesn't have to be perfect,<br>just a little bit better<br>than yesterday"
--Léonie Watson

