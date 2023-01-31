import * as React from "react";
import styles from "./index.module.css";
import { StudentInfo } from "@/modules/utils/type";

interface Props{
  data?: StudentInfo;
}

export default function ViewStudentDetail({data}: Props) {
  function getFullName(data: StudentInfo | undefined): string {
    if (data) {
      return data.last_name + " " + data.first_name;
    } else {
      return "";
    }
  }

  return (
    <div>
      <div className={styles.infoHeader}>PERSONAL INFO</div>
      <div className={styles.personalInfoContainer}>
        <div className={styles.studentPhoto}>
          <img src={data?.image} alt="avatar" width={256} height={256} />
        </div>
        <div className={styles.personalnfo}>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Name: </div>
            <div className={styles.text}> {getFullName(data)} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Email: </div>
            <div className={styles.text}> {data?.email} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Student ID: </div>
            <div className={styles.text}> {data?.student_id} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Phone: </div>
            <div className={styles.text}> {data?.mobile} </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.headerBottom}>BIOGRAPHY</div>
        <div>
          <div className={styles.bioContent}> {data?.biography} </div>
        </div>
      </div>
    </div>
  );
}
