const pokemonArea = document.querySelector('.pokemons');

async function detailPokemon(pokemons) {
    let detail = pokemons.map(pokemon => {
      return fetch(pokemon.url)
        .then(response => response.json())
        .catch(error => {
          console.error(error);
          return null; 
        });
    });
  
    const detailPokemons = await Promise.all(detail);
  
    return detailPokemons;
  }

async function getAllPokemons(pokemons) {
    let detail = await detailPokemon(pokemons);

    let listPokemons = pokemons.map((pokemon,i) => {
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

        return `<li class="pokemon">
            <span class="number">${detail[i].order}</span>
            <span class="name">${name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Venom</li>
                    <li class="type">Gross</li>
                </ol>
                <div class="image-pokemon">
                    <img src='${detail[i].sprites.other.dream_world.front_default}' alt='${pokemon.name}'>
                </div>
            </div>
        </li>`
    }).join('');

    pokemonArea.insertAdjacentHTML('beforeend', listPokemons);
}


export default { 
    getAllPokemons,
    detailPokemon
 }
