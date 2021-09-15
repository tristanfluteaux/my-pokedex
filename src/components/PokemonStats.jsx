import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./PokemonStats.css";

const PokemonStats = ({ stats }) => {
  const data = [{ data: {}, meta: { color: "blue" } }];
  const captions = {};
  const chartOptions = {
    captionMargin: 40,
    scales: 4,
    zoomDistance: 1.3,
    captionProps: () => ({
      textAnchor: "middle",
      fontSize: 11,
    }),
  };

  return (
    <div className="stats-container">
      <div className="stats-board">
        <p className="stats-board-title">Pokémon stats</p>
        <div className="stats-board-content">
          {stats.map((value) => {
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
      <RadarChart
        captions={captions}
        data={data}
        size={400}
        options={chartOptions}
      />
    </div>
  );
};

export default PokemonStats;
