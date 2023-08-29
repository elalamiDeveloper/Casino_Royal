import styled from 'styled-components';
import { profilImgUrl } from '../../assets/images';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  text-align: center;

  .img {
    width: 15rem;
    height: 15rem;
  }

  .text {
    position: relative;
    margin-top: -4rem;
    padding: 1rem;
    background: #333;
    color: #f6f6f6;
    border-radius: 0.2rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .cards-container {
    position: relative;

    .card-0 {
    }

    .card-1 {
    }
  }
`;

const Player = ({ className, username, stackEnJeu, deckID }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async (deckID) => {
      const {
        data: { cards },
      } = await axios.get(
        `https://www.deckofcardsapi.com/api/deck/new/draw/?count=2`
      );

      setCards(cards);
      console.log(cards);
    };

    if (deckID) getCards();
  }, [deckID]);

  const cardsContent = cards.map((card, i) => (
    <div key={i} className={`card-${i}`}>
      <img src={card.images.svg} alt="card-img" />
    </div>
  ));

  return (
    <PlayerContainer className={className}>
      <div className="img">
        <img src={profilImgUrl} alt="profil-img" />
      </div>
      <div className="text">
        <span className="username">{username}</span>
        <div className="stack-en-jeu">{stackEnJeu} $</div>
      </div>
      <div className="cards-container">{cardsContent}</div>
    </PlayerContainer>
  );
};

export default Player;
