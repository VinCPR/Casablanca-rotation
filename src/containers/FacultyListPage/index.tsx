import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import Table from "../../components/Table";
import styles from "./index.module.css";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";

export default function FacultyListPage() {
  const { data, error } = useSWR("https://api.vincpr.com/v1/attending/list/name?pageNumber=1&pageSize=200", httpGet);

  if (error) return <div>An error has occured!</div>;
  if (!data) return <div>Loading...</div>;

  const headerItems = [
    "Attending ID",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Detail",
  ];

  const gridTemplateCol = [15, 15, 15, 25, 15, 15];
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
          <div className={styles.header}>ATTENDING LIST</div>
          <Table
            headerItems={headerItems}
            data={data}
            keys={keys}
            gridTemplateCol={gridTemplateCol}
            showDetails={true}
            detailsRoute={"/faculty-list/profile/"}
          />
        </div>
      </div>
    </>
  );
}
