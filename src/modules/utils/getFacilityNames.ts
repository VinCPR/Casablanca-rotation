import useSWR from "swr";
import httpGet from "../http/httpGet";
import { DepartmentInfo, HospitalInfo, ServiceInfo } from "./type";

export default function getFacilityNames() {
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
  let allServices = allnonUniqueServices.filter(unique);

  return [allDepartments, allHospitals, allServices];
}
