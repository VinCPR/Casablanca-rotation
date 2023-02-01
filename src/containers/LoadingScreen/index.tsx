import styles from "./index.module.css";

export default function LoadingScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.text}>Loading</div>
    </div>
  );
}
