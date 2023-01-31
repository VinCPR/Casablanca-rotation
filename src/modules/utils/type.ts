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

export type AttendingInfo = {
  email: string;
  attending_id: string;
  first_name: string;
  last_name: string;
  mobile: string;
  biography: string;
  image: string;
  created_at: string;
}

export type DepartmentInfo = {
  name: string;
  description: string;
  created_at: string;
}

export type HospitalInfo = {
  name: string;
  description: string;
  address: string;
  created_at: string;
}

export type ServiceInfo = {
  name: string;
  description: string;
  hospital: string;
  specialty: string;
  created_at: string;
}

export type AcademicCalendar = {
  created_at: string;
  end_date: string;
  name: string;
  start_date: string;
}[];

export type StudentCalendarEvent = {
  start_date: string;
  end_date: string;
  specialty_name: string;
  hospital_name: string;
  service_name: string;
  event_id: string;
  group_name: string;
}
