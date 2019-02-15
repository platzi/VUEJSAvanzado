const fetchResource = function (resource, id) {
  return fetch(`https://pokeapi.co/api/v2/${resource}/${id}`)
    .then(response => response.json())
    .then(json => console.log(json));;
}

// fetchResource('pokemon', 1);

let fetchPokemon = function (id) {
  return fetchResource('pokemon', id);
}

// fetchPokemon(1);

const fetcher = function (resource) {
  return function (id) {
    return fetchResource(resource, id);
  }
}

fetchPokemonType = fetcher('type');
fetchAbility = fetcher('ability');
// fetchPokemonType(1);
// fetchAbility(1);