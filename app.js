"use strict";

const gameContent = document.getElementById("game__content");
const selectionBtns = document.getElementById("selection__btns");
const btns = document.querySelectorAll(".btn");
const gameChoices = ["rock", "paper", "scissors"];
let gameResults = [];

const getComputerChoice = (choices) => {
  const arrLength = choices.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return choices[randomNum];
};

const getPlayerSelection = (btn) => {
  const userSelection = btn.target.dataset.selection;
  return userSelection;
};

const isPlayerWin = (playerSelection, computerSelection) => {
  return (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  );
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return "Draw";

  return isPlayerWin(playerSelection, computerSelection)
    ? `You win ${playerSelection} beats ${computerSelection}`
    : `You lose ${computerSelection} beats ${playerSelection}`;
};

const playGame = (player, computer) => {
  const gameResult = playRound(player, computer);

  gameContent.textContent = gameResult;
  gameResults.push(gameResult);

  return getGameResult(gameResults);
};

const getGameResult = (gameResult) => {
  const winResults = gameResult.filter((result) =>
    result.startsWith("You win")
  ).length;
  const loseResults = gameResult.filter((result) =>
    result.startsWith("You lose")
  ).length;

  showWinner(gameResult);

  if (winResults === loseResults) return "DRAW";

  return winResults > loseResults ? "YOU WiN!" : "COMPUTER WiN!";
};

selectionBtns.addEventListener("click", (btn) => {
  const targetBtn = btn.target.closest(".btn");
  if (!targetBtn) return;
  const playerSelection = getPlayerSelection(btn);
  const computerSelection = getComputerChoice(gameChoices);
  console.log(playGame(playerSelection, computerSelection));
});

const showWinner = (results) => {
  console.log(results);
  const playerWinResults = results.filter((result) =>
    result.startsWith("You win")
  ).length;
  const playerLoseResults = results.filter((result) =>
    result.startsWith("You lose")
  ).length;

  if (playerWinResults === 5 || playerLoseResults === 5) {
    selectionBtns.classList.add("hidden");
    gameContent.innerHTML = `<div>
    <h1>${playerWinResults === 5 ? "YOU WIN!!" : "YOU LOSE!!"}</h1>
    <button id="restart__btn" class="btn">Restart Game</button>
    </div>`;
    const restartBtn = document.getElementById("restart__btn");
    restartBtn.addEventListener("click", restartGame);
  }
};

const restartGame = () => {
  selectionBtns.classList.remove("hidden");
  gameContent.textContent = `Select Your Move`;
  gameResults = [];
};
