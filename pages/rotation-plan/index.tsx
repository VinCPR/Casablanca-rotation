import { useState } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from "../../src/components/Navbar";
import StyledCalendar from "../../src/containers/ViewCalendarPage/containers/StyledCalendar";
import styles from "./index.module.css";

export default function RouteToRotationView() {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <Navbar />
      <>
        <Sidebar />
        <div className={styles.calendarContainer}>
          <div className={styles.calendarHeader}>ROTATION PLAN</div>
          <div className={styles.calendarSubheader}>
            Click on a specific day to see the detailed schedule
          </div>
          <div className={styles.calendar}>
            <StyledCalendar
              onClickDay={() => {}} // TODO: Display schedule on that day
              onChange={setValue}
              value={value}
            />
          </div>
        </div>
      </>
    </>
  );
}
