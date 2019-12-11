const contexts = ['page', 'frame', 'link', 'image', 'video', 'audio', 'selection'];

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
      console.log('linkUrl: ' + url);
    } else if (info.srcUrl) {
      url = info.srcUrl;
      console.log('srcUrl: ' + url);
    } else if (info.selectionText) {
      url = info.selectionText;
      console.log('selectionText: ' + url);
    } else {
      url = info.pageUrl;
      console.log('pageUrl: ' + url);
    }

    callApi(url);
  }
});

async function callApi(url) {
  let response = await postUrl(url);
  console.log('API Response: ', response);
}