import moment from "moment";
import { Rotation } from "../../components/Modal/types";
import convertBlockDesign from "../utils/block-design-converter";
import httpPostResetRotation from "./httpPostResetRotation";

type RotationDetailsInput = {
  academicYearName: string;
  groupsPerBlock: number;
  numberOfPeriod: number;
  weeksPerPeriod: number;
  startDates: number[];
  rotation: Rotation[][];
};

export default async function httpPostSubmitRotation({
  academicYearName,
  groupsPerBlock,
  numberOfPeriod,
  weeksPerPeriod,
  startDates,
  rotation,
}: RotationDetailsInput) {
  try {
    const data = {
      academic_year_name: academicYearName,
      groups_per_block: groupsPerBlock,
      number_of_period: numberOfPeriod,
      weeks_per_period: weeksPerPeriod,
      periods: startDates.map((date, index) => ({
        period_name: `Period ${index + 1}`,
        start_date: moment(date).format("YYYY-MM-DD[T]HH:mm:ssZ"),
      })),
      blocks: convertBlockDesign(rotation),
    };
    await httpPostResetRotation("2023-2024 MD Program");
    await fetch("https://api.vincpr.com/v1/rotation/design", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("You have designed the rotation successfully");
  } catch (error) {
    alert(error);
  }
}
