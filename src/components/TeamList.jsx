import PokeCard from "./PokeCard";

import './TeamList.css'

const TeamList = ({ favorites, toogleFavorite }) => {
    return ( 
        <div className='teamlist-main'>
            {favorites && favorites.map(poke => 
            <PokeCard key={poke.name} {...poke} shiny={true} favorites={favorites} toogleFavorite={toogleFavorite} />)}
        </div>
    );
}

export default TeamList;
