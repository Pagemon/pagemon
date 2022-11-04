chrome.runtime.onInstalled.addListener(function() {
    chrome.action.setBadgeText({
        text: 'OFF'
    });
});