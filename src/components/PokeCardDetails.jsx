import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

import "./PokeCardDetails.css";

const PokeCardDetails = ({ details }) => {
  const [evolve, setEvole] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/evolution-chain/${details.id}/`)
      .then((res) => res.data.chain.evolves_to[0]);
  }, []);

  return (
    <div className={`details-card ${"details-" + details.types[0].type.name}`}>
      <h2 className="details-name">{details.name.toUpperCase()}</h2>
      <div className="details-sprites">
        {details.sprites.versions["generation-v"]["black-white"].animated
          .front_default ? (
          <>
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="front default"
            />
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
              alt="back default"
            />
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny
              }
              alt="front shiny"
            />
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .back_shiny
              }
              alt="back shiny"
            />
          </>
        ) : (
          <>
            <img
              className="details-img"
              src={
                details.sprites.versions["generation-v"]["black-white"]
                  .front_default || defaultPicture
              }
              alt="front default"
            />
            <img
              className="details-img"
              src={
                details.sprites.versions["generation-v"]["black-white"]
                  .back_default || defaultPicture
              }
              alt="back default"
            />
            <img
              className="details-img"
              src={
                details.sprites.versions["generation-v"]["black-white"]
                  .front_shiny || defaultPicture
              }
              alt="front shiny"
            />
            <img
              className="details-img"
              src={
                details.sprites.versions["generation-v"]["black-white"]
                  .back_shiny || defaultPicture
              }
              alt="back shiny"
            />
          </>
        )}
      </div>
      <div className="types">
        <p>Type 1: {details.types[0].type.name}</p>
        {details.types.length === 2 && (
          <p>Type 2: {details.types[1].type.name}</p>
        )}
      </div>
      <div className="details-tall">
        <p>Height : {details.height / 10} m</p>
        <p>Weight : {details.weight / 10} kg</p>
      </div>
      <div className="stats">
        <p>Stats :</p>
        {details.stats.map((value) => (
          <p>
            {value.stat.name}: {value.base_stat}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokeCardDetails;
