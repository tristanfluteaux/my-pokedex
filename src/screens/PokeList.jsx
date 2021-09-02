import axios from "axios";
import PokeCard from "../components/PokeCard";
import { useState, useEffect } from "react";

import './PokeList.css';

const PokeList = () => {
    const [generation, setGeneration] = useState(1);
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
    }, [limit, generation]);

    function setGen(genNumber) {
        setGeneration(genNumber);
    }

    return (
        <div className='main-list'>
            <div>
                <button onClick={() => setGen(1)}>gen1</button>
                <button onClick={() => setGen(2)}>gen2</button>
                <button onClick={() => setGen(3)}>gen3</button>
                <button onClick={() => setGen(4)}>gen4</button>
                <button onClick={() => setGen(5)}>gen5</button>
                <button onClick={() => setGen(6)}>gen6</button>
                <button onClick={() => setGen(7)}>gen7</button>
                <button onClick={() => setGen(8)}>gen8</button>
            </div>
            {list && list
                .map((pokemon) => 
                    <PokeCard key={pokemon.name} {...pokemon} />
                )}

        </div>
    )
}

export default PokeList;
