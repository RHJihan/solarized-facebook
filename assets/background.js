chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({ url: "https://rhjihan.github.io/solarized-facebook/assets/help.html" }, function (tab) {
        console.log("New tab launched");
    });
});