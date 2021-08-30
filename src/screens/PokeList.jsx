import axios from "axios";
import PokeCard from "../components/PokeCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './PokeList.css';

const PokeList = () => {

    const [list, setList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios
            .get ('https://pokeapi.co/api/v2/pokemon-form/')
            .then((result) => setList(result.data.results))
    }, []);



    return (
        <div className='main-list'>
            {list
                .map((pokemon) => 
                    <PokeCard key={pokemon.id} {...pokemon} />
                )}

        </div>
    )
}

export default PokeList;
