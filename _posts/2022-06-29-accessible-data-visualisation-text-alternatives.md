---
title: "Accessible data visualisation: text alternatives"
layout: post
description: Pulling together some thoughts on text alternatives for charts
image: /img/2022/06/charts.png
---

Complex images like charts must have a `table` of the data and “alt text” on the chart noting where the table is. Any functionality available on hover must be available from the keyboard.

All non-text content must have a text alternative that converts the content or function of the non-text content.

- **Simple images can use a concise sentence as a text alternative.** We put this in the `alt` attribute for `img`s or `title` element for `svg`s. We often call both “alt text” as a shorthand for “text alternative”.
- **Complex images like charts need a two-part text alternative.** The content of the chart is the data. This is too long to use for “alt text”. It also usually needs some structure (for example rows and columns) to adequately convey its meaning. This isn’t possible in an `alt` attribute or `title` element.

## Text alternatives for complex images like charts

We should provide 

1. A `table` of the chart data.
2. A text alternative on the chart image noting where the table is.
	
### A `table` of the chart data

This provides a (structured) text version of the content of the chart: the data.

<p id=“options-for-position-of-the-table”>Options for the position of the table:</p>

- Before the chart.
- After the chart.
    - If the chart contains more than one tab stop, we should provide a skip link before the chart pointing to the table. 
- Instead of the chart, via a toggle button. The toggle button must appear before the chart.
- On another page.
    - We must provide a link to the table with the chart. The link text should describe the link destination and its relation to the chart. Template: “View table of `[type of data]`”. For example: “View table of income from January 2022 to June 2022”.

#### Technical notes

- The skip link will be an in-page link: `<a href=“#id-of-the-table”></a>`.
- The skip link can optionally be visually hidden until it receives focus, like a skip link at the very start of a page.
- The table will need an `id` to point to, and a `tabindex=“-1”` to allow it to receive focus (from the skip link).


### A text alternative on the chart image noting where the table is

We use the text alternative on the chart to tell the user where the table is. We use either the `alt` attribute (for `img`s) or `title` element (for `svg`s), 

- Template: “[chart type] of [type of data] where [reason for including chart]. [type of text version of data] [position of text version of data]”.
- Example: “Line chart of income from January 2022 to June 2022. A table of the data immediately follows this chart”.
- Example: “Line chart of income from January 2022 to June 2022. A link to a table of the data immediately follows this chart”.

## Componentising

To make the chart component as accessible as possible by default, we should:

- include the generation of the table.
- include options for the position of the table (see [Options for the position of the table](#options-for-position-of-the-table) earlier on this page).
- provide a default text alternative on the chart image noting where the table is.

## Up next

This was all about the text alternatives for charts. We didn’t look at all at “Any functionality available on hover must be available from the keyboard.” That’s a topic for another article.

## References

- The [WAI’s Complex Images tutorial](https://www.w3.org/WAI/tutorials/images/complex/) has lots of great information.
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/) by Heather Migliorisi on CSS Tricks
- [Case Study: Implementing Accessible Data Charts for the Khan Academy 2018 Annual Report](https://www.sarasoueidan.com/blog/accessible-data-charts-for-khan-academy-2018-annual-report/) by Sara Soueidan
- [Writing Alt Text for Data Visualization](https://medium.com/nightingale/writing-alt-text-for-data-visualization-2a218ef43f81) by Amy Cesal
- [Making data visualizations more accessible](https://news.mit.edu/2021/data-visualizations-accessible-blind-1012)
