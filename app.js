"use strict";

const gameChoices = ["rock", "paper", "scissors"];
const getComputerChoice = (choices) => {
  const arrLength = choices.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return choices[randomNum];
};
getComputerChoice(gameChoices);
