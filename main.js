$(document).ready(function(){

    $(".prev").click(function(){
        prevImage();
    });

    $(".next").click(function(){
        nextImage();
    });

    function nextImage() {
        //memorizzare in una variabile l'immagine attiva
        var activeImage = $('.images img.active');

        //togliera la classe
        activeImage.removeClass('active');

        //mettere la classe

        activeImage.next().addClass('active');
            
    };










});
