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

export default function StepTwo() {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());
  const [startDate4, setStartDate4] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  const [endDate3, setEndDate3] = useState(new Date());
  const [endDate4, setEndDate4] = useState(new Date());
  //** TODO: define a state/states that will store the value of block information  */
  const colors = ["#ff9620", "#05b651", "#18a0fb", "#9747ff"];
  const [isModal1Opened, setIsModal1Opened] = React.useState(false);
  const [isModal2Opened, setIsModal2Opened] = React.useState(false);
  const [isModal3Opened, setIsModal3Opened] = React.useState(false);
  const [isModal4Opened, setIsModal4Opened] = React.useState(false);
  function onClick(x: number) {
    return x === 0
      ? setIsModal1Opened(true)
      : x === 1
      ? setIsModal2Opened(true)
      : x === 2
      ? setIsModal3Opened(true)
      : setIsModal4Opened(true);
  }
  const optionSelector: OptionSelector[] = [];
  for (var i = 0; i < 4; i++) {
    optionSelector.push({
      department: useSelectedComponents(),
      service: useSelectedComponents(),
      hospital: useSelectedComponents(),
    });
  }
  /**TODO: define a function onRotationChange that take the value the block information and pass it to the state */
  /**pass the function to the component Modal */
  return (
    <div>
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

            {colors.map((color, index) => {
              return (
                <tr key={index}>
                  <div className={styles.background}>
                    <div
                      className={styles.blockButton}
                      style={{ backgroundColor: color }}
                    >
                      {" "}
                      Block {index}{" "}
                    </div>
                    <button
                      className={styles.editButton}
                      onClick={() => onClick(index)}
                    >
                      <IconEdit />
                    </button>
                  </div>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className={styles.generateButton}>Generate</button>
      <Modal
        heading={"Design Rotation for Block 1"}
        isOpened={isModal1Opened}
        toggle={() => setIsModal1Opened(false)}
        data={optionSelector[0]}
      >
        <BlockContainer input={optionSelector[0]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 2"}
        isOpened={isModal2Opened}
        toggle={() => setIsModal2Opened(false)}
        data={optionSelector[1]}
      >
        <BlockContainer input={optionSelector[1]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 3"}
        isOpened={isModal3Opened}
        toggle={() => setIsModal3Opened(false)}
        data={optionSelector[2]}
      >
        <BlockContainer input={optionSelector[2]} />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 4"}
        isOpened={isModal4Opened}
        toggle={() => setIsModal4Opened(false)}
        data={optionSelector[3]}
      >
        <BlockContainer input={optionSelector[3]} />
      </Modal>
    </div>
  );
}
