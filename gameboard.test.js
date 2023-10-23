const initGameboard = require('./gameboard.js');

it('ship is set on gameboard horizontally', () => {
  const pOneBoard = initGameboard();
  pOneBoard.setPosition(pOneBoard.ships[0], 'G2', 'horizontal');

  expect(pOneBoard.grid[43]).toBe(`${pOneBoard.ships[0].type}[G2]`);
  expect(pOneBoard.grid[45]).toBe(`${pOneBoard.ships[0].type}[G4]`);
  expect(pOneBoard.grid[48]).toBe('G7');
});

it('position invalid', () => {
  const pOneBoard = initGameboard();
  pOneBoard.setPosition(pOneBoard.ships[0], 'G2', 'horizontal');

  expect(pOneBoard.grid[45]).toBe(`${pOneBoard.ships[0].type}[G4]`);
  expect(pOneBoard.setPosition(pOneBoard.ships[1], 'G4', 'vertical')).toBe(
    'invalid position'
  );
});

it('ship is set on gameboard vertically', () => {
  const pOneBoard = initGameboard();
  pOneBoard.setPosition(pOneBoard.ships[2], 'A1', 'vertical');

  expect(pOneBoard.grid[0]).toBe(`${pOneBoard.ships[2].type}[A1]`);
  expect(pOneBoard.grid[14]).toBe(`${pOneBoard.ships[2].type}[C1]`);
  expect(pOneBoard.grid[21]).toBe('D1');
});

it('ship is attacked (received)', () => {
  const pTwoBoard = initGameboard();
  pTwoBoard.setPosition(pTwoBoard.ships[0], 'A3', 'vertical');
  pTwoBoard.receiveAttack('B3');
  pTwoBoard.setPosition(pTwoBoard.ships[1], 'F4', 'horizontal');
  pTwoBoard.receiveAttack('F7');
  pTwoBoard.receiveAttack('F5');

  expect(pTwoBoard.ships[0].hitCount).toBe(1);
  expect(pTwoBoard.ships[1].hitCount).toBe(2);
});

it('board attacked (but missed)', () => {
  const pTwoBoard = initGameboard();
  pTwoBoard.setPosition(pTwoBoard.ships[0], 'A3', 'vertical');
  pTwoBoard.receiveAttack('F4');

  expect(pTwoBoard.ships[0].hitCount).toBe(0);
});

it('all ships are sunk', () => {
  const winnerBoard = initGameboard();
  winnerBoard.ships[0].hitCount = 5;
  winnerBoard.ships[1].hitCount = 4;
  winnerBoard.ships[2].hitCount = 3;
  winnerBoard.ships[3].hitCount = 2;
  winnerBoard.ships[4].hitCount = 2;
  winnerBoard.ships[5].hitCount = 1;
  winnerBoard.ships[6].hitCount = 1;

  expect(winnerBoard.checkShipStates()).toBe('all ships sunk');
});

it('there are ship/s remaining', () => {
  const winnerBoard = initGameboard();
  winnerBoard.ships[0].hitCount = 5;
  winnerBoard.ships[1].hitCount = 4;
  winnerBoard.ships[2].hitCount = 3;
  winnerBoard.ships[3].hitCount = 2;
  winnerBoard.ships[4].hitCount = 2;
  winnerBoard.ships[5].hitCount = 1;

  expect(winnerBoard.checkShipStates()).toBe('there are ship/s remaining');
});
