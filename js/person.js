var $form = $('.form');
var $submit = $('.submit');
var $name = $('.name');



$form.on('submit', function (e){
	e.preventDefault();

	var nameValue = $name.val();
	

	document.write("hello there"+ " " +nameValue);

});



