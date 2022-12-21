import * as React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import ViewStudentList from "./containers/ViewStudentList";

export default function ScheduleContainer() {
  const router = useRouter();
  const [showContainer, setShowContainer] = React.useState(true);
  const data = [
    ["1", "1", "Vinmec", "Pediatrics", "Alice"],
    ["2", "2", "Vinmec", "Neurology", "Bob"],
    ["3", "3", "108 Hospital", "Surgery", "Carl"],
    ["4", "4", "Vinmec", "Psychiatry", "David"],
    ["5", "5", "Vinmec", "Internal Medicine", "Edgar"],
    ["6", "6", "108 Hospital", "Internal Medicine", "Frank"],
  ];

  const headerItems = [
    "Block ID",
    "Group ID",
    "Hospital",
    "Department",
    "Faculty",
  ];

  return (
    <>
      {showContainer && (
        <div className={styles.container}>
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
              {data.map((row, index) => {
                return (
                  <div className={styles.rowContainer} key={index}>
                    {row.map((value, index) => {
                      return (
                        <div className={styles.item} key={index}>
                          {value}
                        </div>
                      );
                    })}
                    <button
                      className={styles.detailsBtn}
                      onClick={() => setShowContainer(false)}
                    >
                      Details
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        </div>
      )}
      {!showContainer && <ViewStudentList />}
    </>
  );
}
