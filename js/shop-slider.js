// Настройки нижнего слайдера (JQUERY)
$(document).ready(function(){
    const shopSlider = $("#shopSlider");

    shopSlider.owlCarousel({
        items: 3,
        loop: true, // зацикливание
        dots: false, 
        margin: 2, 
        smartSpeed: 500
    });



    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    });
    
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    });








    // headerSlider.on('initialized.owl.carousel', function(event){
    //     $('.slide-controls-number__active').text(event.item.index + 1);
    //     $('.slide-controls-number__total').text(event.item.count);
    // });

    // headerSlider.owlCarousel({
    //     items: 1,
    //     // loop: true, // зацикливание
    //     dots: false, 
    //     smartSpeed: 2000
    // });
    // $('#headerSliderLeft').click(function() {
    //     headerSlider.trigger('prev.owl.carousel');
    // });
    
    // $('#headerSliderRight').click(function() {
    //     headerSlider.trigger('next.owl.carousel');
    // });
    // headerSlider.on('changed.owl.carousel', function(event){
    //     $('.slide-controls-number__active').text(event.item.index + 1);
    //     $('.slide-controls-number__total').text(event.item.count);
    // });
});