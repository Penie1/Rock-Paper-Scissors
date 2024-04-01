"use strict";

const gameContent = document.getElementById("game__content");
const selectionBtns = document.getElementById("selection__btns");
const btns = document.querySelectorAll(".btn");
const gameChoices = ["rock", "paper", "scissors"];
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
    : `You lose ${playerSelection} beats ${computerSelection}`;
};

const playGame = (player, computer) => {
  let gameResults = [];
  const gameResult = playRound(player, computer);
  console.log(gameResult);
  gameResults.push(gameResult);

  return getGameResult(gameResults);
};

const getGameResult = (gameResult) => {
  const winResults = gameResult.filter((result) =>
    result.startsWith("You win")
  );

  const loseResults = gameResult.filter((result) =>
    result.startsWith("You lose")
  );
  if (winResults.length === loseResults.length) return "DRAW";

  return winResults.length > loseResults.length ? "YOU WiN!" : "COMPUTER WiN!";
};

selectionBtns.addEventListener("click", (btn) => {
  const targetBtn = btn.target.closest(".btn");
  if (!targetBtn) return;
  const playerSelection = getPlayerSelection(btn);
  const computerSelection = getComputerChoice(gameChoices);
  // console.log(playerSelection);
  console.log(playGame(playerSelection, computerSelection));
});
