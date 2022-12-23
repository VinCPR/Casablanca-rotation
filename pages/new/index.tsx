import Modal from "../../src/components/Modal";
import BlockContainer from "../../src/components/Modal/containers/BlockContainer";
import useModal from "../../src/components/Modal/useModal";
import styles from "./index.module.css";
import useSelectedComponents from "../../src/components/Modal/containers/BlockContainer/useSelectedComponents";

export default function New() {
  const { isOpened, toggle } = useModal();

  const optionSelector = {
    department: useSelectedComponents(),
    service: useSelectedComponents(),
    hospital: useSelectedComponents(),
  };

  return (
    <>
      <button className={styles.primaryBtn} onClick={toggle}>
        Open Modal
      </button>
      <Modal heading={"Design Rotation for Block 1"} isOpened={isOpened} toggle={toggle}>
        <BlockContainer input={optionSelector}/>
      </Modal>
    </>
  );
}
