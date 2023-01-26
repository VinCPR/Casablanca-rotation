import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import ViewAttendingDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
import SideBarAttending from "../../../src/components/SideBarAttending";

export default function RouteToViewAttendingProfile() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarAttending highlight={2} />
        <ViewAttendingDetail isEdit={true} />
      </div>
    </>
  );
}
