import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import swal from "sweetalert";

import addFav from "../assets/189001.png";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";
import isFav from "../assets/1752813.png";

import "./PokeCard.css";

const isFavorite = (id) => {
  const favPokemon = JSON.parse(localStorage.getItem("favorite"));
  let isFav = true;

  favPokemon.forEach((pokemon) => {
    if (pokemon.id === id) return (isFav = false);
  });
  return isFav;
};

const PokeCard = ({ pokemon, shiny, favorites, toogleFavorite }) => {
  const [validate, setValidate] = useState(isFavorite(pokemon.id));
  const [open, setOpen] = useState(false);

  const handleFavoriteClick = () => {
    if (validate === false || favorites.length < 6) {
      toogleFavorite(pokemon.name, pokemon.id);
      setValidate(!validate);
      setOpen(!open);
      // if (validate === true) {
      //   // alert(`${pokemon.name} add to your team`);
      // } else {
      //   // alert(`${pokemon.name} remove from your team`);
      // }
    } else {
      swal("Your team has already 6 pokemon");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`card ${pokemon.types[0].type.name}`}>
      <NavLink to={`/pokemon/${pokemon.id}`} className="card-link">
        <h2 className="card-number">
          {pokemon.id < 1000
            ? ("00" + pokemon.id).slice(-3)
            : ("0000" + pokemon.id).slice(-5)}
        </h2>
        {pokemon && pokemon.sprites && pokemon.sprites.front_default ? (
          <img
            className="card-img"
            src={
              shiny
                ? pokemon.sprites.front_default
                : pokemon.sprites.front_shiny
            }
            alt={pokemon.name}
          />
        ) : (
          <img
            className="card-img-default"
            src={defaultPicture}
            alt="default"
          />
        )}
        <h2 className="card-name">{pokemon.name.toUpperCase()}</h2>
        <div className="card-bar"></div>
      </NavLink>
      {favorites && (
        <img
          className="fav-img"
          src={validate ? addFav : isFav}
          alt="favorite"
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
          onClick={handleFavoriteClick}
        />
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {validate ? (
          <Alert onClose={handleClose} severity="info">
            {pokemon.name} remove from your team
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="success">
            {pokemon.name} add to your team
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default PokeCard;
