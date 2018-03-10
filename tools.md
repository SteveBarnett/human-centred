---
layout: page
title: Tools (printables)
---

{% for tool in site.data.tools %}
### {{ tool.name }}
[![{{ tool.name }}]({{ tool.img }})]({{ tool.img }})
{% endfor %}{: .list-tools }
