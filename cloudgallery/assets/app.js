$(function(){
	$('.sidenav').sidenav();
	$('.scrollspy').scrollSpy();
	var initCarousel=function(element) {$(element).carousel({fullWidth:true,indicators:true,dist:0});}
	$('.carousel img:first').each(function(){
		var element=this.closest('.carousel');
		if(this.complete) initCarousel(element);
		else $(this).on('load',function(){initCarousel(element);});
	});
});
