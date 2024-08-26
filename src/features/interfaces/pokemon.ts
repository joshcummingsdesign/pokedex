export interface Pokemon {
  name: string;
}

export interface PokemonQuery {
  results: Pokemon[];
}

export interface PokemonSingle {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
