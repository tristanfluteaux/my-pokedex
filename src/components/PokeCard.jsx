import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

import "./PokeCard.css";

const PokeCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((result) => {
      if (isMounted) setPokemon(result.data);
    });
    return () => {
      isMounted = false;
    };
  });

  return (
    <div>
      <NavLink path to="/pokemon/:id">
        <h2>{name}</h2>
        {pokemon && pokemon.sprites && pokemon.sprites.front_default ? (
          <img src={pokemon.sprites.front_default} alt={name} />
        ) : (
          <img src={defaultPicture} alt="default" />
        )}
      </NavLink>
    </div>
  );
};

export default PokeCard;
