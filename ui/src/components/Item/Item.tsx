import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  type: string;
}

export const Item: FC<Props> = ({ name, type }) => (
  <div className={styles.item}>
    <p className={styles.name}>{name}</p>
    <p>{type}</p>
  </div>
);
