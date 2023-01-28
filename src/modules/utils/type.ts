export type AllServiceResponse = {
  [departments: string]: {
    [hospitals: string]: {
      hospital: string;
      specialty: string;
      name: string;
      description: string;
      created_at: string;
    }[];
  };
};
