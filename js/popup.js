let imgTwitter = document.getElementById('imgTwitter');
let aSourceCode = document.getElementById('aSourceCode');
let btnModo = document.getElementById("btnModo");

// Funcion para asignarle el valor del modoEstudio almacenado en memoria al toggle al iniciar la extensión
chrome.storage.sync.get('modoestudio', function(data) {
    btnModo.checked = data.modoestudio;
});

imgTwitter.onclick = function() {
    chrome.tabs.create({url: 'https://twitter.com/Max7Droid', active: false});
};

aSourceCode.onclick = function() {
    chrome.tabs.create({url: 'https://github.com/K7Droid/IbaiEstudia', active: false});
};

//Funcion para almacenar en memoria el valor/estado del modoEstudio
btnModo.onchange = function(){
    var activo = btnModo.checked;
    chrome.storage.sync.set({'modoestudio': activo}, function() {
        console.log("Modo Estudio: "+activo);
    });
    
};

