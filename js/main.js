// Настройки верхнего слайдера (JQUERY)
$(document).ready(function(){
    const headerSlider = $(".owl-carousel");
    headerSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false, 
        smartSpeed: 2000
    });
});

$('.customNextBtn').click(function() {
    headerSlider.trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    headerSlider.trigger('prev.owl.carousel', [300]);
})

