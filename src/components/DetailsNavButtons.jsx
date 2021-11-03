import { NavLink } from "react-router-dom";

const DetailsNavButtons = ({ pokemon, pokemonId }) => {
  console.log(pokemonId);
  return (
    <div className="nav-buttons">
      {pokemonId > 1 && (
        <NavLink to={`/pokemon/${pokemon[pokemonId - 1].id}`}>
          <button className="nav-btn previous">{`<< ${
            pokemonId < 899
              ? ("00" + pokemon[pokemonId - 1].id).slice(-3)
              : ("0000" + pokemon[pokemonId - 1].id).slice(-5)
          }`}</button>
        </NavLink>
      )}
      {pokemonId < 10220 && (
        <NavLink to={`/pokemon/${pokemon[pokemonId + 1].id}`}>
          <button className="nav-btn next">{`${
            pokemonId < 897
              ? ("00" + pokemon[pokemonId + 1].id).slice(-3)
              : ("0000" + pokemon[pokemonId + 1].id).slice(-5)
          } >>`}</button>
        </NavLink>
      )}
    </div>
  );
};

export default DetailsNavButtons;
