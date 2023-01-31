import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBar from "../../../src/components/Sidebar";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import { StudentInfo } from "@/modules/utils/type";
import { GetStaticPaths, GetStaticProps } from "next";

export default function RouteToViewStudentProfile(props: {
  student: StudentInfo;
}) {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBar highlight={2} />
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
