import styles from "./index.module.scss";

interface Props {
  label: string;
  background?: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function RotationCard({
  label = "",
  background = "",
  width,
  height,
  fontSize,
}: Props) {
  return (
    <button
      style={{
        background: background,
        width: width + "%",
        height: height + "%",
        justifySelf: "center",
        fontSize: fontSize + "px",
      }}
      className={styles.selectionBtn}
    >
      {label}
    </button>
  );
}
