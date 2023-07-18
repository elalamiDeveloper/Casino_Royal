import styled from 'styled-components';

import { colors } from '../../assets';

const ButtonSecondaryContainer = styled.button`
  padding: 1rem 2.5rem;
  background: transparent;
  color: ${colors.textColor2};
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 10rem;
  transition: all 0.3s;
  border: 0.2rem solid ${colors.textColor2};

  &:hover {
    background: ${colors.bgColor1};
    color: ${colors.textColor1};
  }
`;

const ButtonSecondary = ({ children }) => {
  return <ButtonSecondaryContainer>{children}</ButtonSecondaryContainer>;
};

export default ButtonSecondary;
