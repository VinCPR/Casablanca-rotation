import Modal from "../../src/components/Modal";
import BlockContainer from "../../src/components/Modal/containers/BlockContainer";
import useModal from "../../src/components/Modal/useModal";
import styles from "./index.module.css";
import useSelectedComponents from "../../src/components/Modal/containers/BlockContainer/useSelectedComponents";
import OptionSelector from "../../src/components/Modal/containers/BlockContainer/OptionSelector";
import { useState } from "react";

export default function New() {
  const { isOpened, toggle } = useModal();
  var total = 0;
  const [totalNum, setTotalNum] = useState(total);

  const optionSelector = {
    department: useSelectedComponents(),
    service: [
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
      [
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
        useSelectedComponents(),
      ],
    ],
    hospital: [
      useSelectedComponents(),
      useSelectedComponents(),
      useSelectedComponents(),
      useSelectedComponents(),
      useSelectedComponents(),
      useSelectedComponents(),
    ],
  };

  return (
    <>
      <button className={styles.primaryBtn} onClick={toggle}>
        Open Modal
      </button>
      <Modal
        heading={"Design Rotation for Block 1"}
        isOpened={isOpened}
        toggle={toggle}
      >
        <BlockContainer input={optionSelector} />
      </Modal>
    </>
  );
}
