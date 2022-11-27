import Modal from "../../src/components/Modal";
import useModal from "../../src/components/Modal/useModal";
import styles from "./index.module.css"

export default function New() {
  const {isOpened, toggle} = useModal();

  return (
    <main>
      <button className={styles.primaryBtn} onClick={toggle}>
        Open Modal
      </button>
      <Modal isOpened={isOpened} toggle={toggle}>
        <span>Why am I here?</span>
      </Modal>
    </main>
  );
}
