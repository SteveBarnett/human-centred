---
title: More accessible data visualisations
layout: post
description: A look at making SVG data visualisations more accessible
image: /img/2021/11/more-accessible-data-visualisations.jpg
---

At work the other day we were discussing accessible data visualisations. I took the chance to dive into the topic a bit and here are my notes-to-self about how to make SVG charts more accessible.

(Note: These notes are a still a work in progress!)

The first thing I did was go into research mode. At the end of this post is [a list of the very excellent resources I consulted](#resources) to make this list for myself. I dug into different types of charts and different reasons for charts. One way of classifying them is **explanatory** or **exploratory**. Are we telling a specific story or are we inviting the reader to make a story?

We should always provide an HTML `table`{: .el} as a backup version of the data. The individual data points should always be available in a text format. Usually we can do better than that, though, as we'll go through below.

### All charts

- **For a chart's title**, we use a `text`{: .el} element in the SVG. We add `aria-labelledby`{: .attr} to the SVG element, pointing at the title.
  - The `title`{: .el} element for an SVG is a bit like the `alt`{: .attr } attribute for an `img`{: .el}: it's a text alternative for the image as a whole. However, since it's not displayed on the screen (like `alt` text), we choose to use a `text`{: .el} element instead since it will also be available to sighted users.
  - We add an `aria-hidden="true"`{: .attr} to avoid the title being announced twice (once for the label and once for the `text` element itself)
  - For example: "Monthly account balance for the past year."
- **For a chart's description**, we use a `text`{: .el} element in the SVG. We add `aria-describedby`{: .attr} to the SVG element, pointing at the description.
  - The `desc`{: .el} element for an SVG is a bit like the `longdesc`{: .attr} attribute for an `img`{: .el}: it's a longer text alternative, and it's not displayed on the screen. We choose to use `text`{: .el} element instead since it will also be available to sighted users.
  - We add an `aria-hidden="true"`{: .attr} to avoid the description being announced twice (once for the description and once for the `text` element itself)
  - For example: "The balance increased steadily over the year, except for a dip during June and July."
- If we want to label the axes with ARIA attributes as well, we can wrap the axis labels in a `g`{: .el} (group) with an `aria-label`{: .attr} of the axis name.
  - For example: "X axis, months"

### Explanatory charts

We have a story about the data that we want to tell. We probably want to add some summary data to tell the story. What exactly will depend on the chart type and the type of data. This story should be the **chart's description**. This needs to be written by a human, since it requires judgement and nuance.

### Exploratory charts

We want to present the chart and data to the reader and let them drawn their own conclusions. These are often automatically generated charts, and/or charts where the data is updated regularly.

Here we'll want to label the data points individually. This will probably end up as a better experience for users of assistive technology like screen readers than just the HTML `table`{: .el} of the data.

- For each data item, add a containing `g`{: .el} (group) element. Inside the group, we want:
  - the visual elements of each data item (probably a shape like a `rect`{: .el} or `path`{: .el}), probably the chart element and am element for the legend or key.
  - a `text`{: .el} element with the value and label as the content.
  - For example: "{bar value}, {x-axis value}", or "$1,234, July."
- Depending on the type of chart and the story we're telling with the data, add a `role`{: .attr} of `img`{: .attr}, `list`{: .attr}, or `table`{: .attr} to the SVG.
  - When using a `role`{: .attr} of `list`{: .attr}, add a `role`{: .attr} of `listitem`{: .attr} to the `text`{: .el} elements containing the data.
  - When using a `role`{: .attr} of `table`{: .attr}, add `row`{: .attr}, `rowheader`{: .attr}, `columnheader`{: .attr}, and `cell`{: .attr} roles as appropriate. These attributes should match up with how we would mark up the HTML `table`{: .el}. The elements containing the data will have a `role`{: .attr} of `cell`{: .attr}

We might provide some summaries of the data to help the reader. Some of these we should be able to automate. We might consider:

- For bar charts, histograms, and line charts: trends; statistical measures like minimum and maximum data points, averages (mean, median, mode), quartiles, standard deviation. The type of data will also inform our choice.
  - For example: for a bank balance line chart, we might want to see the minimum, the maximum, any points that went below zero.
- For pie charts: ratios between the slices; the smallest and largest slices.
- For scatter plots: the correlation coefficient; the spread of values on each axis.

### Summary

- Whatever type and purpose of the chart, we provide a title and description. We use `text`{: .el } elements and ARIA attributes to add semantics to these.
- For explanatory charts, we use the description to tell a story. We provide an HTML `table`{: .el } version of the data too.
- For exploratory charts, we label the data points in a meaningful way by adding ARIA attributes to make the data a list or a table.
  - We might also add some summary data in the description. The summary data we provide will vary according to chart type and data type. These could be generated with the chart.

### Resources

- [How to create a screen reader accessible graph like Apple's with D3.js](https://fossheim.io/writing/posts/apple-dataviz-a11y-tutorial/) by Sarah L. Fossheim
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/) by Heather Migliorisi on CSS Tricks
- [Accessibility in d3 Bar Charts](https://www.a11ywithlindsey.com/blog/accessibility-d3-bar-charts) on A11y with Lyndsey
- [An introduction to accessible data visualizations with D3.js](https://fossheim.io/writing/posts/accessible-dataviz-d3-intro/) by Sarah L. Fossheim
- [Case Study: Implementing Accessible Data Charts for the Khan Academy 2018 Annual Report](https://www.sarasoueidan.com/blog/accessible-data-charts-for-khan-academy-2018-annual-report/) by Sara Soueidan
- [Accessible SVG line graphs](https://tink.uk/accessible-svg-line-graphs/) by Léonie
  Watson
- [A11yNYC June 13 2019 - Data Visualization with Doug Schepers - YouTube](https://www.youtube.com/watch?v=hmCC9XlaB9E)
- [Writing Alt Text for Data Visualization](https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81) by Amy Cesal
- [Making data visualizations more accessible | MIT News | Massachusetts Institute of Technology](https://news.mit.edu/2021/data-visualizations-accessible-blind-1012)
