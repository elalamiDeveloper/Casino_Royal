import axios from "axios";
import {
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import apiURL from "../../assets/url";
import { RoomsList } from "../../components/second_components";

const PokerRoomsPageContainer = styled.main`
  margin-top: 2rem;
`;

const PokerRoomsPage = () => {
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

  return (
    <PokerRoomsPageContainer>
      <RoomsList
        rooms={rooms}
        type="poker"
      />
    </PokerRoomsPageContainer>
  );
};

export default PokerRoomsPage;
