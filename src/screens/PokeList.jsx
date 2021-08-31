import axios from "axios";
import PokeCard from "../components/PokeCard";
import { useState, useEffect } from "react";

import './PokeList.css';

const PokeList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get ('https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=1000')
            .then((result) => setList(result.data.results))
    }, []);



    return (
        <div className='main-list'>
            {list && list
                .map((pokemon) => 
                    <PokeCard key={pokemon.name} {...pokemon} />
                )}

        </div>
    )
}

export default PokeList;
