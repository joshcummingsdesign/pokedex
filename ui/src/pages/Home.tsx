import { Item } from "@/components/Item";
import { useGetPokemonQuery } from "@/services/apiService";

export const Home = () => {
  const { data, isLoading } = useGetPokemonQuery();
  const pokemon = data?.results;

  if (isLoading) return null;

  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon?.map((p) => (
        <Item
          key={p.name}
          name={p.name.charAt(0).toUpperCase() + p.name.slice(1)}
          url={p.url}
        />
      ))}
    </div>
  );
};
