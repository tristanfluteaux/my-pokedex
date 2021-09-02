import axios from "axios";
import PokeCard from "../components/PokeCard";
import { useState, useEffect } from "react";

import "./PokeList.css";

const PokeList = () => {
  const [generation, setGeneration] = useState(1);
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(0);
  const [list, setList] = useState([]);

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
      setList([]);
      setGeneration(genNumber);
    }
  }

  return (
    <>
      <div className='list-button'>
        <button className='gen-button' onClick={() => setGen(1)}>Kanto</button>
        <button className='gen-button' onClick={() => setGen(2)}>Johto</button>
        <button className='gen-button' onClick={() => setGen(3)}>Hoenn</button>
        <button className='gen-button' onClick={() => setGen(4)}>Sinnoh</button>
        <button className='gen-button' onClick={() => setGen(5)}>Unys</button>
        <button className='gen-button' onClick={() => setGen(6)}>Kalos</button>
        <button className='gen-button' onClick={() => setGen(7)}>Alola</button>
        <button className='gen-button' onClick={() => setGen(8)}>Galar</button>
      </div>
    <div className="main-list">
      {list.map((pokemon) => (
        <PokeCard key={pokemon.name} {...pokemon} />
      ))}
    </div>
  </>
  );
};

export default PokeList;
