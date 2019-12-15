const contexts = ['page', 'frame', 'link', 'image', 'video', 'audio', 'selection'];
let mostRecentShrtlnk;

chrome.contextMenus.create({
  title: 'Create shrtlnk',
  contexts: contexts,
  id: 'shrtlnk'
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'shrtlnk') {
    let url;

    if (info.linkUrl) {
      url = info.linkUrl;
    } else if (info.srcUrl) {
      url = info.srcUrl;
    } else if (info.selectionText) {
      url = info.selectionText;
    } else {
      url = info.pageUrl;
    }

    callApi(url);
  }
});

async function callApi(url) {
  let response = await postUrl(url);
  if (response && response.shrtlnk) {
    storeApiResponse(response);
    mostRecentShrtlnk = response.shrtlnk;
    notifyApiCallSuccess(response);
  }
}