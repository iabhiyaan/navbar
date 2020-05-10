jQuery("button.scroltop").on("click", function() {
	jQuery("html, body").animate(
		{
			scrollTop: 0
		},
		100
	);
	return false;
});

jQuery(".menu-btn").on("click", function() {
	jQuery(".full-menu").addClass("width100");
	jQuery(".page-wraper, .nav_items").css("margin-left", "80px");
	jQuery(" .header_logos").css("margin-left", "40px");
	jQuery("body").addClass("ovh");
});
jQuery(".full-menu-close").on("click", function() {
	// jQuery(".full-menu").fadeToggle(500);
	jQuery(".full-menu").removeClass("width100");
	jQuery(".header_logos").css("margin-left", "0");
	jQuery("body").removeClass("ovh");
});

jQuery(window).on("scroll", function() {
	var scroll = jQuery(window).scrollTop();
	// console.log(scroll);
	if (scroll > 142) {
		$(".top_header").addClass("header_fixed").addClass("mt-0");
		$(".scrolling").removeClass("d-none");
	} else {
		$(".top_header").removeClass("header_fixed").removeClass("mt-0");
		$(".scrolling").addClass("d-none");
	}
	if (scroll > 139) {
		jQuery("button.scroltop").fadeIn();
	} else {
		jQuery("button.scroltop").fadeOut();
	}
});

$(document).ready(function() {
	var mobileWidth = 992;
	var navcollapse = $(".navbar-nav li.drop_menu");

	$(window).on("resize", function() {
		navcollapse.children("ul").hide();
	});

	navcollapse.hover(function() {
		if ($(window).innerWidth() >= mobileWidth) {
			$(this).children("ul").stop(true, false, true).slideToggle(300);
		}
	});
	// navcollapse.click(function(){
	// 	if($(window).innerWidth() >= mobileWidth){
	//       	$(this).children('ul').stop(true, false, true).slideToggle(300);
	//     }
	// })
	$(".navbar-nav li.drop_menu").click(function() {
		$(".navbar-nav li.drop_menu").each(function() {
			$(this).removeClass("active_menu");
		});
		$(this).addClass("active_menu");
		if ($(window).innerWidth() <= mobileWidth) {
			$(this).children("ul").slideToggle(300);
		}
	});

	$(".course_tab  .nav-item").click(function() {
		$(".course_tab  .nav-item").each(function() {
			$(this).removeClass("active_menu");
		});
		$(this).addClass("active_menu");
	});
});
