import { FC } from "react";
import { PokemonSingle } from "@/features/interfaces";
import { useClickAway } from "@uidotdev/usehooks";
import { ucFirst } from "@/helpers";

interface Props {
  open: boolean;
  pokemon?: PokemonSingle;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ pokemon, open, onClose }) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  return (
    <div
      style={{
        visibility: !open || !pokemon ? "hidden" : "visible",
        opacity: !open || !pokemon ? 0 : 1,
        transition: "opacity 0.5s",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={ref}
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
          width: 500,
        }}
      >
        <a href="#" onClick={onClose}>
          Close
        </a>
        <h2>{ucFirst(pokemon?.name || "")}</h2>
        <img
          style={{ background: "#dadada" }}
          height={96}
          width={96}
          key={pokemon?.name}
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
        />
        <ul>
          {pokemon?.stats.map((s) => (
            <li key={s.stat.name}>
              {ucFirst(s.stat.name).replace("-", " ")}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
