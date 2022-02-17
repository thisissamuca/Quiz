$(document).ready(() => {

    $('.resposta').click(function () {

        if ($('.quiz').attr('data-status') != 'travado') {

            resetaBotoes ()

            $(this).addClass('selecionada')
    
        }

    });

})

