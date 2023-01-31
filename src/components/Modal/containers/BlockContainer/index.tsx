import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data";
import React from "react";
import { OptionSelector, SelectedComponents } from "./types";
import IconEdit from "../../../../containers/DesignRotation/components/MainLayout/RotationDesign/containers/StepTwo/components/IconEdit";
import SmallIconEdit from "../../../../containers/DesignRotation/components/MainLayout/RotationDesign/containers/StepTwo/components/SmallIconEdit";
import { AllServiceResponse } from "@/modules/utils/type";
import getFacilityNames from "@/modules/utils/getFacilityNames";
import cx from "classnames";

type Props = {
  input: OptionSelector;
  data: AllServiceResponse;
};

// function getOutput(input: OptionSelector): Output {
//   const department: { [id: string]: number } = {};
//   const hospital: { [id: string]: number } = {};
//   const service: { [id: string]: number } = {};
//   for (let i = 0; i < input.department.selectedComponents.length; i++) {
//     department[input.department.selectedComponents[i].name] =
//       input.department.selectedComponents[i].numOfWeeks;
//   }
//   for (let i = 0; i < input.hospital.selectedComponents.length; i++) {
//     hospital[input.hospital.selectedComponents[i].name] =
//       input.hospital.selectedComponents[i].numOfWeeks;
//   }<Modal

export default function BlockContainer({ input, data }: Props) {
  const colors = [
    "#18A0FB",
    "#b6453b",
    "#b6833b",
    // "#7DABF8",
    // "#9D7E2F",
    "#9747FF",
    "#453BB6",
    "#FFA347",
    // "#8c7df8",
    // "#7de8f8",
    "#F46B6B",
  ];
  const [departmentSelector, setDepartmentSelector] = React.useState(false);
  const [hospitalSelector, setHospitalSelector] = React.useState(
    Array.from({ length: 10 }, (_) => false)
  );
  const [serviceSelector, setServiceSelector] = React.useState<boolean[][]>(
    Array.from({ length: 10 }, (_) => Array.from({ length: 10 }, (_) => false))
  );

  const onChangeHospitalSelector = (indexChange: number, value: boolean) => {
    setHospitalSelector(
      hospitalSelector.map((hospital, index) => {
        if (index === indexChange) {
          return value;
        }
        return hospital;
      })
    );
  };

  const onChangeServiceSelector = (
    indexChange: number,
    indexChange1: number,
    value: boolean
  ) => {
    setServiceSelector(
      serviceSelector.map((service, index) => {
        if (index === indexChange) {
          return service.map((service1, index1) => {
            if (index1 === indexChange1) {
              return value;
            }
            return service1;
          });
        }
        return service;
      })
    );
  };

  const departments = data != null ? Object.keys(data) : [];

  const [__, hospitals, services] = getFacilityNames();

  function isChecked(array: SelectedComponents[], value: String) {
    if (array.some((e) => e.name === value)) {
      return true;
    } else {
      return false;
    }
  }

  function divideSpace(array: SelectedComponents[]) {
    let output = "";
    for (let i = 0; i < array.length; i++) {
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
              onClick={() => setDepartmentSelector(true)}
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
                        background={colors[departments.indexOf(obj.name)]}
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
                        disabled={true}
                        style={{ height: 90 + "%", alignSelf: "center" }}
                        type="number"
                        id={obj.name}
                        value={obj.numOfWeeks}
                        className={cx(styles.inputField, styles.disabled)}
                        min="0"
                        max={10 - input.department.totalNum + obj.numOfWeeks}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setDepartmentSelector(true)}
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
                        onClick={() => onChangeHospitalSelector(index, true)}
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
                            (obj) => {
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
                                    background={
                                      colors[hospitals.indexOf(obj.name)]
                                    }
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
                                    disabled={true}
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
                                    className={cx(
                                      styles.inputField,
                                      styles.disabled
                                    )}
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
                          onClick={() => onChangeHospitalSelector(index, true)}
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
                                      onClick={() =>
                                        onChangeServiceSelector(
                                          index1,
                                          index2,
                                          true
                                        )
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
                                                  background={
                                                    colors[
                                                      services.indexOf(obj.name) % 7
                                                    ]
                                                  }
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
                                                  onChange={(e) => {
                                                    const oldService =
                                                      input.service[index1][
                                                        index2
                                                      ].selectedComponents[
                                                        index3
                                                      ].numOfWeeks;
                                                    const newServiceWeeks =
                                                      Number(e.target.value);
                                                    const newHospitalWeeks =
                                                      input.hospital[index1]
                                                        .selectedComponents[
                                                        index2
                                                      ].numOfWeeks -
                                                      oldService +
                                                      newServiceWeeks;
                                                    const newDepartmentWeeks =
                                                      input.department
                                                        .selectedComponents[
                                                        index1
                                                      ].numOfWeeks -
                                                      oldService +
                                                      newServiceWeeks;
                                                    input.department.handleChange(
                                                      input.department
                                                        .selectedComponents[
                                                        index1
                                                      ].name,
                                                      newDepartmentWeeks
                                                    );
                                                    input.hospital[
                                                      index1
                                                    ].handleChange(
                                                      input.hospital[index1]
                                                        .selectedComponents[
                                                        index2
                                                      ].name,
                                                      newHospitalWeeks
                                                    );
                                                    input.service[index1][
                                                      index2
                                                    ].handleChange(
                                                      obj.name,
                                                      newServiceWeeks
                                                    );
                                                  }}
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
                                        onClick={() =>
                                          onChangeServiceSelector(
                                            index1,
                                            index2,
                                            true
                                          )
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
          isOpened={departmentSelector}
          toggle={() => setDepartmentSelector(false)}
          heading={"Please select the departments for this block"}
        >
          {departments.map((value, index) => {
            return (
              <div className={styles.deptContainer} key={index}>
                <SelectionButton background={colors[index]} label={value} />
                <Checkbox
                  onClick={input.department.handleClick}
                  label={value}
                  checked={isChecked(
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
                  isOpened={serviceSelector[index1][index2]}
                  toggle={() => onChangeServiceSelector(index1, index2, false)}
                  heading={"Please select the services for " + obj.name}
                  id={index2}
                >
                  {data[input.department.selectedComponents[index1].name][
                    input.hospital[index1].selectedComponents[index2].name
                  ]
                    .map((object) => object.name)
                    .map((value, index3) => {
                      return (
                        <div className={styles.deptContainer} key={index3}>
                          <SelectionButton
                            background={colors[services.indexOf(value) % 7]}
                            label={value}
                          />
                          <Checkbox
                            onClick={input.service[index1][index2].handleClick}
                            label={value}
                            checked={isChecked(
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
              key={index}
              isOpened={hospitalSelector[index]}
              toggle={() => onChangeHospitalSelector(index, false)}
              heading={"Please select the hospitals for " + obj.name}
              id={index}
            >
              {Object.keys(
                data[input.department.selectedComponents[index].name]
              ).map((value, index2) => {
                return (
                  <div className={styles.deptContainer} key={index2}>
                    <SelectionButton
                      background={colors[hospitals.indexOf(value)]}
                      label={value}
                    />
                    <Checkbox
                      onClick={input.hospital[index].handleClick}
                      label={value}
                      checked={isChecked(
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
