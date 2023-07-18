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

const loginInputsList = [
  {
    id: uuidv4(),
    name: 'username',
    label: "Nom d'utilisateur",
    type: 'text',
    placeHolder: "Veuillez saisir votre nom d'utilisateur.",
  },
  {
    id: uuidv4(),
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    placeHolder: 'Saisissez votre mot de passe.',
  },
];

const signUpList = [
  {
    id: uuidv4(),
    title: "Créons votre nom d'utilisateur",
    text: 'Vous utiliserez ce nom lorsque vous jouerez à nos jeux.',
    label: "Nom d'utilisateur",
    span: '4 caractère ou plus',
    type: 'text',
    name: 'username',
  },

  {
    id: uuidv4(),
    title: 'Créer Un Mot De Passe',
    text: 'Maintenant, définissez un mot de passe',
    label: 'Mot de passe',
    span: '8 caractères ou plus',
    type: 'password',
    name: 'password',
  },
  {
    id: uuidv4(),
    title: 'Quelle est votre adresse e-mail ?',
    text: "Nous l'utiliserons pour vous envoyer des cadeaux",
    label: 'E-mail',
    span: '',
    type: 'text',
    name: 'email',
  },
  {
    id: uuidv4(),
    title: 'Les aspects légaux...',
    text: 'Nous avons besoin de votre date de naissance pour confirmer que vous avez plus de 18',
    label: 'Date de naissance (DD/MM/YYYY)',
    span: "Je confirme que j'ai au moins 18 ans",
    type: 'date',
    name: 'birthYear',
  },
];

export { navBarList, loginInputsList, signUpList };
