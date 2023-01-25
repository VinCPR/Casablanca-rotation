import styles from "./index.module.css";
import * as React from "react";
import StepOne from "./containers/StepOne";
import StepTwo from "./containers/StepTwo";

export default function RotationDesign() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [numOfBlock, setNumOfBlock] = React.useState(0);
  const [numOfGroup, setNumOfGroup] = React.useState(0);
  const [numOfStudent, setNumOfStudent] = React.useState(0);
  const [blockDuration, setBlockDuration] = React.useState(0);
  const [startDate, setStartDate] = React.useState<number[]>([]);
  const [endDate, setEndDate] = React.useState<number[]>([]);
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
          proceedNextStep={() => {
            setStartDate(Array(numOfBlock).fill(Date.now()));
            setEndDate(Array(numOfBlock).fill(Date.now()));
            setCurrentStep(2);
          }}
          onChangeNumOfBlock={(i) => setNumOfBlock(i)}
          onChangeNumOfGroup={(i) => setNumOfGroup(i)}
          onChangeNumOfStudent={(i) => setNumOfStudent(i)}
          onChangeBlockDuration={(i) => setBlockDuration(i)}
          numOfBlock={numOfBlock}
          numOfGroup={numOfGroup}
          numOfStudent={numOfStudent}
          blockDuration={blockDuration}
        />
      )}
      {currentStep == 2 && (
        <StepTwo
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={(date, indexChange) => {
            setStartDate(
              startDate.map((value, index) => {
                if (indexChange === index) return date;
                return value;
              })
            );
          }}
          onChangeEndDate={(date, indexChange) => {
            setEndDate(
              endDate.map((value, index) => {
                if (indexChange === index) return date;
                return value;
              })
            );
          }}
          backStep={() => setCurrentStep(1)}
          numOfBlock={numOfBlock}
          numOfGroup={numOfGroup}
          // numOfStudent={numOfStudent}
          durationOfBlock={blockDuration}
        />
      )}
    </div>
  );
}
