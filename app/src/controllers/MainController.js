let difficulty;
let cards;
let numberOfPlays;
let timeElapsed;

import buildCardSet from '../utils/buildCardsSet';
import shuffleArray from '../utils/shuffleArray';

const difficultyDiv = document.getElementById('difficulty');

difficultyDiv.addEventListener('change', event => {
	switch (event.target.value) {
		case '1':
			difficulty = 5;
			break;
		case '2':
			difficulty = 10;
			break;
		case '3':
			difficulty = 15;
			break;
		default:
			throw new Error('Unspecified difficulty level.');
	}
});

function setCards(difficulty) {
	const newCardSet = buildCardSet(difficulty);

}
