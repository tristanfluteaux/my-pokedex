import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./PokeCardDetails.css";
import EvolutionChain from "./EvolutionChain";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";
import DetailsNavButtons from "./DetailsNavButtons";

const PokeCardDetails = ({ pokemon, id }) => {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 350) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <div
      className={`details-card details-${pokemon[id - 1].types[0].type.name}`}
    >
      <NavLink to={"/"}>
        <button className={`back-btn ${isFixed ? "fixed" : ""}`}>
          &#8617;
        </button>
      </NavLink>
      <PokemonInfos details={pokemon[id - 1]} />
      <PokemonStats stats={pokemon[id - 1].stats} />
      <EvolutionChain pokemon={pokemon} id={id} />
      <DetailsNavButtons pokemonId={id} />
    </div>
  );
};

export default PokeCardDetails;
