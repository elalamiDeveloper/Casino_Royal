import styled from 'styled-components';

const PokerTableContainer = styled.div`
  width: 100rem;
  height: 75rem;
  clip-path: ellipse(50% 37% at 50% 50%);

  position: relative;

  .border-table,
  .table {
    position: absolute;
    top: 0;
    left: 0;
  }

  .border-table {
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    background: red;
  }

  .table {
    width: 100%;
    height: 100%;
    background: #0a8d50;
  }
`;

const PokerTable = () => {
  return (
    <PokerTableContainer>
      <div className="border-table"></div>
      <div className="table"></div>
    </PokerTableContainer>
  );
};

export default PokerTable;
