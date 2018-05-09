class SetupGame{
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
		$(event.target).css('display', 'none');
	}
	setName(){
		// debugger;
		if($('.opponentSelect').val()==="Player2"){
			if ($('#playerName2').val()!==''){
				this.playerName2 = $('#playerName2').val();
			}
		} else {
			this.playerName2 = $('.opponentSelect').val();
		}

		if ($('#playerName1').val()!==''){
			this.playerName1 = $('#playerName1').val();
		}
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
	inputChange(currentVal){
		if(currentVal === 'AI'){
			$('#playerName2').css('pointer-events', 'none').val('').attr('placeholder', 'AI');
		} else if (currentVal === 'Player2'){
			$('#playerName2').css('pointer-events', 'auto').attr('placeholder', 'Player2');
		}
		console.log('its working');
	}
}