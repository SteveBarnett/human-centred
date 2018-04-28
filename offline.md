---
layout: page
title: Offline
---

It looks like you're offline. You can still read the [home page](/), the [about page](/about/), and the [community page](/community/), and these pages that you've already visited:

<ul id="history"></ul>

<script>
caches.open('pages')
.then( pagesCache => {
    pagesCache.keys()
    .then( keys => {
        let markup = '';
        keys.forEach( request => {
            markup += `<li><a href =" ${request.url}"> ${request.url}</a></li>`;
        });
        document.getElementById('history').innerHTML = markup;
    });
});
</script>
