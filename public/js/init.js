jQuery(document).ready(function($) {
	/*----------------------------------------------------*/
	/* Smooth Scrolling
------------------------------------------------------ */

	$('.smoothscroll').on('click', function(e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			scrollTop: $target.offset().top
		}, 600, 'swing', function() {
			window.location.hash = target;
		});
	});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
------------------------------------------------------*/
	$('.vertical-menu .nav-link').on('click', function() {
		$('.vertical-menu').find('.active').removeClass('active');
		$(this).addClass('active');
	});

	/* Reveal Side navigation */
	$('.menu-icon button').on('click', function() {
		$('header.desktop-header, main.content, header.mobile-header').toggleClass('open');
	});

	$('section').on('click', function() {
		$('header.desktop-header, main.content, header.mobile-header').removeClass('open');
	});

	$('.vertical-menu li a').on('click', function() {
		$('header.desktop-header, main.content, header.mobile-header').removeClass('open');
	});
});
