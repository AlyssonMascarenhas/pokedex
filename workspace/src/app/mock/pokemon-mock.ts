import { PokemonProps } from "../domain/entities/pokemon/pokemon-entity";

export function pokemonMock(): PokemonProps {
  return {
    image: "img_pikachu.jpeg",
    name: "Pikachu",
    number: 1,
    types: [],
  };
}
