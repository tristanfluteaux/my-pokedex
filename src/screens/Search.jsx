import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../components/Header.css";

const Search = ({ pokemon, shiny }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className={`parents-search ${shiny ? "list-background" : ""}`}>
        <input
          value={searchValue}
          onChange={handleChange}
          type="text"
          placeholder="Search a Pokemon ?"
          id="search-input"
          autoComplete="off"
        />

        <div className="search-result">
          <ul className="result-ul">
            {searchValue &&
              pokemon
                .filter((word) => word.name.match(searchValue))
                .sort((a, b) => {
                  return a.name < b.name ? -1 : 1;
                })
                .sort((a, b) => {
                  return (
                    a.name.match(searchValue).index -
                    b.name.match(searchValue).index
                  );
                })
                .map((poke) => (
                  <li key={poke.name}>
                    <NavLink className="suggest" to={`/pokemon/${poke.id}`}>
                      {poke.name}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
