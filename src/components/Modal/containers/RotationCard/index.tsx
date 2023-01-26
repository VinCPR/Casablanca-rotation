import styles from "./index.module.scss";

interface Props {
  label: string;
  background?: string;
  fontSize?: number;
}

export default function RotationCard({
  label = "",
  background = "",
  fontSize,
}: Props) {
  return (
    <div
      style={{
        background: background,
        fontSize: fontSize + "px",
      }}
      className={styles.selectionBtn}
    >
      {label}
    </div>
  );
}
