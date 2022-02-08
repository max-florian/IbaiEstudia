function coincidencia(sitio,sitios){
    for(let i=0;i<sitios.length;i++){
        let regularexp = new RegExp(sitios[i]+".*");
        if(regularexp.test(sitio)){
            return true;
        }
    }
    return false;

}

chrome.runtime.onInstalled.addListener( function(){
    let sitiosdefault = [
        'https:\/\/www\.facebook\.com\/',
        'https:\/\/www\.instagram\.com\/',
        'https:\/\/twitter\.com\/',
        'https:\/\/www\.youtube\.com\/',
        'https:\/\/www\.tiktok\.com\/',
        'https:\/\/www\.twitch.tv\/'

    ];
    chrome.storage.sync.set({'sitiosbloqueados': sitiosdefault}, function() {
    });
    alert("Empezar a usar la extensión: \n- Activa el modo estudio \n\nAdministrar los sitios bloqueados: \n- Presiona el icono de ajustes");
});

chrome.tabs.onActivated.addListener( function(activeInfo){
    chrome.storage.sync.get(['modoestudio','sitiosbloqueados'], function(data) {
        if(data.modoestudio){
            chrome.tabs.get(activeInfo.tabId, function(tab){
                y = coincidencia(tab.url,data.sitiosbloqueados);
                if(y){
                    chrome.tabs.update({ url: "chrome://bookmarks" })
                    chrome.tabs.update({ url: "html/video.html" })
                }
            });
        }
    });
});

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    chrome.storage.sync.get(['modoestudio','sitiosbloqueados'], function(data) {
        if(data.modoestudio){
            if (tab.active && change.url) {
                y = coincidencia(change.url,data.sitiosbloqueados);
                if(y){
                    chrome.tabs.update({ url: "chrome://bookmarks" })
                    chrome.tabs.update({ url: "html/video.html" })
                }           
            }
        }
    });
});

