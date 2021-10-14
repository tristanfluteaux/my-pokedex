import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

import "./EvolutionChain.css";

const EvolutionChain = ({ pokemonSpecies }) => {
  const [evolutionChain, setEvolutionChain] = useState();
  const evoChain = [];

  useEffect(() => {
    const getEvolutionData = () => {
      axios.get(pokemonSpecies.evolution_chain.url).then((res) => {
        let evolutionData = res.data.chain;

        evoChain.push([evolutionData]);
        if (evolutionData.evolves_to.length > 0) {
          evolutionData = evolutionData.evolves_to;
        } else evolutionData = null;
        while (evolutionData) {
          const evolutionLevel = [];
          for (let i = 0; i < evolutionData.length; i++)
            evolutionLevel.push(evolutionData[i]);
          evoChain.push(evolutionLevel);
          if (evolutionData[0].evolves_to.length > 0) {
            evolutionData = evolutionData[0].evolves_to;
          } else evolutionData = null;
        }
        setEvolutionChain(evoChain);
      });
    };
    if (pokemonSpecies) getEvolutionData();
  }, [pokemonSpecies]);

  return (
    <div className="evo-chain">
      {evolutionChain &&
        evolutionChain.length > 1 &&
        evolutionChain.map((evolveLevel, index) => {
          return (
            <>
              <div key={"evo-level" + index} className="evo-level">
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
              {index < evolutionChain.length - 1 && (
                <p key={"evo-chain-arrow" + index} className="evo-chain-arrow">
                  &#10140;
                </p>
              )}
            </>
          );
        })}
    </div>
  );
};

export default EvolutionChain;