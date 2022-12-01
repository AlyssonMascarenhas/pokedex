import { DomainEntity } from "../base/domain-entity";

export interface PokemonProps {
  image: string;
  number: number;
  name: string;
  types: PokemonType[];
}

enum PokemonType {
  Grass = "Grass",
  Poison = "Poison",
  Fire = "Fire",
}

export class PokemonEntity extends DomainEntity {
  public readonly name!: string;
  public readonly image!: string;
  public readonly number!: number;
  public readonly types!: PokemonType[];

  constructor(pokemonProps: PokemonProps) {
    super();
    const { image, number, name, types }: PokemonProps = pokemonProps;
    this.name = name;
    this.image = image;
    this.types = types;
    this.number = number;
  }
}
