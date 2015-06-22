$('p').text('hello world');

var b = $('.second p');

b.click(function(event) {
	if(b.hasClass('out')){
		$(this).removeClass('out');
		$('.first').removeClass('red');
	}else{
		$(this).addClass('out');
		$('.first').addClass('red');
	}
});