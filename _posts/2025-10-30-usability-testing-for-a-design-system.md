---
title: Usability testing for a design system
layout: post
description: Some notes on how to get the most out of usability testing for a design system
image: /img/2025/10/utfads.png
---

The goal:

- Regularly gather feedback by conducting usability testing with people with disability using a range of assistive technologies;
- Prioritise testing components that are based on the ARIA Authoring Practices Guide (APG) or similar guides.

## Before the sessions

### The participants

A good approach is to ask for a broad mix of

- mobile and desktop;
- types of disabilities;
- assistive technology.

### The scenarios

- Pick a small list of components to test
    - Non-native, APG-based, components
    - New components since the last round of testing
- Design and make some realistic, but not real, pages using the components
    - Do use content and ideas from existing flows and pages
        - Don't use lorem ipsum
    - Do include footer navigation for the user to move to the scenarios
        - Don't include navigation that take the user out of the test flow
    - Ideally, a designer designs the pages, a developer builds the pages
        - As a backup, a design-savvy developer can build the pages.
    - So include a handful of patterns that are widely used and/or know to be problematic, to gain insights to share more widely than just the RDS team
- Confirm environment and access

### The schedule

- Make a list of good and bad times of day and share with session organisers
- Plan for time to review the script
- Schedule attending sessions as a task during the sprint
    - Aim for at least one developer and one designer
    - Aim for a minimum of one team member per session

## During the sessions

- Take notes to prepare for questions at the end
- Have a short debrief immediately after each session

## After the sessions

- Watch the recordings of any missed sessions
- Have a short debrief meeting as a team to share observations and insights
- Make tickets from the issues and recommendations in the report