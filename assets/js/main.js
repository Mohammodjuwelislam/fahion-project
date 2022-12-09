(function ($) {


	jQuery(document).ready(function($) {
		$('.slider-active').owlCarousel({
			loop:true,
			nav:true,
			navText:['<img src="assets/img/left-arrow.png" alt="">','<img src="assets/img/right-arrow.png" alt="">'],
			dots:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
	
	})
})(jQuery);