const initialGameState = {
	gameStarted: false,
	difficulty: 0,
	gameEnded: this.hasGameEnded()
};

export class Game {
	/**
	 * @param {Player} player
	 * @param {Card} cards
	 * @param {Status}
	 */
	constructor(player, cards, status) {
		this.player = player;
		this.cards = cards;
		this.status = status;
		this.gameState = initialGameState;
	}

	startGame(difficulty) {
		this.gameState = { gameStarted: true, difficulty };
	}

	getPlayerStatus() {
		return this.player.status;
	}

	hasGameEnded() {
		return this.difficulty === this.cards.length;
	}
}
