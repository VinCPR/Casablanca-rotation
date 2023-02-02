import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import SideBarStudent from "../../components/SideBarStudent";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import { AcademicCalendar, CalendarEvent } from "@/modules/utils/type";
import EventDetailsPage from "../EventDetailPage";
import EventTable from "./containers/EventTable";
import cx from "classnames";
import httpGetList from "@/modules/http/httpGetList";
import { useEffect } from "react";

export default function RouteToViewSchedule() {
  const [isDetailsView, setIsDetailsView] = React.useState(false);
  const [studentID, setStudentID] = React.useState("V026");
  const [eventID, setEventID] = React.useState("000");
  const [academicCalendar, setAcademicCalendar] = React.useState(
    "2023-2024 MD Program"
  );
  const [showDropdown, setShowDropdown] = React.useState(false);
  React.useEffect(() => {
    setStudentID(localStorage.getItem("id") as string);
  }, []);

  const handleDetailsClick = (eventID: string) => {
    setEventID(eventID);
    setIsDetailsView((prev) => !prev);
  };

  const onClickBack = () => {
    setIsDetailsView((prev) => !prev);
  };

  const search = new URLSearchParams();
  search.append("academicYearName", academicCalendar);
  search.append("studentID", studentID);

  const studentEventResponse = useSWR(
    `https://api.vincpr.com/v1/rotation/student?${search.toString()}`,
    httpGet
  );
  const studentEvent: CalendarEvent[] = studentEventResponse?.data;

  const academicCalendars = useSWR(
    "https://api.vincpr.com/v1/academic_year/list",
    httpGetList
  );
  const calendarData: AcademicCalendar = academicCalendars?.data;

  function getDateFromISO(date: string) {
    if (date.includes("-")) {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }

  studentEvent?.map((event: CalendarEvent) => {
    event.start_date = getDateFromISO(event.start_date);
    event.end_date = getDateFromISO(event.end_date);
  });

  const keys = [
    "start_date",
    "end_date",
    "specialty_name",
    "hospital_name",
    "service_name",
  ];
  const headerItems = [
    "Start Date",
    "End Date",
    "Department",
    "Hospital",
    "Service",
    "Details",
  ];
  const gridTemplateCol = [15, 15, 15, 30, 15, 10];

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={1} />
        {!isDetailsView ? (
          <div className={styles.scheduleContainer}>
            <div className={styles.header}>ROTATION SCHEDULE</div>
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
                            setShowDropdown(!showDropdown);
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
            <div className={styles.schedule}>
              <EventTable
                headerItems={headerItems}
                data={studentEvent}
                keys={keys}
                gridTemplateCol={gridTemplateCol}
                showDetails={true}
                handleDetailsClick={handleDetailsClick}
              />
            </div>
          </div>
        ) : (
          <EventDetailsPage onClickBack={onClickBack} eventID={eventID} />
        )}
      </div>
    </>
  );
}
