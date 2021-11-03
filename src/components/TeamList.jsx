import PokeCard from "./PokeCard";

import "./TeamList.css";

const TeamList = ({ pokemon, favorites, toogleFavorite }) => {
  return (
    <div className="teamlist-main">
      {favorites &&
        favorites.map((poke) => (
          <PokeCard
            key={poke.name}
            pokemon={pokemon[poke.id - 1]}
            shiny={true}
            favorites={favorites}
            toogleFavorite={toogleFavorite}
          />
        ))}
    </div>
  );
};

export default TeamList;
