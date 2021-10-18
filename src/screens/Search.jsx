import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "../components/Header.css";

const Search = ({ shiny }) => {
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState([]);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const getSearch = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
        .then((res) => setName(res.data.results));
    };
    getSearch();
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 375) setIsFixed(true);
    else setIsFixed(false);
  });
  return (
    <>
      <div
        className={`parents-search ${shiny ? "list-background" : ""} ${
          isFixed ? "parents-search-fixed" : ""
        }`}
      >
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
              name &&
              name
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
                    <NavLink
                      className="suggest"
                      to={`/pokemon/${poke.url.split("/")[6]}`}
                    >
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
