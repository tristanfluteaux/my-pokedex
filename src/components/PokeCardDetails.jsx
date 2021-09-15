import axios from "axios";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import PokemonStats from "./PokemonStats";
import SpritesFrontBack from "./SpritesFrontBack";
import Types from "./Types";

const PokeCardDetails = ({ details, setDetails }) => {
  // const [evolve, setEvole] = useState([]);
  const [id, setId] = useState(details.id);
  const [text, setText] = useState("");

  useEffect(() => {
    // axios
    // .get(`https://pokeapi.co/api/v2/evolution-chain/${details.id}/`)
    // .then((res) => res.data.chain.evolves_to[0]);
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
    const getText = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res) =>
          setText(
            res.data.flavor_text_entries[0].flavor_text
              .replace(/\f|\n/g, " ")
              .replace("POKéMON", "pokémon")
          )
        );
    };
    getText();
  }, [id]);

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <div className="details-primary-container">
        <div className="details-primary">
          <h2 className="details-name">
            {details.name.toUpperCase()} N.{("00" + id).slice(-3)}
          </h2>
          <SpritesFrontBack
            sprites={details.sprites.versions["generation-v"]["black-white"]}
          />
          <Types types={details.types} />
          <div className="details-size">
            <p>Height: {details.height / 10} m</p>
            <p>Weight: {details.weight / 10} kg</p>
          </div>
          <div className="details-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <PokemonStats stats={details.stats} />
      <div className="nav-buttons">
        {id > 1 && (
          <button className="nav-btn" onClick={() => setId(id - 1)}>
            Previous
          </button>
        )}
        {id < 898 && (
          <button className="nav-btn" onClick={() => setId(id + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeCardDetails;
