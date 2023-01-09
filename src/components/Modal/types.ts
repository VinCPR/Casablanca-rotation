export type Service = {
  name: string;
  numOfWeeks: number;
};

export type Hospital = {
  name: string;
  numOfWeeks: number;
};

export type Department = {
  name: string;
  numOfWeeks: number;
};

export type Rotation = {
  departments: Department[];
  hospitals: Hospital[];
  services: Service[];
};

export type Tuple = {
  department: string;
  hospital: string;
  service: string;
  numOfWeeks: number;
};
