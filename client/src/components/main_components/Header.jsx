import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { profilImgUrl } from '../../assets/images';
import { colors } from '../../assets';
import { Logo, ButtonPrimary, ButtonSecondary } from '../UI';
import { NavBar } from '../second_components';
import { useSelector } from 'react-redux';

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

  .profil-container {
    display: flex;
    gap: 1.5rem;
    justify-content: flex-end;
    align-items: center;

    .bankroll-text {
      font-size: 1.8rem;
      font-weight: 700;
      color: #f6f6f6;
    }

    .profil-img-container {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const Header = ({ isAuth }) => {
  const { user } = useSelector(({ auth }) => auth);

  return (
    <HeaderContainer>
      <Logo />

      {!isAuth ? (
        <div className="btns-container">
          <ButtonSecondary>
            <Link to="/login">connexion</Link>
          </ButtonSecondary>
          <ButtonPrimary>
            <Link to="/signup">s&apos;inscrire</Link>
          </ButtonPrimary>
        </div>
      ) : (
        <div className="profil-container">
          <span className="bankroll-text">{user.bankroll} $</span>
          <div className="profil-img-container">
            <img src={profilImgUrl} alt="profil-img" />
          </div>
        </div>
      )}

      {isAuth && <NavBar />}
    </HeaderContainer>
  );
};

export default Header;
