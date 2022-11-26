import { useState } from "react";
import Modal from "../../src/components/Modal";
import useModal from "../../src/components/Modal/useModal";
import styles from "./index.module.css"

export default function New() {
  const {isOpen, toggle} = useModal();

  return (
    <main>
      <button className={styles.primaryBtn} onClick={toggle}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <span>Why am I here?</span>
      </Modal>
    </main>
  );
}
