---
title: "Accessible data visualisation: keyboard interactions"
layout: post
description: 
image: /img/2022/06/charts.png
includesyntaxhighlight: true
---

Following on from [Accessible data visualisation: text alternatives](/2022/06/29/accessible-data-visualisation-text-alternatives/), here are some thoughts on keyboard interactions on charts.

## Names and roles

- **Give each series of data a `role=“group”` with an accessible name.** Ideally use `aria-labelledby` to point at the series name in the legend. Otherwise use an `aria-label`.
- **Give each data point a `role=“img”` and an accessible name.** The name should contain all the information needed for the data point to make sense on its own. Ideally, use `aria-labelledby` to point at existing visible text. Otherwise, use `aria-label`.
    - For example: on a pie chart, the name should include the name and size, such as “Monday, 14%”.
    - For example: on a bar chart, the name should include the x-axis value and the y-axis value, such as “January, $100”.

## Keyboard interactions

- **Add visible, concise, instructions before the chart.** This helps sighted keyboard users and screen reader users.
- **Move between data series using the <kbd>Tab</kbd> key.** Each data series is a group.
    - **If there are many series, add a skip link before the chart.** This enables sighted keyboard users and screen reader users to bypass lengthy content.
- **Move between data points in a series using the arrow keys.** <kbd>→</kbd> `39` and <kbd>↓</kbd> `40` for next, <kbd>←</kbd> `37` and <kbd>↑</kbd> `38` for previous
- **Set the first data point in the first series to `tabindex=“0”`.** This provides an entry point into the chart. Then use a roving `tabindex`.