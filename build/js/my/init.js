$(document).ready(function() {
	$('[data-item="slider"]').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		items:1
	});
	$('[data-mask="phone"]').mask("+7 (999) 999-99-99");
});