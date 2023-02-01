import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBar from "../../../src/components/Sidebar";
import { AttendingInfo } from "@/modules/utils/type";
import { GetStaticPaths, GetStaticProps } from "next";
import ViewAttendingDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewAttendingDetail";
import SideBarStudent from "../../../src/components/SideBarStudent";
import SideBarAttending from "../../../src/components/SideBarAttending";

export default function RouteToViewFacultyProfile(props: {
  attending: AttendingInfo;
}) {
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name") as string);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        {role === "admin" && <SideBar highlight={2} />}
        {role === "student" && <SideBarStudent highlight={2} />}
        {role === "attending" && <SideBarAttending highlight={2} />}
        <div className={styles.profileContainer}>
          <ViewAttendingDetail data={props.attending} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const attendings: AttendingInfo[] = await fetch(
    "https://api.vincpr.com/v1/attending/list/name?pageNumber=1&pageSize=200"
  ).then((r) => r.json());

  const pathWithParams = attendings?.map((attending) => ({
    params: { email: encodeURIComponent(attending?.email) },
  }));

  return {
    paths: pathWithParams,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let email = context.params?.email;
  if (typeof email === "string") {
    email = encodeURIComponent(email);
  }
  const attending: AttendingInfo = await fetch(
    `https://api.vincpr.com/v1/attending/info?email=${email}`
  ).then((r) => r.json());

  return {
    props: {
      attending: attending,
    },
  };
};
