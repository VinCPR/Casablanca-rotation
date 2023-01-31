import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import SideBarStudent from "../../components/SideBarStudent";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import { StudentCalendarEvent } from "@/modules/utils/type";
import Table from "../../components/Table";

export default function RouteToViewSchedule() {
  let studentID: string | null = "V026";
  if (typeof window !== 'undefined') {
    studentID = localStorage.getItem("id");
  }

  const studentEventResponse = useSWR(
    `https://api.vincpr.com/v1/rotation/student?academicYearName=2023-2024%20MD%20Program&studentID=${studentID}`,
    httpGet
  );
  const studentEvent: StudentCalendarEvent[] = studentEventResponse?.data;

  function getDateFromISO(date: string) {
    if (date.includes("-")) {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }

  studentEvent?.map((event: StudentCalendarEvent) => {
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
        <div className={styles.scheduleContainer}>
          <div className={styles.header}>ROTATION SCHEDULE</div>
          <div className={styles.schedule}>
            <Table
              headerItems={headerItems}
              data={studentEvent}
              keys={keys}
              gridTemplateCol={gridTemplateCol}
              showDetails={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
