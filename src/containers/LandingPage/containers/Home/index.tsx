import router from "next/router";
import styles from "./index.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.heading}>
          Don&apos;t be patient for clinical rotation any longer
        </div>
        <div className={styles.subHeading}>
          Design clinical rotations for your institution easily in just a few
          steps.
        </div>
        <button onClick={() => router.push("/login")} className={styles.button}>
          Get Started
        </button>
      </div>
      <div className={styles.rightContainer}>
        <Image
          className={styles.img}
          src="/images/figure.png"
          alt="figure"
          width={1115}
          height={720}
        />
      </div>
    </div>
  );
}
