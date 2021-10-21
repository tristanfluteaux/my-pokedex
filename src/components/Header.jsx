import { NavLink } from "react-router-dom";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Menu/NavMenu";

const Header = () => {
  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898);
  };

  return (
    <div className="main-header">
      <NavLink className="header-navlink" to="/">
        <h1 className="header-title">Pokédex</h1>
      </NavLink>
      <NavMenu />
      <button
        className="random-btn"
        onClick={() =>
          (window.location.href = "/pokemon/" + getRandomPokemonId())
        }
      ></button>
      <BasicMenu />
    </div>
  );
};

export default Header;
