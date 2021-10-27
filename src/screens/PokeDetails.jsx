import { useParams } from "react-router-dom";
import PokeCardDetails from "../components/PokeCardDetails";

const PokeDetails = ({ pokemon }) => {
  const { id } = useParams();

  return (
    <div>
      <PokeCardDetails pokemon={pokemon} id={parseInt(id)} />
    </div>
  );
};

export default PokeDetails;
