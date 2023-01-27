import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../../../src/components/Navbar";
import Sidebar from "../../../../../src/components/Sidebar";
import ViewAttendingDetail from "../../../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
export default function RouteToViewStudentProfile() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <ViewAttendingDetail isEdit={true} />
      </div>
    </>
  );
}
