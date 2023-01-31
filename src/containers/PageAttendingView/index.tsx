import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import { CalendarEvent } from "@/modules/utils/type";
import Table from "../../components/Table";
import SideBarAttending from "../../components/SideBarAttending";

export default function RouteToViewSchedule() {
  let attendingID: string | null = "V026";
  if (typeof window !== "undefined") {
    attendingID = localStorage.getItem("id");
  }

  const attendingEventResponse = useSWR(
    `https://api.vincpr.com/v1/rotation/attending?academicYearName=2023-2024%20MD%20Program&attendingID=${attendingID}`,
    httpGet
  );
  const attendingEvent: CalendarEvent[] = attendingEventResponse?.data;

  function getDateFromISO(date: string) {
    if (date.includes("-")) {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }

  attendingEvent?.map((event: CalendarEvent) => {
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
        <SideBarAttending highlight={1} />
        <div className={styles.scheduleContainer}>
          <div className={styles.header}>ROTATION SCHEDULE</div>
          <div className={styles.schedule}>
            <Table
              headerItems={headerItems}
              data={attendingEvent}
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
