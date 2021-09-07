import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

import "./PokeCard.css";

const PokeCard = ({ name, url, shiny }) => {
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((result) => {
      if (isMounted) {
        setPokemon(result.data);
        setType(result.data.types[0].type.name);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`card ${type}`}>
      <NavLink to={`/pokemon/${pokemon.id}`} className="card-link">
        <h2>{pokemon.id}</h2>
        {pokemon && pokemon.sprites && pokemon.sprites.front_default ? (
          <img
            className="card-img"
            src={
              shiny
                ? pokemon.sprites.front_default
                : pokemon.sprites.front_shiny
            }
            alt={name}
          />
        ) : (
          <img className="card-img-default" src={defaultPicture} />
        )}
        <h2 className="card-name">{name}</h2>
        <div className="card-bar"></div>
      </NavLink>
    </div>
  );
};

export default PokeCard;
