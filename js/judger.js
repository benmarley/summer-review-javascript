var $form = $('.form');
var $submit = $('.submit');
var $name = $('.name');



$form.on('submit', function (e){
	e.preventDefault();

	var nameValue = $name.val();
	
	if (nameValue.length < 3){
	document.write("you have a short name"+ " " +nameValue);
}

	else if (nameValue.length < 7){
	document.write("have a pretty long name"+ " " +nameValue);
	}
	else {
		document.write("you have a really long name"+ " " +nameValue);
	}

});

