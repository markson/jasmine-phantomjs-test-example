
var main = function() {
	var button = $('#button');
	
	$('#button').on('click', function(){
		$('#counter').text(parseInt($('#counter').text()) + 1);
	})

}
window.addEventListener('load', main);
