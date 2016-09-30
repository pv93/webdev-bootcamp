var squareArray = document.querySelectorAll('.square');
var messageDisplay = document.getElementById('messageDisplay');
var newGameButton = document.getElementById('newGameButton');
var easyButton = document.getElementById('easyButton');
var hardButton = document.getElementById('hardButton');
var h1 = document.querySelector('h1');

newGameButton.addEventListener('click', function() {
	newGame();
});

easyButton.addEventListener('click', function() {
	easyMode = true;
	easyButton.classList.add('selected');
	hardButton.classList.remove('selected');
	newGame();
});

hardButton.addEventListener('click', function() {
	easyMode = false;
	hardButton.classList.add('selected');
	easyButton.classList.remove('selected');	
	newGame();
});


var pickedSquare;
// add event listeners to squares
for (var i = 0 ; i < squareArray.length ; i++) {
	squareArray[i].addEventListener('click', function() {
		if (pickedSquare == this.style.background) {
			messageDisplay.textContent = 'Correct!';
			newGameButton.textContent = 'Play Again?';
			changeColors(this.style.background);
			h1.style.background = this.style.background;
		}
		else {
			this.style.background = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	})
}

newGame();

var easyMode = false;
// Choose a new set of squares and a new "correct" square
function newGame() {

	for (var i = 5 ; i > 2 ; i--) {
		if (!!easyMode) {
			squareArray[i].style.display = 'none';
		}
		else {
			squareArray[i].style.display = 'block';
		}
	}

	newGameButton.textContent = 'New Colors';
	h1.style.background = 'steelblue';
	messageDisplay.textContent = '';

	var colorArray = easyMode ? generateRandomColors(3) : generateRandomColors(6);
	pickedSquare = colorArray[Math.floor(Math.random()*colorArray.length)];
	
	colorArray.forEach(function (color, index) {
		squareArray[index].style.background = color;
		console.log(color);
		if (color == pickedSquare) {
			console.log('they match')
			document.getElementById('solution').textContent = squareArray[index].style.background.toUpperCase();
		}
	});
}

function generateRandomColors(n) {
	var arr = [];
	var randomColor;
	for (var i = 0; i < n ; i++) {
		arr.push(randomColor());
	}

	return arr;

	function randomColor() {
		return 'rgb(' + [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)].join(', ') + ')';
	}
}


function changeColors(color) {
	squareArray.forEach(function (square) {
		console.log('changing all squares to ' + color)
		square.style.background = color;
	})
}