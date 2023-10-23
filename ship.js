function createShip(type) {
  const ship = {};

  ship.type = type;
  ship.hitCount = 0;

  ship.isSunk = function () {
    if (ship.length === ship.hitCount) return true;
    return false;
  };

  ship.receiveHit = function () {
    ship.hitCount++;
  };

  ship.setLength = function (type) {
    if (type == 'aircraftCarrier') ship.length = 5;
    if (type == 'battleship') ship.length = 4;
    if (type == 'cruiser') ship.length = 3;
    if (type == 'destroyer' || type == 'dest2') ship.length = 2;
    if (type == 'submarine' || type == 'sub2') ship.length = 1;
  };

  ship.setLength(type);

  return ship;
}

module.exports = createShip;
