import Navbar from "../../components/Navbar";
import Home from "./containers/Home";
import Feature from "./containers/Feature";
import Contact from "./containers/Contact";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import SideBarStudent from "../../components/SideBarStudent";
import StudentTable from "../PageStudentView/containers/StudentTable";
import SideBarAttending from "../../components/SideBarAttending";
import DesignRotation from "../DesignRotation";
export default function LandingPage() {
  const [role, setRole] = useState<String | null>("no_login");

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name"));
    }
    // console.log(localStorage.getItem("role_name"));
  }, []);

  return (
    <>
      {role === "no_login" && (
        <div className={styles.LandingPage}>
          <Navbar />
          <Home />
          <Feature />
          <Contact />
        </div>
      )}
      {role === "student" && (
        <>
          <Navbar />
          <div style={{ position: "relative" }}>
            <SideBarStudent highlight={1} />
            <div className={styles.scheduleContainer}>
              <div className={styles.schedule}>
                <StudentTable role={"student"} />
              </div>
            </div>
          </div>
        </>
      )}
      {role === "attending" && (
        <>
          <Navbar />
          <div style={{ position: "relative" }}>
            <SideBarAttending highlight={1} />
            <div className={styles.scheduleContainer}>
              <div className={styles.schedule}>
                <StudentTable role={"attending"} />
              </div>
            </div>
          </div>
        </>
      )}
      {role === "admin" && <DesignRotation />}
    </>
  );
}
