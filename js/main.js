$(function() {

	//$(window).resize(function() {
	let windowWidth=$(window).width();

	if (windowWidth>=992) {
		$(".topMenu").appendTo(".header__topInner");
		$(".search").appendTo(".header__topInner");
		$(".mainMenu").appendTo(".header__bottomLeft");
		$(".basket").appendTo(".header__bottomInner");
	//}	
	}//)
	
});

