const words = ["titanic", "avatar", "inception"];
const hints = [
  "A famous shipwreck love story",
  "Science fiction film by James Cameron",
  "A dream within a dream concept",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let hintIndex = words.indexOf(selectedWord);
let lives = 6;
let correctGuesses = [];
let wrongGuesses = [];

function setupButtons() {
  let buttonsHTML = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    buttonsHTML += `
            <button
                class="letter"
                id="${letter}"
                onClick="handleGuess('${letter}')"
            >
                ${letter}
            </button>
        `;
  }

  document.getElementById("alphabet").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  let isCorrect = false;

  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === chosenLetter) {
      isCorrect = true;
      if (!correctGuesses.includes(chosenLetter)) {
        correctGuesses[correctGuesses.length] = chosenLetter;
      }
      break;
    }
  }

  if (!isCorrect) {
    lives--;
    if (!wrongGuesses.includes(chosenLetter)) {
      wrongGuesses[wrongGuesses.length] = chosenLetter;
    }
    document.getElementById("mylives").textContent = lives;
    updateHangman(lives);
  }
  document.getElementById(chosenLetter).disabled = true;
  updateGameState();
}

function updateGameState() {
  let wordDisplay = "";

  for (let i = 0; i < selectedWord.length; i++) {
    if (correctGuesses.includes(selectedWord[i])) {
      wordDisplay += selectedWord[i];
    } else {
      wordDisplay += "_";
    }
  }

  document.getElementById("hold").textContent = wordDisplay;

  if (!wordDisplay.includes("_")) {
    alert("The Gamemaker Vladimir congratulates you on your triumph!");
    resetGame();
  }

  if (lives <= 0) {
    alert(
      "The Gamemaker Vladimir is disapointed with your performance! The word was " +
        selectedWord
    );
    resetGame();
  }
}

function updateHangman(lives) {
  switch (lives) {
    case 5:
      document.getElementById("head").style.display = "block";
      break;
    case 4:
      document.getElementById("body").style.display = "block";
      break;
    case 3:
      document.getElementById("leftArm").style.display = "block";
      break;
    case 2:
      document.getElementById("rightArm").style.display = "block";
      break;
    case 1:
      document.getElementById("leftLeg").style.display = "block";
      break;
    case 0:
      document.getElementById("rightLeg").style.display = "block";
      break;
  }
}

function showHint() {
  document.getElementById("clue").innerHTML = "Clue - " + hints[hintIndex];
}

function resetGame() {
  correctGuesses = [];
  wrongGuesses = [];
  selectedWord = words[Math.floor(Math.random() * words.length)];
  hintIndex = words.indexOf(selectedWord);
  lives = 6;
  document.getElementById("mylives").textContent = lives;
  document.getElementById("clue").innerHTML = "Clue -";
  setupButtons();
  updateGameState();

  document.getElementById("head").style.display = "none";
  document.getElementById("body").style.display = "none";
  document.getElementById("leftArm").style.display = "none";
  document.getElementById("rightArm").style.display = "none";
  document.getElementById("leftLeg").style.display = "none";
  document.getElementById("rightLeg").style.display = "none";
}

resetGame();

document.getElementById("hint").addEventListener("click", showHint);
document.getElementById("reset").addEventListener("click", resetGame);

setupButtons();
updateGameState();
