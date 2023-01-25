import * as React from "react";
import OptionSelector from "./containers/BlockContainer/OptionSelector";
import styles from "./index.module.css";
import DisplayRotation from "./DisplayRotation";
import { designRotation } from "./algorithm";
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
  durationOfBlock: number;
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
  durationOfBlock,
}: Props) {
  const [isShowPreview, setIsShowPreview] = React.useState(showPreview);
  const [rotation, setRotation] = React.useState<Rotation[]>([]);
  const [isPreview, setIsPreview1] = React.useState(showPreview);
  const [isShowBack, setIsShowBack] = React.useState(false);
  const [numberOfWeek, setNumberOfWeek]: any = React.useState([]);

  function onclick() {
    const set = [];
    for (let i = 0; i < durationOfBlock - 1; i++) {
      set[i] = "1";
    }
    setNumberOfWeek(set);

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

  function divideSpace() {
    var output = "";
    for (var i = 0; i < durationOfBlock; i++) {
      output += "1fr ";
    }
    return output;
  }

  console.log(numberOfWeek);
  function onClickBack() {
    setIsShowBack(false);
    setIsShowPreview(false);
  }

  function preview() {
    for (let i = 0; i < durationOfBlock - 1; i++) {
      numberOfWeek[i] = 1;
    }

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
            <div className={styles.modal} style={{ overflow: "scroll" }}>
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
                        <div
                          className={styles.container}
                          style={{
                            width: durationOfBlock * 86 + "px",
                          }}
                        >
                          <div
                            className={styles.header}
                            style={{
                              gridTemplateColumns: divideSpace(),
                            }}
                          >
                            <div className={styles.centerItems}>Week 1</div>
                            {numberOfWeek.map((week: any, index: number) => {
                              return (
                                <div className={styles.centerItems}>
                                  Week {index + 2}
                                </div>
                              );
                            })}
                          </div>

                          <div
                            className={styles.blockContainer}
                            style={{
                              width: durationOfBlock * 86 + "px",
                            }}
                          >
                            <div
                              style={{ marginLeft: "-3px" }}
                              className={styles.line}
                            ></div>
                            {numberOfWeek.map((week: any, index: any) => {
                              return <div className={styles.line}></div>;
                            })}
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                          </div>
                          <div>
                            <div className={styles.selectionContainer1}>
                              {rotation.departments.map((obj, index) => {
                                return (
                                  <div key={index}>
                                    <DisplayRotation
                                      label={obj.name}
                                      width={85.5 * (obj.numOfWeeks - 1) + 75}
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
                                    <DisplayRotation
                                      label={obj.name}
                                      width={85.5 * (obj.numOfWeeks - 1) + 75}
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
                                    <DisplayRotation
                                      label={obj.name}
                                      width={85.5 * (obj.numOfWeeks - 1) + 75}
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
