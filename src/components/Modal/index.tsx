import * as React from "react";
import styles from "./index.module.css";
import RotationCard from "./containers/RotationCard";
import { designRotation } from "./algorithm";
import { OptionSelector } from "./containers/BlockContainer/types";
import { Department, Hospital, Rotation, Service } from "./types";

interface Props {
  children?: React.ReactNode;
  isOpened: boolean;
  toggle: () => void;
  heading: string;
  subHeading: string;
  data?: OptionSelector;
  showPreview: boolean;
  numberOfGroup: number;
}

export default function Modal({
  children,
  isOpened,
  toggle,
  heading = "",
  subHeading = "",
  data,
  showPreview,
  numberOfGroup,
}: Props) {
  const [isShowPreview, setIsShowPreview] = React.useState(showPreview);
  const [rotation, setRotation] = React.useState<Rotation[]>([]);
  const [isPreview, setIsPreview1] = React.useState(showPreview);
  const [isShowBack, setIsShowBack] = React.useState(false);

  function onclick() {
    const departments = data?.department.selectedComponents as Department[];
    setIsShowPreview(true);
    setIsShowBack(true);
    const hospitals = data?.hospital
      .map((value) => value.selectedComponents)
      .flat() as Hospital[];
    const services = data?.service
      .map((value) => value.map((column) => column.selectedComponents).flat())
      .flat() as Service[];
    const inputFormated = {
      departments,
      hospitals,
      services,
    };

    setRotation(
      designRotation({ departments, hospitals, services }, numberOfGroup)
    );
  }

  function onClickBack() {
    setIsShowBack(false);
    setIsShowPreview(false);
  }

  function preview() {
    const departments = data?.department.selectedComponents as Department[];
    setIsPreview1(false);
    const hospitals = data?.hospital
      .map((value) => value.selectedComponents)
      .flat() as Hospital[];
    const services = data?.service
      .map((value) => value.map((column) => column.selectedComponents).flat())
      .flat() as Service[];
    const inputFormated = {
      departments,
      hospitals,
      services,
    };

    setRotation(
      designRotation({ departments, hospitals, services }, numberOfGroup)
    );
  }

  return (
    <div>
      {isOpened && (
        <div>
          <div className={styles.darkBG} onClick={() => toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              {!isShowPreview ? (
                <>
                  <div className={styles.modalHeader}>{heading}</div>
                  <div className={styles.modalContainer}>{children}</div>
                  <div className={styles.actionsContainer}>
                    <button
                      className={styles.previewBtn}
                      onClick={() => onclick()}
                    >
                      Preview
                    </button>
                    <button
                      className={styles.closeBtn}
                      onClick={() => toggle()}
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.modalHeader}>{subHeading}</div>

                  {rotation.map((rotation, index) => {
                    return (
                      <div key={index} className={styles.previewContainer}>
                        <div className={styles.text}>
                          <h3>Group{index + 1}</h3>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.header}>
                            <div className={styles.centerItems}>Week 1</div>
                            <div className={styles.centerItems}>Week 2</div>
                            <div className={styles.centerItems}>Week 3</div>
                            <div className={styles.centerItems}>Week 4</div>
                            <div className={styles.centerItems}>Week 5</div>
                            <div className={styles.centerItems}>Week 6</div>
                            <div className={styles.centerItems}>Week 7</div>
                            <div className={styles.centerItems}>Week 8</div>
                            <div className={styles.centerItems}>Week 9</div>
                            <div className={styles.centerItems}>Week 10</div>
                          </div>

                          <div className={styles.blockContainer}>
                            <div
                              style={{ marginLeft: "89px" }}
                              className={styles.line}
                            ></div>

                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                          </div>
                          <div>
                            <div className={styles.selectionContainer1}>
                              {rotation.departments.map((obj, index) => {
                                return (
                                  <div key={index}>
                                    <RotationCard
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
                                      fontSize={Math.min(
                                        (150 * obj.numOfWeeks) /
                                          obj.name.length,
                                        20
                                      )}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className={styles.selectionContainer2}>
                              {rotation.hospitals.map((obj, index) => {
                                return (
                                  <div key={index}>
                                    <RotationCard
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
                                      fontSize={Math.min(
                                        (150 * obj.numOfWeeks) /
                                          obj.name.length,
                                        20
                                      )}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className={styles.selectionContainer3}>
                              {rotation.services.map((obj, index) => {
                                return (
                                  <div key={index}>
                                    <RotationCard
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
                                      fontSize={Math.min(
                                        (150 * obj.numOfWeeks) /
                                          obj.name.length,
                                        20
                                      )}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className={styles.actionsContainer}>
                    {isShowBack && (
                      <button
                        style={{ marginTop: "30px" }}
                        className={styles.closeBtn}
                        onClick={() => onClickBack()}
                      >
                        Back
                      </button>
                    )}
                    <div>
                      {isPreview ? (
                        <button
                          style={{ marginTop: "30px" }}
                          className={styles.closeBtn}
                          onClick={() => preview()}
                        >
                          Preview
                        </button>
                      ) : (
                        <button
                          style={{ marginTop: "30px" }}
                          className={styles.closeBtn}
                          onClick={() => toggle()}
                        >
                          Close
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
