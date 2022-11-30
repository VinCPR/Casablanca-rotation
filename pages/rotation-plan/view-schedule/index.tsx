import styles from "./index.module.css";
import Navbar from "../../../src/components/Navbar";
import Sidebar from "../../../src/components/Sidebar";
import ScheduleContainer from "../../../src/containers/RotationDesignPage/containers/ScheduleContainer";

export default function RouteToViewSchedule() {
  return (
    <>
      <Navbar />
      <>
        <Sidebar />
        <div className={styles.scheduleContainer}>
          <div className={styles.scheduleHeader}>ROTATION SCHEDULE</div>
          <div className={styles.scheduleDate}>Date: November 10, 2022</div>
          <div className={styles.schedule}>
                <ScheduleContainer/>
          </div>
        </div>
      </>
    </>
  );
}
