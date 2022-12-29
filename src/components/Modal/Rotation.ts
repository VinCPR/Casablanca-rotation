import Department from "./Department";
import Hospital from "./Hospital";
import Service from "./Service";

type Rotation = {
  departments: Department[];
  hospitals: Hospital[];
  services: Service[];
};

export default Rotation;
