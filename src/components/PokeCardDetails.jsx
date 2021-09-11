import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";
import grass from "../assets/pokemon_types_png/pokemon_grass.png";
import fire from "../assets/pokemon_types_png/pokemon_fire.png";
import water from "../assets/pokemon_types_png/pokemon_water.png";
import ground from "../assets/pokemon_types_png/pokemon_ground.png";
import rock from "../assets/pokemon_types_png/pokemon_rock.png";
import electric from "../assets/pokemon_types_png/pokemon_electric.png";
import bug from "../assets/pokemon_types_png/pokemon_bug.png";
import ice from "../assets/pokemon_types_png/pokemon_ice.png";
import dark from "../assets/pokemon_types_png/pokemon_dark.png";
import steel from "../assets/pokemon_types_png/pokemon_steel.png";
import psychic from "../assets/pokemon_types_png/pokemon_psychic.png";
import dragon from "../assets/pokemon_types_png/pokemon_dragon.png";
import fairy from "../assets/pokemon_types_png/pokemon_fairy.png";
import ghost from "../assets/pokemon_types_png/pokemon_ghost.png";
import flying from "../assets/pokemon_types_png/pokemon_flying.png";
import fighting from "../assets/pokemon_types_png/pokemon_fighting.png";
import normal from "../assets/pokemon_types_png/pokemon_normal.png";
import poison from "../assets/pokemon_types_png/pokemon_poison.png";

import "./PokeCardDetails.css";

const PokeCardDetails = ({ details }) => {
  const [evolve, setEvole] = useState([]);
  const [text, setText] = useState("");
  const type1 = details.types[0].type.name;
  const type2 =
    details.types.length === 2 ? details.types[1].type.name : undefined;
  const typeArray = {
    grass: grass,
    fire: fire,
    water: water,
    ground: ground,
    rock: rock,
    electric: electric,
    bug: bug,
    ice: ice,
    dark: dark,
    steel: steel,
    psychic: psychic,
    dragon: dragon,
    fairy: fairy,
    ghost: ghost,
    flying: flying,
    fighting: fighting,
    normal: normal,
    poison: poison,
  };

  useEffect(() => {
    // axios
    // .get(`https://pokeapi.co/api/v2/evolution-chain/${details.id}/`)
    // .then((res) => res.data.chain.evolves_to[0]);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`)
      .then((res) =>
        setText(
          res.data.flavor_text_entries[0].flavor_text
            .replace(/\f|\n/g, " ")
            .replace("POKéMON", "pokémon")
        )
      );
  }, []);

  return (
    <div className={`details-card ${"details-" + type1}`}>
      <div className="details-primary-container">
        <div className="details-primary">
          <h2 className="details-name">
            {details.name.toUpperCase()} N.{("00" + details.id).slice(-3)}
          </h2>
          <div className="details-sprites">
            {details.sprites.versions["generation-v"]["black-white"].animated
              .front_default ? (
              <>
                <img
                  className="details-gif"
                  src={
                    details.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default
                  }
                  alt="front default"
                />
                <img
                  className="details-gif"
                  src={
                    details.sprites.versions["generation-v"]["black-white"]
                      .animated.back_default
                  }
                  alt="back default"
                />
                <img
                  className="details-gif"
                  src={
                    details.sprites.versions["generation-v"]["black-white"]
                      .animated.front_shiny
                  }
                  alt="front shiny"
                />
                <img
                  className="details-gif"
                  src={
                    details.sprites.versions["generation-v"]["black-white"]
                      .animated.back_shiny
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
            <img className="type" src={typeArray[type1]} alt={type1} />
            {type2 && (
              <img className="type" src={typeArray[type2]} alt={type2} />
            )}
          </div>
          <div className="details-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="details-data">
        <div className="details-size">
          <p>Height: {details.height / 10} m</p>
          <p>Weight: {details.weight / 10} kg</p>
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
    </div>
  );
};

export default PokeCardDetails;
