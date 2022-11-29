import styles from "./index.module.css";

interface Props {
  value: string;
  background?: string;
}

export default function SelectionButton({ value = "", background = "" }: Props) {
  return <button style = {{background: background}} className={styles.selectionBtn}>{value}</button>;
}
