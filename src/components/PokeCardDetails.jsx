import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PokeCard from "./PokeCard";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";

const PokeCardDetails = ({ details, setDetails }) => {
  const [evolutionChain, setEvolutionChain] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState();

  useEffect(() => {
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${details.id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
  }, []);

  useEffect(() => {
    const getPokemonSpecies = () => {
      axios.get(details.species.url).then((res) => setPokemonSpecies(res.data));
    };
    getPokemonSpecies();
  }, []);

  useEffect(() => {
    const getEvolutionData = () => {
      axios.get(pokemonSpecies.evolution_chain.url).then((res) => {
        let evolutionData = res.data.chain;
        const evoChain = [];

        do {
          evoChain.push(evolutionData);
          if (evolutionData.evolves_to)
            evolutionData = evolutionData.evolves_to[0];
          else evolutionData = null;
        } while (evolutionData);
        console.log(evoChain);
        setEvolutionChain(evoChain);
      });
    };
    if (pokemonSpecies) getEvolutionData();
  }, [pokemonSpecies]);

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <PokemonInfos details={details} />
      <PokemonStats stats={details.stats} />
      {evolutionChain &&
        evolutionChain.length > 1 &&
        evolutionChain.map((evolve) => {
          return (
            <PokeCard
              key={evolve.species.name}
              name={evolve.species.name}
              url={evolve.species.url.replace("-species", "")}
              shiny={true}
            />
          );
        })}
      <div className="nav-buttons">
        {details.id > 1 && (
          <NavLink to={`/pokemon/${details.id - 1}`}>
            <button className="nav-btn previous">{`<< ${(
              "00" +
              (details.id - 1)
            ).slice(-3)}`}</button>
          </NavLink>
        )}
        {details.id < 898 && (
          <NavLink to={`/pokemon/${details.id + 1}`}>
            <button className="nav-btn next">{`${(
              "00" +
              (details.id + 1)
            ).slice(-3)} >>`}</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default PokeCardDetails;
