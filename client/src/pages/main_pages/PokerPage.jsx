import axios from "axios";
import {
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import apiURL from "../../assets/url";
import { Table } from "../../components/UI";
import { colors } from "../../assets";
import { GiPokerHand } from "../../assets/icons";

const PokerPageContainer = styled.main`
  margin-top: 2rem;

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

const PokerPage = () => {
  const [rooms, setRooms] = useState(
    []
  );

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${apiURL}/rooms?type=poker`
      );
      setRooms(data.rooms);
    };
    getData();
  }, []);

  const headTableContent = (
    <tr>
      <th className="table-header-column">
        Nom
      </th>
      <th className="table-header-column">
        Encheres
      </th>
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
        <td className="table-body-column">
          €{room.sBlind}/€{room.bBlind}
        </td>
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
          <Link
            to={`/poker/${room._id}`}
            className="game-btn">
            <GiPokerHand className="game-icon" />
          </Link>
        </td>
      </tr>
    )
  );

  return (
    <PokerPageContainer>
      <Table
        headContent={headTableContent}
        bodyContent={bodyTableContent}
      />
    </PokerPageContainer>
  );
};

export default PokerPage;
