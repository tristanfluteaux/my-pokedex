import axios from "axios";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./PokeCardDetails.css";
import SpritesFrontBack from "./SpritesFrontBack";
import Types from "./Types";

const PokeCardDetails = ({ details, setDetails }) => {
  // const [evolve, setEvole] = useState([]);
  const [id, setId] = useState(details.id);
  const [text, setText] = useState("");
  const data = [{ data: {}, meta: { color: "blue" } }];
  const captions = {};
  const chartOptions = {
    captionMargin: 40,
    scales: 12,
    zoomDistance: 1.3,
    captionProps: () => ({
      textAnchor: "middle",
      fontSize: 11,
    }),
  };

  useEffect(() => {
    // axios
    // .get(`https://pokeapi.co/api/v2/evolution-chain/${details.id}/`)
    // .then((res) => res.data.chain.evolves_to[0]);
    const getDetails = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => setDetails(res.data));
    };
    getDetails();
    const getText = () => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res) =>
          setText(
            res.data.flavor_text_entries[0].flavor_text
              .replace(/\f|\n/g, " ")
              .replace("POKéMON", "pokémon")
          )
        );
    };
    getText();
  }, [id]);

  return (
    <div className={`details-card details-${details.types[0].type.name}`}>
      <div className="details-primary-container">
        <div className="details-primary">
          <h2 className="details-name">
            {details.name.toUpperCase()} N.{("00" + id).slice(-3)}
          </h2>
          <SpritesFrontBack
            sprites={details.sprites.versions["generation-v"]["black-white"]}
          />
          <Types types={details.types} />
          <div className="details-size">
            <p>Height: {details.height / 10} m</p>
            <p>Weight: {details.weight / 10} kg</p>
          </div>
          <div className="details-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="details-data">
        <div className="details-stats">
          <p className="stat-title">Pokémon stats</p>
          <div className="details-stats-grid">
            {details.stats.map((value) => {
              captions[value.stat.name] =
                value.stat.name.length > 5
                  ? value.stat.name
                      .split("-")
                      .map((statName) => statName.slice(0, 3))
                      .join(" ")
                  : value.stat.name;
              data[0].data[value.stat.name] = value.base_stat / 100;
              return (
                <p className="stat">
                  {captions[value.stat.name]}: {value.base_stat}
                </p>
              );
            })}
          </div>
        </div>
        <div className='details-graph'>
          <RadarChart
            captions={captions}
            data={data}
            size={400}
            options={chartOptions}
          />
        </div>
      </div>
      <div className="nav-buttons">
        {id > 1 && (
          <button className="nav-btn" onClick={() => setId(id - 1)}>
            Previous
          </button>
        )}
        {id < 898 && (
          <button className="nav-btn" onClick={() => setId(id + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeCardDetails;
