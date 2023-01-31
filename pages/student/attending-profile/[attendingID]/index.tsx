import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../../src/components/Navbar";
import SideBarStudent from "../../../../src/components/SideBarStudent";
import ViewAttendingDetail from "../../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";

export default function RouteToViewAttedningProfileNoEdit() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={1} />
        <div className={styles.profileContainer}>
          <ViewAttendingDetail />
        </div>
      </div>
    </>
  );
}
