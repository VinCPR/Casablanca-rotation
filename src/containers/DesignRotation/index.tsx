import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import MainLayout from "./components/MainLayout";
import styles from "./index.module.css";

export default function DesignRotation() {
  return (
    <div>
      <Navbar />
      <div className={styles.pageContain}>
        <SideBar highlight={0} />
        <MainLayout />
      </div>
    </div>
  );
}
