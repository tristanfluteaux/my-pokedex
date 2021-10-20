import { NavLink } from "react-router-dom";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./Menu/NavMenu";

const Header = () => {
  return (
    <div className="main-header">
      <NavLink className="header-navlink" to="/">
        <h1 className="header-title">Pokédex</h1>
      </NavLink>
      <NavMenu/>
    </div>
  );
};

export default Header;
