import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import styles from "./index.module.css";
import Table from "../../components/Table";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";
import RestrictedAccessPage from "../RestrictedAccessPage";

export default function StudentListPage() {
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name") as string);
    }
  }, []);

  const { data, error } = useSWR(
    "https://api.vincpr.com/v1/student/list/name?pageNumber=1&pageSize=200",
    httpGet
  );

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

  const gridTemplateCol = [15, 15, 15, 25, 15, 15];
  const keys = ["student_id", "first_name", "last_name", "email", "mobile"];

  return (
    <>
      {role === "admin" && (
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
                detailsRoute={"/student-view/student-profile/"}
              />
            </div>
          </div>
        </>
      )}
      {role === "student" && <RestrictedAccessPage role={"student"} />}
      {role === "attending" && <RestrictedAccessPage role={"attending"} />}
    </>
  );
}
