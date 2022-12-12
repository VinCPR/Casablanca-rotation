import Image from"next/image";
import styles from "./NavBar.module.css";
export default function NavBar() {
    return (
        <>
            <nav className={styles.navBarItems}>
                <Image src="/images/Logo.jpg" alt="logo"  width={45} height={45}/>
                <h1 className= {styles.navBarText}> Rotation </h1>
                <button>Login</button>

            </nav>
        </>
    )
}
