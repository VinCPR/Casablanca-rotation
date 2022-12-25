import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
  width?: number;
  height?: number;
  marginLeft?: number;
}

export default function DisplayRotation({ label = "", background = "", width, height, marginLeft }: Props) {
  return <button style = {{background: background, width: width + "px", height: (height + "%"), marginLeft: marginLeft+ "px" }} className={styles.selectionBtn}>{label}</button>;
}
