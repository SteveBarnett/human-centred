---
layout: page
title: '"Yeah, but" - objections to doing accessibility work, and ideas for discussion'
---

<ul>
    {% for yeahbuttal in site.data.yeahbuttals %}
    <li>
        <strong>"Yeah, but {{ yeahbuttal.yeahbut }}"</strong>
        <ul>
            {% for rebuttal in yeahbuttal.rebuttals %}
            <li>
                {{ rebuttal | markdownify }}
            </li>
            {% endfor %}
        </ul>
    </li>
    {% endfor %}
</ul>
