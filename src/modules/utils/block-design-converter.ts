import { Rotation } from "../../components/Modal/types";

export default function convertBlockDesign(blocks: Rotation[][]) {
  return blocks.map((groups, index) => {
    const group_calendar = groups.map((rotation) => {
      let curHospital = 0,
        curService = 0,
        tempArr = [],
        hospitals = [],
        departments = [],
        sumServices = 0,
        sumHospitals = 0;
      for (let i = 0; i < rotation.hospitals.length; i++) {
        while (
          curService < rotation.services.length &&
          sumServices + rotation.services[curService].numOfWeeks <=
            rotation.hospitals[i].numOfWeeks
        ) {
          tempArr.push({
            service_name: rotation.services[curService].name,
            duration_in_week: rotation.services[curService].numOfWeeks,
          });
          sumServices += rotation.services[curService].numOfWeeks;
          curService++;
        }
        hospitals.push({
          hospital_name: rotation.hospitals[i].name,
          services: tempArr,
        });
        sumServices = 0;
        tempArr = [];
      }
      for (let i = 0; i < rotation.departments.length; i++) {
        while (
          curHospital < rotation.hospitals.length &&
          sumHospitals + rotation.hospitals[curHospital].numOfWeeks <=
            rotation.departments[i].numOfWeeks
        ) {
          tempArr.push(hospitals[curHospital]);
          sumHospitals += rotation.hospitals[curHospital].numOfWeeks;
          curHospital++;
        }
        departments.push({
          specialty_name: rotation.departments[i].name,
          hospitals: tempArr,
        });
        sumHospitals = 0;
        tempArr = [];
      }
      return departments;
    });
    return {
      block_name: `Block ${index}`,
      group_calendar,
    };
  });
}
