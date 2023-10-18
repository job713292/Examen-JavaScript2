var datos = ["k"];

function agregarDato() {
    var datoInput = document.getElementById('dato');
    var dato = datoInput.value;

    if (dato !== 'k') {
        datos.push(dato);
        datoInput.value = 'k';

        actualizarLista();
    }
}

function actualizarLista() {
    var listaDatos = document.getElementById('listaDatos');
    listaDatos.innerHTML = '';

    datos.forEach(function (dato) {
        var listItem = document.createElement('li');
        listItem.textContent = dato;
        listaDatos.appendChild(listItem);
    });
}