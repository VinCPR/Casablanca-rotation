import styles from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBack from "../../../../../DesignRotation/components/MainLayout/RotationDesign/components/ArrowBack";

type Props = {
  showContainer?: () => void;
  startDate?: string;
  endDate?: string;
  department?: string;
  hospital?: string;
  service?: string;
  role?: string;
};

export default function StudentList({
  showContainer,
  startDate,
  endDate,
  department,
  hospital,
  service,
  role,
}: Props) {
  const headerAttending = [
    "Faculty ID",
    "Name",
    "College",
    "Email",
    "Personal Info",
  ];
  const headerStudent = [
    "Student ID",
    "Name",
    "College",
    "Email",
    "Personal Info",
  ];
  const dataAttending = [
    ["123213213", "Giang Van Vien", "CHS", "21trung.vd@vinuni.edu.vn"],
    ["324343241", "Giang Van Vien", "CHS", "20len.tt@vinuni.edu.vn"],
  ];
  const dataStudent = [
    ["V202100453", "Hoc Van Sinh", "CHS", "21trung.vd@vinuni.edu.vn"],
    ["V202100341", "Sinh Van Vien", "CHS", "20len.tt@vinuni.edu.vn"],
  ];
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <button onClick={showContainer} className={styles.backButton}>
        <ArrowBack />
        BACK
      </button>
      <div className={styles.secondLayoutHeader}>
        Group List {department} {service} {hospital} {startDate} - {endDate}
      </div>

      <div className={styles.subHeader}>Attending List</div>
      <div
        className={styles.container}
        style={{ height: dataAttending.length * 62 + 91 + "px" }}
      >
        <>
          <div className={styles.header}>
            {headerAttending.map((value, index) => {
              return (
                <div key={index} className={styles.headerItems}>
                  {value}
                </div>
              );
            })}
          </div>

          <div className={styles.scheduleContainer}>
            {dataAttending.map((row, index) => {
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
                        `${role}/attending-profile/${dataAttending[index][0]}`
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
      <div className={styles.subHeader}>Student List</div>
      <div
        className={styles.container}
        style={{ height: dataStudent.length * 62 + 91 + "px" }}
      >
        <>
          <div className={styles.header}>
            {headerStudent.map((value, index) => {
              return (
                <div key={index} className={styles.headerItems}>
                  {value}
                </div>
              );
            })}
          </div>

          <div className={styles.scheduleContainer}>
            {dataStudent.map((row, index) => {
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
                        `${role}/student-profile/${dataStudent[index][0]}`
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
