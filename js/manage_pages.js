const sitioform = document.getElementById('sitioform');

sitioform.addEventListener('submit',()=>{
    crear(sitioform.elements['inputUrl'].value);
});

chrome.storage.sync.get('sitiosbloqueados', function(data) {
    let cont = 0;
    const table = document.getElementById("pagestable");
    data.sitiosbloqueados.forEach( item => {
        cont++;
        let row = table.insertRow();
        let numero = row.insertCell(0);
        numero.innerHTML = cont;
        let url = row.insertCell(1);
        url.innerHTML = item;
        let video = row.insertCell(2);
        video.innerHTML = 'Ibai 1';
        let accion = row.insertCell(3);
        accion.innerHTML = '<a href="#" name="btnModificar" class="btn btn-outline-secondary"><i class="bi bi-wrench-adjustable"></i></a> <a href="#" name="btnEliminar" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></a>'

        // OnClick event del boton de modificar:
        accion.childNodes[0].onclick = function(){
            modificar(accion.parentNode.rowIndex-1);
        }

        // OnClick event del boton de eliminar:
        accion.childNodes[2].onclick = function(){
            eliminar(accion.parentNode.rowIndex-1);
        }

        
    });

});



function crear(videourl){
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios.push(videourl);
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios}, function() {
        });
    });
}

function modificar(indice){

}

function eliminar(indice){
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios.splice(indice,1);
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios}, function() {
        });
    });
    
    location.reload();
}

