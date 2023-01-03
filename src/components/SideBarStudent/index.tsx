import styles from "./index.module.css";
import * as React from "react";
import IconDesignRotation from "./containers/IconDesignRotation";
import IconRotationPlan from "./containers/IconRotationPlan";
import IconStudentList from "./containers/IconStudentList";
import IconFacultyList from "./containers/IconFacultyList";
import Link from "next/link";

type Props = {
  highlight: number;
};

export default function SideBarStudent({ highlight }: Props) {
  const [mouseEnter, setMouseEnter] = React.useState(0);
  return (
    <div className={styles.sideBarContainer}>
      <button
        onMouseEnter={() => setMouseEnter(1)}
        onMouseLeave={() => setMouseEnter(0)}
        className={highlight !== 1 ? styles.button : styles.highlight}
      >
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconRotationPlan isActive={mouseEnter === 1 || highlight === 1} />
          <Link href="/student">
            <div className={styles.text}>Rotation Schedule</div>
          </Link>
        </div>
      </button>
      <button
        onMouseEnter={() => setMouseEnter(2)}
        onMouseLeave={() => setMouseEnter(0)}
        className={highlight !== 2 ? styles.button : styles.highlight}
      >
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconStudentList isActive={mouseEnter === 2 || highlight === 2} />
          <Link href="/rotation-plan">
            <div className={styles.text}>My Profile</div>
          </Link>
        </div>
      </button>
    </div>
  );
}
