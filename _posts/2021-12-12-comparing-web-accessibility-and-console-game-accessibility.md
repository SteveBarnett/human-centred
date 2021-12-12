---
title: Comparing web accessibility and console game accessibility
layout: post
description:
image: /img/2021/12/tloupt2.png
---

One of things I do when I'm not working is play console games. And watch videos about the design (and accessibility) of games. Recently I watched two videos that make me think about where web accessibility is compared to console game accessibility, and how the two might help each other.

## Summary

- Games and the web both have many accessibility features. With games the settings tend to be per game. On the web they tend to be system level settings.
- Starting with an accessibility menu and allowing granular customisation are two accessibility things that games do that the web might want to borrow from.
- Make the default version accessible and provide enhancements (that may be less accessible).

## Introduction

The videos that prompted me to scribble down these thoughts were:

- [How Accessible Were This Year's Games?](https://www.youtube.com/watch?v=-IhQl1CBj9U) (2021 edition, from Game Maker's Toolkit)
- [Video Games Need Accessibility Standards](https://www.youtube.com/watch?v=U8cDeBxKPRQ) (from LauraKBuzz's Access-Ability series)

## What do games do that the web does too?

Many of the things that games and the web both do are handled on the web by the Operating System (Windows, Mac OS, or Linux), the Browser (most often Chrome, Edge, or Firefox), or the Assistive Technology (like a screen reader or magnification tool).

### Controller options

For actions, some games offer a choice between holding a button to perform the action, or pressing the button to toggle the action. Some games allow players to choose which button does what, and most consoles allow this at the system level too.

On the web, we have [WCAG Guideline 2.5 — Input Modalities](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa&technologies=smil%2Cpdf%2Cflash%2Csl#input-modalities). This is about not requiring specific, complicated, and complex interactions with specific input types.

For remapping, the closest thing on the web is [WCAG Success Criteria 2.1.4 — Character Key Shortcuts](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#character-key-shortcuts). This is about key shortcuts more generally, but includes remapping as an accessible option.

The sticks on controllers usually control looking and moving. The more you push the stick, the faster you look or move.

On the web we have pointer devices like a mouse or trackpad. These have had tracking speed, double-click speed, and scroll speed settings at the sytem level for many years.

### Subtitles and Captions

Subtitles are text of the dialogue. Captions are text of the dialogue, plus descriptions of other audio like sound effects and music. Assuming subtitle and captions tracks have been provided, what options are available?

Most games these days have a setting to turn on subtitles. Many have subtitles on by default. Some also provide a setting for captions, with some offering captions only. Some provide settings for the display of this text: text colour, background colour, text size, background opacity.

On the web the subtitles and captions settings come from the player.These can be styled with CSS. The [WCAG Guideline 1.2 – Time-based Media](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview#time-based-media) has several Success Criteria about supplying captions and audio descriptions, but doesn't mention customisation of the display of these.

### Assist mode

Many games have some form of assist mode or settings. Sometimes this is under "difficulty" and sometimes it's under accessibility. Assist mode can mean: adjustable speed; more favourable statistics; more attempts; automatic assistance for aiming or moving; skipping certain interactions. The choices are varied because it depends what interactions the game requires.

As Mark Brown says in his ["How Accessible Were This Year's Games?" video](https://www.youtube.com/watch?v=-IhQl1CBj9U) video:

> accessibility is about reaching a wider group of people by making design decisions and providing options that can help **remove the barriers that get in the way of the fun**.

I think this is especially true for assist mode.

The web has similar concepts to assist mode in a generic sense: autofill, password managers, grammar and spelling checkers. Again, these are provided by the OS / Browser / AT. They can be enhanced or improved by site.

There are some site-specific things that could classify as assist mode features: the choice of default settings; a typeahead autocomplete; machine-learning-based suggestions.

Site "tours" perhaps fall into this category too. The "big up front" versions are less useful, but the "just in time" versions could maybe be categorised as assist mode features.

## What do games do that the web doesn't?

There are a few things that I've seen in games accessibility that don't quite have a parallel on the web.

### Boot into the accessibility menu

Some games take you straight into the accessibility menu on your first load of the game. This has been a pattern for a while for things like choosing UI language and voice acting language.

On the web, many accessibility settings are at the system level. Some of these are prompted for during the first install, or on upgrade, but most are under Preferences or Settings.

The Authoring Tool Accessibility Guidelines mention [making accessible options at least as prominent as non-accessible options](https://www.w3.org/TR/ATAG20/#gl_b22).

#### How might we use this on the web?

Offering a handful of site-specific accessibility settings on first log-in could be a good way of surfacing these, and of setting some defaults. These could also be surfaced as "just in time" prompts when users access a new section for the first time.

### Very granular customisation

Some games offer preset "packs" of accessibility options. For instance, choosing a colour-blind friendly palette of colours. Some games go very granular on their accessibility settings. Players can set colours and outlines on many game elements. While this level of customisability is great, it can also be quite intimidating as it may take a lot of work to get all the option set as you want them. Ideally, the default version of the game should be accessible to as many people as possible.

#### How might we use this on the web?

On the web, modern design and development practices lend themselves nicely to high customisability. Many organisations will have a design system. Colour, spacing, and font choice are usually controlled with variables (either in Sass or with CSS custom properties). Having a settings page that lets the user change some of these seems like a viable way to offer more customisation.

Progressive disclosure might be one way to offer a lot of customisation without revealing a large number of options all at once. That is: show a handful of the most used settings up front, and offer an easy way to access the full list. Offering "packs" of accessibility options might also be good.

## Conforming Alternate Versions

One of the things that seems like a way around making an accessible site is having a [Conforming Alternate Version](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conforming-alt-versions-head). This is usually not a good path to follow because it means maintaining two versions of the same site.

However, there is a pattern some games follow that could offer an, ahem, alternative to this. In games that apply special visual effects (such as very pixelated art style, handwritten text on screen, glitch-y displays) there is sometimes an option to turn these effects off.

The key thing here is that the effects are a layer. There's the base version of the game. Then there's the version enhanced with the special effects. If this is taken into account from the start of the process, it's relatively low complexity to implement. It's [shifting left](https://www.deque.com/shift-left/)!

The default version is accessible. But you can choose to change settings that may impact on the accessibility. For example, it's become popular for games to have subtitles on by default.

## Quick aside: open-sourcing accessibility innovations

I'm a big fan of open source. It made me very happy to see that EA have (sort of) un-patented some of the cool tech that they've made for making it easier to make games more accessible: [EA’s Patent Pledge for Increasing Accessibility](https://www.ea.com/commitments/positive-play/accessibility-patent-pledge).

> Anyone can freely use these patents and implement our accessibility-centered IP in their own games to make them more inclusive.

At the moment that includes:

- the Ping System, a way of sending a short text description of something that would usually be done over voice chat;
- an automated way to process images that improves them for people with colour vision impairments;
- a contrast ratio checker.

This is great and it would be amazing to see more companies do this.

## Recap

- Games and the web both have many accessibility features. With games the settings tend to be per game. On the web they tend to be system level settings.
- Starting with an accessibility menu and allowing granular customisation are two accessibility things that games do that the web might want to borrow from.
- Make the default version accessible and provide enhancements (that may be less accessible).
