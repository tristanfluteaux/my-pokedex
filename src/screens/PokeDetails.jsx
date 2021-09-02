import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCardDetails from "../components/PokeCardDetails";


const PokeDetails = () => {

    const [details, setDetails] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
            .then((res) => setDetails(res.data))
    }, []);

    return (
        <div>
            {details && <PokeCardDetails details={details}/>}
        </div>
    )
}

export default PokeDetails;
