$(document).ready(function() {
	$('#pagepiling').pagepiling({
    navigation: false,
    scrollingSpeed: 100,
  });
  $('#arrowdn2').click(function(){
    $.fn.pagepiling.moveSectionDown();
  });
});

