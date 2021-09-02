import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

import './PokeCard.css';


const PokeCard = ({name, url}) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get (url)
            .then((result) => setPokemon(result.data))
    }, []);

    return (
        <div className='card'>
            <NavLink path to='/pokemon/:id' className='card-link'>
                <h2>{pokemon.id}</h2>
                    {pokemon && pokemon.sprites && pokemon.sprites.front_default ? (
                        <img className='card-img' src={pokemon.sprites.front_default} alt={name} />
                        ) : (<img src={defaultPicture}/>)}
                        <h2 className='card-name'>{name}</h2>
                <div className='card-bar'>
                </div>
            </NavLink>
        </div>
    )
}

export default PokeCard;
