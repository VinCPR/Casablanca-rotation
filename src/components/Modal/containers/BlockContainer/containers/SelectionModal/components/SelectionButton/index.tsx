import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
  width?: number;
  height?: number;
  alignSelf?: string;
}

export default function SelectionButton({ label = "", background = "", width, height, alignSelf }: Props) {
  return <button style = {{background: background, width: width + "px", height: (height + "%"), alignSelf: alignSelf }} className={styles.selectionBtn}>{label}</button>;
}
