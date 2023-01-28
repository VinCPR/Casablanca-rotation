import * as React from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

export default function ViewStudentList() {
  const headerItems = ["Student ID", "Name", "College", "Email", "Detail"];
  const data = [
    ["V202100453", "Vu Duc Trung", "CHS", "21trung.vd@vinuni.edu.vn"],
    ["V202100341", "Tran Tien Len", "CHS", "20len.tt@vinuni.edu.vn"],
  ];
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
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
                    onClick={() =>
                      router.push(
                        `/rotation-plan/${date}/view-schedule/${row[0]}`
                      )
                    }
                    className={styles.detailsBtn}
                  >
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}
