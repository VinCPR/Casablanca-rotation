import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import Feature from "./assets/Feature";
import Contact from "./assets/Contact";
import styles from "./index.module.css";
export default function LandingPage() {
    return (
        <>
            <div className={styles.LandingPage} >
                <NavBar/>
                <Home/>
                <Feature/>
                <Contact/>
            </div>
        </>
    )
}
