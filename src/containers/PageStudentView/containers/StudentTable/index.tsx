import * as React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import ViewStudentList from "../../../RotationDesignPage/containers/ScheduleContainer/containers/ViewStudentList";
import StudentList from "./containers/StudentList";

export default function StudentTable() {
  const router = useRouter();
  const [showContainer, setShowContainer] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const data = [
    ["13/5/2022", "20/5/2022", "Pediatrics", "Vinmec", "OutPatient"],
    ["20/5/2022", "26/6/2022", "Neurology", "Vinmec", "OutPatient"],
  ];

  function onClick(x: number) {
    setIndex(x);
    setShowContainer(false);
  }

  const headerItems = [
    "StartDate",
    "EndDate",
    "Department",
    "Hospital",
    "Service",
    "Group Info",
  ];

  return (
    <div>
      {showContainer ? (
        <div className={styles.firstLayout}>
          <div className={styles.scheduleHeader}>ROTATION SCHEDULE</div>
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
                        onClick={() => onClick(index)}
                      >
                        Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          </div>
        </div>
      ) : (
        <StudentList
          startDate={data[index][0]}
          endDate={data[index][1]}
          department={data[index][2]}
          hospital={data[index][3]}
          service={data[index][4]}
        />
      )}
    </div>
  );
}
