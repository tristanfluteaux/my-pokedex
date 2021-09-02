import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './PokeCardDetails.css'

const PokeCardDetails = ({details}) => {
    const [evolve, setEvole] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
            .then((res) => setEvole(res.data))      
    },[]);

    return (
        <>
            <div className='details-card'>
                <h2>{details.name}</h2>
                <div className='details-img'>
                 <img src={details.sprites.front_default} alt="front_default"/>
                 <img src={details.sprites.front_shiny} alt="back_female"/>
                 <img src={details.sprites.back_default} alt="back_default"/>
                 <img src={details.sprites.back_shiny} alt="back_female"/>
                </div>
                <div>
                    <p>type 1: {details.types[0].type.name}</p>
                    {details.types.length === 2 &&
                        <p>type 2: {details.types[1].type.name}</p>
                    }
                </div>
            </div>
        </>
    )
}

export default PokeCardDetails;