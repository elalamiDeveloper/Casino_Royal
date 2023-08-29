import styled from 'styled-components';

import { PokerTable } from '../../components/main_components';

const PokerPageContainer = styled.div`
  min-height: calc(100vh - 15.65rem);
  background: #008abc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokerPage = () => {
  return (
    <PokerPageContainer>
      <PokerTable />
    </PokerPageContainer>
  );
};

export default PokerPage;
