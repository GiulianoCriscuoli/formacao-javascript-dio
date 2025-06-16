import method  from './modulosPokemon.js';
import {fetchAllPokemons} from './api.js';

fetchAllPokemons().then( response => {
    let allPokemons = response.results;

    method.getAllPokemons(allPokemons);
})
.catch( error => console.error());