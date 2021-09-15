import grass from "../assets/pokemon_types_png/pokemon_grass.png";
import fire from "../assets/pokemon_types_png/pokemon_fire.png";
import water from "../assets/pokemon_types_png/pokemon_water.png";
import ground from "../assets/pokemon_types_png/pokemon_ground.png";
import rock from "../assets/pokemon_types_png/pokemon_rock.png";
import electric from "../assets/pokemon_types_png/pokemon_electric.png";
import bug from "../assets/pokemon_types_png/pokemon_bug.png";
import ice from "../assets/pokemon_types_png/pokemon_ice.png";
import dark from "../assets/pokemon_types_png/pokemon_dark.png";
import steel from "../assets/pokemon_types_png/pokemon_steel.png";
import psychic from "../assets/pokemon_types_png/pokemon_psychic.png";
import dragon from "../assets/pokemon_types_png/pokemon_dragon.png";
import fairy from "../assets/pokemon_types_png/pokemon_fairy.png";
import ghost from "../assets/pokemon_types_png/pokemon_ghost.png";
import flying from "../assets/pokemon_types_png/pokemon_flying.png";
import fighting from "../assets/pokemon_types_png/pokemon_fighting.png";
import normal from "../assets/pokemon_types_png/pokemon_normal.png";
import poison from "../assets/pokemon_types_png/pokemon_poison.png";

const Types = ({ types }) => {
  const type1 = types[0].type.name;
  const type2 = types.length === 2 ? types[1].type.name : undefined;
  const typeArray = {
    grass: grass,
    fire: fire,
    water: water,
    ground: ground,
    rock: rock,
    electric: electric,
    bug: bug,
    ice: ice,
    dark: dark,
    steel: steel,
    psychic: psychic,
    dragon: dragon,
    fairy: fairy,
    ghost: ghost,
    flying: flying,
    fighting: fighting,
    normal: normal,
    poison: poison,
  };

  return (
    <div className="types">
      <img className="type" src={typeArray[type1]} alt={type1} />
      {type2 && <img className="type" src={typeArray[type2]} alt={type2} />}
    </div>
  );
};

export default Types;
