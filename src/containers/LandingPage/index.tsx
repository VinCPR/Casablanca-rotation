<<<<<<< HEAD
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
=======
import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import Feature from "./assets/Feature";
import Contact from "./assets/Contact";
import styles from "./index.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.LandingPage}>
        <NavBar />
        <Home />
        <Feature />
        <Contact />
      </div>
    </>
  );
>>>>>>> 79393a57f5fcb8531da960c0505bccf32e8a520d
}
