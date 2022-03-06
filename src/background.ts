// eslint-disable-next-line no-undef
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    // eslint-disable-next-line no-undef
    chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
  }
});
