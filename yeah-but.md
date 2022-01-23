---
layout: page
title: '"Yeah, but" - objections to doing accessibility work, and ideas for discussion'
---

<ul>
    {% assign counter = 0 %}
    {% for yeahbuttal in site.data.yeahbuttals %}
    <li id="yeahbut-{{ counter }}">
        <strong>"Yeah, but {{ yeahbuttal.yeahbut }}"</strong>
        <ul>
            {% for rebuttal in yeahbuttal.rebuttals %}
            <li>
                {{ rebuttal | markdownify }}
            </li>
            {% endfor %}
        </ul>
    </li>
    {% assign counter = counter | plus: 1 %}
    {% endfor %}
</ul>
