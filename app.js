"use strict";

const gameChoices = ["rock", "paper", "scissors"];
const getComputerChoice = (choices) => {
  const arrLength = choices.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return choices[randomNum];
};

const getPlayerSelection = () => {
  return prompt(
    "Choose your move: Rock, Paper, or Scissors. Enter your choice below!"
  );
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

const playGame = () => {
  let gameResults = [];
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice(gameChoices);
    const playerSelection = getPlayerSelection();
    const gameResult = playRound(playerSelection, computerSelection);
    gameResults.push(gameResult);
  }
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
console.log(playGame());
