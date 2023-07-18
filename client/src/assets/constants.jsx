import { v4 as uuidv4 } from 'uuid';

import {
  GiPokerHand,
  LuTable,
  PiPokerChipBold,
  BiSolidGift,
} from '../assets/icons';

const navBarList = [
  {
    id: uuidv4(),
    path: '/poker',
    label: 'Poker',
    icon: <GiPokerHand className="navbar-icon" />,
  },
  {
    id: uuidv4(),
    path: '/roulette',
    label: 'Roulette',
    icon: <LuTable className="navbar-icon" />,
  },
  {
    id: uuidv4(),
    path: '/blackjack',
    label: 'Blackjack',
    icon: <PiPokerChipBold className="navbar-icon" />,
  },
  {
    id: uuidv4(),
    path: '/gift',
    label: 'Cadeau',
    icon: <BiSolidGift className="navbar-icon" />,
  },
];

export { navBarList };
