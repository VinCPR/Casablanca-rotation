import styles from "./index.module.css";

type Props = {
  proceedNextStep: () => void;
  onChangeNumOfBlock: (i: number) => void;
  onChangeNumOfGroup: (i: number) => void;
  onChangeNumOfStudent: (i: number) => void;
  onChangeBlockDuration: (i: number) => void;
  numOfBlock: number;
  numOfGroup: number;
  numOfStudent: number;
  blockDuration: number;
};

export default function StepOne({
  proceedNextStep,
  onChangeNumOfBlock,
  onChangeNumOfGroup,
  onChangeNumOfStudent,
  onChangeBlockDuration,
  blockDuration,
  numOfBlock,
  numOfGroup,
  numOfStudent,
}: Props) {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.title}>LET&apos;S GET STARTED</div>
        <div className={styles.div}>
          We need a few information before diving into the rotation design
        </div>
        <div className={styles.questionBox}>
          <div className={styles.heading}>Enter the number of blocks:</div>
          <input
            className={styles.input}
            type="type"
            onChange={(e) => onChangeNumOfBlock(Number(e.target.value))}
            value={numOfBlock.toString()}
          />
        </div>
        <div className={styles.questionBox}>
          <div className={styles.heading}>
            Enter the duration of each block (#weeks):
          </div>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => onChangeBlockDuration(Number(e.target.value))}
            value={blockDuration.toString()}
          />
        </div>
        <div className={styles.questionBox}>
          <div className={styles.heading}>
            Enter the number of groups in each block:
          </div>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => onChangeNumOfGroup(Number(e.target.value))}
            value={numOfGroup.toString()}
          />
        </div>
        <div className={styles.questionBox}>
          <div className={styles.heading}>
            Enter the number of students in each group:
          </div>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => onChangeNumOfStudent(Number(e.target.value))}
            value={numOfStudent.toString()}
          />
        </div>
        <div className={styles.nextButtonContainer}>
          <button onClick={proceedNextStep} className={styles.nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
