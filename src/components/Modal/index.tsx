import * as React from "react";
import OptionSelector from "./containers/BlockContainer/OptionSelector";
import styles from "./index.module.css";
import SelectedComponents from "./containers/BlockContainer/SelectedComponents";
import DisplayRotation from "./DisplayRotation";
import Rotation from "./Rotation";
import Hospital from "./Hospital";
import Service from "./Service";
import Department from "./Department";

interface Props {
  children?: React.ReactNode;
  isOpened: boolean;
  toggle: () => void;
  heading: string;
  data?: OptionSelector;
}

export default function Modal({
  children,
  isOpened,
  toggle,
  heading = "",
}: Props) {
  const [showPreview, setShowPreview] = React.useState(false);
  const rotation: Rotation[] = [
    {
      departments: [
        { name: "Pediatrics", numOfWeeks: 7 },
        { name: "Neurology", numOfWeeks: 3 },
      ],
      hospitals: [
        { name: "Vinmec", numOfWeeks: 4 },
        { name: "108 Hospital", numOfWeeks: 3 },
        { name: "Vinmec", numOfWeeks: 3 },
      ],
      services: [
        { name: "Impatient", numOfWeeks: 4 },
        { name: "Outpatient", numOfWeeks: 3 },
        { name: "Neurology", numOfWeeks: 3 },
      ],
    },
    {
      departments: [
        { name: "Neurology", numOfWeeks: 3 },
        { name: "Pediatrics", numOfWeeks: 7 },
      ],
      hospitals: [
        { name: "Vinmec", numOfWeeks: 3 },
        { name: "Vinmec", numOfWeeks: 4 },
        { name: "108 Hospital", numOfWeeks: 3 },
      ],
      services: [
        { name: "Neurology", numOfWeeks: 3 },
        { name: "Impatient", numOfWeeks: 4 },
        { name: "Outpatient", numOfWeeks: 3 },
      ],
    },
  ];

  function getOutput(input: OptionSelector): Rotation {
    const departments: Department[] = [];
    const hospitals: Hospital[] = [];
    const services: Service[] = [];

    for (var i = 0; i < input.department.selectedComponents.length; i++) {
      const new_dept: Department = {
        name: input.department.selectedComponents[i].name,
        numOfWeeks: input.department.selectedComponents[i].numOfWeeks,
      };
      departments.push(new_dept);
    }
    for (var i = 0; i < input.hospital.selectedComponents.length; i++) {
      const new_hospital: Hospital = {
        name: input.hospital.selectedComponents[i].name,
        numOfWeeks: input.hospital.selectedComponents[i].numOfWeeks,
      };
      hospitals.push(new_hospital);
    }
    for (var i = 0; i < input.service.selectedComponents.length; i++) {
      const new_service: Service = {
        name: input.service.selectedComponents[i].name,
        numOfWeeks: input.service.selectedComponents[i].numOfWeeks,
      };
      services.push(new_service);
    }
    return { departments, hospitals, services };
  }

  return (
    <>
      {isOpened && (
        <>
          <div className={styles.darkBG} onClick={() => toggle()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              {!showPreview ? (
                <>
                  <div className={styles.modalHeader}>{heading}</div>
                  <div className={styles.modalContainer}>{children}</div>
                  <div className={styles.actionsContainer}>
                    <button
                      className={styles.previewBtn}
                      onClick={() => setShowPreview(true)}
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
                  {/**TODO: draw the preview */}
                  <div className={styles.modalHeader}>Preview</div>

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
                              {rotation.departments.map((obj, index1) => {
                                return (
                                  <div key={index1}>
                                    <DisplayRotation
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className={styles.selectionContainer2}>
                              {rotation.services.map((obj, index1) => {
                                return (
                                  <div key={index1}>
                                    <DisplayRotation
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <div className={styles.selectionContainer3}>
                              {rotation.hospitals.map((obj, index1) => {
                                return (
                                  <div key={index1}>
                                    <DisplayRotation
                                      label={obj.name}
                                      width={87.5 * (obj.numOfWeeks - 1) + 77}
                                      height={148}
                                      marginLeft={3}
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
                    <button
                      style={{ marginTop: "30px" }}
                      className={styles.closeBtn}
                      onClick={() => setShowPreview(false)}
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
