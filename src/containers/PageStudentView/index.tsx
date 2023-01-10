import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import SideBarStudent from "../../components/SideBarStudent";
import StudentTable from "./containers/StudentTable";

export default function RouteToViewSchedule() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={1} />
        <div className={styles.scheduleContainer}>
          <div className={styles.schedule}>
            <StudentTable />
          </div>
        </div>
      </div>
    </>
  );
}
