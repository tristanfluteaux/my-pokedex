import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import EvolutionChain from "./EvolutionChain";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";
import DetailsNavButtons from "./DetailsNavButtons";

const PokeCardDetails = ({ details, setDetails }) => {
  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${details.id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
  }, [details.id]);

  useEffect(() => {
    const getPokemonSpecies = () => {
      axios.get(details.species.url).then((res) => setPokemonSpecies(res.data));
    };
    getPokemonSpecies();
  }, [details.species.url]);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 350) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <NavLink to={"/"}>
        <button className={`back-btn ${isFixed ? "fixed" : ""}`}>
          &#8617;
        </button>
      </NavLink>
      <PokemonInfos details={details} />
      <PokemonStats stats={details.stats} />
      <EvolutionChain pokemonSpecies={pokemonSpecies} />
      <DetailsNavButtons pokemonId={details.id} />
    </div>
  );
};

export default PokeCardDetails;
