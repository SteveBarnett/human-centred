---
layout: page
title: Sounds like
---

Some HTML bits and what they sound like to a screen reader. Two big things to remember are:

- every form control needs a name (visible or not);
- every group of controls needs a name (visible or not);
- generally prefer (correctly marked-up) visible names as they work for all users.

Here are a bunch of tiny samples:

### Single inputs

<ol>
    {% for sounds-like-input in site.sounds-like-inputs %}
    <li>
        {% if sounds-like-input.best %}<span aria-hidden="true">✔️</span>{% endif %}
        {% if sounds-like-input.bad %}<span aria-hidden="true">🚫</span>{% endif %}
            <a href="{{ sounds-like-input.url }}">{% if sounds-like-input.best %}<strong>{% endif %}{{ sounds-like-input.title }}{% if sounds-like-input.best %}</strong>{% endif %}</a> sounds like <code>{{ sounds-like-input.sounds-like }}</code> {% if sounds-like-input.best %} (best choice){% endif %}
    </li>
    {% endfor %}
</ol>

### Grouped inputs, radios

<ol>
    {% for sounds-like-group in site.sounds-like-groups-radios %}
    <li>
        {% if sounds-like-group.best %}<span aria-hidden="true">✔️</span>{% endif %}
        {% if sounds-like-group.bad %}<span aria-hidden="true">🚫</span>{% endif %}
            <a href="{{ sounds-like-group.url }}">{% if sounds-like-group.best %}<strong>{% endif %}{{ sounds-like-group.title }}{% if sounds-like-group.best %}</strong>{% endif %}</a> sounds like <code>{{ sounds-like-group.sounds-like }}</code> {% if sounds-like-group.best %} (best choice){% endif %}
    </li>
    {% endfor %}
</ol>

### Grouped inputs

<ol>
    {% for sounds-like-group in site.sounds-like-groups %}
    <li>
        {% if sounds-like-group.best %}<span aria-hidden="true">✔️</span>{% endif %}
        {% if sounds-like-group.bad %}<span aria-hidden="true">🚫</span>{% endif %}
            <a href="{{ sounds-like-group.url }}">{% if sounds-like-group.best %}<strong>{% endif %}{{ sounds-like-group.title }}{% if sounds-like-group.best %}</strong>{% endif %}</a> sounds like <code>{{ sounds-like-group.sounds-like }}</code> {% if sounds-like-group.best %} (best choice){% endif %}
    </li>
    {% endfor %}
</ol>
