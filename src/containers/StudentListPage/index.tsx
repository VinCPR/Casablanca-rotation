import * as React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import styles from "./index.module.css";
import Table from "../../components/Table";

export default function StudentListPage() {
  const headerItems = ["Student ID", "Name", "College", "Email", "Detail"];
  const data = [
    ["V202100453", "Vu Duc Trung", "CHS", "21trung.vd@vinuni.edu.vn"],
    ["V202100341", "Tran Tien Len", "CHS", "20len.tt@vinuni.edu.vn"],
  ];
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
            gridTemplateCol={[15, 25, 10, 30, 20]}
            showDetails={true}
          />
        </div>
      </div>
    </>
  );
}
