chrome.webNavigation.onCompleted.addListener(details => {
    chrome.storage.sync.get({
        savedLogoLink: "https://youtube.com/feed/subscriptions"
    }, items => {
        chrome.tabs.executeScript(details.tabId, {
            code: 'var logo = document.querySelector("a#logo"),' +
                '      newLogo = logo.cloneNode(true);' +
                'newLogo.setAttribute("href", "' + items.savedLogoLink + '");' +
                'logo.parentNode.replaceChild(newLogo, logo);'
        });
    });
}, {
    url: [{
        hostContains: '.youtube.com'
    }],
});