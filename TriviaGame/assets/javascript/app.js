$(document).ready(function(){

// Declare Variable ////////////////////////////////////////////////////////////////////////////
	
	// Dom Elements /////////////////////////////
	var $timerDiv = $('#timerDiv');
	var $timerSpan = $('#timerSpan');
	var $timeRemaining = $('#timeRemaining');
	var $question = $('#questionDiv');
	var $choice = $('.choice');
	var $choice1 = $('#choice1');
	var $choice2 = $('#choice2');
	var $choice3 = $('#choice3');
	var $choice4 = $('#choice4');
	var $start = $('#startButton');

	// Question transitioning ///////////////////
	var questions = [];
	var questionIndex = 0;

	// Game variables ///////////////////////////
	var wins = 0;
	var losses = 0;
	var questionAnswered = false;



// Timer ///////////////////////////////////////////////////////////////////////////////

	time = 15; // number of seconds for timeRemaining

	runTimer = function(){
		$timerSpan.html('Time Remaining: ')
		counter = setInterval(decrement, 1000);
		$timerSpan.show();
		$timeRemaining.html(' ' + time);
	};

	decrement = function(){

		time--;
		$timeRemaining.html(' ' + time);

		if(time == 0){

			stopTimer();
			$timerSpan.html("Time's Up!");
			$timerSpan.css('margin-left', '45px')

			currentQuestion.displayImage();

			time = 15; // reset the timer
			questionIndex += 1;

			losses ++;
			
			setTimeout(function(){
				$timerSpan.css('margin-left', '0')
			}, 3800)
			setTimeout(nextQuestion, 3800);

		// display answer screen
		}
	}

	stopTimer = function(){
		clearInterval(counter);
		$timeRemaining.empty();
		time = 15;
	}


// Question Object ////////////////////////////////////////////////////////////////////////////
	function question(text, choices, answer, image, sound){

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.image = image;
		this.sound = sound;

		this.displayQuestion = function(){

			console.log("displaying question")

			$question.html(this.text);

			// write the answer choice to the array, then set a data attribute = to the choice string
			$choice1.html(this.choices[0]);
			$choice1.data('choice', this.choices[0] );

			$choice2.html(this.choices[1]);
			$choice2.data('choice', this.choices[1] );

			$choice3.html(this.choices[2]);
			$choice3.data('choice', this.choices[2] );

			$choice4.html(this.choices[3]);
			$choice4.data('choice', this.choices[3] );
		};

		this.displayImage = function(){

			$choice1.empty();
			$choice2.empty();
			$choice3.empty();
			$choice4.empty();

			$choice2.html(this.image);

			if (this.sound){
				$choice3.html(this.sound);
				this.sound.get(0).play();
			}
		}

	};


// Other Functions ////////////////////////////////////////////////////////////////////////////

	displayResults = function(){

		$choice.empty();
		$choice1.html("Correct: " + wins);
		$choice2.html("Incorrect: " + losses);
		$start.show();
	}

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	function playMusic(){

		music = Math.floor(Math.random() * playlist.length)

		$('#title').append(playlist[music]);

		playlist[music].get(0).play();

	}

// Image Creation /////////////////////////////////////////////////////////////////////////////
	
	var batShark = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/14y3bdRzH8aT0k/giphy.gif" });

	var penguin = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/pNAkiBswVUu52/giphy.gif"});

	var baneCat = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/3sS46VYO8KqWY/giphy.gif"});

	var kevinConroy = '<iframe width="560" height="315" src="https://www.youtube.com/embed/g7jxcEqE5ic?rel=0&autoplay=1&start=5&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'

	var hamillJoker = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/vZ57IYRNP6CCk/giphy.gif"});

	var barb = $("<img>", {class: 'answerImg', src: "http://comicvine.gamespot.com/api/image/scale_medium/4459948-killing-joke-joker-takes-pictures.jpg"});

	var harley = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/l2JecKRWml6Sp2ufC/giphy.gif"});

	var oracleImg = $("<img>", {class: 'answerImg', src: "http://img.cinemablend.com/cb/1/6/9/a/6/a/169a6a79e3c801441cf70525ffca193d2d8cc6a07e7eee8ab38f83035b974458.jpg"});

	var nightwing = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/3o7ZetcJWG0LFI1n1e/giphy.gif"});

	var jasonTodd = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/t8clt4CIBfaVO/giphy.gif"});

	var joeChill = $("<img>", {class: 'answerImg', src: "http://static8.comicvine.com/uploads/scale_small/11127/111278246/5090794-2064367790-latest"});

	var noraImg = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/Z0yUOa1WWf5rW/giphy.gif"});

	var martha = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/k5EfdqGN3A1eE/giphy.gif"});

	var billFingerImg = $("<img>", {class: 'answerImg', src: "https://numberonebatfan.files.wordpress.com/2015/08/bill-the-boy-wonder-site-bill-finger-trading-card-1.jpg?w=604"});
	var talia = $("<img>", {class: 'answerImg', src: "https://upload.wikimedia.org/wikipedia/en/8/8e/BATMAN,_INCORPORATED_vol.2_2_2012_variant.jpg"});
	// var damian = $("<img>", {class: 'answerImg', src: "https://media0.giphy.com/media/XHcuph8mKHw52/200.gif"});
	var harveyDentImg = $("<img>", {class: 'answerImg', src: "https://media0.giphy.com/media/TvZYht7srnIiY/200.gif"});
	// var scarecrow = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/gYDW7y9GcNzC8/giphy.gif"});
	// var penguinDevito = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/fWqDxyYcnZN96/giphy.gif"});
	var matches = $("<img>", {class: 'answerImg', src: "http://images.techtimes.com/data/images/full/177577/matches-malone.jpg"});
	var lobos = $("<img>", {class: 'answerImg', src: "assets/images/lobos.jpg"});
	var angela = $("<img>", {class: 'answerImg', src: "assets/images/angela.jpg"});
	var ghost = $("<img>", {class: 'answerImg', src: "assets/images/ghost.jpg"});
	var tasha = $("<img>", {class: 'answerImg', src: "assets/images/lobos.jpg"});
	var kanan = $("<img>", {class: 'answerImg', src: "assets/images/kanan.jpg"});
	var tommy = $("<img>", {class: 'answerImg', src: "assets/images/tommy.jpg"});
	var tommyandHolly = $("<img>", {class: 'answerImg', src: "assets/images/tommyandHolly.jpg"});
	var ghostangie = $("<img>", {class: 'answerImg', src: "assets/images/ghostangie.jpg"});
	var lala = $("<img>", {class: 'answerImg', src: "assets/images/lala.jpg"});
	var ghosttasha = $("<img>", {class: 'answerImg', src: "assets/images/ghosttasha.jpg"});
	var redheads = $("<img>", {class: 'answerImg', src: "assets/images/redheads.jpg"});
	var tashaBday = $("<img>", {class: 'answerImg', src: "assets/images/tashaBday.jpg"});
	var mark = $("<img>", {class: 'answerImg', src: "assets/images/mark.jpg"});
	var power = $("<img>", {class: 'answerImg', src: "assets/images/power.jpg"});
	var ghosttommy = $("<img>", {class: 'answerImg', src: "assets/images/ghosttommy.jpg"});
	var julio = $("<img>", {class: 'answerImg', src: "assets/images/julio.jpg"});
	var ruiz = $("<img>", {class: 'answerImg', src: "assets/images/ruiz.jpg"});
	var truth = $("<img>", {class: 'answerImg', src: "assets/images/truth.jpg"});

// Sound Creation /////////////////////////////////////////////////////////////////////////////

	// sound effects

	var baneInCharge = $("<audio>", {class: 'answerSound', src: "assets/sounds/baneincharge.ogg"});


	// music

	var batmanBeginsTheme = $("<audio>", {class: 'answerSound', src: "assets/sounds/batmanbeginstheme.mp3"});

	var batmanAnimatedTheme = $("<audio>", {class: 'answerSound', src: "assets/sounds/batmananimatedtheme.mp3"});

	var arkhamCity = $("<audio>", {class: 'answerSound', src: "assets/sounds/arkhamcitytheme.mp3"});

	var gothamCity = $("<audio>", {class: 'answerSound', src: "assets/sounds/gothamcity.mp3"});

	// playlist for music

	var playlist = [batmanAnimatedTheme, batmanBeginsTheme, arkhamCity, gothamCity]


// Question Creation //////////////////////////////////////////////////////////////////////////


	var location = new question("Where does POWER take place?", ['Los Angeles', 'Miami', 
		'NYC', 'Chicago'], 'NYC', power);

	var ghostName = new question("What is the Ghost's real name?", ['James St. Patrick',
		'Jamie Patrick', 'James Egan', 'Jamie Valdez'], 'James St. Patrick', ghost);

	var dogName = new question("What's Ruiz's side hustle?",
		["Bodega", 'Boxing Gym', 'Restaurant', 'Autoshop'], 'Boxing Gym', ruiz);

	var shawnKiller = new question("Who killed Shawn?",
		['Tasha', 'Ghost', 'Dre', 'Kanan'], 'Kanan', kanan);

	var children = new question("How many children to Ghost and Tasha have?",
		['0', '1', '2', '3'], 
		'3', ghosttasha);

	var nightclub = new question("What's the name of Ghost's nightclub?",
		['Trust', 'Honesty', 'Loyalty', 'Truth'], 'Truth', truth);

	var tommyType = new question("What's Tommy's type?",
		['Blondes', 'Brunettes', 'Redheads'], "Redheads", redheads);

	var sister = new question("What's Angela's sister's name?",
		['Paola', 'Paz', 'Pamela', 'Penelope'], 'Paz', angela);

	var network = new question("What's network airs the series?",
		[ 'Showtime', 'HBO', 'STARZ', 'FOX'], 'STARZ', power);

	var hit = new question("Who ordered the hit on Ghost in Season 3?", ['Tasha', 'Tommy', 'Lobos', 'Holly'],
		'Lobos', lobos);

	var angelaProfession = new question("What is Angela's profession?", ['Lawyer', 'Federal Agent', 'Police Officer', 'Secret Service'],
		'Lawyer', angela);

	var realGhost = new question("Who do the Feds think Ghost is?" , ['Tommy', 'Angela', 'Jamie', 'Ruiz'], 'Tommy', ghosttommy);

	var premiereYear = new question("What year did POWER premiere?", ['2016', '2015', '2014', '2013'],
		'2014', power);

	var showSong = new question("Who performs the opening song to the show?",
		[ 'Eminem', 'Dr. Dre', '50-Cent', 'G-Unit'], '50-Cent', kanan);

	var jukebox = new question("What's Kanan's cousin's name?", ['Julio', 'Dre', 'Jukebox', 'Rolla'],
		'Jukebox', talia);

	var tashaFriend = new question("What is Tasha's best friend's name?", ['Latrice', 'Lasagna', 'Latoya', 'Lakeisha'], 'Lakeisha', lala);

	var tommyShooter = new question("Who tried to kill Tommy?", ['Milan', 'The Koreans', 'Ruiz', 'Ghost'],
		'The Koreans', tommy);

	var tommyHolly = new question("Where did Tommy and Holly meet?", [ 'Laundromat', 'Grocery Store', 'Nightclub', 'Carwash'],
		'Nightclub', tommyandHolly);

	var years = new question("How many years since Ghost saw Angie?", ['15', '10', '18', '20'],
		'18', ghostangie);

	var tashaBday = new question("What number birthday did Tasha celebrate?", ['33', '28', '30', '32'],
		'30', tashaBday);

	var lobosConnect = new question("Who is Lobos' informant on the inside?", ['Mark', 'Pedro', 'Matteo', 'Juan'],
		'Mark', mark);

	questions = [location, ghostName, dogName, shawnKiller, tommyType, sister, children,
	 network, nightclub, angelaProfession, hit, realGhost, premiereYear, showSong, jukebox, tashaFriend, tommyShooter, tommyHolly, years,
	 tashaBday];

	//questions = shuffleArray(questions);

	//currentQuestion = questions[questionIndex];


// General Functions //////////////////////////////////////////////////////////////////////////
	function nextQuestion(){

		console.log('next question')
		console.log('question index: ' + questionIndex)


		if (questionIndex == questions.length) {
			// end game
			$timerSpan.hide();
			$question.html("Game Over! Hit Refresh to play again!")

			displayResults();

			// display end screen

		}else {
			// go to the next question

			console.log('current question: ' + currentQuestion)
			currentQuestion = questions[questionIndex];
			currentQuestion.displayQuestion();
			runTimer();
			questionAnswered = false;
		}

	}


// OnClick functions //////////////////////////////////////////////////////////////////////////

	// when start button is clicked ///////////////////////////////////////////////////////////
	$start.on('click', function(){

		questionIndex = 0;
		console.log("question index after start: " + questionIndex)

		// Game variables ///////////////////////////
		wins = 0;
		losses = 0;
		questionAnswered = false;

		questions = shuffleArray(questions);

		currentQuestion = questions[questionIndex];

		$start.hide();
		
		nextQuestion();

	});
	
	// when an answer choice is clicked, compare it to the correct answer
	$choice.on('click', function(){

		if (questionAnswered == false){

			questionAnswered = true;
		

		// logic for correct answer

			if($(this).data('choice') == currentQuestion.answer){
				// right answer logic
				
				$question.html("Correct!")

				wins ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				setTimeout(nextQuestion, 3800);

		// logic for incorrect answer
			}else {
				// wrong answer logic
	
				$question.html("Wrong!");

				losses ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				$('#choice2:hover').css('color', '')

				$choice1.html(currentQuestion.answer)

				setTimeout(nextQuestion, 3800);
			}	
		}
	});


	$timerSpan.hide(); // start with 'time remaining' hidden.

	playMusic();

})// end of jQuery