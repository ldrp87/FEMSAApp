import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

const getPokemons = async (state, URL) => {
    const query = await axios.get(!URL ? `${API_URL}/pokemon` : URL);
    const data = {
        prev: query.data.previous,
        next: query.data.next,
        data: await getDetails(query.data.results)
    }
    console.log(data);
    state(data);
}

const getDetails = async (pokemonData) => {
    let pokemons = [];
    pokemonData.map(async (pokemon) => {
        const pokemonDet = await axios.get(pokemon.url);
        const pokeData = {
            id: pokemonDet.data.id,
            name: pokemon.name,
            img: pokemonDet.data.sprites.other.home.front_default
        }
        pokemons.push(pokeData);
    });
    return pokemons;
}

const getPokemon = async (name, state) => {
    const query = await axios.get(`${API_URL}/pokemon/${name}`);
    console.log(query);
    state(query.data);
};

export {
    getPokemons,
    getPokemon
}