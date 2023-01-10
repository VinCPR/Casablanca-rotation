import Navbar from "../../src/components/Navbar";
import SideBarStudent from "../../src/components/SideBarStudent";
import StudentTable from "../../src/containers/PageStudentView/containers/StudentTable";
import styles from "./index.module.css";
export default function StudentView() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarStudent highlight={1} />
        <div className={styles.scheduleContainer}>
          <div className={styles.schedule}>
            <StudentTable role={"student"} />
          </div>
        </div>
      </div>
    </>
  );
}
