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
			$('.playToNumber').text(bestOf);
	},

	setPlayerTokenImg: function() {
		var imgPath = $(event.target).css('background-image');
		var fileName = imgPath.split('/').pop().split('"');
		var url = 'url("assets/' + fileName[0] +'")';
		if (landingPage.playerImg1 === null) {
			landingPage.playerImg1 = url;
            landingPage.token1 = url.match(/\d+/)[0];
			$('.playerImg1').css('background-image', url);
		} else {
            landingPage.playerImg2 = url;
            landingPage.token2 = url.match(/\d+/)[0];
			$('.playerImg2').css('background-image', url);
			$('.tokens>div').off();
		}
		$(event.target).css('opacity', '0');
	},	

	setName: function() {
		this.playerName1 = $('.playerName1').val() || 'AI';
		this.playerName2 = $('.playerName2').val() || 'AI';
	},

  	hideLanding: function() {
		$('.landingPage').fadeOut('slow');
		$('.mainPage').fadeIn('slow');
		this.setName();
		player1 = new Player(this.playerName1, 1, this.token1);
    	player2 = new Player(this.playerName2, 2, this.token2);
	}
}