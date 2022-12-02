import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
}

export default function SelectionButton({ label = "", background = "" }: Props) {
  return <button style = {{background: background}} className={styles.selectionBtn}>{label}</button>;
}
