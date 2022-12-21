import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
  width?: number;
}

export default function SelectionButton({ label = "", background = "", width }: Props) {
  return <button style = {{background: background, width: width + "px"}} className={styles.selectionBtn}>{label}</button>;
}
