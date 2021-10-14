import { NavLink } from "react-router-dom";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicMenu from "./BasicMenu";

const Header = () => {
  return (
    <div className="main-header">
      <NavLink className="header-navlink" to="/">
        <h1 className="header-title">Pokédex</h1>
      </NavLink>
      <BasicMenu />
    </div>
  );
};

export default Header;
