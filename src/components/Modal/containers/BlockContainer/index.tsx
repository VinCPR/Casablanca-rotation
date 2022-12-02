import useModal from "../../useModal";
import SelectionModal from "./containers/SelectionModal";
import Checkbox from "./containers/SelectionModal/components/Checkbox";
import SelectionButton from "./containers/SelectionModal/components/SelectionButton";
import styles from "./index.module.css";
import data from "./data"
import React, { useState } from "react";

export default function BlockContainer() {
  const counters = { department: 0, service: 0, hospital: 0 };
  const modalSelector = {
    department: useModal(),
    service: useModal(),
    hospital: useModal(),
  };
  const [departments, services, hospitals] = data();
  const colors = ["#18A0FB", "#9747FF", "#9D7E2F", "#7DABF8", "#FF4747", "#453BB6", "#FF9620", "#F46B6B", "#6EB5FF", "#FF9CEE"];

  function onClick(event:any):void{
     const target = event.target as HTMLInputElement;
     console.log(target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.centerItems}>Departments</div>
        <div className={styles.centerItems}>#Wks</div>
        <div className={styles.centerItems}>Services</div>
        <div className={styles.centerItems}>#Wks</div>
        <div className={styles.centerItems}>Hospitals</div>
        <div className={styles.centerItems}>#Wks</div>
      </div>
      <div className={styles.blockContainer}>
        {/* Container for Departments */}
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}></div>
          <button
            className={styles.addBtn}
            onClick={modalSelector.department.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>{counters.department}</div>
        </div>
        {/* Container for Services */}
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}></div>
          <button
            className={styles.addBtn}
            onClick={modalSelector.service.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>{counters.service}</div>
        </div>
        {/* Container for Hospitals */}
        <div className={styles.btnContainer}>
          <div className={styles.selectionContainer}></div>
          <button
            className={styles.addBtn}
            onClick={modalSelector.hospital.toggle}
          >
            +
          </button>
          <div className={styles.totalBox}>{counters.hospital}</div>
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
                <Checkbox onClick={onClick} label={value}/>
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
                <Checkbox onClick={onClick} label={value}/>
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
                <Checkbox onClick={onClick} label={value}/>
              </div>
            );
          })}
        </SelectionModal>
      </div>
    </div>
  );
}
