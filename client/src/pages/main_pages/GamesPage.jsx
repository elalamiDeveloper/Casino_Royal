import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components/main_components';

const GamePageContainer = styled.main``;

const GamesPage = () => {
  <GamePageContainer>
    <Header />
    <Outlet />
  </GamePageContainer>;
};

export default GamesPage;
