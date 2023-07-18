import styled from 'styled-components';

import { logoUrl } from '../../assets/images';

const LogoContainer = styled.div`
  width: 20rem;
`;

const Logo = () => {
  return (
    <LogoContainer className="logo-container">
      <img src={logoUrl} alt="logo casino royal" />
    </LogoContainer>
  );
};

export default Logo;
