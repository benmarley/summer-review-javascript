var $form = $('.form');
var $story = $('.story')
 

$('#words').on('submit', function (e){
	e.preventDefault();

	
	
	$('#words input').each(function (item){
		var userAnswer = '#data-' + $(this).attr('data-answer');

		$(userAnswer).html($(this).val());

	});

	$(this).addClass('hidden');
	$story.addClass('show');
});