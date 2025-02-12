const sitioform = document.getElementById('sitioform');

sitioform.addEventListener('submit', () => {
    crear(sitioform.elements['inputUrl'].value);
});

chrome.storage.sync.get('sitiosbloqueados', function(data) {
    let cont = 0;
    const table = document.getElementById("pagestable");
    data.sitiosbloqueados.forEach(item => {
        cont++;
        let row = table.insertRow();
        let numero = row.insertCell(0);
        numero.style.verticalAlign = 'middle';
        numero.innerHTML = cont;
        let url = row.insertCell(1);
        url.style.verticalAlign = 'middle';
        url.innerHTML = item;
        let video = row.insertCell(2);
        video.style.verticalAlign = 'middle';
        video.innerHTML = 'Ibai 1';
        let accion = row.insertCell(3);
        accion.style.verticalAlign = 'middle';
        accion.innerHTML = '<button name="btnGuardar" style="display:none;" class="btn btn-success" ><i class="bi bi-check-lg"></i></button> <button name="btnModificar" class="btn btn-outline-secondary"><i class="bi bi-wrench-adjustable"></i></button> <button name="btnEliminar" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></button>';

        // OnClick event for the modify button:
        accion.childNodes[2].onclick = function() {
            modificar(accion.parentNode.rowIndex - 1);
        };

        // OnClick event for the delete button:
        accion.childNodes[4].onclick = function() {
            eliminar(accion.parentNode.rowIndex - 1);
        };

        // OnClick event for the save button:
        accion.childNodes[0].onclick = function() {
            // Retrieve the value of the URL input cell
            const input_video = url.childNodes[0].value;
            guardar(input_video, accion.parentNode.rowIndex - 1);
        };
        
    });
});

function crear(videourl) {
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios.push(videourl);
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios});
    });
}

function modificar(indice) {
    const table = document.getElementById("pagestable");
    const row = table.rows[indice+1];
    const btnModificar = row.cells[3].childNodes[2];
    const btnGuardar = row.cells[3].childNodes[0];
    const videocell = row.cells[1];
    
    const videourl = videocell.innerHTML;
    videocell.innerHTML = `<input type="text" id="inputvideo" value="${videourl}">`;

    btnModificar.style.display = 'none';
    btnGuardar.style.display = 'inline-block';
}

function guardar(videourl, indice) {
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios[indice] = videourl;
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios});
    });
    location.reload();
}

function eliminar(indice) {
    chrome.storage.sync.get('sitiosbloqueados', function(data) {
        let nuevossitios = data.sitiosbloqueados;
        nuevossitios.splice(indice, 1);
        chrome.storage.sync.set({'sitiosbloqueados': nuevossitios});
    });
    location.reload();
}
