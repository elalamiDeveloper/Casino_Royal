import styled from "styled-components";
import { Link } from "react-router-dom";

import { navBarList } from "../../assets/constants";
import { colors } from "../../assets";

const NavBarContainer = styled.nav`
  grid-column: span 2;
  padding: 1.5rem;
  padding-bottom: 0;

  .navbar-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    .navbar-item {
      color: #fff;
      transition: all 0.3s;

      &:hover {
        color: ${colors.blueColor};
      }

      .navbar-link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        .navbar-icon {
          font-size: 3.2rem;
        }

        .navbar-text {
          font-size: 1.8rem;
          font-weight: 500;
        }
      }
    }
  }
`;

const NavBar = () => {
  const navBarContent = navBarList.map(
    (item) => (
      <li
        key={item.id}
        className="navbar-item">
        <Link
          to={item.path}
          className="navbar-link">
          {item.icon}
          <span className="navbar-text">
            {item.label}
          </span>
        </Link>
      </li>
    )
  );

  return (
    <NavBarContainer>
      <ul className="navbar-list">
        {navBarContent}
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
