import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import './PokeCard.css';


const PokeCard = ({name, url}) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get (url)
            .then((result) => setPokemon(result.data))
    }, []);
    console.log(pokemon)

    return (
        <div>
            <NavLink path to='/pokemon/:id'>
                <h2>{name}</h2>
                    {pokemon && pokemon.sprites && (
                    <img src={pokemon.sprites.front_default} alt={name} />
                    )}
            </NavLink>
        </div>
    )
}

export default PokeCard;
