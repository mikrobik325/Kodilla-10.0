$(function() {
    var carouselList = $('#carousel ul');
    fullCircle();
    var uniqueIntervalId = setInterval(changeSlide, 3500);

    function changeSlide() {
        carouselList.animate({'marginLeft':'-100vw'}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({'marginLeft':0});
        fullCircle();
    }

    $('#angleLeft').click(function() {
        clearInterval(uniqueIntervalId);
        carouselList.css('marginLeft', '-100vw');
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.animate({'marginLeft':'0vw'}, 500);
        fullCircle();
        uniqueIntervalId = setInterval(changeSlide, 3500);
    });

    $('#angleRight').click(function() {
        changeSlide();
        clearInterval(uniqueIntervalId);
        uniqueIntervalId = setInterval(changeSlide, 3500);
    });

    $('.circles').children().click(function() {
        const wantedSlide = $('#' + $(this).attr('data-slide-to'));
        var wantedSlideIndex = $('li').index(wantedSlide);
        clearInterval(uniqueIntervalId);
        for (var i = 0; i < wantedSlideIndex; i++) {
            fullCircle();
            carouselList.animate({'marginLeft':'-100vw'}, 100, moveFirstSlide);
            }
        uniqueIntervalId = setInterval(changeSlide, 3500);
    });

    function fullCircle() {
        $('a').removeClass('active');
        var actualSlide = carouselList.find('li:first').attr('id');
        var currentCircle = $('#circle' + actualSlide);
        var actualCircle = currentCircle.attr('data-slide-to');

        if (actualSlide === actualCircle) {
            currentCircle.addClass('active');
        }
    }
});
