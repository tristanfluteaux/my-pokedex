import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

const PokemonChain = ({ pokemonSpecies }) => {
  const [evolutionChain, setEvolutionChain] = useState();

  useEffect(() => {
    const getEvolutionData = () => {
      axios.get(pokemonSpecies.evolution_chain.url).then((res) => {
        let evolutionData = res.data.chain;
        const evoChain = [];

        evoChain.push([evolutionData]);
        if (evolutionData.evolves_to) {
          evolutionData = evolutionData.evolves_to;
        } else evolutionData = null;
        while (evolutionData) {
          const evolutionLevel = [];
          for (let i = 0; i < evolutionData.length; i++)
            evolutionLevel.push(evolutionData[i]);
          evoChain.push(evolutionLevel);
          if (evolutionData[0].evolves_to[0]) {
            evolutionData = evolutionData[0].evolves_to;
          } else evolutionData = null;
        }
        setEvolutionChain(evoChain);
      });
    };
    if (pokemonSpecies) getEvolutionData();
  }, [pokemonSpecies]);

  return (
    <>
      {evolutionChain &&
        evolutionChain.length > 1 &&
        evolutionChain.map((evolveLevel, index) => {
          return (
            <div key={index}>
              {evolveLevel.map((evolve) => {
                return (
                  <PokeCard
                    key={evolve.species.name}
                    name={evolve.species.name}
                    url={evolve.species.url.replace("-species", "")}
                    shiny={true}
                  />
                );
              })}
            </div>
          );
        })}
    </>
  );
};

export default PokemonChain;
