import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const filteredPokemon = pokemon.filter(p => {
    return p.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleSubmitPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmitPokemon={handleSubmitPokemon}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
