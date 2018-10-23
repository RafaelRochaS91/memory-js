function shuffleArray(array) {
	let shuffledArray = [];

	while (array.length !== 0) {
		let randomIndex = Math.floor(Math.random() * array.length);
		shuffledArray.push(array[randomIndex]);
		array.splice(randomIndex, 1);
	}

	return shuffledArray;
}

export default shuffleArray;
