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
			$('.playTo') = bestOf;
			// console.log(playTo);
	},
	setPlayerTokenImg: function() {
		var imgPath = $(event.target).css('background-image');
		var fileName = imgPath.split('/').pop().split('"');
		var url = 'url("assets/' + fileName[0] +'")';
		console.log('fileName',fileName[0]);
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
		this.setName();
		player1 = new Player(this.playerName1, 1, this.token1);
    	player2 = new Player(this.playerName2, 2, this.token2);
	}

}