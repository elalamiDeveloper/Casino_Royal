import styled from 'styled-components';

import { FaBug } from '../../assets/icons';
import { colors } from '../../assets';

const ErrorPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background: ${colors.bgColor1};
  min-height: 100vh;
  text-align: center;

  .error-title {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .error-text {
    font-size: 2.2rem;
    text-transform: capitalize;
  }

  .error-icon {
    font-size: 3.8rem;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <h1 className="error-title">error 404</h1>
      <p className="error-text">page not found</p>
      <FaBug className="error-icon" />
    </ErrorPageContainer>
  );
};
export default ErrorPage;
