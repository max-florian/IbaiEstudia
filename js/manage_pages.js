
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
        video.innerHTML = 'Videin';
        let accion = row.insertCell(3);
        accion.innerHTML = '<button type="button" class="btn btn-outline-secondary"><i class="bi bi-wrench-adjustable"></i></button> <button type="button" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></button>'
    });
});