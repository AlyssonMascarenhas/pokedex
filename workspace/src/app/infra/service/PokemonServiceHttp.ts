import { PokemonEntity } from "src/app/domain/entities/pokemon/pokemon-entity";
import Http from "../http/http";

export default class ChampionServiceHttp {
  constructor(readonly http: Http, readonly baseUrl: string) {}

  async list(): Promise<PokemonEntity[]> {
    const pokemonsData = await this.http.get(this.baseUrl + "/pokemon.json");
    const pokemons: PokemonEntity[] = [];
    for (const pokemon of Object.keys(pokemonsData.data)) {
      const { image, name, number, types } = pokemonsData.data[pokemon];
      pokemons.push(
        new PokemonEntity({
          image,
          number,
          name,
          types,
        })
      );
    }
    return pokemons;
  }
}
