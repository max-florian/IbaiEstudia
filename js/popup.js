let imgTwitter = document.getElementById('imgTwitter');
let aSourceCode = document.getElementById('aSourceCode');

imgTwitter.onclick = function() {
    chrome.tabs.create({url: 'https://twitter.com/Max7Droid', active: false});
};

aSourceCode.onclick = function() {
    chrome.tabs.create({url: 'https://github.com/K7Droid/IbaiEstudia', active: false});
};