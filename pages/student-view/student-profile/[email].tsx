import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import SideBar from "../../../src/components/Sidebar";
import ViewStudentDetail from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList/containers/ViewStudentDetail";
import { StudentInfo } from "@/modules/utils/type";
import { GetStaticPaths, GetStaticProps } from "next";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";

export default function RouteToViewStudentProfile(props: {
  student: StudentInfo;
}) {
  getData();
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

function getData() {
  const allStudentsResponse = useSWR(
    "https://api.vincpr.com/v1/student/list/name?pageNumber=1&pageSize=200",
    httpGet
  );
  const data = allStudentsResponse?.data;
  console.log(data);
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allStudentsResponse = useSWR(
    "https://api.vincpr.com/v1/student/list/name?pageNumber=1&pageSize=200",
    httpGet
  );
  const students: StudentInfo[] = allStudentsResponse?.data;

  const pathWithParams = students?.map((student) => ({
    params: { email: student?.email.replace("@", "%40") },
  }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = (context) => {
  const email = context.params?.email;
  const studentInfoResponse = useSWR(
    `https://api.vincpr.com/v1/student/list/name?email=${email}`,
    httpGet
  );
  const student = studentInfoResponse?.data;
  console.log(student);

  // if (!student) {
  //   return {
  //     props: { hasError: true },
  //   };
  // }

  return {
    props: {
      student: student,
    },
  };
};
