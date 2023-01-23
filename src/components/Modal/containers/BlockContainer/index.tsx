import useModal from "../../useModal";
import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data";
import React from "react";
import { Column, OptionSelector, SelectedComponents } from "./types";
import IconEdit from "../../../../containers/DesignRotation/components/MainLayout/RotationDesign/containers/StepTwo/components/IconEdit";
import SmallIconEdit from "../../../../containers/DesignRotation/components/MainLayout/RotationDesign/containers/StepTwo/components/SmallIconEdit";

interface Props {
  input: OptionSelector;
}

// function getOutput(input: OptionSelector): Output {
//   const department: { [id: string]: number } = {};
//   const hospital: { [id: string]: number } = {};
//   const service: { [id: string]: number } = {};
//   for (var i = 0; i < input.department.selectedComponents.length; i++) {
//     department[input.department.selectedComponents[i].name] =
//       input.department.selectedComponents[i].numOfWeeks;
//   }
//   for (var i = 0; i < input.hospital.selectedComponents.length; i++) {
//     hospital[input.hospital.selectedComponents[i].name] =
//       input.hospital.selectedComponents[i].numOfWeeks;
//   }
//   for (var i = 0; i < input.service.selectedComponents.length; i++) {
//     service[input.service.selectedComponents[i].name] =
//       input.service.selectedComponents[i].numOfWeeks;
//   }
//   return { department, hospital, service };
// }

export default function BlockContainer({ input }: Props) {
  const [departments, services, hospitals] = data();
  const colors = [
    "#18A0FB",
    "#9747FF",
    "#9D7E2F",
    "#7DABF8",
    "#FF4747",
    "#453BB6",
    "#FF9620",
    "#F46B6B",
    "#6EB5FF",
    "#FF9CEE",
  ];

  const modalSelector = {
    department: useModal(),
    hospital: [
      useModal(),
      useModal(),
      useModal(),
      useModal(),
      useModal(),
      useModal(),
    ],
    service: [
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
      [
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
        useModal(),
      ],
    ],
  };

  function isChecked(array: SelectedComponents[], value: String) {
    if (array.some((e) => e.name === value)) {
      return true;
    } else {
      return false;
    }
  }

  function divideSpace(array: SelectedComponents[]) {
    var output = "";
    for (var i = 0; i < array.length; i++) {
      output += "1fr ";
    }
    return output;
  }

  function isDepartmentSelected(): boolean {
    return input.department.selectedComponents.length > 0 ? true : false;
  }

  function isHospitalSelected(index: number): boolean {
    return input.hospital[index].selectedComponents.length > 0 ? true : false;
  }

  function isServiceSelected(index1: number, index2: number): boolean {
    return input.service[index1][index2].selectedComponents.length > 0
      ? true
      : false;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.centerItems}>Departments</div>
        <div className={styles.centerItems}>#Wks</div>
        <div className={styles.centerItems}>Hospitals</div>
        <div className={styles.centerItems}>#Wks</div>
        <div className={styles.centerItems}>Services</div>
        <div className={styles.centerItems}>#Wks</div>
      </div>
      <div className={styles.blockContainer}>
        {/* Container for Departments */}
        <div className={styles.btnContainer}>
          {!isDepartmentSelected() && (
            <button
              className={styles.addBtn}
              onClick={modalSelector.department.toggle}
            >
              +
            </button>
          )}
          {isDepartmentSelected() && (
            <div className={styles.selectionContainer}>
              <div
                className={styles.wrapper}
                style={{
                  gridTemplateRows: divideSpace(
                    input.department.selectedComponents
                  ),
                  marginLeft: "14px",
                  width: "95%",
                }}
              >
                {input.department.selectedComponents.map((obj, index) => {
                  return (
                    <div
                      className={styles.deptContainer}
                      key={index}
                      style={{
                        borderBottom: "1px solid #3bacb6",
                      }}
                    >
                      <SelectionButton
                        label={obj.name}
                        width={190}
                        height={90}
                        alignSelf="center"
                        fontSize={Math.min(
                          80 / input.department.selectedComponents.length,
                          16
                        )}
                      />
                      <input
                        style={{ height: 90 + "%", alignSelf: "center" }}
                        type="number"
                        id={obj.name}
                        value={obj.numOfWeeks}
                        onChange={input.department.handleChange}
                        className={styles.inputField}
                        min="0"
                        max={10 - input.department.totalNum + obj.numOfWeeks}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                onClick={modalSelector.department.toggle}
                className={styles.editBtn}
                style={{ top: "60%", marginLeft: "275px" }}
              >
                <IconEdit />
              </button>
            </div>
          )}
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}>
            <div
              className={styles.wrapper}
              style={{
                gridTemplateRows: divideSpace(
                  input.department.selectedComponents
                ),
                marginLeft: "2px",
                width: "100%",
              }}
            >
              {input.department.selectedComponents.map((obj, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      borderBottom: "1px solid #3bacb6",
                    }}
                  >
                    {!isHospitalSelected(index) && (
                      <button
                        className={styles.addBtn}
                        onClick={modalSelector.hospital[index].toggle}
                        key={index}
                      >
                        +
                      </button>
                    )}

                    {isHospitalSelected(index) && (
                      <div className={styles.btnContainer1}>
                        <div
                          style={{
                            gridTemplateRows: divideSpace(
                              input.hospital[index].selectedComponents
                            ),
                          }}
                          className={styles.selectionContainer1}
                        >
                          {input.hospital[index].selectedComponents.map(
                            (obj, index) => {
                              return (
                                <div
                                  key={index}
                                  style={{
                                    borderBottom: "1px solid #3bacb6",
                                    marginBottom: "-1px",
                                    marginLeft: "2px",
                                  }}
                                  className={styles.deptContainer}
                                  // style={{ backgroundColor: colors[index] }}
                                >
                                  <SelectionButton
                                    label={obj.name}
                                    width={190}
                                    height={Math.min(
                                      2000 /
                                        (input.department.selectedComponents
                                          .length *
                                          input.hospital[index]
                                            .selectedComponents.length),
                                      90
                                    )}
                                    alignSelf="center"
                                    fontSize={Math.min(
                                      120 /
                                        (input.department.selectedComponents
                                          .length *
                                          input.hospital[index]
                                            .selectedComponents.length),
                                      10
                                    )}
                                  />
                                  <input
                                    style={{
                                      height:
                                        Math.min(
                                          2000 /
                                            (input.department.selectedComponents
                                              .length *
                                              input.hospital[index]
                                                .selectedComponents.length),
                                          90
                                        ) + "%",
                                      fontSize:
                                        Math.min(
                                          120 /
                                            (input.department.selectedComponents
                                              .length *
                                              input.hospital[index]
                                                .selectedComponents.length),
                                          10
                                        ) + "px",
                                      alignSelf: "center",
                                    }}
                                    type="number"
                                    id={obj.name}
                                    value={obj.numOfWeeks}
                                    onChange={
                                      input.hospital[index].handleChange
                                    }
                                    className={styles.inputField}
                                    min="0"
                                    max={
                                      input.department.selectedComponents[index]
                                        .numOfWeeks -
                                      input.hospital[index].totalNum +
                                      obj.numOfWeeks
                                    }
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                        <button
                          onClick={modalSelector.hospital[index].toggle}
                          key={index}
                          className={styles.editBtn}
                          style={{ marginLeft: "275px", top: "40%" }}
                        >
                          <SmallIconEdit />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}>
            <div
              className={styles.wrapper}
              style={{
                gridTemplateRows: divideSpace(
                  input.department.selectedComponents
                ),
              }}
            >
              {input.department.selectedComponents.map((obj, index1) => {
                return (
                  <div
                    key={index1}
                    style={{
                      borderBottom: "1px solid #3bacb6",
                      position: "sticky",
                      marginLeft: "2px",
                    }}
                  >
                    {isHospitalSelected(index1) && (
                      <div className={styles.btnContainer1}>
                        <div
                          style={{
                            gridTemplateRows: divideSpace(
                              input.hospital[index1].selectedComponents
                            ),
                          }}
                          className={styles.selectionContainer1}
                        >
                          {input.hospital[index1].selectedComponents.map(
                            (obj, index2) => {
                              return (
                                <div
                                  key={index2}
                                  style={{
                                    borderBottom: "1px solid #3bacb6",
                                    marginBottom: "-1px",
                                    marginLeft: "2px",
                                    width: "100%",
                                    position: "sticky",
                                  }}
                                >
                                  {!isServiceSelected(index1, index2) && (
                                    <button
                                      className={styles.addBtn1}
                                      onClick={
                                        modalSelector.service[index1][index2]
                                          .toggle
                                      }
                                      key={index2}
                                    >
                                      +
                                    </button>
                                  )}

                                  {isServiceSelected(index1, index2) && (
                                    <div className={styles.btnContainer2}>
                                      <div
                                        style={{
                                          gridTemplateRows: divideSpace(
                                            input.service[index1][index2]
                                              .selectedComponents
                                          ),
                                        }}
                                        className={styles.selectionContainer2}
                                      >
                                        {input.service[index1][
                                          index2
                                        ].selectedComponents.map(
                                          (obj, index3) => {
                                            return (
                                              <div
                                                key={index3}
                                                className={styles.deptContainer}
                                                // style={{ backgroundColor: colors[index] }}
                                              >
                                                <SelectionButton
                                                  label={obj.name}
                                                  width={190}
                                                  height={Math.min(
                                                    2200 /
                                                      (input.department
                                                        .selectedComponents
                                                        .length *
                                                        input.hospital[index1]
                                                          .selectedComponents
                                                          .length *
                                                        input.service[index1][
                                                          index2
                                                        ].selectedComponents
                                                          .length),
                                                    90
                                                  )}
                                                  alignSelf="center"
                                                  fontSize={Math.min(
                                                    180 /
                                                      (input.department
                                                        .selectedComponents
                                                        .length *
                                                        input.hospital[index1]
                                                          .selectedComponents
                                                          .length *
                                                        input.service[index1][
                                                          index2
                                                        ].selectedComponents
                                                          .length),
                                                    10
                                                  )}
                                                />
                                                <input
                                                  style={{
                                                    height:
                                                      Math.min(
                                                        2200 /
                                                          (input.department
                                                            .selectedComponents
                                                            .length *
                                                            input.hospital[
                                                              index1
                                                            ].selectedComponents
                                                              .length *
                                                            input.service[
                                                              index1
                                                            ][index2]
                                                              .selectedComponents
                                                              .length),
                                                        90
                                                      ) + "%",
                                                    fontSize:
                                                      Math.min(
                                                        180 /
                                                          (input.department
                                                            .selectedComponents
                                                            .length *
                                                            input.hospital[
                                                              index1
                                                            ].selectedComponents
                                                              .length *
                                                            input.service[
                                                              index1
                                                            ][index2]
                                                              .selectedComponents
                                                              .length),
                                                        10
                                                      ) + "px",
                                                    alignSelf: "center",
                                                  }}
                                                  type="number"
                                                  id={obj.name}
                                                  value={obj.numOfWeeks}
                                                  onChange={
                                                    input.service[index1][
                                                      index2
                                                    ].handleChange
                                                  }
                                                  className={styles.inputField}
                                                  min="0"
                                                  max={
                                                    input.hospital[index1]
                                                      .selectedComponents[
                                                      index2
                                                    ].numOfWeeks -
                                                    input.service[index1][
                                                      index2
                                                    ].totalNum +
                                                    obj.numOfWeeks
                                                  }
                                                />
                                              </div>
                                            );
                                          }
                                        )}
                                      </div>
                                      <button
                                        onClick={
                                          modalSelector.service[index1][index2]
                                            .toggle
                                        }
                                        className={styles.editBtn}
                                        style={{
                                          marginLeft: "275px",
                                          top: "30%",
                                        }}
                                      >
                                        <SmallIconEdit />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Modals for Adding Depts, Services, and Hospitals */}
        <SelectionModal
          isOpened={modalSelector.department.isOpened}
          toggle={modalSelector.department.toggle}
          heading={"Please select the departments for this block"}
        >
          {departments.map((value, index) => {
            return (
              <div className={styles.deptContainer} key={index}>
                <SelectionButton label={value} />
                <Checkbox
                  onClick={input.department.handleClick}
                  label={value}
                  checked={isChecked(
                    input.department.selectedComponents,
                    value
                  )}
                  checkedAfterClose={isChecked(
                    input.department.selectedComponents,
                    value
                  )}
                />
              </div>
            );
          })}
        </SelectionModal>
        {input.department.selectedComponents.map((obj, index1) => {
          return input.hospital[index1].selectedComponents.map(
            (obj, index2) => {
              return (
                <SelectionModal
                  key={index2}
                  isOpened={modalSelector.service[index1][index2].isOpened}
                  toggle={modalSelector.service[index1][index2].toggle}
                  heading={"Please select the service for hospital " + obj.name}
                  id={index2}
                >
                  {services.map((value, index) => {
                    return (
                      <div className={styles.deptContainer} key={index}>
                        <SelectionButton label={value} />
                        <Checkbox
                          onClick={input.service[index1][index2].handleClick}
                          label={value}
                          checked={isChecked(
                            input.service[index1][index2].selectedComponents,
                            value
                          )}
                          checkedAfterClose={isChecked(
                            input.service[index1][index2].selectedComponents,
                            value
                          )}
                        />
                      </div>
                    );
                  })}
                </SelectionModal>
              );
            }
          );
        })}

        {input.department.selectedComponents.map((obj, index) => {
          return (
            <SelectionModal
              isOpened={modalSelector.hospital[index].isOpened}
              toggle={modalSelector.hospital[index].toggle}
              heading={"Please select the hospitals for department " + obj.name}
              id={index}
              key={index}
            >
              {hospitals.map((value, index) => {
                return (
                  <div className={styles.deptContainer} key={index}>
                    <SelectionButton label={value} />
                    <Checkbox
                      onClick={input.hospital[index].handleClick}
                      label={value}
                      checked={isChecked(
                        input.hospital[index].selectedComponents,
                        value
                      )}
                      checkedAfterClose={isChecked(
                        input.hospital[index].selectedComponents,
                        value
                      )}
                    />
                  </div>
                );
              })}
            </SelectionModal>
          );
        })}
      </div>
    </div>
  );
}
