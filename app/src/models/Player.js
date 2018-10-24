const initialPlayerStatus = {
	numberOfPlays: 0,
	timeElapsed: 0,
	finalScore: 0,
};

export class Player {
	/**
	 *
	 * @param {number} difficulty
	 */
	constructor(difficulty) {
		this.status = initialPlayerStatus;
	}

	startTimer() {
		const { timeElapsed } = this.status;
	}

	stopTimer() {
		const { timeElapsed } = this.status;
	}

	increaseNumberOfPlays() {
		const { numberOfPlays } = this.status;
		numberOfPlays++;
	}

	getFinalPrice(difficulty) {
		const { timeElapsed } = this.status;
		return difficulty * timeElapsed;
	}
}
