var letter;
var $letters = $('.letters');

while(!letter) {
letter = prompt('type a letter');
}

for (var i = 0; i < 10; i++) {

	var $li = $('<li>');
	var letterList = '';

	for (var j = 0; j <= i; j++){
		letterList += letter;
	}

	$li.html(letterList);
	$letters.append($li);
}