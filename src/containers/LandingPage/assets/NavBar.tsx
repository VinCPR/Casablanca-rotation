import Image from "next/image";
import styles from "../index.module.css";
export default function NavBar() {
  return (
    <>
      <nav className={styles.NavBarItems}>
        <Image src="/images/Logo.jpg" alt="logo" width={45} height={45} />
        <h1 className={styles.NavBarText}> Rotation </h1>
        <button>Login</button>
      </nav>
    </>
  );
}
