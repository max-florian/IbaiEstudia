let imgSettings = document.getElementById('imgSettings');
let imgLinkedin = document.getElementById('imgLinkedin');
let imgTwitch = document.getElementById('imgTwitch');
let aSourceCode = document.getElementById('aSourceCode');
let btnModo = document.getElementById("btnModo");

// Funcion para asignarle el valor del modoEstudio almacenado en memoria al toggle al iniciar la extensión
chrome.storage.sync.get('modoestudio', function(data) {
    btnModo.checked = data.modoestudio;
});

imgSettings.onclick = function() {
    chrome.tabs.create({url: './manage_pages.html', active: false});
};

imgLinkedin.onclick = function() {
    chrome.tabs.create({url: 'https://www.linkedin.com/in/max-florian', active: false});
};

imgTwitch.onclick = function() {
    chrome.tabs.create({url: 'https://www.twitch.tv/k7droid', active: false});
};

aSourceCode.onclick = function() {
    chrome.tabs.create({url: 'https://github.com/max-florian/IbaiEstudia', active: false});
};

//Funcion para almacenar en memoria el valor/estado del modoEstudio
btnModo.onchange = function(){
    var activo = btnModo.checked;
    chrome.storage.sync.set({'modoestudio': activo}, function() {
        console.log("Modo Estudio: "+activo);
    });
    
};

