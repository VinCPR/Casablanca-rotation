import router from "next/router";
import styles from "./index.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.Hero}>
      <div className={styles.herodisplay}>
        <h1> Don’t be patient for clinical rotation any longer</h1>
        <p>
          {" "}
          Design clinical rotations for your institution easily in just a few
          steps.{" "}
        </p>
        <button onClick={() => router.push("/login")} className={styles.button}>
          Get Started
        </button>
      </div>
      <div className={styles.ManImage}>
        <Image
          src="/images/handsome-guy.png"
          alt="handsome-guy"
          width={1115}
          height={720}
        />
      </div>
    </div>
  );
}
