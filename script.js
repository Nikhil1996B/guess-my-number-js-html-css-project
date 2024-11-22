'use strict';

// query selectors
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');

// Generate secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize score to 20
let score = 20;

const updateScoreDisplay = () => (scoreDisplay.textContent = score);

const decrementScoreByOne = () => score--;

const incorrectGuessHandler = () => {
  decrementScoreByOne();
  updateScoreDisplay();
};

const updateMessage = (value) => (message.textContent = value);

// listen to the click event on check button
checkButton.addEventListener('click', function () {
  // Output the current input field value on click of button
  const guess = Number(guessInput.value);
  if (score === 0) {
    updateMessage('You lost the game!');
    return;
  }
  // When there is no input
  if (!guess) {
    updateMessage('⛔ No number');
    // When player wins!
  } else if (guess === secretNumber) {
    updateMessage('🎉 Correct Guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Set the display text number to random secret number
    document.querySelector('.number').textContent = secretNumber;
  } else if (score > 0 && guess > secretNumber) {
    updateMessage('📈 Too High!');
    incorrectGuessHandler();
  } else if (score > 0 && guess < secretNumber) {
    updateMessage('📉 Too Low!');
    incorrectGuessHandler();
  }
});
