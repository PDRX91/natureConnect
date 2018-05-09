class LandingPage{
	constructor(){
		this.playerName1= 'Player1';
		this.playerName2= 'Player2';
		this.playerImg1= null;
		this.playerImg2= null;
		this.token1= 1;
		this.token2= 2;
		this.playTo= 1;
		this.setPlayerTokenImg.bind(this);
	}
	getBestOf() {
			var bestOf = $('.bestOfOptions option:selected').val();
			$('.playToNumber').text(bestOf);
	}
	setPlayerTokenImg() {
		var imgPath = $(event.target).css('background-image');
		//what is the split part
		var fileName = imgPath.split('/').pop().split('"');
		var url = 'url("assets/' + fileName[0] +'")';
		if (this.playerImg1 === null) {
			this.playerImg1 = url;
            this.token1 = parseInt(url.match(/\d+/)[0]);
			$('.playerImg1').css('background-image', url);
		} else {
            this.playerImg2 = url;
            this.token2 = parseInt(url.match(/\d+/)[0]);
			$('.playerImg2').css('background-image', url);
			$('.tokens>div').off();
		}
		//whats the difference between e.target and 'this'
		$(event.target).css('display', 'none');
	}
	setName(){
		this.playerName2 = $('.opponentSelect').val();
	}
	setAiToken(){
		if(this.playerName2 === 'AI' && this.token1 === 2){
			this.token2 = 1;
		}
	}
  	hideLandingAndProcessInputs(){
		$('.landingPage').fadeOut('slow');
		$('.mainPage').fadeIn('slow');
		this.setName();
		this.setAiToken();
		player1 = new Player(this.playerName1, 1, this.token1);
    	player2 = new Player(this.playerName2, 2, this.token2);
	}
}