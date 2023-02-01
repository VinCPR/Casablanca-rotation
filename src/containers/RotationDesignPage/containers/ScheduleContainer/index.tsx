import * as React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";
import { CalendarEvent } from "@/modules/utils/type";

interface DateDetail {
  [key: string]: string;
}

export default function ScheduleContainer() {
  const router = useRouter();
  const { date } = router.query;

  const keys = ["specialty_name", "hospital_name", "service_name"];

  const { data, error } = useSWR(
    `https://api.vincpr.com/v1/rotation/list/day?academicYearName=2023-2024%20MD%20Program&day=${date}`,
    httpGet
  );

  if (error) return <div>An error has occured!</div>;
  if (!data) return <div>Loading...</div>;

  const dataResponse: DateDetail[] = data;
  console.log(dataResponse);

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
                    router.push(`/rotation-plan/${date}/schedele-detail`)
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
