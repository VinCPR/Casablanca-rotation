import React from "react";
import Navbar from "../../components/Navbar";
import SideBarAttending from "../../components/SideBarAttending";
import SideBarStudent from "../../components/SideBarStudent";
import SideBar from "../../components/Sidebar";
import styles from "./index.module.css";

export default function NotFoundPage() {
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name") as string);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", height: "100vh" }}>
        {role == "admin" && <SideBar highlight={0} />}
        {role === "student" && <SideBarStudent highlight={0} />}
        {role === "attending" && <SideBarAttending highlight={0} />}
        <div className={styles.header}>404 Error</div>
        <div className={styles.content}>
          {" "}
          This page does not exist, please return to your Homepage{" "}
        </div>
      </div>
    </>
  );
}
