import PokeCard from "../components/PokeCard";
import Search from "./Search";
import { useState } from "react";

import "./PokeList.css";

const PokeList = ({ pokemon, favorites, toogleFavorite }) => {
  const [generation, setGeneration] = useState(
    JSON.parse(localStorage.getItem("currentGeneration")) || "generation-i"
  );
  const [shiny, setShiny] = useState(true);

  function setGen(genNumber) {
    if (genNumber !== generation) {
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
          checked={generation === "generation-i"}
          readOnly
        />
        <label
          htmlFor="kanto"
          className="btn gen-button"
          onClick={() => setGen("generation-i")}
        >
          KANTO
        </label>
        <input
          type="radio"
          id="johto"
          name="gen-btn"
          checked={generation === "generation-ii"}
          readOnly
        />
        <label
          htmlFor="johto"
          className="btn gen-button"
          onClick={() => setGen("generation-ii")}
        >
          JOHTO
        </label>
        <input
          type="radio"
          id="hoenn"
          name="gen-btn"
          checked={generation === "generation-iii"}
          readOnly
        />
        <label
          htmlFor="hoenn"
          className="btn gen-button"
          onClick={() => setGen("generation-iii")}
        >
          HOENN
        </label>
        <input
          type="radio"
          id="sinnoh"
          name="gen-btn"
          checked={generation === "generation-iv"}
          readOnly
        />
        <label
          htmlFor="sinnoh"
          className="btn gen-button"
          onClick={() => setGen("generation-iv")}
        >
          SINNOH
        </label>
        <input
          type="radio"
          id="unys"
          name="gen-btn"
          checked={generation === "generation-v"}
          readOnly
        />
        <label
          htmlFor="unys"
          className="btn gen-button"
          onClick={() => setGen("generation-v")}
        >
          UNYS
        </label>
        <input
          type="radio"
          id="kalos"
          name="gen-btn"
          checked={generation === "generation-vi"}
          readOnly
        />
        <label
          htmlFor="kalos"
          className="btn gen-button"
          onClick={() => setGen("generation-vi")}
        >
          KALOS
        </label>
        <input
          type="radio"
          id="alola"
          name="gen-btn"
          checked={generation === "generation-vii"}
          readOnly
        />
        <label
          htmlFor="alola"
          className="btn gen-button"
          onClick={() => setGen("generation-vii")}
        >
          ALOLA
        </label>
        <input
          type="radio"
          id="galar"
          name="gen-btn"
          checked={generation === "generation-viii"}
          readOnly
        />
        <label
          htmlFor="galar"
          className="btn gen-button"
          onClick={() => setGen("generation-viii")}
        >
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
        {pokemon
          .filter((pokemon) => {
            if (pokemon.species.generation)
              return pokemon.species.generation.name === generation;
          })
          .map((pokemon) => (
            <PokeCard
              key={pokemon.name}
              pokemon={pokemon}
              shiny={shiny}
              favorites={favorites}
              toogleFavorite={toogleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default PokeList;
