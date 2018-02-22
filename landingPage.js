

class Landing {
	constructor(){
		this.playerName1 = 'AI';
		this.playerName2 = 'AI';
		this.playerImg1 = null;
		this.playerImg2 = null;
		this.token1 = '';
		this.token2 = '';
		this.playTo = 1;
	}

	getBestOf() {
		$('.bestOfOptions').change(function() {
			var bestOf = $('.bestOfOptions option:selected').val();
			this.playTo = bestOf;
		})
	}

	setPlayerTokenImg(event) {
	var imgPath = $(this).css('background-image').bind(this);
	console.log(imgPath);
	var fileName = imgPath.split('/').pop().split('"');
	var url = 'url("assets/Img/' + fileName[0] +'")';
	console.log(url);
	if (this.playerImg1 === null) {
		this.playerImg1 = url;
		this.token1 = url.match[(/\d+/)[0];
		console.log('p1Img',playerImg1);
		$('.playerImg1').css('background-image', url);
	} else {
		this.token2 = url.match[(/\d+/)[0];
		$('.playerImg2').css('background-image', url);
		$('.tokens>div').off();
	}
	$(this).css('opacity', '0');
	// $(this).off();
	}	

	setName() {
		this.playerName1 = $('.playerName1').val() || 'Player1';
		this.playerName2 = $('.playerName2').val() || 'Player2';
	}



}