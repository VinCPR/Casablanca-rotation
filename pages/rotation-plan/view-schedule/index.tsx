import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import Sidebar from "../../../src/components/Sidebar";
import ScheduleContainer from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer";
import ArrowBack from "../../../src/containers/DesignRotation/components/MainLayout/RotationDesign/components/ArrowBack";

export default function RouteToViewSchedule() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <div className={styles.scheduleContainer}>
          <button className={styles.backButton}>
            <ArrowBack />
            BACK
          </button>
          <div className={styles.scheduleHeader}>ROTATION SCHEDULE</div>
          <div className={styles.scheduleDate}>Date: November 10, 2022</div>
          <div className={styles.schedule}>
            <ScheduleContainer />
          </div>
        </div>
      </div>
    </>
  );
}
