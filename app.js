"use strict";

const gameChoices = ["rock", "paper", "scissors"];
const getComputerChoice = (choices) => {
  const arrLength = choices.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return choices[randomNum];
};
const computerSelection = getComputerChoice(gameChoices);
const playerSelection = "rock";

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

console.log(playRound(playerSelection, computerSelection));
