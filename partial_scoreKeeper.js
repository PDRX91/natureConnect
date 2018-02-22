// var bestOf = $('bestOfOptions option:selected').text();

$(document).ready(getBestOf);

// function app() {
// 	$('.bestOfSet').on('click', function() {
// 		console.log('set clicked');
// 		console.log(bestOf);
// 	})
// }

function getBestOf() {
$('.bestOfSet').on('click', function() {
	var bestOf = $('#bestOfOptions option:selected').val();
	console.log('best of', bestOf);
	})
}