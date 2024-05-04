import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
    title = <h2 className="Pokedex-winner">Winning Player</h2>;
  } else {
    title = <h2 className="Pokedex-loser">Losing Player</h2>;
  }

  const totalExperience = props.pokemon.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0
  );

  return (
    <div className="Pokedex">
      {title}
      <h4>Total Experience: {totalExperience}</h4>
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
