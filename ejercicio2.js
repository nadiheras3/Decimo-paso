document.addEventListener() {
    var tabla = document.getElementById('tabla')
    var Agregar = document.getElementById('Agregar');
    var Reset = document.getElementById('Reset');
    var Guardar = document.getElementById('Guardar');
    var selectInput = document.getElementById('selectInput');
    var initialTableState = [];

    // Al cargar la página, almacenar el estado inicial de la tabla
    storeTableState();

    Agregar.addEventListener('click', function() {
        Agregar();
});
