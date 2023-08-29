import styled from 'styled-components';
import Player from './Player';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PokerTableContainer = styled.div`
  width: 100rem;
  height: 75rem;

  position: relative;

  .border-table,
  .table {
    clip-path: ellipse(50% 37% at 50% 50%);
    position: absolute;
  }

  .border-table {
    top: -3rem;
    left: -3rem;
    width: calc(100% + 6rem);
    height: calc(100% + 6rem);
    background: #2b2727;
  }

  .table {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a8d50;
  }
`;

const PokerTable = () => {
  const { user } = useSelector(({ auth }) => auth);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    const getDeck = async () => {
      const { data } = await axios.get(
        'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
      );

      setDeck(data);
    };

    getDeck();
  }, []);

  return (
    <PokerTableContainer>
      <div className="border-table"></div>
      <div className="table"></div>
      <Player
        className="player-me"
        stackEnJeu={user.stackEnJeu}
        username={user.username}
        deckID={deck?.deck_id}
      />
    </PokerTableContainer>
  );
};

export default PokerTable;
