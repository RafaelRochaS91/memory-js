/**
 * @param {string} name randomized identifier by faker
 * @returns {HTMLElement} returns a card DOM element
 */
function createCardElement(name) {
  let cardElement = document.createElement('div');
  cardElement = cardElement.setAttribute('name', name);
  cardElement = cardElement.classList.add('card');

  return cardElement;
}


export default createCardElement;
