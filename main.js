$(document).ready(function(){

    $(".prev").click(function(){
        prevImage();
    });

    $(".next").click(function(){
        nextImage();
    });

    $('.nav i').click(function(){
        //trovo la posizione del pallino cliccato
        var posizione = $(this).index();
        //rimuovere la classe
        $('.images img').removeClass('active');
        //aggiungere la classe active all'elemento trovato con
        //l'indice trovato attraverso il metodo eq()
        $('.images img').eq(posizione).addClass('active');

        //rimuovere la classe a tutti i pallini
        $('.nav i').removeClass('active');
        //dare la classe al pallino giusto
        $('.nav i').eq(posizione).addClass('active');
    });


    //******FUNZIONI******//

    //funzione next//

    function nextImage() {
        //memorizzare in una variabile l'immagine attiva
        var activeImage = $('.images img.active');
        var cerchio = $('.nav i.active');

        //togliera la classe
        activeImage.removeClass('active');
        cerchio.removeClass('active');

        //mettere la classe

        activeImage.next().addClass('active');

        if (activeImage.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next().addClass('active')
            cerchio.next().addClass('active')
        }
    };

    //funzione prev//

    function prevImage() {
        var activeImage = $('.images img.active');
        var cerchio = $('.nav i.active');

        activeImage.removeClass('active');
        cerchio.removeClass('active');


        if (activeImage.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else {
            activeImage.prev().addClass('active');
            cerchio.prev().addClass('active');
        }
    };



});
