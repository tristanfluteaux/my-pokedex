import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCardDetails from "../components/PokeCardDetails";


const PokeDetails = () => {

    const [details, setDetails] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
            .then((res) => (res.data))
    }, [])

    
    return (
        <div>
            {details
                    .map((elem) => <PokeCardDetails {...elem} />)
            }
            
        </div>
    )
}

export default PokeDetails;
