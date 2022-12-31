import useModal from "../../useModal";
import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data";
import React from "react";
import SelectedComponents from "./SelectedComponents";
import OptionSelector from "./OptionSelector";
import Column from "./Column";

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
    service: useModal(),
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
      if (array[i].numOfWeeks < 2) {
        output += "2fr ";
      } else {
        output += String(array[i].numOfWeeks) + "fr ";
      }
    }
    return output;
  }

  function divideInnerSpace(dept: Column, array: Column[]) {
    var output = "";
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].selectedComponents.length; j++) {
        if (array[i].selectedComponents[j].numOfWeeks < 2) {
          output += "2fr ";
        } else {
          output +=
            String(
              (array[i].selectedComponents[j].numOfWeeks *
                dept.selectedComponents[i].numOfWeeks) /
                sumArr(array[i].selectedComponents)
            ) + "fr ";
        }
      }
    }
    return output;
  }

  function sumArr(array: SelectedComponents[]) {
    var output = 0;
    for (var i = 0; i < array.length; i++) {
      output += array[i].numOfWeeks;
    }
    return output;
  }

  function isHospitalSelected(index: number): boolean {
    return input.hospital[index].selectedComponents.length > 0 ? true : false;
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
          <div
            style={{
              gridTemplateRows: divideSpace(
                input.department.selectedComponents
              ),
            }}
            className={styles.selectionContainer}
          >
            {input.department.selectedComponents.map((obj, index) => {
              return (
                <div className={styles.deptContainer} key={index}>
                  <SelectionButton
                    label={obj.name}
                    width={220}
                    height={90}
                    alignSelf="center"
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
            className={styles.addBtn}
            onClick={modalSelector.department.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>{input.department.totalNum}</div>
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <div
            style={{
              gridTemplateRows: divideSpace(
                input.department.selectedComponents
              ),
            }}
            className={styles.selectionContainer}
          >
            <div
              style={{
                gridTemplateRows: divideInnerSpace(
                  input.department,
                  input.hospital
                ),
              }}
              className={styles.wrapper}
            >
              {input.department.selectedComponents.map((obj, index) => {
                return !isHospitalSelected(index) ? (
                  <button
                    className={styles.addBtn}
                    onClick={modalSelector.hospital[index].toggle}
                    key={index}
                  >
                    +
                  </button>
                ) : null;
              })}

              {input.department.selectedComponents.map((obj, index) => {
                return input.hospital[index].selectedComponents.map((obj) => {
                  return (
                    <div className={styles.deptContainer}>
                      <SelectionButton
                        label={obj.name}
                        width={220}
                        height={90}
                        alignSelf="center"
                      />
                      <input
                        style={{ height: 90 + "%", alignSelf: "center" }}
                        type="number"
                        id={obj.name}
                        value={obj.numOfWeeks}
                        onChange={input.hospital[index].handleChange}
                        className={styles.inputField}
                        min="0"
                        max={
                          10 - input.hospital[index].totalNum + obj.numOfWeeks
                        }
                      />
                    </div>
                  );
                });
              })}
            </div>
          </div>
          <div className={styles.totalBox}>{input.hospital[0].totalNum}</div>
        </div>
        {/* Container for Services */}
        <div className={styles.btnContainer}>
          <div
            style={{
              gridTemplateRows: divideSpace(input.service.selectedComponents),
            }}
            className={styles.selectionContainer}
          >
            {input.service.selectedComponents.map((obj, index) => {
              return (
                <div className={styles.deptContainer} key={index}>
                  <SelectionButton
                    label={obj.name}
                    width={220}
                    height={90}
                    alignSelf="center"
                  />
                  <input
                    style={{ height: 90 + "%", alignSelf: "center" }}
                    type="number"
                    id={obj.name}
                    value={obj.numOfWeeks}
                    onChange={input.service.handleChange}
                    className={styles.inputField}
                    min="0"
                    max={10 - input.service.totalNum + obj.numOfWeeks}
                  />
                </div>
              );
            })}
          </div>
          <button
            className={styles.addBtn}
            // onClick={modalSelector.service[0].toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>{input.service.totalNum}</div>
        </div>
        {/* Modals for Adding Depts, Services, and Hospitals */}
        <SelectionModal
          isOpened={modalSelector.department.isOpened}
          toggle={modalSelector.department.toggle}
          heading={"Please select the departments for this block"}
        >
          {departments.map((value) => {
            return (
              <div className={styles.deptContainer}>
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
        {input.hospital[0].selectedComponents.map((obj, index) => {
          return (
            <SelectionModal
              isOpened={modalSelector.service.isOpened}
              toggle={modalSelector.service.toggle}
              heading={"Please select the services for this block"}
            >
              {services.map((value) => {
                return (
                  <div className={styles.deptContainer}>
                    <SelectionButton label={value} />
                    <Checkbox
                      onClick={input.service.handleClick}
                      label={value}
                      checked={isChecked(
                        input.service.selectedComponents,
                        value
                      )}
                      checkedAfterClose={isChecked(
                        input.service.selectedComponents,
                        value
                      )}
                    />
                  </div>
                );
              })}
            </SelectionModal>
          );
        })}

        {input.department.selectedComponents.map((obj, index) => {
          return (
            <SelectionModal
              isOpened={modalSelector.hospital[index].isOpened}
              toggle={modalSelector.hospital[index].toggle}
              heading={"Please select the hospitals for this block" + { index }}
              id={index}
            >
              {hospitals.map((value) => {
                return (
                  <div className={styles.deptContainer}>
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
