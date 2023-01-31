import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../src/components/Navbar";
import ViewAttendingDetail from "../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
import { useEffect, useState } from "react";
import ViewStudentDetail from "../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import SideBarView from "../../src/components/SideBarView";

export default function RouteToViewAttendingProfile() {
  const [role, setRole] = useState<String | null>("");

  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name"));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarView highlight={2} />
        <div className={styles.profileContainer}>
          {role === "student" && <ViewStudentDetail />}
          {role === "attending" && <ViewAttendingDetail />}
        </div>
      </div>
    </>
  );
}
