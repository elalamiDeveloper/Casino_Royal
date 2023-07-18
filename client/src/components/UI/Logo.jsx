import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { logoUrl } from '../../assets/images';

const LogoContainer = styled.div`
  width: 20rem;
`;

const Logo = () => {
  return (
    <LogoContainer className="logo-container">
      <Link to="/">
        <img src={logoUrl} alt="logo casino royal" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
