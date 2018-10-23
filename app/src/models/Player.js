const initialPlayerStatus = {
	numberOfPlays: 0,
	timeElapsed: 0
};

export class Player {
	/**
	 *
	 * @param {number} difficulty
	 */
	constructor(difficulty) {
		this.status = initialPlayerStatus;
	}
}
