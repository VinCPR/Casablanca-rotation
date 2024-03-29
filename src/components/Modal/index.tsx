import * as React from "react";
import styles from "./index.module.css";
import RotationCard from "./containers/RotationCard";
import { clean, designRotation } from "./algorithm";
import { OptionSelector } from "./containers/BlockContainer/types";
import { Department, Hospital, Rotation, Service } from "./types";
import data from "./containers/BlockContainer/data";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import {
  DepartmentInfo,
  HospitalInfo,
  ServiceInfo,
} from "@/modules/utils/type";

interface Props {
  children?: React.ReactNode;
  isOpened: boolean;
  toggle: () => void;
  onChangeRotationDesign: (rotation: Rotation[]) => void;
  heading: string;
  subHeading: string;
  data?: OptionSelector;
  showPreview: boolean;
  numberOfGroup: number;
  blockDuration: number;
}

// const [allDepartments, allServices, allHospitals] = data();

export default function Modal({
  children,
  isOpened,
  toggle,
  heading = "",
  subHeading = "",
  onChangeRotationDesign,
  data,
  showPreview,
  numberOfGroup,
  blockDuration,
}: Props) {
  const deptResponse = useSWR(
    "https://api.vincpr.com/v1/specialty/list?pageNumber=1&pageSize=10",
    httpGet
  );
  const hospitalResponse = useSWR(
    "https://api.vincpr.com/v1/hospital/list?pageNumber=1&pageSize=200",
    httpGet
  );
  const serviceResponse = useSWR(
    "https://api.vincpr.com/v1/service/list/hospital?pageNumber=1&pageSize=200",
    httpGet
  );
  const [isShowPreview, setIsShowPreview] = React.useState(showPreview);
  const [rotation, setRotation] = React.useState<Rotation[]>([]);
  const [cleanRotation, setCleanRotation] = React.useState<Rotation[]>([]);
  const [isPreview, setIsPreview1] = React.useState(showPreview);

  const deptArr: DepartmentInfo[] = deptResponse?.data;
  const hospitalArr: HospitalInfo[] = hospitalResponse?.data;
  const serviceArr: ServiceInfo[] = serviceResponse?.data;

  let allDepartments = deptArr?.map((obj) => obj.name);
  let allHospitals = hospitalArr?.map((obj) => obj.name);
  let allnonUniqueServices = serviceArr?.map((obj) => obj.name);

  // This function returns unique values of an array
  function unique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  // Filter the unique values of all services
  let allServices = allnonUniqueServices?.filter(unique);

  const colors = [
    "#18A0FB",
    "#b6453b",
    "#b6833b",
    "#7DABF8",
    "#9D7E2F",
    "#9747FF",
    "#453BB6",
    "#FFA347",
    "#8c7df8",
    "#7de8f8",
    "#F46B6B",
  ];

  function onclick() {
    const departments = data?.department.selectedComponents as Department[];
    setIsShowPreview(true);
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
    const blockDesign = designRotation(inputFormated, numberOfGroup);
    onChangeRotationDesign(blockDesign);
    setRotation(blockDesign);
    setCleanRotation(
      blockDesign.map((rotation) => {
        return {
          departments: clean(rotation.departments),
          hospitals: clean(rotation.hospitals),
          services: clean(rotation.services),
        };
      })
    );
  }

  function onClickBack() {
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

    setRotation(
      designRotation({ departments, hospitals, services }, numberOfGroup)
    );
  }

  function getGridTemplateCol(rotationList: any) {
    let sum = 0;
    for (let i = 1; i <= rotationList.length; i++) {
      sum += rotationList[i - 1].numOfWeeks;
    }
    let output = "";
    for (let i = 1; i <= rotationList.length; i++) {
      output +=
        "[line" + i + "] " + (rotationList[i - 1].numOfWeeks / sum) * 100 + "%";
    }
    return output;
  }

  function getHeaderGridTemplateCol(numOfWeeks: number) {
    let output = "";
    for (let i = 1; i <= numOfWeeks; i++) {
      output += "[line" + i + "] " + (1 / numOfWeeks) * 100 + "%";
    }

    return output;
  }

  function getWeekHeaders(numOfWeeks: number) {
    const weekNums = Array.from(Array(numOfWeeks).keys());

    const weekHeaders = weekNums.map((num) => (
      <div key={num} className={styles.centerItems}>
        Week {num + 1}
      </div>
    ));

    return (
      <div
        style={{ gridTemplateColumns: getHeaderGridTemplateCol(numOfWeeks) }}
        className={styles.header}
      >
        {weekHeaders}
      </div>
    );
  }

  function getTableLine(numOfWeeks: number) {
    const weekNums = Array.from(Array(numOfWeeks - 2).keys());

    const tableLines = weekNums.map((num) => (
      <div key={num} className={styles.line} />
    ));

    return <>{tableLines}</>;
  }

  function getMarginLeft(numOfWeeks: number) {
    return 1254.3 / numOfWeeks + "px";
  }

  return (
    <div>
      {isOpened && (
        <div>
          <div className={styles.darkBG} onClick={() => toggle()} />
          <div className={styles.centered}>
            {!isShowPreview ? (
              <>
                <div className={styles.modal}>
                  <div className={styles.modalHeader}>{heading}</div>
                  <div className={styles.modalContainer}>{children}</div>
                  <div className={styles.actionsContainer}>
                    <button
                      className={styles.previewBtn}
                      onClick={() => {
                        if (data?.department.totalNum !== blockDuration) {
                          alert("Insufficient block duration");
                        } else onclick();
                      }}
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
                </div>
              </>
            ) : (
              <>
                <div style={{ width: "1400px" }} className={styles.modal}>
                  <div className={styles.modalHeader}>{subHeading}</div>
                  <div className={styles.mainContentContainer}>
                    {cleanRotation.map((cRotation, index) => {
                      return (
                        <div key={index} className={styles.previewContainer}>
                          <div className={styles.text}>
                            <h3>Group {index + 1}</h3>
                          </div>
                          <div className={styles.container}>
                            {getWeekHeaders(blockDuration)}
                            <div className={styles.blockContainer}>
                              <div
                                style={{
                                  marginLeft: getMarginLeft(blockDuration),
                                }}
                                className={styles.line}
                              ></div>
                              {getTableLine(blockDuration)}
                              <div className={styles.line2}></div>
                              <div className={styles.line3}></div>
                            </div>
                            <div>
                              <div
                                style={{
                                  gridTemplateColumns: getGridTemplateCol(
                                    cRotation.departments
                                  ),
                                }}
                                className={styles.selectionContainer1}
                              >
                                {cRotation.departments.map((obj, index) => {
                                  return (
                                    <div
                                      style={{
                                        justifySelf: "center",
                                        width: "100%",
                                        display: "grid",
                                      }}
                                      key={index}
                                    >
                                      <RotationCard
                                        background={
                                          colors[
                                            allDepartments.indexOf(obj.name)
                                          ]
                                        }
                                        label={obj.name}
                                        fontSize={Math.min(
                                          (250 * obj.numOfWeeks) /
                                            obj.name.length,
                                          20
                                        )}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                              <div
                                style={{
                                  gridTemplateColumns: getGridTemplateCol(
                                    cRotation.hospitals
                                  ),
                                }}
                                className={styles.selectionContainer2}
                              >
                                {cRotation.hospitals.map((obj, index) => {
                                  return (
                                    <div
                                      style={{
                                        justifySelf: "center",
                                        width: "100%",
                                        display: "grid",
                                      }}
                                      key={index}
                                    >
                                      <RotationCard
                                        background={
                                          colors[allHospitals.indexOf(obj.name)]
                                        }
                                        label={obj.name}
                                        fontSize={Math.min(
                                          (250 * obj.numOfWeeks) /
                                            obj.name.length,
                                          20
                                        )}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                              <div
                                style={{
                                  gridTemplateColumns: getGridTemplateCol(
                                    cRotation.services
                                  ),
                                }}
                                className={styles.selectionContainer3}
                              >
                                {cRotation.services.map((obj, index) => {
                                  return (
                                    <div
                                      style={{
                                        justifySelf: "center",
                                        width: "100%",
                                        display: "grid",
                                      }}
                                      key={index}
                                    >
                                      <RotationCard
                                        background={
                                          colors[
                                            allServices.indexOf(obj.name) % 7
                                          ]
                                        }
                                        label={obj.name}
                                        fontSize={Math.min(
                                          (250 * obj.numOfWeeks) /
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
                  </div>
                  <div className={styles.actionsContainer}>
                    <div>
                      {isPreview ? (
                        <button
                          style={{ marginTop: "15px" }}
                          className={styles.closeBtn}
                          onClick={() => preview()}
                        >
                          Preview
                        </button>
                      ) : (
                        <div className={styles.buttonContainer}>
                          <button
                            style={{ marginTop: "15px" }}
                            className={styles.backBtn}
                            onClick={() => onClickBack()}
                          >
                            Back
                          </button>
                          <button
                            style={{ marginTop: "15px" }}
                            onClick={toggle}
                            className={styles.closeBtn}
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
