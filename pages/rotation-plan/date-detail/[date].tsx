import * as React from "react";
import styles from "./index.module.css";
import Sidebar from "../../../src/components/Sidebar";
import ScheduleContainer from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer";
import ArrowBack from "../../../src/containers/DesignRotation/components/MainLayout/RotationDesign/components/ArrowBack";
import { useRouter } from "next/router";
import Navbar from "../../../src/components/Navbar";

export default function RouteToViewSchedule() {
  const router = useRouter();
  const { date } = router.query;
  function getDateFromISO(date: string | string[] | undefined) {
    if (date?.includes("-") && typeof date === "string") {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <div className={styles.scheduleContainer}>
          <button onClick={() => history.back()} className={styles.backButton}>
            <ArrowBack />
            BACK
          </button>
          <div className={styles.scheduleHeader}>ROTATION SCHEDULE</div>
          <div className={styles.scheduleDate}>
            Date: {getDateFromISO(date)}
          </div>
          <div className={styles.schedule}>
            <ScheduleContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
