import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import Table from "../../components/Table";
import styles from "./index.module.css";
import useSWR from "swr";
import httpGetFaculty from "@/modules/http/httpGetFaculty";

export default function FacultyListPage() {
  const { data, error } = useSWR("getFacultyList", httpGetFaculty);

  if (error) return <div>An error has occured!</div>;
  if (!data) return <div>Loading...</div>;

  const headerItems = [
    "Faculty ID",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Detail",
  ];

  const gridTemplateCol = [10, 15, 20, 25, 15, 15];
  const keys = [
    "attending_id",
    "first_name",
    "last_name",
    "email",
    "mobile"
  ];
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBar highlight={4} />
        <div className={styles.mainContainer}>
          <div className={styles.header}>FACULTY LIST</div>
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
