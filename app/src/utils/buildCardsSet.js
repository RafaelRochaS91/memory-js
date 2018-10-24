import { Card } from '../models/Card';
import { name } from 'faker';

/**
 *
 * @param {number} count
 * @returns {Card[]} array of cards
 */
function buildCardSet(count) {
	let currentCardNr = 0;
	let cards = [];

	while (currentCardNr < count) {
		const cardOneName = name.firstName();
		const cardOne = new Card()
	}
}

export default buildCardSet;
