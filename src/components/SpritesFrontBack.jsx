const SpritesFrontBack = ({ sprites, isShiny }) => {
  return (
    <div className="details-sprites">
      {isShiny ? (
        <>
          {(sprites.animated.front_shiny || sprites.front_shiny) && (
            <img
              className="details-gif"
              src={sprites.animated.front_shiny || sprites.front_shiny}
              alt="front shiny"
            />
          )}
          {(sprites.animated.back_shiny || sprites.back_shiny) && (
            <img
              className="details-gif"
              src={sprites.animated.back_shiny || sprites.back_shiny}
              alt="back shiny"
            />
          )}
        </>
      ) : (
        <>
          {(sprites.animated.front_default || sprites.front_default) && (
            <img
              className="details-gif"
              src={sprites.animated.front_default || sprites.front_default}
              alt="front default"
            />
          )}
          {(sprites.animated.back_default || sprites.back_default) && (
            <img
              className="details-gif"
              src={sprites.animated.back_default || sprites.back_default}
              alt="back default"
            />
          )}
        </>
      )}
    </div>
  );
};

export default SpritesFrontBack;
