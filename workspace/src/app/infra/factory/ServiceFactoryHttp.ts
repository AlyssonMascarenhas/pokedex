import PokemonService from "src/app/services/PokemonService";
import Http from "../http/http";
import PokemonServiceHttp from "../service/PokemonServiceHttp";
import ServiceFactory from "./ServiceFactory";

export default class ServiceFactoryHttp implements ServiceFactory {
  constructor(readonly http: Http, readonly baseUrl: string) {}

  createPokemonService(): PokemonService {
    return new PokemonServiceHttp(this.http, this.baseUrl);
  }
}
