import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../../src/components/Navbar";
import ViewStudentDetail from "../../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import SideBarStudent from "../../../../src/components/SideBarStudent";

export default function RouteToViewStudentProfileNoEdit() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={1} />
        <div className={styles.profileContainer}>
          <ViewStudentDetail isEdit={false} />
        </div>
      </div>
    </>
  );
}
