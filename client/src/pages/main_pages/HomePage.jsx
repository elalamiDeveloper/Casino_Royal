import styled from 'styled-components';

import { homePageBackgroundUrl } from '../../assets/images';

const HomePageContainer = styled.main`
  min-height: calc(100vh - 10.95rem);
  background: url(${homePageBackgroundUrl}) center center no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const HomePage = () => {
  return <HomePageContainer></HomePageContainer>;
};

export default HomePage;
