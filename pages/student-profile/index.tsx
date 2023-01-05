import StudentProfile from "../../src/containers/StudentProfile";
import Navbar from "../../src/components/Navbar";
import Sidebar from "../../src/components/Sidebar";
import styles from "./index.module.css";
export default () => {
  return(
    <>
        <Navbar />
        <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
            <div className={styles.profileContainer}>
                <StudentProfile/>
            </div>
        </div>
    </>
    );
}