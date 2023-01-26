import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import Sidebar from "../../../src/components/Sidebar";
import ScheduleContainer from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer";
import ArrowBack from "../../../src/containers/DesignRotation/components/MainLayout/RotationDesign/components/ArrowBack";
import { useRouter } from "next/router";

export default function RouteToViewSchedule() {
  const router = useRouter();
  const { date } = router.query;
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
            Date: {date != null ? (date as string).replaceAll("-", " ") : null}
          </div>
          <div className={styles.schedule}>
            <ScheduleContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
