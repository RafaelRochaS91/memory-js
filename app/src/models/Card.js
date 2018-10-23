export class Card {
	/**
	 *
	 * @param {HTMLElement} element
	 */
	constructor(element, name) {
		let cardName = element.setAttribute('type', name);
		let cardElement = element.setAttribute('class', 'card');
		this.card = cardElement;
		this.cardName = cardName;
	}

	getName() {
		return this.cardName;
	}

	flip() {
		this.card.setAttribute('class', 'flipped');
	}

	match() {
		this.card.classList.remove('flipped');
		this.card.setAttribute('class', 'matched');
	}
}
