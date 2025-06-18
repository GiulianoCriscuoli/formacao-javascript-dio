import { fetchAllPokemons, incrementOffset, fetchOnePokemon} from './api.js';

const pokemonArea      = document.querySelector('.pokemons');
const paginationButton = document.querySelector('#pagination');
const modal            = document.querySelector('.modal-area');
const modalContent     = document.querySelector('.detail-modal')
const maxPokemons      = 151;

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

        return `<li data-id="${detail[i].id}" class="pokemon">
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

   let currentQuantity = document.querySelectorAll('.pokemon').length;

   return currentQuantity;
}

async function loadPokemons() {
    const data = await fetchAllPokemons();
    let currentQuantity =  await getAllPokemons(data.results);

    if (maxPokemons <= currentQuantity) {
        paginationButton.style.display = 'none';
    }
}

async function getOnePokemon(id) {
    const response = await fetchOnePokemon(id)
    return response;
}
  
paginationButton.addEventListener('click', async () => {
    incrementOffset();
    await loadPokemons();
});

pokemonArea.addEventListener('click', async (e) => {
    const li = e.target.closest('li.pokemon')
    const id = li.dataset.id;
    const pokemonId = await getOnePokemon(id);

    openModal()
    renderPokemonDetail(pokemonId)
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
});

function openModal() {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 10);
}

function renderPokemonDetail(pokemon) {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const image = pokemon.sprites.other.dream_world.front_default;
    const height = pokemon.height;
    const weight = pokemon.weight;

    modalContent.innerHTML = `
      <div class="nome-pokemon">${name}</div>
      <div class="image">
        <img src="${image}" alt="${name}">
      </div>
      <div class="info">
        <p>Altura: ${height / 10} m</p>
        <p>Peso: ${weight / 10} kg</p>
      </div>
    `;
  }

export default { 
    getAllPokemons
 }
