$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 767) {
            $('.conteudo').addClass('col-10');
            $('.conteudo').removeClass('col-8');
        } else {
            $('.conteudo').removeClass('col-10');
            $('.conteudo').addClass('col-8');
        }
    }

    checkWidth();

    $(window).resize(checkWidth);
});

