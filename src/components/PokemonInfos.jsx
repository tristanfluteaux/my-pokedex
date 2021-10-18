import { useState, useEffect } from "react";
import axios from "axios";
import SpritesFrontBack from "./SpritesFrontBack";
import Types from "./Types";
import "./PokemonInfos.css";

const PokemonInfos = ({ details }) => {
  const [text, setText] = useState("");
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    const getText = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${details.id}/`)
        .then((res) => {
          setText(
            res.data.flavor_text_entries
              .find((text_entries) => text_entries.language.name === "en")
              .flavor_text.replace(/\f|\n/g, " ")
              .replace("POKéMON", "pokémon")
          );
        });
    };
    getText();
  }, [details.id]);

  return (
    <div className="infos-container">
      <h2 className="infos-name">
        {details.name.toUpperCase()} N.
        {details.id < 1000
          ? ("00" + details.id).slice(-3)
          : ("0000" + details.id).slice(-5)}
      </h2>
      <button
        className={`btn shiny-button ${isShiny ? "btn-checked" : ""}`}
        onClick={() => setIsShiny(!isShiny)}
      >
        SHINY
      </button>
      <SpritesFrontBack
        sprites={details.sprites.versions["generation-v"]["black-white"]}
        isShiny={isShiny}
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
  );
};

export default PokemonInfos;
