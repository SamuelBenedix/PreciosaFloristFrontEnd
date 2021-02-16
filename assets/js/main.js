(function ($) {
	"use strict";
	/*[ Load page ]
    ===========================================================*/
	$(".animsition").animsition({
		inClass: "fade-in",
		outClass: "fade-out",
		inDuration: 1500,
		outDuration: 800,
		linkElement: ".animsition-link",
		loading: true,
		loadingParentElement: "html",
		loadingClass: "animsition-loading-1",
		loadingInner: '<div class="loader05"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ["animation-duration", "-webkit-animation-duration"],
		overlay: false,
		overlayClass: "animsition-overlay-slide",
		overlayParentElement: "html",
		transition: function (url) {
			window.location.href = url;
		},
	});
	$(".js-select2").each(function() {
		$(this).select2({
			minimumResultsForSearch: 20,
			dropdownParent: $(this).next('.dropDownSelect2')
		});
	})

	$('.js-pscroll').each(function() {
		$(this).css('position', 'relative');
		$(this).css('overflow', 'hidden');
		var ps = new PerfectScrollbar(this, {
			wheelSpeed: 1,
			scrollingThreshold: 1000,
			wheelPropagation: false,
		});

		$(window).on('resize', function() {
			ps.update();
		})
	});

	$('.gallery-lb').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			mainClass: 'mfp-fade'
		});
	});

	/*==================================================================
    [ +/- num product ]*/
	$(".btn-num-product-down").on("click", function () {
		var numProduct = Number($(this).next().val());
		if (numProduct > 0)
			$(this)
				.next()
				.val(numProduct - 1);
	});

	$(".btn-num-product-up").on("click", function () {
		var numProduct = Number($(this).prev().val());
		$(this)
			.prev()
			.val(numProduct + 1);
	});

	/*==================================================================
    [ Cart ]*/
	$(".js-show-cart").on("click", function () {
		$(".js-panel-cart").addClass("show-header-cart");
	});

	$(".js-hide-cart").on("click", function () {
		$(".js-panel-cart").removeClass("show-header-cart");
	});


	/*[ Back to top ]
    ===========================================================*/
	var windowH = $(window).height() / 2;

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > windowH) {
			$("#myBtn").css("display", "flex");
		} else {
			$("#myBtn").css("display", "none");
		}
	});

	$("#myBtn").on("click", function () {
		$("html, body").animate({ scrollTop: 0 }, 300);
	});


		
	$("#search_input_box").hide();
	$("#search").on("click", function () {
		$("#search_input_box").slideToggle();
		$("#search_input").focus();
	});
	$("#close_search").on("click", function () {
		$("#search_input_box").slideUp(500);
	});

	$("#show-cart").on("click", function () {
		$(".panel-cart").addClass("show-header-cart");
	});

	$("#hide-cart").on("click", function () {
		$(".panel-cart").removeClass("show-header-cart");
	});

	$('.megadropdown').on("click",function () {
		if($(this).children('.dropdown-mega-area').css("display") == "none" && $(window).width() < 970 ){
			$(this).children('.dropdown-mega-area').css("display","block")
			$(".nav-links").css("overflow","scroll")
		}else {
			if($(window).width() < 970){
				$(this).children('.dropdown-mega-area').css("display","none")
				$(".nav-links").css("overflow","hidden")
			}	
		}
	})

	$("#show-sidebar").on("click", function () {
		$(".link-wrapper").addClass("show-sidebar");
	});

	$("#close-sidebar").on("click", function () {
		$(".link-wrapper").removeClass("show-sidebar");
	});




	$(window).resize(function () {
		if ($(window).width() >= 992) {
			if ($(".menu-mobile").css("display") == "block") {
				$(".menu-mobile").css("display", "none");
				$(".btn-show-menu-mobile").toggleClass("is-active");
			}

			$(".sub-menu-m").each(function () {
				if ($(this).css("display") == "block") {
					console.log("hello");
					$(this).css("display", "none");
					$(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
				}
			});
		}
	});

	$(".select_option_dropdown").hide();
	$(".select_option_list").click(function () {
		$(this)
			.parent(".select_option")
			.children(".select_option_dropdown")
			.slideToggle("100");
		$(this).find(".right").toggleClass("fas fa-caret-down, fas fa-caret-up");
	});
	
})(jQuery);
