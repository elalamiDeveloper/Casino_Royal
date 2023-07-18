import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../assets';
import { Logo, ButtonPrimary, ButtonSecondary } from '../UI';
import { NavBar } from '../second_components';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 1.5rem;
  background: ${colors.bgColor2};
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);

  .btns-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 2.5rem;
  }
`;

const Header = () => {
  const isAuth = false;

  return (
    <HeaderContainer>
      <Logo />

      <div className="btns-container">
        <ButtonSecondary>
          <Link to="/2">connexion</Link>
        </ButtonSecondary>
        <ButtonPrimary>
          <Link to="/">s'inscrire</Link>
        </ButtonPrimary>
      </div>

      {isAuth && <NavBar />}
    </HeaderContainer>
  );
};

export default Header;
