import axios from "axios";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";

const PokeCardDetails = ({ details, setDetails }) => {
  // const [evolve, setEvole] = useState([]);
  const [id, setId] = useState(details.id);

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
  }, [id]);

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <PokemonInfos details={details} />
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
