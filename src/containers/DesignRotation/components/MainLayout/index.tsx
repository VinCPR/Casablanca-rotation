import styles from "./index.module.css";
import RotationDesign from "./RotationDesign";
export default function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <RotationDesign />
    </div>
  );
}
