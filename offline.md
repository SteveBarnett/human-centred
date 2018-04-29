---
layout: page
title: Offline
---

It looks like you're offline. You can still read [the home page](/), [the about page](/about/), and [the community page](/community/).

<script>
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

function unslugify(url) {
    const splitted = url.split('/');
    return splitted[splitted.length - 2].replace(/\-+/g, ' ');
}

let markup = '';

caches.open('pages')
.then( pagesCache => {
    pagesCache.keys()
    .then( keys => {
        keys.forEach( request => {
            markup += `<li><a href =" ${request.url}">${titleCase(unslugify(request.url))}</a></li>`;
        });
    })
    .then( () => {
        if (markup) {
            markup = `<p>You can also still read these pages that you've already visited:</p><ul id="history">${markup}</ul>`;
            const entryContent = document.querySelector(".entry-content");
            entryContent.innerHTML += markup;
        }
    });
});
</script>
