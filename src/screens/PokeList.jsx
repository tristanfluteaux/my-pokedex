import axios from "axios";
import PokeCard from "../components/PokeCard";
import Search from "./Search";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

import "./PokeList.css";

const PokeList = ({ favorites, toogleFavorite }) => {
  const [generation, setGeneration] = useState(
    JSON.parse(localStorage.getItem("currentGeneration")) || 1
  );
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState();
  const [shiny, setShiny] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/generation/${generation}/`)
      .then((result) => {
        setOffset(result.data.pokemon_species[0].url.split("/")[6] - 1);
        setLimit(result.data.pokemon_species.length);
      });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((result) => setList(result.data.results));
  }, [generation, offset, limit]);

  function setGen(genNumber) {
    if (genNumber !== generation) {
      setList();
      setGeneration(genNumber);
      localStorage.setItem("currentGeneration", JSON.stringify(genNumber));
    }
  }

  function getShiny() {
    setShiny(!shiny);
  }

  return (
    <>
      <Search shiny={shiny} />
      <div className={`list-button ${shiny ? "list-background" : ""}`}>
        <input
          type="radio"
          id="kanto"
          name="gen-btn"
          checked={generation === 1}
        />
        <label for="kanto" className="btn gen-button" onClick={() => setGen(1)}>
          KANTO
        </label>
        <input
          type="radio"
          id="johto"
          name="gen-btn"
          checked={generation === 2}
        />
        <label for="johto" className="btn gen-button" onClick={() => setGen(2)}>
          JOHTO
        </label>
        <input
          type="radio"
          id="hoenn"
          name="gen-btn"
          checked={generation === 3}
        />
        <label for="hoenn" className="btn gen-button" onClick={() => setGen(3)}>
          HOENN
        </label>
        <input
          type="radio"
          id="sinnoh"
          name="gen-btn"
          checked={generation === 4}
        />
        <label
          for="sinnoh"
          className="btn gen-button"
          onClick={() => setGen(4)}
        >
          SINNOH
        </label>
        <input
          type="radio"
          id="unys"
          name="gen-btn"
          checked={generation === 5}
        />
        <label for="unys" className="btn gen-button" onClick={() => setGen(5)}>
          UNYS
        </label>
        <input
          type="radio"
          id="kalos"
          name="gen-btn"
          checked={generation === 6}
        />
        <label for="kalos" className="btn gen-button" onClick={() => setGen(6)}>
          KALOS
        </label>
        <input
          type="radio"
          id="alola"
          name="gen-btn"
          checked={generation === 7}
        />
        <label for="alola" className="btn gen-button" onClick={() => setGen(7)}>
          ALOLA
        </label>
        <input
          type="radio"
          id="galar"
          name="gen-btn"
          checked={generation === 8}
        />
        <label for="galar" className="btn gen-button" onClick={() => setGen(8)}>
          GALAR
        </label>
        <button
          className={`btn shiny-button ${shiny ? "" : "btn-checked"}`}
          onClick={() => getShiny()}
        >
          SHINY
        </button>
      </div>
      <div className={`main-list ${shiny ? "list-background" : ""}`}>
        {!list ? (
          <Loader />
        ) : (
          list.map((pokemon) => (
            <PokeCard
              key={pokemon.name}
              {...pokemon}
              shiny={shiny}
              favorites={favorites}
              toogleFavorite={toogleFavorite}
            />
          ))
        )}
      </div>
    </>
  );
};

export default PokeList;
