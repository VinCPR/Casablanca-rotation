import styles from "./index.module.css";

type Props = {
  setCurrentStep: () => void;
  setNumOfBlock: (i: number) => void;
};

export default function StepOne({ setCurrentStep, setNumOfBlock }: Props) {
  const changeNumOfBlock = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNumOfBlock(Number(event.target.value));
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
          type="text"
          onChange={changeNumOfBlock}
        />
      </div>
      <div className={styles.questionBox}>
        <div className={styles.heading}>
          Enter the number of groups in each block:
        </div>
        <input className={styles.input} type="text" />
      </div>
      <div className={styles.questionBox}>
        <div className={styles.heading}>
          Enter the number of students in each group:
        </div>
        <input className={styles.input} type="text" />
      </div>
      <button onClick={setCurrentStep} className={styles.nextButton}>
        Next
      </button>
    </>
  );
}
