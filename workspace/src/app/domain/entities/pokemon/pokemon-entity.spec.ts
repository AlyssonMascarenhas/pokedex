import { pokemonMock } from "src/app/mock";
import { PokemonEntity, PokemonProps } from "./pokemon-entity";

const sut = (pokemon?: PokemonProps): PokemonEntity => {
  return new PokemonEntity(pokemon || pokemonMock());
};

describe("Pokemon Entity", () => {
  it("should create instance...", () => {
    expect(sut()).toBeTruthy();
  });

  it("should validate name...", () => {
    expect(sut().name).toBe(pokemonMock().name);
  });

  it("should validate number...", () => {
    expect(sut().number).toBe(pokemonMock().number);
  });

  it("should validate image...", () => {
    expect(sut().image).toEqual(pokemonMock().image);
  });

  it("should validate types...", () => {
    expect(sut().types).toEqual(pokemonMock().types);
  });
});
