import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import ViewAttendingDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
import SideBarAttending from "../../../src/components/SideBarAttending";
import { AttendingInfo } from "@/modules/utils/type";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";

export default function RouteToViewAttendingProfile() {
  let email: string | null = "";
  if (typeof window !== "undefined") {
    email = localStorage.getItem("email");
  }
  email = encodeURIComponent(email as string);

  const attendingInfoResponse = useSWR(
    `https://api.vincpr.com/v1/attending/info?email=${email}`,
    httpGet
  );
  const data: AttendingInfo = attendingInfoResponse?.data;

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarAttending highlight={2} />
        <div className={styles.profileContainer}>
          <ViewAttendingDetail data={data} />
        </div>
      </div>
    </>
  );
}
