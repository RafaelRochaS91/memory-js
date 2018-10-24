import { Card } from '../models/Card';
import { name } from 'faker';
import createCardElement from './createCardElement';

/**
 *
 * @param {number} count
 * @returns {Card[]} array of cards
 */
function buildCardSet(count) {
	let currentCardNr = 0;
	let cards = [];

	while (currentCardNr < count) {
		const cardPairName = name.firstName();
		const cardElement = createCardElement(cardPairName);

		const cardOne = new Card(cardElement);
		const cardTwo = new Card(cardElement);

		cards = [...cards, cardOne, cardTwo];
	}
	return cards;
}

export default buildCardSet;
