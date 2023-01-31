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

export default function SideBar({ highlight }: Props) {
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
          <IconDesignRotation isActive={mouseEnter === 1 || highlight === 1} />
          <Link href="/">
            <div className={styles.text}>Design Rotation</div>
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
          <IconRotationPlan isActive={mouseEnter === 2 || highlight === 2} />
          <Link href="/rotation-plan">
            <div className={styles.text}>Rotation Plan</div>
          </Link>
        </div>
      </button>
      <button
        onMouseEnter={() => setMouseEnter(3)}
        onMouseLeave={() => setMouseEnter(0)}
        className={highlight !== 3 ? styles.button : styles.highlight}
      >
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconStudentList isActive={mouseEnter === 3 || highlight === 3} />
          <Link href="/student-list">
            <div className={styles.text}>Student List</div>
          </Link>
        </div>
      </button>
      <button
        onMouseEnter={() => setMouseEnter(4)}
        onMouseLeave={() => setMouseEnter(0)}
        className={highlight !== 4 ? styles.button : styles.highlight}
      >
        <div className={styles.line} />
        <div className={styles.textfield}>
          <IconFacultyList isActive={mouseEnter === 4 || highlight === 4} />
          <Link href="/faculty-list">
            <div className={styles.text}>Faculty List</div>
          </Link>
        </div>
      </button>
    </div>
  );
}
