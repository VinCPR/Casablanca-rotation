import useModal from "../../useModal";
import SelectionModal from "./containers/SelectionModal";
import styles from "./index.module.css";

export default function BlockContainer() {
  const counters = { department: 0, service: 0, hospital: 0 };
  const modalSelector = {
    department: useModal(),
    service: useModal(),
    hospital: useModal(),
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
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
          
        </SelectionModal>
        <SelectionModal
          isOpened={modalSelector.service.isOpened}
          toggle={modalSelector.service.toggle}
          heading={"Please select the services for this block"}
        />
        <SelectionModal
          isOpened={modalSelector.hospital.isOpened}
          toggle={modalSelector.hospital.toggle}
          heading={"Please select the hospitals for this block"}
        />
      </div>
    </div>
  );
}
