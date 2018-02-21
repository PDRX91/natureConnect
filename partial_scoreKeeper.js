// var bestOf = $('bestOfOptions option:selected').text();

$(document).ready(app);

// function app() {
// 	$('.bestOfSet').on('click', function() {
// 		console.log('set clicked');
// 		console.log(bestOf);
// 	})
// }

function app() {
var bestOf = $('#bestOfOptions option:selected').val();
	$('#bestOfOptions').on('change', function() {
		console.log('best of', bestOf);
	})
}