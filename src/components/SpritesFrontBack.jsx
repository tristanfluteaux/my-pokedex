import { useState } from "react";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

const SpritesFrontBack = ({ sprites }) => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <div className="details-sprites" onClick={() => setIsShiny(!isShiny)}>
      {isShiny ? (
        <>
          <img
            className="details-gif"
            src={
              sprites.animated.front_shiny ||
              sprites.front_shiny ||
              defaultPicture
            }
            alt="front shiny"
          />
          <img
            className="details-gif"
            src={
              sprites.animated.back_shiny ||
              sprites.back_shiny ||
              defaultPicture
            }
            alt="back shiny"
          />
        </>
      ) : (
        <>
          <img
            className="details-gif"
            src={
              sprites.animated.front_default ||
              sprites.front_default ||
              defaultPicture
            }
            alt="front default"
          />
          <img
            className="details-gif"
            src={
              sprites.animated.back_default ||
              sprites.back_default ||
              defaultPicture
            }
            alt="back default"
          />
        </>
      )}
    </div>
  );
};

export default SpritesFrontBack;
