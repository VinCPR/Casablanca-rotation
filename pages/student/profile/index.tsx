import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import Sidebar from "../../../src/components/Sidebar";
export default function RouteToViewStudentProfile() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <div className={styles.profileContainer}>
          <ViewStudentDetail />
        </div>
      </div>
    </>
  );
}
