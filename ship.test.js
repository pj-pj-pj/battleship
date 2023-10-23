const createShip = require('./ship.js');

it('ship HAS SUNK', () => {
  const sunkShip = createShip('submarine'); // length is 1
  sunkShip.receiveHit();

  expect(sunkShip.isSunk()).toBe(true);
});

it('ship NOT sunk', () => {
  const floatingShip = createShip('battleship'); // length is 4
  floatingShip.receiveHit();

  expect(floatingShip.isSunk()).toBe(false);
});
