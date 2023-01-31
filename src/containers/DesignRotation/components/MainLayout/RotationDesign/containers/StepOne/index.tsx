import * as React from "react";
import { AcademicCalendar } from "@/modules/utils/type";
import styles from "./index.module.css";
import cx from "classnames";

type Props = {
  proceedNextStep: () => void;
  onChangeNumOfBlock: (i: number) => void;
  onChangeNumOfGroup: (i: number) => void;
  onChangeBlockDuration: (i: number) => void;
  onChangeAcademicCalendar: (value: string) => void;
  numOfBlock: number;
  numOfGroup: number;
  blockDuration: number;
  academicCalendar: string;
  calendarData: AcademicCalendar;
};

export default function StepOne({
  proceedNextStep,
  onChangeNumOfBlock,
  onChangeNumOfGroup,
  onChangeBlockDuration,
  onChangeAcademicCalendar,
  blockDuration,
  numOfBlock,
  numOfGroup,
  academicCalendar,
  calendarData,
}: Props) {
  const [showDropdown, setShowDropdown] = React.useState(false);
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
        <div className={styles.dropdownContainer}>
          <div className={styles.heading}>Select the academic year</div>
          <button
            className={cx(styles.input, styles.dropdownButton)}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {academicCalendar}
          </button>
          {showDropdown ? (
            <div className={styles.dropdown}>
              {calendarData.map((data, index) => {
                return (
                  <button
                    key={index}
                    className={styles.dropdownItem}
                    onClick={() => {
                      onChangeAcademicCalendar(data.name);
                      setShowDropdown(!showDropdown);
                    }}
                  >
                    {data.name}
                  </button>
                );
              })}
            </div>
          ) : null}
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
