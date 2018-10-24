const initialPlayerStatus = {
	numberOfPlays: 0,
	timer: {
		seconds: 0,
		minutes: 0,
		interval: () => null
	},
	finalScore: 0,
};

export class Player {
	/**
	 *
	 * @param {number} difficulty
	 */
	constructor(difficulty) {
		this.status = { ...initialPlayerStatus, difficulty };
	}

	startTimer() {
		const { minutes, seconds } = this.status.timer;
		let timerContainer = document.getElementById('#timer');

		setInterval(() => {
			timerContainer.innerHTML = minutes + 'mins ' + seconds + 'secs';
			seconds++;

			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		}, 1000);
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
