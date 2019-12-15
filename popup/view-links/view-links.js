const linksContainer = document.getElementById('links-container');

chrome.storage.sync.get(['links'], (result) => {
  const links = result.links;
  showLinks(links);
});

function showLinks(links) {
  links.forEach((link) => {
    const div = document.createElement('div');
    div.classList.add('link');

    const list = document.createElement('ul');

    const url = document.createElement('li');
    const shrtlnk = document.createElement('li');
    const key = document.createElement('li');
    url.innerText = 'URL: ';
    url.appendChild(createAnchor(link.url));
    shrtlnk.innerText = 'shrtlnk: ';
    shrtlnk.appendChild(createAnchor(link.shrtlnk));
    key.innerText = `Key: ${link.key}`;

    list.appendChild(shrtlnk);
    list.appendChild(url);
    list.appendChild(key);

    div.appendChild(list);
    linksContainer.appendChild(div);
  });
}

function createAnchor(href, text) {
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.target = '_blank';
  anchor.innerText = text ? text : href;
  return anchor;
}