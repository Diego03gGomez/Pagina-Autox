$(document).ready(function () {




    $(".icono_menu").click(function (e) { 
        e.preventDefault();
        $(".barra_nav").slideToggle(900);
        
    });
    



$(".cont_texto").hide();




$(".card").hover(function () {
        // over

     $(this).find(".cont_texto").fadeIn();

        
    }, function () {
        // out
     $(this).find(".cont_texto").fadeOut();
    }
);




});