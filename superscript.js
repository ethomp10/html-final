$(document).ready(function(){
	// Banner animations
	$(".banner").animate({top: '0px'}, {queue: false, duration: 1000});
	$(".banner").animate({opacity: '1'}, {queue: false, duration: 1000});
	$("h1").animate({letterSpacing: '30px'}, {queue: false, duration: 1000});
	$("h1").animate({paddingLeft: '30px'}, {queue: false, duration: 1000});
	$("h1").animate({opacity: '1'}, {queue: false, duration: 1000});

	// Shows and hides recepies on Food page
	$("#show1").click(function(){
		$("#show1").hide();
		$("#soup").show();
	});
	$("#hide1").click(function(){
		$("#show1").show();
		$("#soup").hide();
	});
	$("#show2").click(function(){
		$("#show2").hide();
		$("#feast").show();
	});
	$("#hide2").click(function(){
		$("#show2").show();
		$("#feast").hide();
	});
	$("#show3").click(function(){
		$("#show3").hide();
		$("#chocolate").show();
	});
	$("#hide3").click(function(){
		$("#show3").show();
		$("#chocolate").hide();
	});

	// Image resize
	$(".gallery img").click(function(){
		if ($(this).width() < 500) {
			$(this).animate({width: '100%'});
		} else {
			$(this).animate({width: '32.8%'});
		};
	});
});
