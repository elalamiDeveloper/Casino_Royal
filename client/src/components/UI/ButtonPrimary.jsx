import styled from 'styled-components';

import { colors } from '../../assets';

const ButtonPrimaryContainer = styled.button`
  padding: 1rem 2.5rem;
  color: ${colors.textColor2};
  background: ${colors.blueColor};
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 10rem;
  transition: all 0.3s;
  border: 0.2rem solid ${colors.blueColor};

  &:hover {
    background: ${colors.blueAltColor};
    border-color: ${colors.blueAltColor};
  }
`;

const ButtonPrimary = ({ children }) => {
  return <ButtonPrimaryContainer>{children}</ButtonPrimaryContainer>;
};

export default ButtonPrimary;
