
import PokeCard from "./PokeCard";

const TeamList = ({ favorites }) => {
    
    return ( 
        <div>
            {favorites && favorites.map(poke => <PokeCard key={poke.id} {...poke} />)}
        </div>
    );
}

export default TeamList;