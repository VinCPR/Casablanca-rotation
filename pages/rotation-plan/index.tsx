import { useEffect, useState } from "react";
import Sidebar from "../../src/components/Sidebar";
import Navbar from "../../src/components/Navbar";
import StyledCalendar from "../../src/containers/ViewCalendarPage/containers/StyledCalendar";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import moment from "moment";
import RestrictedAccessPage from "../../src/containers/RestrictedAccessPage";
import cx from "classnames";
import { AcademicCalendar } from "@/modules/utils/type";
import useSWR from "swr";
import httpGetList from "@/modules/http/httpGetList";

export default function RouteToRotationView() {
  const [value, setValue] = useState(new Date());
  const [role, setRole] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [academicCalendar, setAcademicCalendar] = useState("Click to select");
  const [isSelectCalendar, setIsSelectCalendar] = useState(false);
  const academicCalendars = useSWR(
    "https://api.vincpr.com/v1/academic_year/list",
    httpGetList
  );
  const calendarData: AcademicCalendar = academicCalendars?.data;
  useEffect(() => {
    const aca = localStorage.getItem("academic_calendar");
    if (aca) {
      setAcademicCalendar(aca);
      setIsSelectCalendar(true);
    }
  }, []);
  function onClickDay(date: Date) {
    if (!isSelectCalendar) {
      alert("You have to select the academic year");
    } else {
      router.push(
        `rotation-plan/date-detail/${moment(date).format("YYYY-MM-DD")}`
      );
    }
  }

  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setRole(localStorage.getItem("role_name") as string);
    }
  }, []);
  const router = useRouter();
  function setCalendar(calendar: string) {
    localStorage.setItem("academic_calendar", calendar);
  }

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
              <div className={styles.container}>
                <div className={styles.dropdownContainer}>
                  <div className={styles.heading}>Select the academic year</div>
                  <button
                    className={cx(styles.input, styles.dropdownButton)}
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    {academicCalendar}
                  </button>
                  {showDropdown ? (
                    <div className={styles.dropdown}>
                      {calendarData.map((data, index) => {
                        return (
                          <button
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => {
                              setAcademicCalendar(data.name);
                              setCalendar(data.name);
                              setShowDropdown(!showDropdown);
                              setIsSelectCalendar(true);
                            }}
                          >
                            {data.name}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={styles.calendar}>
                <StyledCalendar
                  onClickDay={(date: Date) => onClickDay(date)}
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
