import { ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
};

export default function BlockContainer(props: Props) {
  const counters = { department: 0, service: 0, hospital: 0 };

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.blockContainer}>
        {/* Container for Departments */}
        <div className={styles.btnContainer}>
          <button className={styles.addBtn}>+</button>
          <div className={styles.totalBox}>{counters.department}</div>
        </div>
        {/* Container for Services */}
        <div className={styles.btnContainer}>
          <button className={styles.addBtn}>+</button>
          <div className={styles.totalBox}>{counters.service}</div>
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <button className={styles.addBtn}>+</button>
          <div className={styles.totalBox}>{counters.hospital}</div>
        </div>
      </div>
    </div>
  );
}
