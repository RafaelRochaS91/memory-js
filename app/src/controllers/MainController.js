let difficulty;
let cards;

const difficultyDiv = document.getElementById('difficulty');

difficultyDiv.addEventListener('change', event => {
	switch (event.target.value) {
		case '1':
		case '2':
		case '3':
		default:
			throw new Error('Unspecified difficulty level.');
	}
});

function setCards(difficulty) {}
