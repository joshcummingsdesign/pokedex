import {
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} from "@/features/pokemonApi";
import { Item } from "./Item";
import { useState } from "react";
import { Modal } from "./Modal";

export const Home = () => {
  const [current, setCurrent] = useState<string | null>(null);
  const { data, isLoading } = useGetPokemonQuery();
  const singlePokemon = useGetPokemonByNameQuery(current!, {
    skip: !current,
  });
  const pokemon = data?.results;
  const pokemonSingle = singlePokemon.data;

  const handleClick = (name: string) => {
    setCurrent(name);
  };

  const handleCloseModal = () => {
    setCurrent(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon?.map((p) => (
        <Item key={p.name} name={p.name} onClick={handleClick} />
      ))}
      <Modal
        open={!!current}
        pokemon={pokemonSingle}
        onClose={handleCloseModal}
      />
    </div>
  );
};
