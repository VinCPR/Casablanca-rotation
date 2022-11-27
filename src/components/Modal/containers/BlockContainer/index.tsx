import { ReactNode } from "react";
import styles from "./index.module.css";

type Props = {
  children?: ReactNode;
};

export default function BlockContainer(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.blockContainer}>
        {/* Container for Departments */}
        <div className={styles.btnContainer}></div>
        {/* Container for Services */}
        <div className={styles.btnContainer}></div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}></div>
      </div>
    </div>
  );
}
