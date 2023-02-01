import Image from "next/image";
import IconManagement from "./icons/IconManagement";
import IconProfessionalism from "./icons/IconProfessionalism";
import IconRelief from "./icons/IconRelief";
import styles from "./index.module.css";
export default function Feature() {
  return (
    <div className={styles.container}>
      <div className={styles.featureBlock}>
        <div className={styles.featureTitle}>
          The benefit of using our platform
        </div>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <IconProfessionalism />
            </div>
            <div className={styles.featureText}>
              <div className={styles.featureItemTitle}> Professionalism</div>
              <div className={styles.featureItemDetails}>
                As a program director, you can assess learners, instructors and
                educational experiences
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <IconManagement />
            </div>
            <div className={styles.featureText}>
              <div className={styles.featureItemTitle}> Easy management </div>
              <div className={styles.featureItemDetails}>
                Manage curriculum, deliver schedules to students, hospitals, and
                faculties with ease
              </div>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <IconRelief />
            </div>
            <div className={styles.featureText}>
              <div className={styles.featureItemTitle}>Relieve your effort</div>
              <div className={styles.featureItemDetails}>
                Build master clinical rotations based on your needs, flexible
                and customizable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
