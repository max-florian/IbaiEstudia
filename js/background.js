// function coincidencia(sitio,sitios){
//     for(let i=0;i<sitios.length;i++){
//         let regularexp = new RegExp(sitios[i]+".*");
//         if(regularexp.test(sitio)){
//             return true;
//         }
//     }
//     return false;

// }

// chrome.runtime.onInstalled.addListener( function(){
//     let sitiosdefault = [
//         'https:\/\/www\.facebook\.com\/',
//         'https:\/\/www\.instagram\.com\/',
//         'https:\/\/twitter\.com\/',
//         'https:\/\/www\.youtube\.com\/',
//         'https:\/\/www\.tiktok\.com\/',
//         'https:\/\/www\.twitch.tv\/'

//     ];
//     chrome.storage.sync.set({'sitiosbloqueados': sitiosdefault}, function() {
//     });
//     alert("Empezar a usar la extensión: \n- Activa el modo estudio. \n\nAdministrar los sitios bloqueados: \n- Presiona el icono de ajustes.\n\n**IMPORTANTE**\nDependiendo del navegador que utilices es posible que debas reiniciar el navegador luego de agregar una nueva página web para guardar los cambios.");
// });

// chrome.tabs.onActivated.addListener( function(activeInfo){
//     chrome.storage.sync.get(['modoestudio','sitiosbloqueados'], function(data) {
//         if(data.modoestudio){
//             chrome.tabs.get(activeInfo.tabId, function(tab){
//                 y = coincidencia(tab.url,data.sitiosbloqueados);
//                 if(y){
//                     chrome.tabs.update({ url: "chrome://bookmarks" })
//                     chrome.tabs.update({ url: "html/video.html" })
//                 }
//             });
//         }
//     });
// });

// chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//     chrome.storage.sync.get(['modoestudio','sitiosbloqueados'], function(data) {
//         if(data.modoestudio){
//             if (tab.active && change.url) {
//                 y = coincidencia(change.url,data.sitiosbloqueados);
//                 if(y){
//                     chrome.tabs.update({ url: "chrome://bookmarks" })
//                     chrome.tabs.update({ url: "html/video.html" })
//                 }           
//             }
//         }
//     });
// });

function coincidencia(sitio, sitios) {
    return sitios.some(s => new RegExp(s + ".*").test(sitio));
}

chrome.runtime.onInstalled.addListener(() => {
    let sitiosdefault = [
        'https:\/\/www\.facebook\.com\/',
        'https:\/\/www\.instagram\.com\/',
        'https:\/\/twitter\.com\/',
        'https:\/\/www\.youtube\.com\/',
        'https:\/\/www\.tiktok\.com\/',
        'https:\/\/www\.twitch.tv\/'
    ];
    chrome.storage.sync.set({ 'sitiosbloqueados': sitiosdefault });

    chrome.notifications.create({
        type: 'basic',
        iconUrl: '../images/ibai_icon48.png',
        title: 'Comienza a usar la extensión',
        message: 'Activa el modo estudio. \n\nAdministra los sitios bloqueados presionando el icono de ajustes.\n\nIMPORTANTE: Dependiendo del navegador, puede ser necesario reiniciar el navegador después de agregar una nueva página web para guardar los cambios.',
        priority: 2
    });
    
});

function checkAndRedirect(tab) {
    chrome.storage.sync.get(['modoestudio', 'sitiosbloqueados'], function(data) {
        if (data.modoestudio && coincidencia(tab.url, data.sitiosbloqueados)) {
            
            chrome.tabs.update(tab.id, { url: "html/video.html" });
        }
    });
}

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        checkAndRedirect(tab);
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.url) {
        checkAndRedirect(tab);
    }
});


