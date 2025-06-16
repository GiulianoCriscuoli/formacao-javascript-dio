
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

async function fetchAllPokemons() {
    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
}

export default {
    fetchAllPokemons
}