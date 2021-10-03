import PokeList from "./PokeList";

const Home = ({favorites, toogleFavorite}) => {
    return (
        <>
            <PokeList 
            favorites={favorites}
            toogleFavorite={toogleFavorite}
            />  
        </>
    )
}

export default Home;
