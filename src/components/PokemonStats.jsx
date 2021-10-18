import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./PokemonStats.css";

const PokemonStats = ({ stats }) => {
  const data = [{ data: {}, meta: { color: "blue" } }];
  const captions = {};
  let chartOptions = {
    captionMargin: 40,
    scales: 4,
    zoomDistance: 1.3,
    captionProps: () => ({
      textAnchor: "middle",
      fontSize: 11,
    }),
  };
  let scale = 0;

  const getStatsArray = () => {
    let statsArray = [];

    statsArray = stats.map((stat) => {
      if (Math.ceil(stat.base_stat / 50) > scale)
        scale = Math.ceil(stat.base_stat / 50);
      return {
        name:
          stat.stat.name.length > 5
            ? stat.stat.name
                .split("-")
                .map((statName) => statName.slice(0, 3))
                .join(" ")
            : stat.stat.name,
        value: stat.base_stat,
      };
    });
    chartOptions = { ...chartOptions, scales: scale * 2 };
    return statsArray;
  };

  return (
    <div className="stats-container">
      <div className="stats-board">
        <p className="stats-board-title">Pokémon stats</p>
        <div className="stats-board-content">
          {getStatsArray().map((stat, index) => {
            captions[stat.name] = stat.name;
            data[0].data[stat.name] = stat.value / (scale * 50);
            return (
              <p key={index} className="stat">
                {captions[stat.name]}: {stat.value}
              </p>
            );
          })}
        </div>
      </div>
      <RadarChart
        captions={captions}
        data={data}
        size={window.innerWidth > 400 ? 400 : 320}
        options={chartOptions}
      />
    </div>
  );
};

export default PokemonStats;
