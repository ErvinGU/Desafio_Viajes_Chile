


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



//se aplica desplazamiento suave para saltar entre secciones
$(document).ready(function () {
    $(".nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});


//Enviar Correo y generar mensaje de envío correcto
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });


$('.btn').click(function () {

    alert("Correo enviado correctamente")

})

  //Ocultar información sección destacados

  $("#titulo").click(function () {
    $("#texto").toggle();
});

$("#titulo1").click(function () {
    $("#texto1").toggle();
});


$("#titulo2").click(function () {
    $("#texto2").toggle();
});


$("#titulo3").click(function () {
    $("#texto3").toggle();
});




