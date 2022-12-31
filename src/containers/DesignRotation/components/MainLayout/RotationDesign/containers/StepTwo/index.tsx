/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styles from "./index.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import IconEdit from "./components/IconEdit";
import Modal from "../../../../../../../components/Modal";
import BlockContainer from "../../../../../../../components/Modal/containers/BlockContainer";
import useSelectedComponents from "../../../../../../../components/Modal/containers/BlockContainer/useSelectedComponents";
import OptionSelector from "../../../../../../../components/Modal/containers/BlockContainer/OptionSelector";
import ArrowBack from "../../components/ArrowBack";

type Props = {
  setCurrentStep: () => void;
  numOfBlock: number;
};

export default function StepTwo({ setCurrentStep, numOfBlock }: Props) {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());
  const [startDate4, setStartDate4] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  const [endDate3, setEndDate3] = useState(new Date());
  const [endDate4, setEndDate4] = useState(new Date());
  //** TODO: define a state/states that will store the value of block information  */
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
    "f3fa74",
  ];
  const count = [];
  const [isModal1Opened, setIsModal1Opened] = React.useState(false);
  const [isModal2Opened, setIsModal2Opened] = React.useState(false);
  const [isModal3Opened, setIsModal3Opened] = React.useState(false);
  const [isModal4Opened, setIsModal4Opened] = React.useState(false);
  const [isModal5Opened, setIsModal5Opened] = React.useState(false);
  const [isModal6Opened, setIsModal6Opened] = React.useState(false);
  const [isModal7Opened, setIsModal7Opened] = React.useState(false);
  const [isModal8Opened, setIsModal8Opened] = React.useState(false);
  const [isModal9Opened, setIsModal9Opened] = React.useState(false);
  const [isModal10Opened, setIsModal10Opened] = React.useState(false);
  const [isModal11Opened, setIsModal11Opened] = React.useState(false);
  const [isModal12Opened, setIsModal12Opened] = React.useState(false);
  const [isGenerated, setIsGenerated] = React.useState(false);
  const [isShowPreview, setIsShowPreview] = React.useState(false);
  // console.log("num: " + Number(numOfBlock));

  function onClick(x: number) {
    return x === 0
      ? setIsModal1Opened(true)
      : x === 1
      ? setIsModal2Opened(true)
      : x === 2
      ? setIsModal3Opened(true)
      : x === 3
      ? setIsModal4Opened(true)
      : x === 4
      ? setIsModal5Opened(true)
      : x === 5
      ? setIsModal6Opened(true)
      : x === 6
      ? setIsModal7Opened(true)
      : x === 7
      ? setIsModal8Opened(true)
      : x === 8
      ? setIsModal9Opened(true)
      : x === 9
      ? setIsModal10Opened(true)
      : x === 10
      ? setIsModal11Opened(true)
      : setIsModal12Opened(true);
  }
  const optionSelector: OptionSelector[] = [];
  for (var i = 0; i < numOfBlock; i++) {
    optionSelector.push({
      department: useSelectedComponents(),
      service: useSelectedComponents(),
      hospital: useSelectedComponents(),
    });
    count[i] = 1;
  }
  /**TODO: define a function onRotationChange that take the value the block information and pass it to the state */
  /**pass the function to the component Modal */
  return (
    <div>
      <div className={styles.backheading}>
        <button className={styles.backButton} onClick={setCurrentStep}>
          <ArrowBack />
          BACK
        </button>
      </div>
      <div className={styles.title}>Rotation Plan</div>
      <div className={styles.appContainer}>
        <table>
          <thead>
            <tr style={{ height: "47px" }}>
              <th>Period</th>
              <th>Period 1</th>
              <th>Period 2</th>
              <th>Period 3</th>
              <th>Period 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.text}>StartDate - EndDate</td>
              <td>
                <DatePicker
                  selected={startDate1}
                  onChange={(date: Date) => setStartDate1(date)}
                />
                <DatePicker
                  selected={endDate1}
                  onChange={(date: Date) => setEndDate1(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate2}
                  onChange={(date: Date) => setStartDate2(date)}
                />
                <DatePicker
                  selected={endDate2}
                  onChange={(date: Date) => setEndDate2(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate3}
                  onChange={(date: Date) => setStartDate3(date)}
                />
                <DatePicker
                  selected={endDate3}
                  onChange={(date: Date) => setEndDate3(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate4}
                  onChange={(date: Date) => setStartDate4(date)}
                />
                <DatePicker
                  selected={endDate4}
                  onChange={(date: Date) => setEndDate4(date)}
                />
              </td>
            </tr>

            {count.map((count, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className={styles.background}>
                      <div
                        className={styles.blockButton}
                        style={{ backgroundColor: colors[index] }}
                      >
                        {" "}
                        Block {index + 1}{" "}
                      </div>
                      <button
                        className={styles.editButton}
                        onClick={() => onClick(index)}
                      >
                        <IconEdit />
                      </button>
                    </div>
                  </td>
                  {!isGenerated ? (
                    <>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </>
                  ) : (
                    <>
                      <td>
                        <div className={styles.background}>
                          <div
                            className={styles.blockButton}
                            style={{
                              backgroundColor: colors[index],
                              cursor: "pointer",
                            }}
                            onClick={() => setIsShowPreview(true)}
                          >
                            {" "}
                            Block {index + 1}{" "}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.background}>
                          <div
                            className={styles.blockButton}
                            style={{
                              backgroundColor: colors[(index + 1) % numOfBlock],
                              cursor: "pointer",
                            }}
                            onClick={() => setIsShowPreview(true)}
                          >
                            {" "}
                            Block {((index + 1) % numOfBlock) + 1}{" "}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.background}>
                          <div
                            className={styles.blockButton}
                            style={{
                              backgroundColor: colors[(index + 2) % numOfBlock],
                              cursor: "pointer",
                            }}
                            onClick={() => setIsShowPreview(true)}
                          >
                            {" "}
                            Block {((index + 2) % numOfBlock) + 1}{" "}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.background}>
                          <div
                            className={styles.blockButton}
                            style={{
                              backgroundColor: colors[(index + 3) % numOfBlock],
                              cursor: "pointer",
                            }}
                            onClick={() => setIsShowPreview(true)}
                          >
                            {" "}
                            Block {((index + 3) % numOfBlock) + 1}{" "}
                          </div>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className={styles.generateButton}
        onClick={() => setIsGenerated(true)}
      >
        Generate
      </button>
      <Modal
        heading={"Design Rotation for Block 1"}
        isOpened={isModal1Opened}
        toggle={() => setIsModal1Opened(false)}
        data={optionSelector[0]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[0]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 2"}
        isOpened={isModal2Opened}
        toggle={() => setIsModal2Opened(false)}
        data={optionSelector[1]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[1]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 3"}
        isOpened={isModal3Opened}
        toggle={() => setIsModal3Opened(false)}
        data={optionSelector[2]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[2]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 4"}
        isOpened={isModal4Opened}
        toggle={() => setIsModal4Opened(false)}
        data={optionSelector[3]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[3]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 5"}
        isOpened={isModal5Opened}
        toggle={() => setIsModal5Opened(false)}
        data={optionSelector[4]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[4]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 6"}
        isOpened={isModal6Opened}
        toggle={() => setIsModal6Opened(false)}
        data={optionSelector[5]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[5]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 7"}
        isOpened={isModal7Opened}
        toggle={() => setIsModal7Opened(false)}
        data={optionSelector[6]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[6]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 8"}
        isOpened={isModal8Opened}
        toggle={() => setIsModal8Opened(false)}
        data={optionSelector[7]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[7]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 9"}
        isOpened={isModal9Opened}
        toggle={() => setIsModal9Opened(false)}
        data={optionSelector[8]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[8]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 10"}
        isOpened={isModal10Opened}
        toggle={() => setIsModal10Opened(false)}
        data={optionSelector[9]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[9]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 11"}
        isOpened={isModal11Opened}
        toggle={() => setIsModal11Opened(false)}
        data={optionSelector[10]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[10]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 12"}
        isOpened={isModal12Opened}
        toggle={() => setIsModal12Opened(false)}
        data={optionSelector[11]}
        showPreview={false}
        close={false}
      >
        <BlockContainer input={optionSelector[11]} />
      </Modal>

      <>
        <Modal
          heading={"Design Rotation for Block 1"}
          isOpened={isShowPreview}
          toggle={() => setIsShowPreview(false)}
          data={optionSelector[0]}
          showPreview={true}
          close={true}
        ></Modal>
      </>
    </div>
  );
}
