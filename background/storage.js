function storeApiResponse(response) {
  if (response) {
    getStoredLinks((links) => {
      if (!linkAlreadyExists(links, response)) {
        links.push(response);
        chrome.storage.sync.set({ links });
      }
    });
  }
}

function getStoredLinks(callback) {
  chrome.storage.sync.get(['links'], (result) => {
    let links = result.links;
    if (links && Array.isArray(links)) {
      callback(links);
    } else {
      callback([]);
    }
  });
}

function linkAlreadyExists(currentLinks, newLink) {
  let linkFound = false;
  currentLinks.forEach((link) => {
    if (link.shrtlnk === newLink.shrtlnk) {
      linkFound = true;
    }
  });
  return linkFound;
}