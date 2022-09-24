$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        /*mensaje de alerta*/
        $('#btn-contactar').click(function () {
            alert("Tu información ha sido enviada correctamente.")
        });
        /*esconder párrafos*/
        $(".esconder-mostraravion").click(function () {
            $(".esconder-mostraravion").toggle();
        });
        $(".esconder-mostrarmontaña").click(function () {
            $(".esconder-mostrarmontaña").toggle();
        })
        $(".esconder-mostrarruta").click(function () {
            $(".esconder-mostrarruta").toggle();
        });
    });
     })
    /*smooth scroll*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            $('html,body').animate({
                'scrollTop': $($(this).attr('href')).offset().top + 'px'
            }, 5000);


            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
