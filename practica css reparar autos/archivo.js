$(document).ready(function () {
    

$(".icono_menu").click(function (e) { 
    e.preventDefault();
   $(".barra_nav").slideToggle(900);
    
});

$(".texto").hide();


$(".imagen_tarjeta").hover(function () {
        // over
        
$(this).find(".texto").fadeIn();

    }, function () {
        // out

        $(this).find(".texto").fadeOut();

    }
);




$(".texto2").hide();



$(".div_reparacion").hover(function () {
        // over
        $(this).find(".texto2").fadeIn(600);
    }, function () {
        // out
        $(this).find(".texto2").fadeOut(600);
    }
);





});