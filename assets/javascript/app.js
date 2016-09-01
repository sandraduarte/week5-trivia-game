$(document).ready(function(){

	
	// Dom 
	
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

	

// Images
	
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
	var tashaBday = $("<img>", {class: 'answerImg', src: "assets/images/tashabday.jpg"});
	var mark = $("<img>", {class: 'answerImg', src: "assets/images/mark.jpg"});
	var power = $("<img>", {class: 'answerImg', src: "assets/images/power.jpg"});
	var ghosttommy = $("<img>", {class: 'answerImg', src: "assets/images/ghosttommy.jpg"});
	var julio = $("<img>", {class: 'answerImg', src: "assets/images/juliotommy.jpg"});
	var ruiz = $("<img>", {class: 'answerImg', src: "assets/images/ruiz.jpg"});
	var truth = $("<img>", {class: 'answerImg', src: "assets/images/truth.jpg"});
	var jukebox = $("<img>", {class: 'answerImg', src: "assets/images/jukebox.jpg"});
	var greg = $("<img>", {class: 'answerImg', src: "assets/images/greg.jpg"});
	var paz = $("<img>", {class: 'answerImg', src: "assets/images/paz.jpg"});


// Questions 


	var location = new question("Where does POWER take place?", ['Los Angeles', 'Miami', 
		'NYC', 'Chicago'], 'NYC', power);

	var ghostName = new question("What is the Ghost's real name?", ['James St. Patrick',
		'Jamie Patrick', 'James Egan', 'Jamie Valdez'], 'James St. Patrick', ghost);

	var dogName = new question("What's Ruiz's side hustle?",
		["Bodega", 'Boxing Gym', 'Restaurant', 'Autoshop'], 'Boxing Gym', ruiz);
	//anytime I tried to change this variable's name 'dogname' the html would render improperly so I left named this way)


	var shawnKiller = new question("Who killed Shawn?",
		['Tasha', 'Ghost', 'Dre', 'Kanan'], 'Kanan', kanan);

	var children = new question("How many children do Ghost and Tasha have?",
		['0', '1', '2', '3'], 
		'3', ghosttasha);

	var laundromat = new question("Who helps Tommy move money in/out of the laundromat?",
		['Tasha', 'Ghost', 'Holly', 'Julio'], 'Julio', julio);

	var nightclub = new question("What's the name of Ghost's nightclub?",
		['Trust', 'Honesty', 'Loyalty', 'Truth'], 'Truth', truth);

	var tommyType = new question("What's Tommy's type?",
		['Blondes', 'Brunettes', 'Redheads'], "Redheads", redheads);

	var sister = new question("What's Angela's sister's name?",
		['Paola', 'Paz', 'Pamela', 'Penelope'], 'Paz', paz);

	var network = new question("Which network airs the series?",
		[ 'Showtime', 'HBO', 'STARZ', 'FOX'], 'STARZ', power);

	var hit = new question("Who ordered the hit on Ghost?", ['Tasha', 'Tommy', 'Lobos', 'Holly'],
		'Lobos', lobos);

	var angelaProfession = new question("What is Angela's profession?", ['Lawyer', 'Federal Agent', 'Police Officer', 'Secret Service'],
		'Lawyer', angela);

	var realGhost = new question("Who do the Feds think Ghost is?" , ['Tommy', 'Angela', 'Jamie', 'Ruiz'], 'Tommy', ghosttommy);

	var premiereYear = new question("What year did POWER premiere?", ['2016', '2015', '2014', '2013'],
		'2014', power);

	var showSong = new question("Who performs the opening song to the show?",
		[ 'Eminem', 'Dr. Dre', '50-Cent', 'G-Unit'], '50-Cent', kanan);

	var jukebox = new question("What's Kanan's cousin's name?", ['Julio', 'Dre', 'Jukebox', 'Rolla'],
		'Jukebox', jukebox);

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
	 tashaBday, lobosConnect, laundromat];




// General Functions //////////////////////////////////////////////////////////////////////////
	function nextQuestion(){

		console.log('next question')
		console.log('question index: ' + questionIndex)


		if (questionIndex == questions.length) {
			// end game
			$timerSpan.hide();
			$question.html("Game Over!")

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


})// end of jQuery