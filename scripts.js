
let cantidadTickets = document.getElementById('cantidad');
let seleccionarCategoria = document.getElementById('categoria');


                

let validarCamposVacios = (e) => {
    let campo = e.target;
    let mensaje = campo.id;
    let campoVacio = e.target.value;
    if ((campoVacio.trim().length === 0) || (cantidadTickets.value < 0)){
        campo.classList.add('sombraError');
        campo.nextElementSibling.classList.add('error');
        campo.nextElementSibling.innerText = 'Debe ingresar ' + mensaje;
    } else {
        campo.classList.remove('sombraError');
        campo.nextElementSibling.classList.remove('error');
        campo.nextElementSibling.innerText = "";
    }
}

let validarEmail = (e) => {
    let mailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let emailVacio = e.target;
    let email = e.target.value;
    if ((!mailRegex.test(email)) || (email.trim().length === 0) || (email.trim().length < 4)){
        emailVacio.classList.add('sombraError');
        emailVacio.nextElementSibling.classList.add('error');
        emailVacio.nextElementSibling.innerText = 'Debe ingresar un Email CORRECTO!!';
    }else {
        emailVacio.classList.remove('sombraError');
        emailVacio.nextElementSibling.classList.remove('error');
        emailVacio.nextElementSibling.innerText = ""; 
    }
}

nombre.addEventListener("blur", validarCamposVacios);
apellido.addEventListener("blur", validarCamposVacios);
cantidad.addEventListener("blur", validarCamposVacios);
correo.addEventListener("blur", validarEmail);


cantidadTickets.addEventListener("blur", function(e) {
    let totalTickets = e.target.value;
    let compraTickets = totalTickets * 200;
    seleccionarCategoria.addEventListener("click", function (x) {
        let opcionSeleccinada = x.target.value;        
        if (opcionSeleccinada == "Estudiante") {          
            let totalPagar = document.getElementById('total').target = descuento(compraTickets, 20);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
        }

        if (opcionSeleccinada == "Trainee") {
            let totalPagar = document.getElementById('total').value = descuento(compraTickets, 50);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
        }

        if (opcionSeleccinada == "Junior") {
            let totalPagar = document.getElementById('total').value = descuento(compraTickets, 85);
            document.getElementById('total').value = "Total a pagar: $ " + totalPagar;
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
    btnBorrar.addEventListener("click", function(e) { 
        e.preventDefault();      
        let formulario = document.getElementById('formulario');
        formulario.reset();
    });
}

function btnResumen(){

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;;
    let aPagar = document.getElementById('total').value;
    let btnResumen = document.getElementById('btn-resumen');   
    btnResumen.addEventListener('click', function(e) {
        //e.preventDefault();

        /*let mensa = document.querySelector('.activo');
        mensa.classList.remove('.activo');*/
        mensa.classList.add('.activo-mensaje');
        
        mensa.innerText = "xxx" + aPagar;
        console.log(mensa);
       //mensa.innerText = "" + aPagar;

    });
}


