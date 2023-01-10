import styles from "./index.module.css";

type Props = {
  setCurrentStep: () => void;
  setNumOfBlock: (i: number) => void;
  setNumOfGroup: (i: number) => void;
  setNumOfStudent: (i: number) => void;
  setDurationOfBlock: (i: number) => void;
  numOfBlock: number;
  numOfGroup: number;
  numOfStudent: number;
  durationOfBlock: number;
};

export default function StepOne({
  setCurrentStep,
  setNumOfBlock,
  setNumOfGroup,
  setNumOfStudent,
  setDurationOfBlock,
  durationOfBlock,
  numOfBlock,
  numOfGroup,
  numOfStudent,
}: Props) {
  const changeNumOfBlock = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNumOfBlock(Number(event.target.value));
  };

  const changeNumOfGroup = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNumOfGroup(Number(event.target.value));
  };

  const changeNumOfStudent = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNumOfStudent(Number(event.target.value));
  };

  const changeDurationOfBlock = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDurationOfBlock(Number(event.target.value));
  };

  return (
    <>
      <div className={styles.title}>LET’S GET STARTED</div>

      <div className={styles.div}>
        We need a few information before diving into the rotation design
      </div>
      <div className={styles.questionBox}>
        <div className={styles.heading}>Enter the number of blocks:</div>
        <input
          className={styles.input}
          type="type"
          onChange={changeNumOfBlock}
          value={numOfBlock.toString()}
        />
      </div>
      <div className={styles.questionBox}>
        <div className={styles.heading}>
          Enter the duration of each block (weeks):
        </div>
        <input
          className={styles.input}
          type="text"
          onChange={changeDurationOfBlock}
          value={durationOfBlock.toString()}
        />
      </div>
      <div className={styles.questionBox}>
        <div className={styles.heading}>
          Enter the number of groups in each block:
        </div>
        <input
          className={styles.input}
          type="text"
          onChange={changeNumOfGroup}
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
          onChange={changeNumOfStudent}
          value={numOfStudent.toString()}
        />
      </div>
      <button onClick={setCurrentStep} className={styles.nextButton}>
        Next
      </button>
    </>
  );
}
