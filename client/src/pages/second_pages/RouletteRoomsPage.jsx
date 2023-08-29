import axios from "axios";
import {
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import apiURL from "../../assets/url";
import { RoomsList } from "../../components/second_components";

const RouletteRoomsPageContainer = styled.main`
  margin-top: 2rem;
`;

const RouletteRoomsPage = () => {
  const [rooms, setRooms] = useState(
    []
  );

  useEffect(() => {
    const getData = async () => {
      const {
        data: { data },
      } = await axios.get(
        `${apiURL}/rooms?type=roulette`
      );
      setRooms(data.rooms);
    };
    getData();
  }, []);

  return (
    <RouletteRoomsPageContainer>
      <RoomsList
        rooms={rooms}
        type="roulette"
      />
    </RouletteRoomsPageContainer>
  );
};

export default RouletteRoomsPage;
