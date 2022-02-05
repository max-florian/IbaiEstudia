
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
        accion.innerHTML = '<a name="btnModificar" class="btn btn-outline-secondary"><i class="bi bi-wrench-adjustable"></i></a> <a name="btnEliminar" class="btn btn-outline-danger"><i class="bi bi-trash-fill"></i></a>'

        // OnClick event del boton de modificar:
        accion.childNodes[0].onclick = function(){
            alert("indice: "+(accion.parentNode.rowIndex-1))
        }

        // OnClick event del boton de eliminar:
        accion.childNodes[2].onclick = function(){
            alert("indice: "+(accion.parentNode.rowIndex-1))
        }

        
    });

    
    

});




