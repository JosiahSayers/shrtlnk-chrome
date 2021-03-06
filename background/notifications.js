function notifyApiCallSuccess(apiResponse) {
  chrome.notifications.create('ApiCallSuccess', {
    type: 'basic',
    iconUrl: '../images/icons/icon512.png',
    title: 'Your shrtlnk is here!',
    message: `Click here to copy the shrtlnk \n${apiResponse.shrtlnk}`,
    buttons: [
      {
        title: 'Copy to Clipboard'
      }
    ]
  });
}

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (notificationId === 'ApiCallSuccess') {
    if (buttonIndex === 0) {
      handleNotificationClick(mostRecentShrtlnk);
    }
  }
});

chrome.notifications.onClicked.addListener((notificationId) => {
  if (notificationId === 'ApiCallSuccess') {
    handleNotificationClick(mostRecentShrtlnk);
  }
});

function handleNotificationClick(textToCopy) {
  if (textToCopy) {
    copyToClipboard(textToCopy);
  }

  clearNotifications();
}

function clearNotifications() {
  chrome.notifications.clear('ApiCallSuccess');
  chrome.notifications.clear('ApiCallSent');
}

function copyToClipboard(text) {
  const input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
};