/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import styles from "./index.module.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import IconEdit from "./components/IconEdit";
import Modal from "../../../../../../../components/Modal";
import BlockContainer from "../../../../../../../components/Modal/containers/BlockContainer";
import useSelectedComponents from "../../../../../../../components/Modal/containers/BlockContainer/useSelectedComponents";
import { OptionSelector } from "../../../../../../../components/Modal/containers/BlockContainer/types";
import ArrowBack from "../../components/ArrowBack";
import { Rotation } from "../../../../../../../components/Modal/types";

type Props = {
  startDate: number[];
  endDate: number[];
  onChangeRotationDesign: (rotation: Rotation[], index: number) => void;
  backStep: () => void;
  numOfBlock: number;
  numOfGroup: number;
  durationOfBlock: number;
  onChangeStartDate: (date: number, index: number) => void;
  onChangeEndDate: (date: number, index: number) => void;
};

export default function StepTwo({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  numOfBlock,
  numOfGroup,
  durationOfBlock,
  onChangeRotationDesign,
  backStep,
}: Props) {
  const colors = [
    "#ff9620",
    "#05b651",
    "#18a0fb",
    "#9747ff",
    "#ff2024",
    "#b3b605",
    "#fb18e8",
    "#474dff",
    "#c1b6b8",
    "#80c69e",
    "#000000",
    "#f3fa74",
  ];
  const [showModalEdit, setShowModalEdit] = React.useState<boolean[]>(
    Array.from({ length: 10 }, (_) => false)
  );
  const [isGenerated, setIsGenerated] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState<boolean[]>(
    Array.from({ length: 10 }, (_) => false)
  );

  const rangeNumOfBlock = Array.from(Array(numOfBlock).keys());

  const onToggleModalEdit = (indexChange: number) => {
    setShowModalEdit(
      showModalEdit.map((value, index) => {
        if (index === indexChange) return !value;
        return value;
      })
    );
  };

  const onTogglePreview = (indexChange: number) => {
    setShowPreview(
      showPreview.map((value, index) => {
        if (indexChange === index) return !value;
        return value;
      })
    );
  };

  const optionSelector: OptionSelector[] = Array.from(
    { length: numOfBlock },
    (_) => ({
      department: useSelectedComponents(),
      service: Array.from({ length: 6 }, (e) =>
        Array.from({ length: 10 }, (e) => useSelectedComponents())
      ),
      hospital: Array.from({ length: 6 }, (e) => useSelectedComponents()),
    })
  );

  return (
    <div>
      <div className={styles.backheading}>
        <button className={styles.backButton} onClick={backStep}>
          <ArrowBack />
          BACK
        </button>
      </div>
      <div className={styles.title}>Rotation Plan</div>
      <div className={styles.appContainer}>
        <table className={styles.table}>
          <thead>
            <tr style={{ height: "47px" }}>
              <>
                <th>Period</th>
                {rangeNumOfBlock.map((key) => {
                  return <th key={key}>Period {key + 1}</th>;
                })}
              </>
            </tr>
          </thead>
          <tbody>
            <tr>
              <>
                <td className={styles.text}>
                  <div>Start Date</div>
                </td>

                {rangeNumOfBlock.map((key) => {
                  return (
                    <td key={key}>
                      <DatePicker
                        className={styles.datePicker}
                        selected={new Date(startDate[key])}
                        onChange={(date: Date) =>
                          onChangeStartDate(date.valueOf(), key)
                        }
                      />
                    </td>
                  );
                })}
              </>
            </tr>
            <tr>
              <>
                <td className={styles.text}>
                  <div>End date</div>
                </td>

                {rangeNumOfBlock.map((key) => {
                  return (
                    <td key={key}>
                      <DatePicker
                        className={styles.datePicker}
                        selected={new Date(endDate[key])}
                        onChange={(date: Date) =>
                          onChangeEndDate(date.valueOf(), key)
                        }
                      />
                    </td>
                  );
                })}
              </>
            </tr>

            {rangeNumOfBlock.map((key) => {
              return (
                <tr key={key}>
                  <td>
                    <div className={styles.background}>
                      <div
                        className={styles.blockButton}
                        style={{ backgroundColor: colors[key] }}
                      >
                        {" "}
                        Block {key + 1}{" "}
                      </div>
                      <button
                        className={styles.editButton}
                        onClick={() => onToggleModalEdit(key)}
                      >
                        <IconEdit />
                      </button>
                    </div>
                  </td>
                  {!isGenerated ? (
                    <>
                      {rangeNumOfBlock.map((key) => {
                        return <td key={key} />;
                      })}
                    </>
                  ) : (
                    <>
                      {rangeNumOfBlock.map((key2) => {
                        return (
                          <td key={key2}>
                            <div className={styles.background}>
                              <div
                                className={styles.blockButton}
                                style={{
                                  backgroundColor:
                                    colors[(key + key2) % numOfBlock],
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  onTogglePreview((key + key2) % numOfBlock)
                                }
                              >
                                {" "}
                                Block {((key + key2) % numOfBlock) + 1}{" "}
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.generateButton}
          onClick={() => setIsGenerated(true)}
        >
          Generate
        </button>
        <button className={styles.submitButton}>Submit</button>
      </div>
      {showModalEdit.map((_, index) => (
        <Modal
          key={index}
          onChangeRotationDesign={(rotation) =>
            onChangeRotationDesign(rotation, index)
          }
          heading={`Design Rotation for Block ${index + 1}`}
          subHeading={`Preview of Block ${index + 1}`}
          isOpened={showModalEdit[index]}
          toggle={() => onToggleModalEdit(index)}
          data={optionSelector[index]}
          showPreview={false}
          numberOfGroup={numOfGroup}
          blockDuration={durationOfBlock}
        >
          <BlockContainer input={optionSelector[index]} />
        </Modal>
      ))}
      {showPreview.map((_, index) => (
        <Modal
          key={index}
          onChangeRotationDesign={(rotation) =>
            onChangeRotationDesign(rotation, index)
          }
          heading={`Design Rotation for Block ${index + 1}`}
          subHeading={`Preview of Block ${index + 1}`}
          isOpened={showPreview[index]}
          toggle={() => onTogglePreview(index)}
          data={optionSelector[index]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          blockDuration={durationOfBlock}
        >
          <BlockContainer input={optionSelector[index]} />
        </Modal>
      ))}
    </div>
  );
}
