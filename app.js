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

  displayFinalResult(gameResult);

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

const displayFinalResult = (results) => {
  console.log(results);
  const playerWinResults = results.filter((result) =>
    result.startsWith("You win")
  );
  const playerLoseResults = results.filter((result) =>
    result.startsWith("You lose")
  );
  if (playerWinResults.length === 5) {
    gameContent.textContent = "You win!!";
    gameResults = [];
  } else if (playerLoseResults.length === 5) {
    gameContent.textContent = "You lose!!";
    gameResults = [];
  }
};
