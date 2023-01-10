import styles from "./index.module.css";

interface Props {
  label: string;
  background?: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  fontSize?: number;
}

export default function DisplayRotation({
  label = "",
  background = "",
  width,
  height,
  marginLeft,
  fontSize,
}: Props) {
  return (
    <button
      style={{
        background: background,
        width: width + "px",
        height: height + "%",
        marginLeft: marginLeft + "px",
        alignSelf: "center",
        fontSize: fontSize + "px",
      }}
      className={styles.selectionBtn}
    >
      {label}
    </button>
  );
}
