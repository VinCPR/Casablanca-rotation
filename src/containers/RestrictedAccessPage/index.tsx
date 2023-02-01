import Navbar from "../../components/Navbar";
import SideBarAttending from "../../components/SideBarAttending";
import SideBarStudent from "../../components/SideBarStudent";
import styles from "./index.module.css";

interface Props {
  role: string;
}

export default function RestrictedAccessPage({ role }: Props) {
    
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        {role === "student" && <SideBarStudent highlight={0} />}
        {role === "attending" && <SideBarAttending highlight={0} />}
        <div className={styles.content}>
          {" "}
          You do not have access to this page, please return to the Homepage{" "}
        </div>
      </div>
    </>
  );
}
