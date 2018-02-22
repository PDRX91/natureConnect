//for the landing page

var landingPage = {
	playerName1: 'AI',
	playerName2: 'AI',
	playerImg1: null,
	playerImg2: null,
	token1: 1,
	token2: 2,
	playTo: 1,
	getBestOf: function() {
			var bestOf = $('.bestOfOptions option:selected').val();
			this.playTo = bestOf;
			// console.log(playTo);
	},
	setPlayerTokenImg: function() {
		var imgPath = $(this).css('background-image');
		console.log(imgPath);
		var fileName = imgPath.split('/').pop().split('"');
		var url = 'url("assets/Img/' + fileName[0] +'")';
		// console.log(url);
		if (this.playerImg1 === null) {
			this.playerImg1 = url;
			this.token1 = url.match(/\d+/)[0];
			$('.playerImg1').css('background-image', url);
		} else {
			this.playerImg2 = url;
			this.token2 = url.match(/\d+/)[0];
			$('.playerImg2').css('background-image', url);
			$('.tokens>div').off();
		}
		$(this).css('opacity', '0');
	},	
	setName: function() {
		this.playerName1 = $('.playerName1').val() || 'AI';
		this.playerName2 = $('.playerName2').val() || 'AI';
	},

  	hideLanding: function() {
		$('.landingPage').fadeOut('slow');
		$('.mainPage').fadeIn('slow');
		player1 = new Player(playerName1, 1, token1);
    	player2 = new Player('ai', 2, 3);
	}

}