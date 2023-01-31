import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBarStudent from "../../../src/components/SideBarStudent";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import useSWR from 'swr';
import httpGet from "@/modules/http/httpGet";
import { StudentInfo } from "@/modules/utils/type";

export default function RouteToViewStudentProfile() {
  let email: string | null = "";
  if (typeof window !== 'undefined') {
    email = localStorage.getItem("email");
  }
  email = encodeURIComponent(email as string);
  console.log(email);

  const studentInfoResponse = useSWR(
    `https://api.vincpr.com/v1/student/info?email=${email}`,
    httpGet
  );
  const data: StudentInfo = studentInfoResponse?.data;

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={2} />
        <div className={styles.profileContainer}>
          <ViewStudentDetail data={data}/>
        </div>
      </div>
    </>
  );
}
