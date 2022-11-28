import styles from "./index.module.css";
import useModal from "../../../../useModal";
import Modal from "../../../..";

export default function AddButtonContainer() {
  const { isOpened, toggle } = useModal();

  return (
    <div className="addBtnContainer">
      <Modal isOpened={isOpened} toggle={toggle} />
    </div>
  );
}
