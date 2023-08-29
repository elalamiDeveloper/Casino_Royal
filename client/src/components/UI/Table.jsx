import styled from "styled-components";
import { colors } from "../../assets";

const TableContainer = styled.table`
  border-spacing: 0;
  width: 95%;
  margin: 0 auto;
  font-size: 1.6rem;
  border-left: 0.2rem solid
    ${colors.bgColor3};
  .table-head {
    .table-header-column {
      background: ${colors.bgColor3};
      font-weight: 700;
    }
  }

  .table-body {
    .table-body-row {
      &:hover {
        background-color: ${colors.bgColor3};
        cursor: pointer;
      }

      .table-body-column {
        border-bottom: 0.2rem solid
          ${colors.bgColor3};
        border-right: 0.2rem solid
          ${colors.bgColor3};
        text-align: center;
      }
    }
  }

  .table-body-column,
  .table-header-column {
    padding: 1rem;
  }
`;

const Table = ({
  headContent,
  bodyContent,
}) => {
  return (
    <TableContainer>
      <thead className="table-head">
        {headContent}
      </thead>
      <tbody className="table-body ">
        {bodyContent}
      </tbody>
    </TableContainer>
  );
};

export default Table;
