import { AttendingInfo, EventDetail, StudentInfo } from "@/modules/utils/type";
import httpGet from "@/modules/http/httpGet";
import useSWR from "swr";
import styles from "./index.module.css";
import Table from "../../components/Table";
import ArrowBack from "../DesignRotation/components/MainLayout/RotationDesign/components/ArrowBack";

interface Props {
  eventID: string;
  onClickBack: () => void;
}

export default function EventDetailsPage({ eventID, onClickBack }: Props) {
  const eventDetailResponse = useSWR(
    `https://api.vincpr.com/v1/rotation/detail?eventID=${eventID}`,
    httpGet
  );
  const eventDetail: EventDetail = eventDetailResponse?.data;

  const allStudents: StudentInfo[] = eventDetail?.students;
  const allAttendings: AttendingInfo[] = eventDetail?.attendings;

  const studentHeaderItems = [
    "Student ID",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Details",
  ];

  const attendingHeaderItems = [
    "Attending ID",
    "First Name",
    "Last Name",
    "Email",
    "Mobile",
    "Details",
  ];

  const studentKeys = [
    "student_id",
    "first_name",
    "last_name",
    "email",
    "mobile",
  ];
  const attendingKeys = [
    "attending_id",
    "first_name",
    "last_name",
    "email",
    "mobile",
  ];

  const gridTemplateCol = [15, 15, 15, 25, 15, 15];

  function getDateFromISO(date: string) {
    if (date?.includes("-")) {
      let dates = date.split("T")[0].split("-");
      return dates[2] + "/" + dates[1] + "/" + dates[0];
    } else {
      return date;
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
          <button
            onClick={onClickBack}
            className={styles.backBtn}
          >
            <ArrowBack />
            BACK
          </button>
        <div className={styles.header}>EVENT DETAILS</div>
        <div className={styles.eventInfoContainer}>
          <div className={styles.row}>
            <div className={styles.boldInfo}>Event ID:</div>
            <div className={styles.eventInfo}> {eventID}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.boldInfo}>Start Date:</div>
            <div className={styles.eventInfo}>
              {getDateFromISO(eventDetail?.start_date)}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.boldInfo}>End Date:</div>
            <div className={styles.eventInfo}>
              {getDateFromISO(eventDetail?.end_date)}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.boldInfo}>Department:</div>
            <div className={styles.eventInfo}>
              {eventDetail?.specialty_name}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.boldInfo}>Hospital:</div>
            <div className={styles.eventInfo}>{eventDetail?.hospital_name}</div>
          </div>
          <div className={styles.row}>
            <div className={styles.boldInfo}>Service:</div>
            <div className={styles.eventInfo}>{eventDetail?.service_name}</div>
          </div>
        </div>
        <div className={styles.header}>ATTENDING LIST</div>
        <Table
          headerItems={attendingHeaderItems}
          data={allAttendings}
          keys={attendingKeys}
          gridTemplateCol={gridTemplateCol}
          showDetails={true}
          detailsRoute={"/faculty-list/profile/"}
          height={60}
        />
        <div className={styles.header}>STUDENT LIST</div>
        <Table
          headerItems={studentHeaderItems}
          data={allStudents}
          keys={studentKeys}
          gridTemplateCol={gridTemplateCol}
          showDetails={true}
          detailsRoute={"/student-view/student-profile/"}
          height={60}
        />
      </div>
    </>
  );
}
