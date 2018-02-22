class Landing {
	constructor(){
		this.playerName1 = 'AI';
		this.playerName2 = 'AI';
		this.playerImg1 = null;
	}
}

var playerName1 = 'Player1';
var playerName2 = 'Player2';
var playerImg1 = null;

var playTo = 1;

function getBestOf() {
$('.bestOfOptions').change(function() {
	var bestOf = $('.bestOfOptions option:selected').val();
	console.log('best of', bestOf);
	playTo = bestOf;
	})
}

$('.tokens>div').on('click', setPlayerTokenImg);

function setPlayerTokenImg(event) {
	var imgPath = $(this).css('background-image');
	console.log(imgPath);
	var fileName = imgPath.split('/').pop().split('"');
	var url = 'url("assets/Img/' + fileName[0] +'")';
	console.log(url);
	if (playerImg1 === null) {
		playerImg1 = url;
		console.log('p1Img',playerImg1);
		$('.playerImg1').css('background-image', url);
	} else {
		$('.playerImg2').css('background-image', url);
		$('.tokens>div').off();
	}
	$(this).css('opacity', '0');
	// $(this).off();
}

// function setPlayerTokenImg(argument) {
// 	var firstSelected = 
// }

function setName() {
	playerName1 = $('.playerName1').val() || 'Player1';
	playerName2 = $('.playerName2').val() || 'Player2';
}

$('.startBtn').on('click', hideLanding);

function hideLanding() {
	$('.landingPage').fadeOut('slow');
	$('.mainPage').fadeIn('slow');
}