import ArrowBack from "./components/ArrowBack";
import styles from "./index.module.css";
import * as React from "react";
import StepOne from "./containers/StepOne";

export default function RotationDesign() {
  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <div className={styles.container}>
      <div className={styles.backheading}>
        <button className={styles.backButton}>
          <ArrowBack />
          BACK
        </button>
      </div>
      <div className={styles.parent}>
        <div
          className={currentStep == 1 ? styles.stepActive : styles.stepNormal}
        >
          <div className={styles.stepName}>Step 1</div>
          <div className={styles.desc}>Specify rotation requirements</div>
        </div>
        <div
          className={currentStep == 2 ? styles.stepActive : styles.stepNormal}
        >
          <div className={styles.stepName}>Step 2</div>
          <div className={styles.desc}>Design rotation requirements</div>
        </div>
      </div>
      {currentStep == 1 && <StepOne setCurrentStep={() => setCurrentStep(2)} />}
    </div>
  );
}
