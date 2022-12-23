import Modal from "../../src/components/Modal";
import BlockContainer from "../../src/components/Modal/containers/BlockContainer";
import useModal from "../../src/components/Modal/useModal";
import styles from "./index.module.css";
import useSelectedComponents from "../../src/components/Modal/containers/BlockContainer/useSelectedComponents";
import OptionSelector from "../../src/components/Modal/containers/BlockContainer/OptionSelector";
import Output from "../../src/components/Modal/containers/BlockContainer/Output";

export default function New() {
  const { isOpened, toggle } = useModal();

  const optionSelector = {
    department: useSelectedComponents(),
    service: useSelectedComponents(),
    hospital: useSelectedComponents(),
  };

  function getOutput(input: OptionSelector): Output {
    const department: { [id: string]: number } = {};
    const hospital: { [id: string]: number } = {};
    const service: { [id: string]: number } = {};
    for (var i = 0; i < input.department.selectedComponents.length; i++) {
      department[input.department.selectedComponents[i].name] =
        input.department.selectedComponents[i].numOfWeeks;
    }
    for (var i = 0; i < input.hospital.selectedComponents.length; i++) {
      hospital[input.hospital.selectedComponents[i].name] =
        input.hospital.selectedComponents[i].numOfWeeks;
    }
    for (var i = 0; i < input.service.selectedComponents.length; i++) {
      service[input.service.selectedComponents[i].name] =
        input.service.selectedComponents[i].numOfWeeks;
    }
    console.log({ department, hospital, service });
    return { department, hospital, service };
  }

  function handlePreview() {
    getOutput(optionSelector);
  }

  return (
    <>
      <button className={styles.primaryBtn} onClick={toggle}>
        Open Modal
      </button>
      <Modal
        heading={"Design Rotation for Block 1"}
        handlePreview={handlePreview}
        isOpened={isOpened}
        toggle={toggle}
      >
        <BlockContainer input={optionSelector} />
      </Modal>
    </>
  );
}
