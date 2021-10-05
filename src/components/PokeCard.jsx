import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import addFav from "../assets/189001.png";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";
import isFav from "../assets/1752813.png";

import "./PokeCard.css";

const isFavorite = (id) => {
  const favPokemon = JSON.parse(localStorage.getItem("favorite"));
  let isFav = true;

  favPokemon.forEach((pokemon) => {
    if (pokemon.url.split("/")[6] === id) return (isFav = false);
  });
  return isFav;
};

const PokeCard = ({ name, url, shiny, favorites, toogleFavorite }) => {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState("");
  const [validate, setValidate] = useState(isFavorite(url.split("/")[6]));

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

  const handleFavoriteClick = () => {
    if (validate === false || favorites.length < 6) {
      toogleFavorite(name, url);
      setValidate(!validate);
      if (validate === true) {
        alert(`${pokemon.name} add to your team`);
      } else {
        alert(`${pokemon.name} remove from your team`);
      }
    } else alert("Your team has already 6 pokemon");
  };

  return (
    <div className={`card ${type}`}>
      <NavLink to={`/pokemon/${pokemon.id}`} className="card-link">
        <h2 className="card-number">{("00" + pokemon.id).slice(-3)}</h2>
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
          <img
            className="card-img-default"
            src={defaultPicture}
            alt="default"
          />
        )}
        <h2 className="card-name">{name.toUpperCase()}</h2>
        <div className="card-bar"></div>
      </NavLink>
      <img
        className="fav-img"
        src={validate ? addFav : isFav}
        alt="favorite"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={handleFavoriteClick}
      />
    </div>
  );
};

export default PokeCard;
