import styles from "./index.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Image src="/images/Logo.jpg" alt="logo" width={45} height={45} />
      <div className={styles.title}>C-Rotation</div>
    </div>
  );
}
