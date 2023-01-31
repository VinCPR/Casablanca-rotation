import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../../src/components/Navbar";
import ViewAttendingDetail from "../../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
import SideBarAttending from "../../../../src/components/SideBarAttending";

export default function RouteToViewAttendingProfileNoEdit() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarAttending highlight={1} />
        <div className={styles.profileContainer}>
          <ViewAttendingDetail/>
        </div>
      </div>
    </>
  );
}
