import useModal from "../../useModal";
import useSelectedComponents from "./useSelectedComponents";
import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data";
import React from "react";
import SelectedComponents from "./SelectedComponents";

export default function BlockContainer() {
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

  const optionSelector = {
    department: useSelectedComponents(),
    service: useSelectedComponents(),
    hospital: useSelectedComponents(),
  };

  function isChecked(array:SelectedComponents[], value:String){
    if (array.some(e => e.name === value)) {
      return true;
    } else {
      return false;
    }
  }

  function divideSpace(array:SelectedComponents[]){
    var output = ""
    for (var i = 0; i < array.length; i++){
      if (array[i].numOfWeeks < 2){
        output += "2fr "
      } else {
      output += String(array[i].numOfWeeks) + "fr "
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
          <div style={{gridTemplateRows: divideSpace(optionSelector.department.selectedComponents)}} className={styles.selectionContainer}>
            {optionSelector.department.selectedComponents.map((obj, index) => {
              return (
                <div className={styles.deptContainer} key={index}>
                  <SelectionButton label={obj.name} width={220} height= {90} alignSelf="center"/>
                  <input
                    style = {{height: 90 + "%", alignSelf: "center"}}
                    type="number"
                    id={obj.name}
                    value={obj.numOfWeeks}
                    onChange={optionSelector.department.handleChange}
                    className={styles.inputField}
                    min = "0"
                    max = {10 - optionSelector.department.totalNum + obj.numOfWeeks}
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
            {optionSelector.department.totalNum}
          </div>
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <div style={{gridTemplateRows: divideSpace(optionSelector.department.selectedComponents)}} className={styles.selectionContainer}>
            {optionSelector.hospital.selectedComponents.map((obj) => {
              return (
                <div className={styles.deptContainer}>
                  <SelectionButton label={obj.name} width={220}/>
                  <input
                    type="number"
                    id={obj.name}
                    value={obj.numOfWeeks}
                    onChange={optionSelector.hospital.handleChange}
                    className={styles.inputField}
                    min = "0"
                    max = {10 - optionSelector.hospital.totalNum + obj.numOfWeeks}
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
            {optionSelector.hospital.totalNum}
          </div>
        </div>
        {/* Container for Services */}
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}>
            {optionSelector.service.selectedComponents.map((obj, index) => {
              return (
                <div className={styles.deptContainer} key={index}>
                  <SelectionButton label={obj.name} width={220} />
                  <input
                    type="number"
                    id={obj.name}
                    value={obj.numOfWeeks}
                    onChange={optionSelector.service.handleChange}
                    className={styles.inputField}
                    min = "0"
                    max = "10"
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
            {optionSelector.service.totalNum}
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
                  onClick={optionSelector.department.handleClick}
                  label={value}
                  checked = {isChecked(optionSelector.department.selectedComponents, value)}
                  checkedAfterClose = {isChecked(optionSelector.department.selectedComponents, value)}
                // {isChecked(optionSelector.department.selectedComponents, value) && }
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
                  onClick={optionSelector.service.handleClick}
                  label={value}
                  checked = {isChecked(optionSelector.service.selectedComponents, value)}
                  checkedAfterClose = {isChecked(optionSelector.service.selectedComponents, value)}
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
                  onClick={optionSelector.hospital.handleClick}
                  label={value}
                  checked = {isChecked(optionSelector.hospital.selectedComponents, value)}
                  checkedAfterClose = {isChecked(optionSelector.hospital.selectedComponents, value)}
                />
              </div>
            );
          })}
        </SelectionModal>
      </div>
    </div>
  );
}
