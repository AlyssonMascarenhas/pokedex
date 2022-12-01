import PokemonService from "src/app/services/PokemonService";

export default interface ServiceFactory {
  createPokemonService(): PokemonService;
}
