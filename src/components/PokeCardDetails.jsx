import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import PokemonChain from "./PokemonChain";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";

const PokeCardDetails = ({ details, setDetails }) => {
  const [pokemonSpecies, setPokemonSpecies] = useState();

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

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <PokemonInfos details={details} />
      <PokemonStats stats={details.stats} />
      <PokemonChain pokemonSpecies={pokemonSpecies} />
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
