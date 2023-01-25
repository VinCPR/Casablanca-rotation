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
import moment from "moment";

type Props = {
  setCurrentStep: () => void;
  numOfBlock: number;
  numOfGroup: number;
  numOfStudent: number;
  durationOfBlock: number;
};

export default function StepTwo({
  setCurrentStep,
  numOfBlock,
  numOfGroup,
  numOfStudent,
  durationOfBlock,
}: Props) {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());
  const [startDate4, setStartDate4] = useState(new Date());
  const [startDate5, setStartDate5] = useState(new Date());
  const [startDate6, setStartDate6] = useState(new Date());
  const [startDate7, setStartDate7] = useState(new Date());
  const [startDate8, setStartDate8] = useState(new Date());
  const [startDate9, setStartDate9] = useState(new Date());
  const [startDate10, setStartDate10] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
  const [endDate2, setEndDate2] = useState(new Date());
  const [endDate3, setEndDate3] = useState(new Date());
  const [endDate4, setEndDate4] = useState(new Date());
  const [endDate5, setEndDate5] = useState(new Date());
  const [endDate6, setEndDate6] = useState(new Date());
  const [endDate7, setEndDate7] = useState(new Date());
  const [endDate8, setEndDate8] = useState(new Date());
  const [endDate9, setEndDate9] = useState(new Date());
  const [endDate10, setEndDate10] = useState(new Date());

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
  const count2: any[] = [];
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
  const [isGenerated, setIsGenerated] = React.useState(false);
  const [isShowPreview1, setIsShowPreview1] = React.useState(false);
  const [isShowPreview2, setIsShowPreview2] = React.useState(false);
  const [isShowPreview3, setIsShowPreview3] = React.useState(false);
  const [isShowPreview4, setIsShowPreview4] = React.useState(false);
  const [isShowPreview5, setIsShowPreview5] = React.useState(false);
  const [isShowPreview6, setIsShowPreview6] = React.useState(false);
  const [isShowPreview7, setIsShowPreview7] = React.useState(false);
  const [isShowPreview8, setIsShowPreview8] = React.useState(false);
  const [isShowPreview9, setIsShowPreview9] = React.useState(false);
  const [isShowPreview10, setIsShowPreview10] = React.useState(false);

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
      : setIsModal10Opened(true);
  }

  function setTruePreview(x: number) {
    return x === 0
      ? setIsShowPreview1(true)
      : x === 1
      ? setIsShowPreview2(true)
      : x === 2
      ? setIsShowPreview3(true)
      : x === 3
      ? setIsShowPreview4(true)
      : x === 4
      ? setIsShowPreview5(true)
      : x === 5
      ? setIsShowPreview6(true)
      : x === 6
      ? setIsShowPreview7(true)
      : x === 7
      ? setIsShowPreview8(true)
      : x === 8
      ? setIsShowPreview9(true)
      : setIsShowPreview10(true);
  }

  function setPeriod1(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate1(newDate);
    setStartDate1(date);
  }

  function setPeriod2(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate2(newDate);
    setStartDate2(date);
  }

  function setPeriod3(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate3(newDate);
    setStartDate3(date);
  }

  function setPeriod4(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate4(newDate);
    setStartDate4(date);
  }

  function setPeriod5(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate5(newDate);
    setStartDate5(date);
  }

  function setPeriod6(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate6(newDate);
    setStartDate6(date);
  }

  function setPeriod7(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate7(newDate);
    setStartDate7(date);
  }

  function setPeriod8(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate8(newDate);
    setStartDate8(date);
  }

  function setPeriod9(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate9(newDate);
    setStartDate9(date);
  }

  function setPeriod10(date: Date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7 * durationOfBlock);
    setEndDate10(newDate);
    setStartDate10(date);
  }

  const optionSelector: OptionSelector[] = [];
  for (var i = 0; i < numOfBlock; i++) {
    optionSelector.push({
      department: useSelectedComponents(),
      service: [
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
        [
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
          useSelectedComponents(),
        ],
      ],
      hospital: [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
    });
    count[i] = 1;
    count2[i] = 1;
  }

  function startDate(index: number) {
    if (index == 0) {
      return startDate1;
    }

    if (index == 1) {
      return startDate2;
    }
    if (index == 2) {
      return startDate3;
    }
    if (index == 3) {
      return startDate4;
    }
    if (index == 4) {
      return startDate5;
    }
    if (index == 5) {
      return startDate6;
    }

    if (index == 6) {
      return startDate7;
    }
    if (index == 7) {
      return startDate8;
    }
    if (index == 8) {
      return startDate9;
    }
    if (index == 9) {
      return startDate10;
    }
  }

  function endDate(index: number) {
    if (index == 0) {
      return endDate1;
    }

    if (index == 1) {
      return endDate2;
    }
    if (index == 2) {
      return endDate3;
    }
    if (index == 3) {
      return endDate4;
    }
    if (index == 4) {
      return endDate5;
    }
    if (index == 5) {
      return endDate6;
    }

    if (index == 6) {
      return endDate7;
    }
    if (index == 7) {
      return endDate8;
    }
    if (index == 8) {
      return endDate9;
    }
    if (index == 9) {
      return endDate10;
    }
  }

  function setPeriod(index: number, date: Date) {
    if (index == 0) {
      setPeriod1(date);
    }

    if (index == 1) {
      setPeriod2(date);
    }
    if (index == 2) {
      setPeriod3(date);
    }
    if (index == 3) {
      setPeriod4(date);
    }
    if (index == 4) {
      setPeriod5(date);
    }
    if (index == 5) {
      setPeriod6(date);
    }
    if (index == 6) {
      setPeriod7(date);
    }
    if (index == 7) {
      setPeriod8(date);
    }
    if (index == 8) {
      setPeriod9(date);
    }
    if (index == 9) {
      setPeriod10(date);
    }
  }

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
              <>
                <th>Period</th>
                {count.map((count, index) => {
                  return <th>Period {index + 1}</th>;
                })}
              </>
            </tr>
          </thead>
          <tbody>
            <tr>
              <>
                <td className={styles.text}>
                  <div>StartDate</div>
                  <div>EndDate</div>
                </td>

                {count.map((count, index) => {
                  return (
                    <td>
                      <DatePicker
                        selected={startDate(index)}
                        onChange={(date: Date) => setPeriod(index, date)}
                      />
                      <div>{moment(endDate(index)).format("M/D/YYYY")}</div>
                    </td>
                  );
                })}
              </>
            </tr>

            {count.map((count, index1) => {
              return (
                <tr key={index1}>
                  <td>
                    <div className={styles.background}>
                      <div
                        className={styles.blockButton}
                        style={{ backgroundColor: colors[index1] }}
                      >
                        {" "}
                        Block {index1 + 1}{" "}
                      </div>
                      <button
                        className={styles.editButton}
                        onClick={() => onClick(index1)}
                      >
                        <IconEdit />
                      </button>
                    </div>
                  </td>
                  {!isGenerated ? (
                    <>
                      {count2.map((count2, index2) => {
                        return <td></td>;
                      })}
                    </>
                  ) : (
                    <>
                      {count2.map((count2, index2) => {
                        return (
                          <td>
                            <div className={styles.background}>
                              <div
                                className={styles.blockButton}
                                style={{
                                  backgroundColor:
                                    colors[(index1 + index2) % numOfBlock],
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  setTruePreview((index1 + index2) % numOfBlock)
                                }
                              >
                                {" "}
                                Block {((index1 + index2) % numOfBlock) +
                                  1}{" "}
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
      <button
        className={styles.generateButton}
        onClick={() => setIsGenerated(true)}
      >
        Generate
      </button>
      <Modal
        heading={"Design Rotation for Block 1"}
        subHeading={"Preview of Block 1"}
        isOpened={isModal1Opened}
        toggle={() => setIsModal1Opened(false)}
        data={optionSelector[0]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[0]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 2"}
        subHeading={"Preview of Block 2"}
        isOpened={isModal2Opened}
        toggle={() => setIsModal2Opened(false)}
        data={optionSelector[1]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[1]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 3"}
        subHeading={"Preview of Block 3"}
        isOpened={isModal3Opened}
        toggle={() => setIsModal3Opened(false)}
        data={optionSelector[2]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[2]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 4"}
        subHeading={"Preview of Block 4"}
        isOpened={isModal4Opened}
        toggle={() => setIsModal4Opened(false)}
        data={optionSelector[3]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[3]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 5"}
        subHeading={"Preview of Block 5"}
        isOpened={isModal5Opened}
        toggle={() => setIsModal5Opened(false)}
        data={optionSelector[4]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[4]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 6"}
        subHeading={"Preview of Block 6"}
        isOpened={isModal6Opened}
        toggle={() => setIsModal6Opened(false)}
        data={optionSelector[5]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[5]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 7"}
        subHeading={"Preview of Block 7"}
        isOpened={isModal7Opened}
        toggle={() => setIsModal7Opened(false)}
        data={optionSelector[6]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[6]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>

      <Modal
        heading={"Design Rotation for Block 8"}
        subHeading={"Preview of Block 8"}
        isOpened={isModal8Opened}
        toggle={() => setIsModal8Opened(false)}
        data={optionSelector[7]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[7]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>

      <Modal
        heading={"Design Rotation for Block 9"}
        subHeading={"Preview of Block 9"}
        isOpened={isModal9Opened}
        toggle={() => setIsModal9Opened(false)}
        data={optionSelector[8]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[8]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <Modal
        heading={"Design Rotation for Block 10"}
        subHeading={"Preview of Block 10"}
        isOpened={isModal10Opened}
        toggle={() => setIsModal10Opened(false)}
        data={optionSelector[9]}
        showPreview={false}
        numberOfGroup={numOfGroup}
        durationOfBlock={durationOfBlock}
      >
        <BlockContainer
          input={optionSelector[9]}
          durationOfBlock={durationOfBlock}
        />
      </Modal>
      <>
        <Modal
          heading={"Design Rotation for Block 1"}
          subHeading={"Preview of Block 1"}
          isOpened={isShowPreview1}
          toggle={() => setIsShowPreview1(false)}
          data={optionSelector[0]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[0]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 2"}
          subHeading={"Preview of Block 2"}
          isOpened={isShowPreview2}
          toggle={() => setIsShowPreview2(false)}
          data={optionSelector[1]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[1]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 3"}
          subHeading={"Preview of Block 3"}
          isOpened={isShowPreview3}
          toggle={() => setIsShowPreview3(false)}
          data={optionSelector[2]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[2]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 4"}
          subHeading={"Preview of Block 4"}
          isOpened={isShowPreview4}
          toggle={() => setIsShowPreview4(false)}
          data={optionSelector[3]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[3]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 5"}
          subHeading={"Preview of Block 5"}
          isOpened={isShowPreview5}
          toggle={() => setIsShowPreview5(false)}
          data={optionSelector[4]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[4]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 6"}
          subHeading={"Preview of Block 6"}
          isOpened={isShowPreview6}
          toggle={() => setIsShowPreview6(false)}
          data={optionSelector[5]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[5]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 7"}
          subHeading={"Preview of Block 7"}
          isOpened={isShowPreview7}
          toggle={() => setIsShowPreview7(false)}
          data={optionSelector[6]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[6]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 8"}
          subHeading={"Preview of Block 8"}
          isOpened={isShowPreview8}
          toggle={() => setIsShowPreview8(false)}
          data={optionSelector[7]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[7]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 9"}
          subHeading={"Preview of Block 9"}
          isOpened={isShowPreview9}
          toggle={() => setIsShowPreview9(false)}
          data={optionSelector[8]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[8]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>

        <Modal
          heading={"Design Rotation for Block 10"}
          subHeading={"Preview of Block 10"}
          isOpened={isShowPreview10}
          toggle={() => setIsShowPreview10(false)}
          data={optionSelector[9]}
          showPreview={true}
          numberOfGroup={numOfGroup}
          durationOfBlock={durationOfBlock}
        >
          <BlockContainer
            input={optionSelector[9]}
            durationOfBlock={durationOfBlock}
          />
        </Modal>
      </>
    </div>
  );
}
