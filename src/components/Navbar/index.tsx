import styles from "./index.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Image src="/images/CHSlogo.png" alt="logo" width={230} height={45} />
      {/* <div className={styles.title}>C-Rotation</div> */}
    </div>
  );
}
