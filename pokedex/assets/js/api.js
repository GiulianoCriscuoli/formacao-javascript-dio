var offset = 0;
var limit  = 10;

function incrementOffset() {
    return offset += limit;
}

export async function fetchAllPokemons() {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
}

async function fetchOnePokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return response.json();
}

export {
    incrementOffset,
    fetchOnePokemon
}