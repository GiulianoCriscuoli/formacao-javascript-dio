import method  from './modulosPokemon.js';
import api from './api.js';

api.fetchAllPokemons().then( response => {
    let allPokemons = response.results;

    method.getAllPokemons(allPokemons)
})
.catch( error => console.error());