import { useEffect, useState } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from "../../src/components/Navbar";
import StyledCalendar from "../../src/containers/ViewCalendarPage/containers/StyledCalendar";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import RestrictedAccessPage from "../../src/containers/RestrictedAccessPage";

export default function RouteToRotationView() {
  const [value, setValue] = useState(new Date());
  const [role, setRole] = useState("");

  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name") as string);
    }
  }, []);
  const router = useRouter();
  return (
    <>
      {role === "admin" && (
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
      )}
      {role === "student" && <RestrictedAccessPage role={"student"} />}
      {role === "attending" && <RestrictedAccessPage role={"attending"} />}
    </>
  );
}
