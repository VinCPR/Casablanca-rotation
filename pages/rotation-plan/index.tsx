import { useState } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from "../../src/components/Navbar";
import StyledCalendar from "../../src/containers/ViewCalendarPage/containers/StyledCalendar";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import moment from "moment";

export default function RouteToRotationView() {
  const [value, setValue] = useState(new Date());
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
        <div className={styles.calendarContainer}>
          <div className={styles.calendarHeader}>ROTATION PLAN</div>
          <div className={styles.calendarSubheader}>
            Click on a specific day to see the detailed schedule
          </div>
          <div className={styles.calendar}>
            <StyledCalendar
              onClickDay={(date: Date) => {
                router.push(
                  `rotation-plan/date-detail/${moment(date).format(
                    "YYYY-MM-DD"
                  )}`
                );
              }}
              onChange={setValue}
              value={value}
            />
          </div>
        </div>
      </div>
    </>
  );
}
