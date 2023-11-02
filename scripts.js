
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidadTickets = document.getElementById('cantidad');
let seleccionarCategoria = document.getElementById('categoria');

nombre.addEventListener("blur", function(e){
    let campoNombre = e.target;
    let campoVacio = e.target.value;
    if (campoVacio.length == 0){
        campoNombre.classList.add('sombraError');
        campoNombre.nextElementSibling.classList.add('error');
        campoNombre.nextElementSibling.innerText = "Ingrese Nombre";
    }else {
        campoNombre.classList.remove('sombraError');
        campoNombre.nextElementSibling.classList.remove('error');
        campoNombre.nextElementSibling.innerText = "";
    }
});
apellido.addEventListener("blur", function(e){
    let campoApellido = e.target;
    let apellidoVacio = e.target.value;
    if (apellidoVacio === ""){
        campoApellido.classList.add('sombraError');
        campoApellido.nextElementSibling.classList.add('error');
        campoApellido.nextElementSibling.innerText = "Ingrese Apellido";
    }else {
        campoApellido.classList.remove('sombraError');
        campoApellido.nextElementSibling.classList.remove('error');
        campoApellido.nextElementSibling.innerText = "";
    }
});
correo.addEventListener("blur", function(e){
    let campoCorreo = e.target;
    let correoVacio = e.target.value;
    if (correoVacio.length === 0){
        campoCorreo.classList.add('sombraError');
        campoCorreo.nextElementSibling.classList.add('error');
        campoCorreo.nextElementSibling.innerText = "Ingrese Email";
    } else {
        campoCorreo.classList.remove('sombraError');
        campoCorreo.nextElementSibling.classList.remove('error');
        campoCorreo.nextElementSibling.innerText = "";
    }
});

cantidadTickets.addEventListener("blur", function(e) {
    e.preventDefault();
    let totalTickets = e.target.value;
    let compraTickets = totalTickets * 200;
    console.log("Total sin Descuento: ", compraTickets);
    seleccionarCategoria.addEventListener("click", function (x) {
        let opcionSeleccinada = x.target.value;
        console.log("Categoria seleccionada: " + opcionSeleccinada);
        if (opcionSeleccinada == "Estudiante") {
            let totalPagar = document.getElementById('total').value = descuento(compraTickets, 20);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
            console.log("Total a Pagar(80% Desc): ", totalPagar);
        }

        if (opcionSeleccinada == "Trainee") {
            let totalPagar = document.getElementById('total').value = descuento(compraTickets, 50);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
            console.log("Total a Pagar (50% Desc): ", totalPagar);
        }

        if (opcionSeleccinada == "Junior") {
            let totalPagar = document.getElementById('total').value = descuento(compraTickets, 85);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
            console.log("Total a Pagar(15% Desc): ", document.getElementById('total').value);
        }
        btnBorrar();
        btnResumen();

    });
});

function descuento(num, porc) {
    return (num * porc) / 100;
}

function btnBorrar() {
    let btnBorrar = document.getElementById('btn-borrar');
    btnBorrar.addEventListener("DOMContentLoaded", function() {
       let formulario = document.getElementById('formulario');
       formulario.addEventListener("click", function(){
            formulario.onreset(); 
       });
    });
}

function btnResumen(){
    let btnResumen = document.getElementById('btn-resumen');
    btnResumen.addEventListener("click", function() {

        let aPagar = document.getElementById('total').value;
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        alert("Datos :..  " + nombre + " " + apellido + " ||  Total a Pagar :....   " + aPagar);
    });
}

