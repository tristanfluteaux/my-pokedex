import { useEffect, useState } from "react";
import axios from "axios";


const PokeCard = ({name, url}) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get (url)
            .then((result) => setPokemon(result.data))
    }, []);
    
    return (
        <div>
            <h2>{name}</h2>
            <img src={pokemon.sprites.front_default} alt={name}/>
        </div>
    )
}

export default PokeCard;
