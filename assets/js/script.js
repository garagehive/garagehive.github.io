jQuery(function($){
	$( document ).ready(function() {
		$('table').wrap('<div class="table-inner-wrapper"></div>');
		$('.table-inner-wrapper').wrap('<div class="table-wrapper"></div>');
		$('.sidebar ul.nav div.nav').parent().addClass('sub-menu');

		$('.sidebar ul.nav .sub-menu > a').on('click', function(e) {
			e.preventDefault();
			if ($(this).parent().hasClass('opened')) {
				$(this).parent().removeClass('opened');
			} else {
				$('.sidebar ul.nav .sub-menu').removeClass('opened');
				$(this).parent().addClass('opened');
			}
		});

		$('.navbar .col-btn-box').on('click', function(e){
			e.preventDefault();
			toggleMobileMenu();
		});


		$('.left-sidebar .sidebar-opener').on('click', function(e){
			e.preventDefault();
			toggleMobileMenu('sidebar-opened');
		});
		$('.left-sidebar .sidebar-toggle-btn').on('click', function(e){
			e.preventDefault();
			toggleMobileMenu('sidebar-opened');
		});

		function openPopUp() {
 			const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
 			const body = document.body;
 			body.style.position = 'fixed';
 			body.style.top = `-${scrollY}`;
 		}
 		function closePopUp() {
 			const body = document.body;
 			const scrollY = body.style.top;
 			body.style.position = '';
 			body.style.top = '';
 			window.scrollTo(0, parseInt(scrollY || '0') * -1);
 		}
		function toggleMobileMenu(classToToggle = 'top-navs-opened') {
			if($('body').hasClass(classToToggle)) {
				$('body').removeClass(classToToggle);
				closePopUp();
			} else {
				$('body').addClass(classToToggle);
				openPopUp();
			}
		}
	});
});
