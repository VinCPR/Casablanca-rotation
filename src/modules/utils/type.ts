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

export type AcademicCalendar = {
  created_at: string;
  end_date: string;
  name: string;
  start_date: string;
}[];
