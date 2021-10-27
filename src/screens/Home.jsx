import PokeList from "./PokeList";

const Home = ({ pokemon, favorites, toogleFavorite }) => {
  return (
    <>
      <PokeList
        pokemon={pokemon}
        favorites={favorites}
        toogleFavorite={toogleFavorite}
      />
    </>
  );
};

export default Home;
