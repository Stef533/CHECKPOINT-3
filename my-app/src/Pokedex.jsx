import { useState } from 'react'

const SearchPokemon = () =>
 {
  const [pokemon, setPokemon] = useState('')
  const [search, ] = useState('')
  const handleInputPokemon = (e) => {
    setPokemon(e.target.value)
  }

  const handleButtonFetch = async() => {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}
      `)
      if(!response.ok){
        throw new Error('Pokemon inesistente')
      }
      const data = await response.json()
      console.log(data)
    } catch (error){
      console.error('Errore durante la ricerca', error)
    }
  }


  return(
    <div>
    <input
    type="text"
    value={pokemon}
    onChange={handleInputPokemon}
    />
    <button
    onClick={handleButtonFetch}>
      Search
    </button>
    { search && (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.base_experience}</p>
        {pokemon.map((ability) => ability.ability.name) }
      </div>
    )}
    </div>
  )
}

export default SearchPokemon