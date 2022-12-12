import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
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
