$(function() {

	$(".toggleMobMenu").on("click",function(){
		$(".header__mobMenuInner").stop().slideToggle();
	});

	$(window).resize(function() {
	let windowWidth=$(window).width();

	if (windowWidth>=768) {
		$(".topMenu").appendTo(".header__topInner");
		$(".search").appendTo(".header__topInner");
		$(".mainMenu").appendTo(".header__bottomLeft");
		$(".basket").appendTo(".header__bottomInner");
	}	
	})
	
});



