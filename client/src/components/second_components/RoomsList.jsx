import styled from "styled-components";
import { Table } from "../UI";

import { Link } from "react-router-dom";
import { colors } from "../../assets";
import {
  GiPokerHand,
  LuTable,
} from "../../assets/icons";

const RoomsListContainer = styled.div`
  .game-btn {
    &:hover {
      transform: scale(1.1);
    }

    .game-icon {
      font-size: 2.4rem;
      color: #f6f6f6;
      background: ${colors.greenColor};
      padding: 0.25rem;
      border-radius: 50%;
    }
  }
`;

const RoomsList = ({ rooms, type }) => {
  const headTableContent = (
    <tr>
      <th className="table-header-column">
        Nom
      </th>
      {type === "poker" && (
        <th className="table-header-column">
          Encheres
        </th>
      )}
      <th className="table-header-column">
        Minimum Autorisé
      </th>
      <th className="table-header-column">
        Maximum Autorisé
      </th>
      <th className="table-header-column">
        Jrs/Sgs
      </th>
      <th className="table-header-column">
        Entrer
      </th>
    </tr>
  );

  const bodyTableContent = rooms.map(
    (room) => (
      <tr
        key={room._id}
        className="table-body-row">
        <td className="table-body-column">
          {room.name}
        </td>
        {type === "poker" && (
          <td className="table-body-column">
            €{room.sBlind}/€
            {room.bBlind}
          </td>
        )}
        <td className="table-body-column">
          €{room.minAut}
        </td>
        <td className="table-body-column">
          €{room.maxAut}
        </td>
        <td className="table-body-column">
          {room.nbPlayer}/
          {room.maxPlayer}
        </td>
        <td className="table-body-column">
          {type === "poker" ? (
            <Link
              to={`/poker/${room._id}`}
              className="game-btn">
              <GiPokerHand className="game-icon" />
            </Link>
          ) : (
            <Link
              to={`/roulette/${room._id}`}
              className="game-btn">
              <LuTable className="game-icon" />
            </Link>
          )}
        </td>
      </tr>
    )
  );

  return (
    <RoomsListContainer>
      <Table
        headContent={headTableContent}
        bodyContent={bodyTableContent}
      />
    </RoomsListContainer>
  );
};

export default RoomsList;
