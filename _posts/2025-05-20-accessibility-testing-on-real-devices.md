---
title: (Accessibility) Testing on real devices
layout: post
description: Thinking about emulators and VMs and real devices
image: /img/2025/05/atord.png
category: reference
---

{% comment %}
Tutorial: learning-oriented. Practical / Study.
How-To guide: task-oriented. Practical / Work.
Explanation: understanding-oriented. Theoretical / Study.
Reference: information-oriented. Theoretical / Work.
{% endcomment %}

{% comment %}
Precap at the top
Images!
Credit where's it due
Recap bullets at the bottom
{% endcomment %}

The other day at work we were talking about testing with screen readers. Specifically: what's the best way for a team of devs on Macs to test Windows screen readers. Here's my thoughts on The Ideal Situation.

We ideally want to get as close to the same conditions and user experience of our customers as possible. We're not just doing functional testing. We're also doing exploratory and experience testing.

- **Emulators** (or simulators) are the bottom of our list. We're adding another layer of potential mismatch and disconnection.
- **VMs** are pretty good. They still create a bit of a gap, though, and more variables to account for. Running Windows on a Mac is already a bit odd, but the mental model mismatch also matches it a bit trickier to test well.
- **Real devices via a portal** are pretty good. There's still the friction of testing in the browser in the browser, though.
- **Testing on a real device** is our best bet. Our customers don't use VMs or emulators. They use the screen reader that's available on their OS.

Here are a few factors that make real device testing more appealing.

- **Error clarity.** We can be more sure, more quickly, that errors we encounter are coming from our code, and not the emulator or the testing provider's connection and setup.
- **Performance.** The device, browser, and site performance can all be impacted by . This is especially true for more intensive interactions or for less widely supported features.
- **OS set and setting.** Having the OS UI and interaction patterns helps align our mental models with the platform and screen reader we're testing on.
    - This is particularly true for mobile.
- **Security.** The data stays on authorised devices.
- **Cost.** Real device testing services are an ongoing, often fairly high, cost. A low-end, testing-only, Windows laptop is a once-off expense.