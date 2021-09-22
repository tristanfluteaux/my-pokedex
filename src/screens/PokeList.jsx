import axios from "axios";
import PokeCard from "../components/PokeCard";
import Search from "./Search";
import { useState, useEffect } from "react";

import "./PokeList.css";

const PokeList = () => {
  const [generation, setGeneration] = useState(1);
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState([]);
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
  }, [generation, offset, limit, shiny]);

  function setGen(genNumber) {
    if (genNumber !== generation) {
      setList([]);
      setGeneration(genNumber);
    }
  }

  function getShiny() {
    setShiny(!shiny);
  }

  return (
    <>
      <Search shiny={shiny}/>
      <div className={`list-button ${shiny ? "list-background" : ""}`}>
        <button className="gen-button" onClick={() => setGen(1)}>
          KANTO
        </button>
        <button className="gen-button" onClick={() => setGen(2)}>
          JOHTO
        </button>
        <button className="gen-button" onClick={() => setGen(3)}>
          HOENN
        </button>
        <button className="gen-button" onClick={() => setGen(4)}>
          SINNOH
        </button>
        <button className="gen-button" onClick={() => setGen(5)}>
          UNYS
        </button>
        <button className="gen-button" onClick={() => setGen(6)}>
          KALOS
        </button>
        <button className="gen-button" onClick={() => setGen(7)}>
          ALOLA
        </button>
        <button className="gen-button" onClick={() => setGen(8)}>
          GALAR
        </button>
        <button className="shiny-button" onClick={() => getShiny()}>
          SHINY
        </button>
      </div>
      <div className={`main-list ${shiny ? "list-background" : ""}`}>
        {list.map((pokemon) => (
          <PokeCard key={pokemon.name} {...pokemon} shiny={shiny} />
        ))}
      </div>
    </>
  );
};

export default PokeList;
