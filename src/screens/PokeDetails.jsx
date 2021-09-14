import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCardDetails from "../components/PokeCardDetails";

const PokeDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
  }, []);

  return (
    <div>
      {details && <PokeCardDetails details={details} setDetails={setDetails} />}
    </div>
  );
};

export default PokeDetails;
