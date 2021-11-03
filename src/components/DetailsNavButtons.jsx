import { NavLink } from "react-router-dom";

const DetailsNavButtons = ({ pokemon, pokemonId }) => {
  return (
    <div className="nav-buttons">
      {pokemonId > 1 && (
        <NavLink to={`/pokemon/${pokemon[pokemonId - 1].id - 1}`}>
          <button className="nav-btn previous">{`<< ${(
            "00" +
            (pokemonId - 1)
          ).slice(-3)}`}</button>
        </NavLink>
      )}
      {pokemonId < 10220 && (
        <NavLink to={`/pokemon/${pokemon[pokemonId + 1].id - 1}`}>
          <button className="nav-btn next">{`${("00" + (pokemonId + 1)).slice(
            -3
          )} >>`}</button>
        </NavLink>
      )}
    </div>
  );
};

export default DetailsNavButtons;
