$('.menu-icon').bind ('click',function(){
	$('.card').toggleClass('show-menu');
	$('.menu').toggleClass('active');
});
$('.search-icon').bind('click', function() {
	$('.search').toggleClass('active');
	});