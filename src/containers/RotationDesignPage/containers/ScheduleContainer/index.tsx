import * as React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";

interface DateDetail {
  [key: string]: string;
}

export default function ScheduleContainer() {
  const router = useRouter();
  const { date } = router.query;

  const keys = ["specialty_name", "hospital_name", "service_name"];
  function getDateFromISO(date: string | string[] | undefined) {
    if (date?.includes("-") && typeof date === "string") {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }
  const { data, error } = useSWR(
    `https://api.vincpr.com/v1/rotation/list/day?academicYearName=2023-2024%20MD%20Program&day=${date}`,
    httpGet
  );
  console.log(data);

  if (error) return <div>An error has occured!</div>;
  if (!data && data !== null) return <div>Loading...</div>;
  if (data === null)
    return <div>No schedule for day {getDateFromISO(date)}</div>;

  const dataResponse: DateDetail[] = data;

  const headerItems = [
    "Group ID",
    // "Start Date",
    // "End Date",
    "Department",
    "Hospital",
    "Service",
    "Detail",
  ];

  return (
    <div
      className={styles.container}
      style={{ height: dataResponse.length * 62 + 91 + "px" }}
    >
      <>
        <div className={styles.header}>
          {headerItems.map((value, index) => {
            return (
              <div key={index} className={styles.headerItems}>
                {value}
              </div>
            );
          })}
        </div>

        <div className={styles.scheduleContainer}>
          {dataResponse?.map((row, index) => {
            return (
              <div className={styles.rowContainer} key={index}>
                <div className={styles.item} key={index}>
                  {index + 1}
                </div>
                {keys.map((value, index) => {
                  return (
                    <div className={styles.item} key={index}>
                      {row[value]}
                    </div>
                  );
                })}
                <button
                  className={styles.detailsBtn}
                  onClick={() =>
                    router.push(
                      `/rotation-plan/schedule-detail/${row[
                        "event_id"
                      ].toString()}`
                    )
                  }
                >
                  Details
                </button>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}
