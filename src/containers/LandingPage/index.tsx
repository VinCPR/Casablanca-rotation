import Navbar from "../../components/Navbar";
import Home from "./containers/Home";
import Feature from "./containers/Feature";
import Contact from "./containers/Contact";
import styles from "./index.module.css";
export default function LandingPage() {
  return (
    <>
      <div className={styles.LandingPage}>
        <Navbar />
        <Home />
        <Feature />
        <Contact />
      </div>
    </>
  );
}
