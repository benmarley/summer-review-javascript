var $form = $('.form');
var $story = $('.story')

$form.on('submit', function (e){
	e.preventDefault();

	$(this).addClass('hidden');
	$story.addClass('show');
	

});