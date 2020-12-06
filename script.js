$(document).ready(function(){
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.next').click(function() {
		var currentSpan = $('.span.curry');
		var currentSpanIndex = $('.span.curry').index();
		var nextSpanIndex = currentSpanIndex + 1;
		var nextSpan = $('.span').eq(nextSpanIndex);

		currentSpan.fadeOut(800);
		currentSpan.removeClass('curry');

		if (nextSpanIndex == ($('.span:last').index()+ 1)){
			$('span').eq(0).fadeIn(800);
			$('span').eq(0).addClass('curry');
		} else{
			nextSpan.fadeIn(800);
			nextSpan.addClass('curry');
		}
	});

	$('.prev').click(function(){
		var currentSpan = $('.span.curry');
		var currentSpanIndex = $('.span.curry').index();
		var prevSpanIndex = currentSpanIndex - 1;
		var prevSpan = $('.span').eq(prevSpanIndex);

		currentSpan.fadeOut(800);
		currentSpan.removeClass('curry');
		prevSpan.fadeIn(800);
		prevSpan.addClass('curry');
	});
});