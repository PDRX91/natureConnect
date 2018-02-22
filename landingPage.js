

var landingPage = {
	playerName1: 'AI',
	playerName2: 'AI',
	playerImg1: null,
	playerImg2: null,
	token1: '',
	token2: '',
	playTo: 1,
	getBestOf: function() {
			var bestOf = $('.bestOfOptions option:selected').val();
			playTo = bestOf;
			console.log(playTo);
		})
	},

	setPlayerTokenImg: function(event) {
		var imgPath = $(this).css('background-image');
		// console.log(imgPath);
		var fileName = imgPath.split('/').pop().split('"');
		var url = 'url("assets/Img/' + fileName[0] +'")';
		// console.log(url);
		if (playerImg1 === null) {
			playerImg1 = url;
			token1 = url.match(/\d+/)[0];
			// $('.playerImg1').css('background-image', url);
		} else {
			this.token2 = url.match(/\d+/)[0];
			$('.playerImg2').css('background-image', url);
			$('.tokens>div').off();
		}
		$(this).css('opacity', '0');
	},	
	setName: function() {
		playerName1 = $('.playerName1').val() || 'AI';
		playerName2 = $('.playerName2').val() || 'AI';
	}



}