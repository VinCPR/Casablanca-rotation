import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../../src/components/Navbar";
import SideBarAttending from "../../../../src/components/SideBarAttending";
import ViewStudentDetail from "../../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";

export default function RouteToViewAttendingProfileNoEdit() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarAttending highlight={1} />
        <div className={styles.profileContainer}>
          <ViewStudentDetail isEdit={false} />
        </div>
      </div>
    </>
  );
}
