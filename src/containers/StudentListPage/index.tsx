import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import styles from "./index.module.css";
import Table from "../../components/Table";
import httpGetStudents from "@/modules/http/httpGetStudents";
import useSWR from "swr";

export default function StudentListPage() {
  const { data, error } = useSWR("getStudentList", httpGetStudents);

  if (error) return <div>An error has occured!</div>;
  if (!data) return <div>Loading...</div>;

  const headerItems = [
    "Student ID",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Detail",
  ];

  const gridTemplateCol = [10, 15, 20, 25, 15, 15];
  const keys = ["student_id", "first_name", "last_name", "email", "mobile"];

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBar highlight={3} />
        <div className={styles.mainContainer}>
          <div className={styles.header}>STUDENT LIST</div>
          <Table
            headerItems={headerItems}
            data={data}
            keys={keys}
            gridTemplateCol={gridTemplateCol}
            showDetails={true}
          />
        </div>
      </div>
    </>
  );
}
