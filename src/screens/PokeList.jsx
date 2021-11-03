import PokeCard from "../components/PokeCard";
import Search from "./Search";
import { useState } from "react";

import "./PokeList.css";

const PokeList = ({ pokemon, favorites, toogleFavorite }) => {
  const [type, setType] = useState("");
  const [generation, setGeneration] = useState(
    JSON.parse(localStorage.getItem("currentGeneration")) || ""
  );
  const [shiny, setShiny] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  function setGen(genNumber) {
    if (genNumber === generation) genNumber = "";
    setGeneration(genNumber);
    localStorage.setItem("currentGeneration", JSON.stringify(genNumber));
  }

  function getShiny() {
    setShiny(!shiny);
  }

  function showButton() {
    setShowForm(!showForm)
  }
  function showTypeButton() {
    setShowTypes(!showTypes)
  }

  return (
    <>
      <Search pokemon={pokemon} shiny={shiny} />
      <div className={`list-button ${shiny ? "list-background" : ""}`}>
        <input
          type="radio"
          id="gen"
          name="gen"
          checked={generation}
          readOnly
        />
        <label
          htmlFor="gen"
          className="btn gen-button"
          onClick={showButton}
        >
          GEN
        </label>

        <button
          className={`btn shiny-button ${shiny ? "" : "btn-checked"}`}
          onClick={() => getShiny()}
          >
          SHINY
        </button>
        <input
          type="radio"
          id="types"
          name="type"
          checked={type}
          readOnly
          />

          <label
          htmlFor="types"
          className="btn gen-button"
          onClick={showTypeButton}
          >
          TYPES
        </label>
        <input
          type="radio"
          id="types"
          name="gen-btn"
          readOnly
          />
      </div>
          <div className={`main-list ${shiny ? "list-background" : ""}`}>
          {showForm &&
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
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
          </div>
          
          }
          
        {showTypes &&
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
        <input
          type="radio"
          id="fire"
          name="type-btn"
          checked={type === "fire"}
          readOnly
          />
        <label
          htmlFor="fire"
          className={`btn type-button fire`}
          onClick={() => setType(type === "fire" ? "" : "fire")}
        >
          FIRE
        </label>
        <input
          type="radio"
          id="water"
          name="type-btn"
          checked={type === "water"}
          readOnly
          />
        <label
          htmlFor="water"
          className={`btn type-button water`}
          onClick={() => setType(type === "water" ? "" : "water")}
        >
          WATER
        </label>
        <input
          type="radio"
          id="grass"
          name="type-btn"
          checked={type === "grass"}
          readOnly
          />
        <label
          htmlFor="grass"
          className={`btn type-button grass`}
          onClick={() => setType(type === "grass" ? "" : "grass")}
        >
          GRASS
        </label>
        <input
          type="radio"
          id="spy"
          name="type-btn"
          checked={type === "psychic"}
          readOnly
          />
        <label
          htmlFor="psy"
          className={`btn type-button psychic`}
          onClick={() => setType(type === "psychic" ? "" : "psychic")}
        >
          PSY
        </label>
        <input
          type="radio"
          id="electric"
          name="type-btn"
          checked={type === "electric"}
          readOnly
          />
        <label
          htmlFor="electric"
          className={`btn type-button electric`}
          onClick={() => setType(type === "electric" ? "" : "electric")}
        >
          ELEC
        </label>
        <input
          type="radio"
          id="bug"
          name="type-btn"
          checked={type === "bug"}
          readOnly
          />
        <label
          htmlFor="bug"
          className={`btn type-button bug`}
          onClick={() => setType(type === "bug" ? "" : "bug")}
        >
          BUG
        </label>
        <input
          type="radio"
          id="normal"
          name="type-btn"
          checked={type === "normal"}
          readOnly
          />
        <label
          htmlFor="normal"
          className={`btn type-button normal`}
          onClick={() => setType(type === "normal" ? "" : "normal")}
        >
          NORMAL
        </label>
        <input
          type="radio"
          id="poison"
          name="type-btn"
          checked={type === "poison"}
          readOnly
          />
        <label
          htmlFor="poison"
          className={`btn type-button poison`}
          onClick={() => setType(type === "poison" ? "" : "poison")}
        >
          POISON
        </label>
        <input
          type="radio"
          id="fairy"
          name="type-btn"
          checked={type === "fairy"}
          readOnly
          />
        <label
          htmlFor="fairy"
          className={`btn type-button fairy`}
          onClick={() => setType(type === "fairy" ? "" : "fairy")}
        >
          FAIRY
        </label>
        <input
          type="radio"
          id="fighting"
          name="type-btn"
          checked={type === "fighting"}
          readOnly
          />
        <label
          htmlFor="figthing"
          className={`btn type-button fighting`}
          onClick={() => setType(type === "fighting" ? "" : "fighting")}
        >
          FIGHT
        </label>
        <input
          type="radio"
          id="ice"
          name="type-btn"
          checked={type === "ice"}
          readOnly
          />
        <label
          htmlFor="ice"
          className={`btn type-button ice`}
          onClick={() => setType(type === "ice" ? "" : "ice")}
        >
          ICE
        </label>
        <input
          type="radio"
          id="steel"
          name="type-btn"
          checked={type === "steel"}
          readOnly
          />
        <label
          htmlFor="steel"
          className={`btn type-button steel`}
          onClick={() => setType(type === "steel" ? "" : "steel")}
        >
          STEEL
        </label>
        <input
          type="radio"
          id="dragon"
          name="type-btn"
          checked={type === "dragon"}
          readOnly
          />
        <label
          htmlFor="dragon"
          className={`btn type-button dragon`}
          onClick={() => setType(type === "dragon" ? "" : "dragon")}
        >
          DRAGON
        </label>
        <input
          type="radio"
          id="dark"
          name="type-btn"
          checked={type === "dark"}
          readOnly
          />
        <label
          htmlFor="dark"
          className={`btn type-button dark`}
          onClick={() => setType(type === "dark" ? "" : "dark")}
        >
          DARK
        </label>
        <input
          type="radio"
          id="flying"
          name="type-btn"
          checked={type === "flying"}
          readOnly
          />
        <label
          htmlFor="flying"
          className={`btn type-button flying`}
          onClick={() => setType(type === "flying" ? "" : "flying")}
        >
          FLYING
        </label>
        <input
          type="radio"
          id="rock"
          name="type-btn"
          checked={type === "rock"}
          readOnly
          />
        <label
          htmlFor="rock"
          className={`btn type-button rock`}
          onClick={() => setType(type === "rock" ? "" : "rock")}
        >
          ROCK
        </label>
        <input
          type="radio"
          id="ground"
          name="type-btn"
          checked={type === "ground"}
          readOnly
          />
        <label
          htmlFor="ground"
          className={`btn type-button ground`}
          onClick={() => setType(type === "ground" ? "" : "ground")}
        >
          GROUND
        </label>
        <input
          type="radio"
          id="ghost"
          name="type-btn"
          checked={type === "ghost"}
          readOnly
          />
        <label
          htmlFor="ghost"
          className={`btn type-button ghost`}
          onClick={() => setType(type === "ghost" ? "" : "ghost")}
        >
          GHOST
        </label>
        </div>
}
        </div>
      <div className={`main-list ${shiny ? "list-background" : ""}`}>
        {pokemon
          .filter((pokemon) => {
            if (generation) {
              if (pokemon.species.generation)
                return pokemon.species.generation.name === generation;
              return false;
            }
            return true;
          })
          .filter((pokemon) => {
            if (type) {
              for (let i = 0; i < pokemon.types.length; i++) {
                if (pokemon.types[i].type.name === type) return true;
              }
              return false;
            }
            return true;
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
