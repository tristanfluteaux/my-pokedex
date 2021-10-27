import PokeCard from "./PokeCard";

import "./EvolutionChain.css";

const EvolutionChain = ({ pokemon, id }) => {
  const evolutionChain = [];

  const getEvolutionData = () => {
    let evolutionData = pokemon[id - 1].species.evolution_chain.chain;

    evolutionChain.push([evolutionData]);
    if (evolutionData.evolves_to.length > 0) {
      evolutionData = evolutionData.evolves_to;
    } else evolutionData = null;
    while (evolutionData) {
      const evolutionLevel = [];
      for (let i = 0; i < evolutionData.length; i++)
        evolutionLevel.push(evolutionData[i]);
      evolutionChain.push(evolutionLevel);
      if (evolutionData[0].evolves_to.length > 0) {
        evolutionData = evolutionData[0].evolves_to;
      } else evolutionData = null;
    }
  };
  getEvolutionData();

  return (
    <div className="evo-chain">
      {evolutionChain &&
        evolutionChain.length > 1 &&
        evolutionChain.map((evolveLevel, index) => {
          return (
            <div key={"blabla" + index} className="evo-level-container">
              <div key={"evo-level" + index} className="evo-level">
                {evolveLevel.map((evolve) => {
                  return (
                    <PokeCard
                      key={evolve.species.name}
                      name={evolve.species.name}
                      pokemon={pokemon[evolve.species.url.split("/")[6] - 1]}
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
            </div>
          );
        })}
    </div>
  );
};

export default EvolutionChain;
