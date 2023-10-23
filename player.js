import initGameboard from './gameboard.js';

const createPlayer = function () {
  const person = {};

  person.turn = false;
  person.gameboard = initGameboard();

  person.setTurn = function (bool) {
    person.turn = bool;
  };

  return person;
};

export { createPlayer };
