import { useState, useEffect } from "react";
import axios from "axios";
import SpritesFrontBack from "./SpritesFrontBack";
import Types from "./Types";
import "./PokemonInfos.css";

const PokemonInfos = ({ details }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const getText = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`)
        .then((res) =>
          setText(
            res.data.flavor_text_entries[0].flavor_text
              .replace(/\f|\n/g, " ")
              .replace("POKéMON", "pokémon")
          )
        );
    };
    getText();
  }, [details.id]);

  return (
    <div className="infos-container">
      <div className="infos">
        <h2 className="infos-name">
          {details.name.toUpperCase()} N.{("00" + details.id).slice(-3)}
        </h2>
        <SpritesFrontBack
          sprites={details.sprites.versions["generation-v"]["black-white"]}
        />
        <Types types={details.types} />
        <div className="infos-size">
          <p>Height: {details.height / 10} m</p>
          <p>Weight: {details.weight / 10} kg</p>
        </div>
        <div className="infos-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfos;
