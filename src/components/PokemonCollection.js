import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokemonCard = pokemon.map(p => {
    return <PokemonCard key={p.id} name={p.name} hp={p.hp} image={p.sprites}/>
  })

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;
