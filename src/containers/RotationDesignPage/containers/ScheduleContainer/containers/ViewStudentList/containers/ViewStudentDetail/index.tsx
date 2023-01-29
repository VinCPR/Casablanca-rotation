import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import useSWR from 'swr';
import httpGet from "@/modules/http/httpGet";

export default function ViewStudentDetail() {
  const name = "Do My Dieu Linh";
  const email = "22linh.dmd@vinuni.edu.vn";
  const phone = "0904291212";
  const studentID = "V202106969";
  const biography = "Hello, I am OK";

  return (
    <div>
      <div className={styles.infoHeader}>PERSONAL INFO</div>
      <div className={styles.personalInfoContainer}>
        <div className={styles.studentPhoto}>
          <Image
            src={"/images/anhthe.png"}
            alt="logo"
            width={232}
            height={299}
          />
        </div>
        <div className={styles.personalnfo}>
          <div>
            <div className={styles.rowContainer}>
              <div className={styles.boldText}>Name: </div>
              <div className={styles.text}> {name} </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.boldText}>Email: </div>
              <div className={styles.text}> {email} </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.boldText}>Student ID: </div>
              <div className={styles.text}> {studentID} </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.boldText}>Phone: </div>
              <div className={styles.text}> {phone} </div>
            </div>
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
