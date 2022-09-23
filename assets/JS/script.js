$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    
    $('#btn-contactar').click(function(){
        alert("Tu información ha sido enviada correctamente.")
    });
    $(".containerparrafos").click(function(){
        $(".containerparrafos").slideToggle(1500); 
        $(".containerparrafos").toggle('show');
    });
    $(".esconder-mostrarmontaña").click(function(){
        $(".esconder-mostrarmontaña").slideToggle(1500); 
        $(".esconder-mostrarmontaña").toggle('show');
    });
    $(".esconder-mostrarruta").click(function(){
        $(".esconder-mostrarruta").slideToggle(1500); 
        $(".esconder-mostrarruta").toggle('show');
    });
     })
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            $('html,body').animate({
                'scrollTop': $($(this).attr('href')).offset().top+'px'
            }, 5000);
            
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
