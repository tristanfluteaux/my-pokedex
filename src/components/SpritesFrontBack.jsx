import { useState } from "react";
import defaultPicture from "../assets/quel_est_ce_pokemon.jpg";

const SpritesFrontBack = ({ details }) => {
  const [isShiny, setIsShiny] = useState(false);

  return (
    <div className="details-sprites" onClick={() => setIsShiny(!isShiny)}>
      {details.sprites.versions["generation-v"]["black-white"].animated
        .front_default ? (
        isShiny ? (
          <>
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny
              }
              alt="front shiny"
            />
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .back_shiny
              }
              alt="back shiny"
            />
          </>
        ) : (
          <>
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="front default"
            />
            <img
              className="details-gif"
              src={
                details.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
              alt="back default"
            />
          </>
        )
      ) : isShiny ? (
        <>
          <img
            className="details-img"
            src={
              details.sprites.versions["generation-v"]["black-white"]
                .front_shiny || defaultPicture
            }
            alt="front shiny"
          />
          <img
            className="details-img"
            src={
              details.sprites.versions["generation-v"]["black-white"]
                .back_shiny || defaultPicture
            }
            alt="back shiny"
          />
        </>
      ) : (
        <>
          <img
            className="details-img"
            src={
              details.sprites.versions["generation-v"]["black-white"]
                .front_default || defaultPicture
            }
            alt="front default"
          />
          <img
            className="details-img"
            src={
              details.sprites.versions["generation-v"]["black-white"]
                .back_default || defaultPicture
            }
            alt="back default"
          />
        </>
      )}
    </div>
  );
};

export default SpritesFrontBack;
