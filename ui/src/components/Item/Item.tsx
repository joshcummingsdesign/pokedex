import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  url: string;
}

export const Item: FC<Props> = ({ name, url }) => (
  <div className={styles.item}>
    <a className={styles.name} href={url} target="_blank">
      {name}
    </a>
  </div>
);
