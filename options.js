function save_options() {
    var logoLink = document.getElementById('logoLink').value;
    chrome.storage.sync.set({
        savedLogoLink: logoLink
    }, function () {
        window.close();
    });
}

function restore_options() {
    chrome.storage.sync.get({
        savedLogoLink: "https://youtube.com/feed/subscriptions"
    }, function (items) {
        document.getElementById('logoLink').value = items.savedLogoLink;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);