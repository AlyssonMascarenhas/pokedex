import { PokemonEntity } from "../domain/entities/pokemon/pokemon-entity";

export default interface Pokemon {
  list(): Promise<PokemonEntity[]>;
}
