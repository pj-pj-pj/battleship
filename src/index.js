import { createPlayer } from '../player';

//initialize player and their shipss
const p1 = createPlayer();
const p2 = createPlayer();

const acCarrier = p1.gameboard.ships[0];
const battleship = p1.gameboard.ships[1];
const cruiser = p1.gameboard.ships[2];
const destroyer = p1.gameboard.ships[3];
const dest2 = p1.gameboard.ships[4];
const submarine = p1.gameboard.ships[5];
const sub2 = p1.gameboard.ships[6];

const p2acCarrier = p2.gameboard.ships[0];
const p2battleship = p2.gameboard.ships[1];
const p2cruiser = p2.gameboard.ships[2];
const p2destroyer = p2.gameboard.ships[3];
const p2dest2 = p2.gameboard.ships[4];
const p2submarine = p2.gameboard.ships[5];
const p2sub2 = p2.gameboard.ships[6];

p1.gameboard.setPosition(acCarrier, 'A1', 'vertical');
p1.gameboard.setPosition(battleship, 'D3', 'horizontal');
p1.gameboard.setPosition(cruiser, 'C4', 'horizontal');
p1.gameboard.setPosition(destroyer, 'F4', 'vertical');
p1.gameboard.setPosition(dest2, 'B3', 'horizontal');
p1.gameboard.setPosition(submarine, 'E5', 'horizontal');
p1.gameboard.setPosition(sub2, 'B6', 'horizontal');

p2.gameboard.setPosition(p2acCarrier, 'B6', 'vertical');
p2.gameboard.setPosition(p2battleship, 'A1', 'horizontal');
p2.gameboard.setPosition(p2cruiser, 'D3', 'horizontal');
p2.gameboard.setPosition(p2destroyer, 'C1', 'vertical');
p2.gameboard.setPosition(p2dest2, 'B1', 'horizontal');
p2.gameboard.setPosition(p2submarine, 'F7', 'horizontal');
p2.gameboard.setPosition(p2sub2, 'E2', 'horizontal');
