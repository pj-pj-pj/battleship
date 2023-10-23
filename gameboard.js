const createShip = require('./ship.js');

const initGameboard = function () {
  const gameboard = {};

  // prettier-ignore
  gameboard.grid = ['A1','A2','A3','A4','A5','A6','A7',
                    'B1','B2','B3','B4','B5','B6','B7',
                    'C1','C2','C3','C4','C5','C6','C7',
                    'D1','D2','D3','D4','D5','D6','D7',
                    'E1','E2','E3','E4','E5','E6','E7',
                    'F1','F2','F3','F4','F5','F6','F7',
                    'G1','G2','G3','G4','G5','G6','G7',];

  gameboard.ships = [
    createShip('aircraftCarrier'),
    createShip('battleship'),
    createShip('cruiser'),
    createShip('destroyer'),
    createShip('dest2'),
    createShip('submarine'),
    createShip('sub2'),
  ];

  gameboard.setPosition = function (ship, start, erection) {
    const shipStartPosition = gameboard.grid.indexOf(start);

    if (shipStartPosition === -1) return 'invalid position';

    if (erection == 'horizontal') {
      for (
        let i = shipStartPosition;
        i <= shipStartPosition + (ship.length - 1);
        i++
      ) {
        const indexLabel = gameboard.grid[i];
        gameboard.grid[i] = `${ship.type}[${indexLabel}]`;
      }
    }

    if (erection === 'vertical') {
      for (
        let i = shipStartPosition;
        i <= shipStartPosition + (ship.length - 1) * 7;
        i += 7
      ) {
        const indexLabel = gameboard.grid[i];
        gameboard.grid[i] = `${ship.type}[${indexLabel}]`;
      }
    }
  };

  gameboard.receiveAttack = function (attackCoordinates) {
    let shipType;
    for (cell of gameboard.grid) {
      if (cell.includes(`[${attackCoordinates}]`)) shipType = cell.slice(0, -4);
    }

    for (ship of gameboard.ships) {
      if (ship.type === shipType) ship.receiveHit();
    }

    return 'attack missed';
  };

  gameboard.checkShipStates = function () {
    let sunkShipCount = 0;
    for (ship of gameboard.ships) {
      if (ship.isSunk()) sunkShipCount++;
    }

    if (sunkShipCount === gameboard.ships.length) return 'all ships sunk';

    return 'there are ship/s remaining';
  };

  return gameboard;
};

module.exports = initGameboard;
