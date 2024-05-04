import React from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
console.log(POKE_API);
const Pokecard = (props) => {
  const imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{props.name}</h3>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={props.name}></img>
      </div>
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">EXP: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
