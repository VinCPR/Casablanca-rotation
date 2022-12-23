import useModal from "../../useModal";
import useSelectedComponents from "./useSelectedComponents";
import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data";
import React from "react";
import SelectedComponents from "./SelectedComponents";

interface Props{
  input: OptionSelector;
}

type OptionSelector = {
  department: Branch;
  hospital: Branch;
  service: Branch;
}

type Branch = {
  selectedComponents: SelectedComponents[];
  handleClick: (event:any) => void;
  totalNum: number;
  handleChange: (event:any) => void;
}

export default function BlockContainer({input}: Props) {
  const modalSelector = {
    department: useModal(),
    service: useModal(),
    hospital: useModal(),
  };
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

  // const input = {
  //   department: useSelectedComponents(),
  //   service: useSelectedComponents(),
  //   hospital: useSelectedComponents(),
  // };

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
                    max={
                      10 - input.department.totalNum + obj.numOfWeeks
                    }
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
          <div className={styles.totalBox}>
            {input.department.totalNum}
          </div>
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <div
            style={{
              gridTemplateRows: divideSpace(
                input.hospital.selectedComponents
              ),
            }}
            className={styles.selectionContainer}
          >
            {input.hospital.selectedComponents.map((obj) => {
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
                    onChange={input.hospital.handleChange}
                    className={styles.inputField}
                    min="0"
                    max={10 - input.hospital.totalNum + obj.numOfWeeks}
                  />
                </div>
              );
            })}
          </div>
          <button
            className={styles.addBtn}
            onClick={modalSelector.hospital.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>
            {input.hospital.totalNum}
          </div>
        </div>
        {/* Container for Services */}
        <div className={styles.btnContainer}>
          <div
            style={{
              gridTemplateRows: divideSpace(
                input.service.selectedComponents
              ),
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
            onClick={modalSelector.service.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>
            {input.service.totalNum}
          </div>
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
        <SelectionModal
          isOpened={modalSelector.hospital.isOpened}
          toggle={modalSelector.hospital.toggle}
          heading={"Please select the hospitals for this block"}
        >
          {hospitals.map((value) => {
            return (
              <div className={styles.deptContainer}>
                <SelectionButton label={value} />
                <Checkbox
                  onClick={input.hospital.handleClick}
                  label={value}
                  checked={isChecked(
                    input.hospital.selectedComponents,
                    value
                  )}
                  checkedAfterClose={isChecked(
                    input.hospital.selectedComponents,
                    value
                  )}
                />
              </div>
            );
          })}
        </SelectionModal>
      </div>
    </div>
  );
}
