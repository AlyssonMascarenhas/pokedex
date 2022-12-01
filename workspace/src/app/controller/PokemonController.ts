import PokemonService from "src/app/services/PokemonService";
import { environment } from "src/environments/environment";

import AxiosAdapter from "../infra/http/AxiosAdapter";
import Http from "../infra/http/http";
import { IClientStorage } from "../infra/client-storage/iclient-storage";
import { LocalStorageService } from "../infra/client-storage/local-storage.service";
import ServiceFactory from "../infra/factory/ServiceFactory";
import ServiceFactoryHttp from "../infra/factory/ServiceFactoryHttp";

export default class PokemonController {
  http: Http;
  serviceFactory: ServiceFactory;
  storageService: IClientStorage;

  constructor() {
    this.http = new AxiosAdapter();
    this.serviceFactory = new ServiceFactoryHttp(
      this.http,
      environment.serverUrl
    );
    this.storageService = new LocalStorageService();
  }

  GetService(): PokemonService {
    return this.serviceFactory.createPokemonService();
  }
}
