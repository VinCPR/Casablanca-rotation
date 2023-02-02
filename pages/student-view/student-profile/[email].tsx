import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBar from "../../../src/components/Sidebar";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import { StudentInfo } from "@/modules/utils/type";
import { GetStaticPaths, GetStaticProps } from "next";
import SideBarStudent from "../../../src/components/SideBarStudent";
import SideBarAttending from "../../../src/components/SideBarAttending";

export default function RouteToViewStudentProfile(props: {
  student: StudentInfo;
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
        {role === "admin" && <SideBar highlight={3} />}
        {role === "student" && <SideBarStudent highlight={2} />}
        {role === "attending" && <SideBarAttending highlight={2} />}
        <div className={styles.profileContainer}>
          <ViewStudentDetail data={props.student} />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const students: StudentInfo[] = await fetch(
    "https://api.vincpr.com/v1/student/list/name?pageNumber=1&pageSize=200"
  ).then((r) => r.json());

  const pathWithParams = students?.map((student) => ({
    params: { email: encodeURIComponent(student?.email) },
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
  const student: StudentInfo = await fetch(
    `https://api.vincpr.com/v1/student/info?email=${email}`
  ).then((r) => r.json());

  return {
    props: {
      student: student,
    },
  };
};
