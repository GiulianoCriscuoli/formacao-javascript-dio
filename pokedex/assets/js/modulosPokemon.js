import { fetchAllPokemons, incrementOffset} from './api.js';

const pokemonArea      = document.querySelector('.pokemons');
const paginationButton = document.querySelector('#pagination');

async function detailPokemon(pokemons) {
    let detail = pokemons.map(async pokemon => {
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
        let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        let img = detail[i].sprites.other.dream_world.front_default;
        
        let types = detail[i].types.map(typeInfo => {
            return `<li class="type">${typeInfo.type.name}</li>`;
          }).join('');

        return `<li class="pokemon">
            <span class="number">${detail[i].id}</span>
            <span class="name">${name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${types}
                </ol>
                <div class="image-pokemon">
                    <img src='${img}' alt='${pokemon.name}'>
                </div>
            </div>
        </li>`
    }).join('');

    pokemonArea.insertAdjacentHTML('beforeend', listPokemons);
}

async function loadPokemons() {
    const data = await fetchAllPokemons();
    await getAllPokemons(data.results);
  }
  
paginationButton.addEventListener('click', async () => {
    incrementOffset();
    await loadPokemons();
});

export default { 
    getAllPokemons
 }
