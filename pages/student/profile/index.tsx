import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBarStudent from "../../../src/components/SideBarStudent";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
export default function RouteToViewStudentProfile() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={2} />
        <div className={styles.profileContainer}>
          <ViewStudentDetail isEdit={true} />
        </div>
      </div>
    </>
  );
}
