$(document).ready(function() {

/************Sliders**************/
    var prevArrow ='<a href="#" class="results__nav-prev">\n' +
        '                        <svg\n' +
        '                                xmlns="http://www.w3.org/2000/svg"\n' +
        '                                width="24px" height="22px">\n' +
        '                            <path fill-rule="evenodd"  fill="rgb(198, 207, 210)"\n' +
        '                                  d="M0.949,10.999 C0.949,11.818 1.616,12.485 2.437,12.485 L18.575,12.485 L12.189,18.861 C11.610,19.441 11.610,20.383 12.189,20.963 C12.769,21.542 13.714,21.542 14.293,20.963 L23.219,12.048 C23.222,12.045 23.222,12.039 23.228,12.036 C23.359,11.902 23.469,11.741 23.541,11.566 C23.692,11.205 23.692,10.793 23.541,10.432 C23.466,10.250 23.356,10.088 23.219,9.950 L14.293,1.035 C13.714,0.456 12.769,0.456 12.189,1.035 C11.610,1.614 11.610,2.557 12.189,3.136 L18.575,9.513 L2.437,9.513 C1.616,9.513 0.949,10.179 0.949,10.999 Z"/>\n' +
        '                        </svg>\n' +
        '                    </a>',
        nextArrow = '<a href="#" class="results__nav-next">\n' +
            '                        <svg\n' +
            '                                xmlns="http://www.w3.org/2000/svg"\n' +
            '                                width="24px" height="22px">\n' +
            '                            <path fill-rule="evenodd"  fill="rgb(198, 207, 210)"\n' +
            '                                  d="M0.949,10.999 C0.949,11.818 1.616,12.485 2.437,12.485 L18.575,12.485 L12.189,18.861 C11.610,19.441 11.610,20.383 12.189,20.963 C12.769,21.542 13.714,21.542 14.293,20.963 L23.219,12.048 C23.222,12.045 23.222,12.039 23.228,12.036 C23.359,11.902 23.469,11.741 23.541,11.566 C23.692,11.205 23.692,10.793 23.541,10.432 C23.466,10.250 23.356,10.088 23.219,9.950 L14.293,1.035 C13.714,0.456 12.769,0.456 12.189,1.035 C11.610,1.614 11.610,2.557 12.189,3.136 L18.575,9.513 L2.437,9.513 C1.616,9.513 0.949,10.179 0.949,10.999 Z"/>\n' +
            '                        </svg>\n' +
            '                    </a>';

    if($('#js-result-slider')) {
        $('#js-result-slider').slick({
            infinite: true,
            arrows: true,
            cssEase: 'linear',
            dots: true,
            appendArrows: $('.results__nav'),
            prevArrow: prevArrow,
            nextArrow: nextArrow
        });
    }
    if($('#js-testimonials-slider')) {
        $('#js-testimonials-slider').slick({
            infinite: true,
            arrows: false,
            cssEase: 'linear',
            dots: true,
        });
    }
    /************END Sliders****************/

    /*************Ingredients***************/
    if ($('.ingredients__table')) {
        $('.ingredients__title').on('click', function (e) {
            e.preventDefault();
            var active = $(this),
                // ingidient = active.attr('href').slice(1),
                description = active.siblings(),
                imgSrc = description.children('.description__pict').find('img').attr('src'),
                name = active.children('.ingredients__name').html(),
                value = active.children('.ingredients__value').html(),
                text = description.children('.description__text').html();

            $('.ingredients__title').removeClass('active');
            active.addClass('active');

            $('#ingredient_name').html(name);
            $('#ingredient_value').html(value);
            $('#ingredient_text').html(text);

            console.log(name);
        })
    }
});