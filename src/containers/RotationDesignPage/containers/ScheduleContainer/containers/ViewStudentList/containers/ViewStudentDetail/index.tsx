import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";
import { StudentInfo } from "@/modules/utils/type";

export default function ViewStudentDetail() {
  const student = useSWR(
    "https://api.vincpr.com/v1/student/info?email=bachmai.duong0%40yahoo.com", httpGet);

  console.log(student.error);

  const data: StudentInfo = student?.data;
  const biography = "Hello, I am OK";

  function getFullName (data: StudentInfo):string{
    return data.last_name + " " + data.first_name;
  };

  return (
    <div>
      <div className={styles.infoHeader}>PERSONAL INFO</div>
      <div className={styles.personalInfoContainer}>
        <div className={styles.studentPhoto}>
          <Image
            src={"/images/anhthe.png"}
            alt="avatar"
            width={232}
            height={299}
          />
        </div>
        <div className={styles.personalnfo}>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Name: </div>
            <div className={styles.text}> {getFullName(data)} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Email: </div>
            <div className={styles.text}> {data.email} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Student ID: </div>
            <div className={styles.text}> {data.student_id} </div>
          </div>
          <div className={styles.rowContainer}>
            <div className={styles.boldText}>Phone: </div>
            <div className={styles.text}> {data.mobile} </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.headerBottom}>BIOGRAPHY</div>
        <div>
          <div className={styles.bioContent}> {biography} </div>
        </div>
      </div>
    </div>
  );
}
