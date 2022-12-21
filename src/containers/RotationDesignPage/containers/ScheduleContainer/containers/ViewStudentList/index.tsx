import * as React from "react";
import { Modal } from "semantic-ui-react";
import styles from "./index.module.scss";

export default function ViewStudentList() {
  const headerItems = ["Student ID", "Name", "College", "Email", "Detail"];
  const data = [
    ["V202100453", "Vu Duc Trung", "CHS", "21trung.vd@vinuni.edu.vn"],
    ["V202100341", "Tran Tien Len", "CHS", "20.len.tt@vinuni.edu.vn"],
  ];
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  return (
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
                  onClick={() => setIsModalOpened(true)}
                  className={styles.detailsBtn}
                >
                  Details
                </button>
              </div>
            );
          })}
        </div>
      </>
      <Modal open={isModalOpened} />
    </div>
  );
}
