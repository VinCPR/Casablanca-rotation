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

export type StudentInfo = {
  biography: string;
  created_at: string;
  email: string;
  first_name: string;
  image: string;
  last_name: string;
  mobile: string;
  student_id: string;
}
