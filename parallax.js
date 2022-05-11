$(document).ready(
    function () {
        $(window).scroll(
            function () {
                efecto_parallax($('seccion0'), 0.8);
                efecto_parallax($('seccion1'), 0.8);
                efecto_parallax($('seccion2'), 0.8);
                efecto_parallax($('seccion3'), 0.8);
            }
        );
    }

);

function efecto_parallax(div, speed) {
    var diff = $_(window).scrolltop() - div.offset().top;
    var pos_y = -(diff * speed);
    var coordenadas = '0' + pos_y + 'px';
    div.css({ 'background-position': coordenadas});

}