import Navbar from "../../components/Navbar";
import Home from "./containers/Home";
import Feature from "./containers/Feature";
import Contact from "./containers/Contact";
import styles from "./index.module.css";
import { useEffect, useMemo, useState } from "react";
import DesignRotation from "../DesignRotation";
import PageStudentView from "../PageStudentView";
import PageAttendingView from "../PageAttendingView";
export default function LandingPage() {
  const [role, setRole] = useState<String | null>("");

  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name"));
    } else {
      setRole("no_login");
    }
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
      {role === "student" && <PageStudentView />}
      {role === "attending" && <PageAttendingView />}
      {role === "admin" && <DesignRotation />}
    </>
  );
}
