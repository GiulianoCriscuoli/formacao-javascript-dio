const pokemonArea = document.querySelector('.pokemons');

function getAllPokemons(Pokemons) {
    let listPokemons = Pokemons.map((pokemon, i) => {
    let count = i + 1;
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

        return `<li class="pokemon">
            <span class="number">${count}</span>
            <span class="name">${name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">Venom</li>
                    <li class="type">Gross</li>
                </ol>
                <div class="image-pokemon"></div>
            </div>
        </li>`
    }).join('');

    pokemonArea.insertAdjacentHTML('beforeend', listPokemons);
}

async function detailPokemon(pokemons) {
    detailPokemon = [];
    pokemons.map((pokemon, i) => {
        detailPokemon = pokemon.url

        Promise.all(detailPokemon)
            .then(() => {
            })
            .catch(error => console.log(error));
    });
}

export default { 
    getAllPokemons,
    detailPokemon
 }
