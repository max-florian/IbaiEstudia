sitiosbloqueados = [
    new RegExp('https:\/\/www\.facebook\.com\/.*'),
    new RegExp('https:\/\/www\.instagram\.com\/.*'),
    new RegExp('https:\/\/twitter\.com\/.*'),
    new RegExp('https:\/\/www\.youtube\.com\/.*'),
    new RegExp('https:\/\/www\.reddit\.com\/.*'),
    new RegExp('https:\/\/www\.tiktok\.com\/.*'),
    new RegExp('https:\/\/www\.twitch.com\/.*'),
    new RegEXP('https://osu.ppy.sh/beatmapsets\/.*'),
    new RegEXP('https://www.netflix.com/es/\/.*'),
    new RegEXP('https://www.netflix.com\/.*')
];
function coincidencia(sitio){
    for(var i=0;i<sitiosbloqueados.length;i++){
        if(sitiosbloqueados[i].test(sitio)){
            return true
        }
    }
    return false
}

chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.storage.sync.get('modoestudio', function(data) {
        if(data.modoestudio){
            chrome.tabs.get(activeInfo.tabId, function(tab){
                y = coincidencia(tab.url);
                if(y){
                    chrome.tabs.update({ url: "chrome://bookmarks" })
                }
            });
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    chrome.storage.sync.get('modoestudio', function(data) {
        if(data.modoestudio){
            if (tab.active && change.url) {
                y = coincidencia(change.url);
                if(y){
                    chrome.tabs.update({ url: "chrome://bookmarks" })
                }           
            }
        }
    });
});
