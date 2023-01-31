import styles from "./index.module.css";
import * as React from "react";
import StepOne from "./containers/StepOne";
import StepTwo from "./containers/StepTwo";
import { Rotation } from "../../../../../components/Modal/types";
import useSWR from "swr";
import httpGet from "@/modules/http/httpGet";
import { AcademicCalendar, AllServiceResponse } from "@/modules/utils/type";
import httpGetList from "@/modules/http/httpGetList";

export default function RotationDesign() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [numOfBlock, setNumOfBlock] = React.useState(0);
  const [numOfGroup, setNumOfGroup] = React.useState(0);
  const [blockDuration, setBlockDuration] = React.useState(0);
  const [startDate, setStartDate] = React.useState<number[]>([]);
  const [endDate, setEndDate] = React.useState<number[]>([]);
  const [rotationsDesign, setRotationsDesign] = React.useState<Rotation[][]>(
    []
  );
  const [academicCalendar, setAcademicCalendar] = React.useState("");
  const allServices = useSWR(
    "https://api.vincpr.com/v1/service/get_all",
    httpGet
  );
  const academicCalendars = useSWR(
    "https://api.vincpr.com/v1/academic_year/list",
    httpGetList
  );
  const data: AllServiceResponse = allServices?.data;
  const calendarData: AcademicCalendar = academicCalendars?.data;
  React.useEffect(() => {
    if (calendarData) {
      setAcademicCalendar(calendarData[0].name);
    }
  }, [academicCalendars?.data, calendarData]);
  return (
    <>
      {data && calendarData ? (
        <div className={styles.container}>
          <div className={styles.parent}>
            <div
              className={
                currentStep == 1 ? styles.stepActive : styles.stepNormal
              }
            >
              <div className={styles.stepName}>Step 1</div>
              <div className={styles.desc}>Specify rotation requirements</div>
            </div>
            <div
              className={
                currentStep == 2 ? styles.stepActive : styles.stepNormal
              }
            >
              <div className={styles.stepName}>Step 2</div>
              <div className={styles.desc}>Design rotation requirements</div>
            </div>
          </div>
          {currentStep == 1 && (
            <StepOne
              proceedNextStep={() => {
                setStartDate(
                  Array.from({ length: numOfBlock }, (_) => Date.now())
                );
                setEndDate(
                  Array.from({ length: numOfBlock }, (_) => Date.now())
                );
                setRotationsDesign(
                  Array.from({ length: numOfBlock }, (_) => [])
                );
                setCurrentStep(2);
              }}
              onChangeNumOfBlock={(i) => setNumOfBlock(i)}
              onChangeNumOfGroup={(i) => setNumOfGroup(i)}
              onChangeBlockDuration={(i) => setBlockDuration(i)}
              numOfBlock={numOfBlock}
              numOfGroup={numOfGroup}
              blockDuration={blockDuration}
              academicCalendar={academicCalendar}
              calendarData={calendarData}
              onChangeAcademicCalendar={(value) => setAcademicCalendar(value)}
            />
          )}
          {currentStep == 2 && (
            <StepTwo
              startDate={startDate}
              onChangeStartDate={(date, indexChange) => {
                setStartDate(
                  startDate.map((value, index) => {
                    if (indexChange === index) return date;
                    return value;
                  })
                );
              }}
              onChangeEndDate={(date, indexChange) => {
                setEndDate(
                  endDate.map((value, index) => {
                    if (indexChange === index) return date;
                    return value;
                  })
                );
              }}
              onChangeRotationDesign={(rotationChange, indexChange) => {
                setRotationsDesign(
                  rotationsDesign.map((rotation, index) => {
                    if (index === indexChange) {
                      return rotationChange;
                    }
                    return rotation;
                  })
                );
              }}
              backStep={() => setCurrentStep(1)}
              numOfBlock={numOfBlock}
              numOfGroup={numOfGroup}
              // numOfStudent={numOfStudent}
              durationOfBlock={blockDuration}
              rotationDesign={rotationsDesign}
              data={data}
              academicCalendar={academicCalendar}
            />
          )}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}
