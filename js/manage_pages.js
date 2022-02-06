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
        accion.innerHTML = '<a name="btnGuardar" style="visibility:hidden;" class="btn btn-success" ><i class="bi bi-check-lg"></i></a> <a name="btnModificar" class="btn btn-outline-secondary"><i class="bi bi-wrench-adjustable"></i></a> <a name="btnEliminar" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></a>'
        //console.log(accion.childNodes);
        // OnClick event del boton de modificar:
        accion.childNodes[2].onclick = function(){
            modificar(accion.parentNode.rowIndex-1);
        }

        // OnClick event del boton de eliminar:
        accion.childNodes[4].onclick = function(){
            eliminar(accion.parentNode.rowIndex-1);
        }

        // OnClick event del boton de guardar:
        accion.childNodes[0].onclick = function(){
            // Se obtiene el valor del input de la celda de la URL
            const input_video = url.childNodes[0].value;
            guardar(input_video,accion.parentNode.rowIndex-1);
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
    const table = document.getElementById("pagestable");
    const row = table.childNodes[1].childNodes[indice+2];
    const btnModificar = row.childNodes[3].childNodes[2];
    const btnGuardar = row.childNodes[3].childNodes[0];
    const videocell = row.childNodes[1];
    
    const videourl= videocell.innerHTML;
    videocell.innerHTML='<input type="text" id="inputvideo" value='+videourl+'>';

    btnModificar.style.visibility='hidden';
    btnGuardar.style.visibility='visible';
}

function guardar(videourl,indice){
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios[indice] = videourl;
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios}, function() {
        });
    });
    location.reload();
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

