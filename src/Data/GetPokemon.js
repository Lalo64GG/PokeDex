import { api_URL } from './apiPokemon'
import { stats_Name } from './statsName';


const minimo = 1;
const maximo = 200;

// Función para generar un número aleatorio entre un mínimo y un máximo (inclusive)
function getRandomNumber() {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// Función para obtener un Pokémon aleatorio
export const GetRandomPokemon = async() => {
    const Pokemon = [];

    for (let i = 1; i < 10; i++) {
      const id = getRandomNumber();
      await fetch(`${api_URL}/pokemon/${id}/`)
        .then( response => response.json() )
        .then(data => {
          Pokemon.push(data)
        })

        .catch( err =>{
          console.error('Error', err);
        } )
    }

    const pokemonData = Pokemon.map( (poke) => ({
      id_Pokemon : poke.id,
      name_Pokemon : poke.species.name,
      image_Pokemon : poke.sprites.other.home.front_default,
      weight_Pokemon : poke.weight,
      stats : poke.stats.map( (e)=> {
        return stats_Name( e )
      } ),

      type_Pokemon : poke.types[0].type.name 

    }))

    console.log(pokemonData);

    return pokemonData;
}
