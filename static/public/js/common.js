$(document).ready(function(){
    var whei = $(window).width();
	$("html").css({fontSize: whei/120})
	$(window).resize(function(){
        var whei = $(window).width();
	    $("html").css({fontSize:whei/120})
    });
});