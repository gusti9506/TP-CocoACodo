console.log("Hola Mundo");
let cantidad = document.getElementById('cantidad');
let select = document.getElementById('categoria');


cantidad.addEventListener("blur", function(e) {
    let cuenta = e.target.value;
    console.log("Total sin Descuento: ", cuenta * 200);
    let compra = cuenta * 200;


    select.addEventListener("click", function (x) {
        let selectedOption = x.target.value;
        console.log("Categoria seleccionada: " + selectedOption);
        if (selectedOption == "Estudiante") {
            let total = document.getElementById('total').value = descuento(compra, 20);
            document.getElementById('total').value = "Total a pagar: $ " + total;
            console.log("Total a Pagar(80% Desc): ", total);
        }

        if (selectedOption == "Trainee") {
            let total = document.getElementById('total').value = descuento(compra, 50);
            document.getElementById('total').value = "Total a pagar: $ " + total;
            console.log("Total a Pagar (50% Desc): ", total);
        }

        if (selectedOption == "Junior") {
            let total = document.getElementById('total').value = descuento(compra, 85);
            document.getElementById('total').value = "Total a pagar: $ " + total;
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
       })
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

