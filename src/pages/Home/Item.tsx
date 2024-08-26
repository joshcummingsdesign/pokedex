import { ucFirst } from "@/helpers";
import { FC } from "react";

interface Props {
  name: string;
  onClick: (name: string) => void;
}

export const Item: FC<Props> = ({ name, onClick }) => (
  <div
    style={{
      padding: "10px",
      border: "1px solid #000",
      marginBottom: "10px",
    }}
  >
    <a
      style={{
        color: "#000",
        textDecoration: "none",
      }}
      href="#"
      onClick={() => onClick(name)}
    >
      {ucFirst(name)}
    </a>
  </div>
);
