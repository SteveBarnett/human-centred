---
title: Quick note to self on testing
layout: post
description: "A quick note to self on testing: manual, end to end, integration, unit, and static analysis."
image: /img/2022/03/testing-human-and-robots.png
---

Testing is important. It gives us confidence in our app. That it does what we, and our users, expect it to. And that changes we make won't break things.

- Do some **Manual testing**. Check the quality of the human experience of the app beyond just functionality.
- Have few **End to End tests** (also known as functional tests). Use a robot pretending to be a human to check that user flows work correctly. BDD (Behaviour Driven Development) can be helpful here.
- Have some **Integration tests**. Check that several units interact with each other correctly.
- Have many **Unit tests**. Check that individual parts work in isolation. Focus on the behaviour, not the implementation.
- Have **Static Analysis**: Catch errors and typos while writing the code.

Tests higher up the list:

- take more time to write and maintain;
- have more points of failure;
- usually take longer to run;
- more closely resemble how a human uses the app.