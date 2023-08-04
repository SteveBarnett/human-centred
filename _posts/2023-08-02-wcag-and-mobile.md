---
title: WCAG and mobile
layout: post
description: A brief guide to how WCAG applies to native mobile apps
image: /img/2023/08/wcagqrm.png
category: reference
---

The very short version: version 2.1 of the Web Content Accessibility Guidelines applies to mobile native apps too.

Although some of the language around techniques and failures can be quite web-centric, many of the Success Criteria can be applied directly to mobile native apps. For example:
- all non-text content must have a text alternative;
- interactive elements (like links, buttons, form fields) must have an accessible name;
- colour contrast must be at least 4.5:1 for text, 3:1 for UI elements.

An older page but still relevant page, [Mobile Accessibility: How WCAG 2.0 and Other W3C/WAI Guidelines Apply to Mobile](https://www.w3.org/TR/mobile-accessibility-mapping/), covers Success Criteria that related to mobile. It includes considerations such as:

- touchscreen control, target size, and gestures;
- providing clear indication that elements are actionable;
- easy data entry including setting the virtual keyboard to the type of data entry required;
- supporting the characteristic properties of the platform.

[Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/wcag2ict/) is a lengthy document that goes through each WCAG 2.0 SC and gives advice on applying the guidance, noting where it can applied directly.

## WCAG 2.1 and mobile

 [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&showtechniques=123%2C242&tags=mobile&technologies=smil%2Cpdf%2Cflash%2Csl) has a mobile tag to filter the Success Criteria by. Some key items:
 
 - respect users's settings;
 - don't **require** multi-touch or device motion;
 - have big enough touch targets.

## Later versions of the WCAG

Version 2.2 is due out around August 2023. It adds some new Success Criteria that are particularly relevant for native mobile apps. See [What WCAG 2.2 Means for Native Mobile Accessibility](https://www.deque.com/blog/what-wcag-2-2-means-for-native-mobile-accessibility/) for more detail. Some examples:

- more rules around focus styles;
- having alternatives to drag and drop;
- having accessible authentication.

Version 3 of WCAG will be renamed to **W3C Accessibility Guidelines**. This is still early work in progress, but proposes broader guidance. See [A brief overview of WCAG 3.0](https://xero.atlassian.net/wiki/spaces/ACP/pages/269688635582/A+brief+overview+of+WCAG+3.0) for more detail. WCAG 3.0 includes specific mention of mobile native apps. From [Goals and requirements](https://www.w3.org/TR/wcag-3.0/#goals-and-requirements) (emphasis added):

> The goal of WCAG 3 and supporting documents is to make digital products including web, ePub, PDF, applications, **mobile apps**, and other emerging technologies **more accessible and usable to people with disabilities**.

