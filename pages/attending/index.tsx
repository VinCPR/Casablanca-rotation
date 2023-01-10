import Navbar from "../../src/components/Navbar";
import SideBarAttending from "../../src/components/SideBarAttending";
import PageStudentView from "../../src/containers/PageStudentView";
import StudentTable from "../../src/containers/PageStudentView/containers/StudentTable";
import styles from "./index.module.css";
export default function StudentView() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <SideBarAttending highlight={1} />
        <div className={styles.scheduleContainer}>
          <div className={styles.schedule}>
            <StudentTable role={"attending"} />
          </div>
        </div>
      </div>
    </>
  );
}
