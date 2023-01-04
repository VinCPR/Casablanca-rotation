import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
  width?: number;
  height?: number;
  alignSelf?: string;
  fontSize?: number;
}

export default function SelectionButton({
  label = "",
  background = "",
  width,
  height,
  alignSelf,
  fontSize,
}: Props) {
  return (
    <button
      style={{
        background: background,
        width: width + "px",
        height: height + "%",
        alignSelf: alignSelf,
        fontSize: fontSize + "px",
      }}
      className={styles.selectionBtn}
    >
      {label}
    </button>
  );
}
