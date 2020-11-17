let imgTwitter = document.getElementById('imgTwitter');
let aSourceCode = document.getElementById('aSourceCode');
let btnModo = document.getElementById("btnModo");

imgTwitter.onclick = function() {
    chrome.tabs.create({url: 'https://twitter.com/Max7Droid', active: false});
};

aSourceCode.onclick = function() {
    chrome.tabs.create({url: 'https://github.com/K7Droid/IbaiEstudia', active: false});
};

btnModo.onchange = function(){
    var activo = btnModo.checked;
    chrome.storage.sync.set({'modoestudio': activo}, function() {
        //alert("Modo Estudio: "+activo);
    });
    
};