import styles from "./index.module.css";
import * as React from "react";
import StepOne from "./containers/StepOne";
import StepTwo from "./containers/StepTwo";

export default function RotationDesign() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [numOfBlock, setNumOfBlock] = React.useState(0);
  const [numOfGroup, setNumOfGroup] = React.useState(0);
  const [numOfStudent, setNumOfStudent] = React.useState(0);
  const [durationOfBlock, setDurationOfBlock] = React.useState(0);
  return (
    <div className={styles.container}>
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
      {currentStep == 1 && (
        <StepOne
          setCurrentStep={() => setCurrentStep(2)}
          setNumOfBlock={(i) => setNumOfBlock(i)}
          setNumOfGroup={(i) => setNumOfGroup(i)}
          setNumOfStudent={(i) => setNumOfStudent(i)}
          setDurationOfBlock={(i) => setDurationOfBlock(i)}
          numOfBlock={numOfBlock}
          numOfGroup={numOfGroup}
          numOfStudent={numOfStudent}
          durationOfBlock={durationOfBlock}
        />
      )}
      {currentStep == 2 && (
        <StepTwo
          setCurrentStep={() => setCurrentStep(1)}
          numOfBlock={numOfBlock}
          numOfGroup={numOfGroup}
          numOfStudent={numOfStudent}
          durationOfBlock={durationOfBlock}
        />
      )}
    </div>
  );
}
