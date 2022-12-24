$( document ).ready(function() {
	const header = $(".header");
	const headerBody = $(".menu__list");
	const iconMenu = $(".menu__burger");
	const logo = document.querySelector(".header__logo");
//---------------------------------
//Прокрутка до елемента
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight - 70;
			$('.menu__burger,.menu__list').removeClass("_active");
			$('body').removeClass("_lock");
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
/*-------------------*/
var $window = $(window),
lastScrollTop = 0;

function onScroll (e) {
	var top = $window.scrollTop();
	if (lastScrollTop > top) {
		header.removeClass("_scrolled");
	} else if (lastScrollTop < top) {
		header.addClass("_scrolled");
	}
	lastScrollTop = top;
}
$window.on('scroll', onScroll);


//Меню бургер
if(iconMenu) {
	iconMenu.click(function(event) {
		$('body').toggleClass("_lock");
		iconMenu.toggleClass("_active");
		headerBody.toggleClass("_active");
		headerList.toggleClass("_active");
	});
}
// // -------------------------------------------------------
logo.addEventListener("click", function (e) {
	window.scroll({
		left: 0,
		top: 0,
		behavior: "smooth"
	})
	e.preventDefault();
});
});
// // -------------------------------------------------------
$(window).scroll(function(event) {
	var
	cPos = $('.read-two-section').offset().top,
	topWindow = window.pageYOffset;
	if (topWindow > cPos - 300) {
		$('.read-two-section').addClass('show');
	}	
});




