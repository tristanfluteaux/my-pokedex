import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router";
import "./PokeCardDetails.css";
import PokemonInfos from "./PokemonInfos";
import PokemonStats from "./PokemonStats";

const PokeCardDetails = ({ details, setDetails }) => {
  // const [evolve, setEvole] = useState([]);

  useEffect(() => {
    // axios
    // .get(`https://pokeapi.co/api/v2/evolution-chain/${details.id}/`)
    // .then((res) => res.data.chain.evolves_to[0]);
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${details.id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
  }, []);

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <PokemonInfos details={details} />
      <PokemonStats stats={details.stats} />
      <div className="nav-buttons">
        {details.id > 1 && (
          <NavLink to={`/pokemon/${details.id - 1}`}>
            <button className="nav-btn previous">{`<< ${(
              "00" +
              (details.id - 1)
            ).slice(-3)}`}</button>
          </NavLink>
        )}
        {details.id < 898 && (
          <NavLink to={`/pokemon/${details.id + 1}`}>
            <button className="nav-btn next">{`${(
              "00" +
              (details.id + 1)
            ).slice(-3)} >>`}</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default PokeCardDetails;
