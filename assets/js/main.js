(function ($) {


	jQuery(document).ready(function($) {
		//slider-active
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
		//masonary
		$('.product-list').masonry({
			// options
		});

		//testimonial-slides-active
		$('.testimonial-slides-active').owlCarousel({
			loop:true,
			nav:false,
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

		$('.brand-slides-active').owlCarousel({
			loop:true,
			nav:false,
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

		$(".manu-trigger").on("click", function() {
			$(".off-canvar-manu, .off-canvar-ovarlay").addClass("active");
			return false;
		});
		$(".manu-closs, .off-canvar-ovarlay").on("click", function() {
			$(".off-canvar-manu, .off-canvar-ovarlay").removeClass("active");
		});
	
	})
})(jQuery);