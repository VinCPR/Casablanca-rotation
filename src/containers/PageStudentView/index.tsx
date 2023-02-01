import * as React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import SideBarStudent from "../../components/SideBarStudent";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import { CalendarEvent } from "@/modules/utils/type";
import EventDetailsPage from "../EventDetailPage";
import EventTable from "./containers/EventTable";

export default function RouteToViewSchedule() {
  const [isDetailsView, setIsDetailsView] = React.useState(false);
  const [studentID, setStudentID] = React.useState("V026");
  const [eventID, setEventID] = React.useState("000");
  React.useEffect(() => {
    setStudentID(localStorage.getItem("id") as string);
  }, []);

  const handleDetailsClick = (eventID: string) => {
    setEventID(eventID);
    setIsDetailsView((prev) => !prev);
  };

  const onClickBack = () => {
    setIsDetailsView((prev) => !prev);
  }

  const studentEventResponse = useSWR(
    `https://api.vincpr.com/v1/rotation/student?academicYearName=2023-2024%20MD%20Program&studentID=${studentID}`,
    httpGet
  );
  const studentEvent: CalendarEvent[] = studentEventResponse?.data;

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
