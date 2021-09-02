import axios from "axios";
import PokeCard from "../components/PokeCard";
import { useState, useEffect } from "react";

import './PokeList.css';

const PokeList = () => {
    const generation = 1;
    const [limit, setLimit] = useState(0);
    const [offset, setOffset] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get (`https://pokeapi.co/api/v2/generation/${generation}/`)
            .then((result) => {
                setOffset(result.data.pokemon_species[0].url.split('/')[6] - 1);
                setLimit(result.data.pokemon_species.length);
            })
            axios
                .get (`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
                .then((result) => setList(result.data.results))
    }, [limit]);

    console.log(limit);
    console.log(offset);
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
