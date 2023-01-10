import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  isEdit?: boolean;
};

export default function ViewStudentDetail({ isEdit }: Props) {
  const [name, setName] = React.useState("Do My Dieu Linh");
  const [DOB, setDOB] = React.useState("23/09/2004");
  const [email, setEmail] = React.useState("22linh.dmd@vinuni.edu.vn");
  const [program, setProgram] = React.useState("Business Administration");
  const [cohort, setCohort] = React.useState("Cohort 3");
  const [phone, setPhone] = React.useState("0904291212");

  const [isEditProfile, setIsEditProfile] = React.useState(false);
  const [editProfile, setEditProfile] = React.useState("EDIT");

  function onClickProfile() {
    setIsEditProfile(!isEditProfile);

    if (isEditProfile) {
      setEditProfile("EDIT");
    }

    if (!isEditProfile) {
      setEditProfile("ENTER");
    }
  }

  const changeName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };
  const changeDOB = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDOB(event.target.value);
  };
  const changeEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };
  const changeProgram = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setProgram(event.target.value);
  };
  const changeCohort = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCohort(event.target.value);
  };
  const changePhone = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <div>
        <div className={styles.splitLeft}>
          <div className={styles.infoHeader}>PERSONAL INFO</div>
          <div className={styles.studentPhoto}>
            <Image
              src={"/images/anhthe1.png"}
              alt="logo"
              width={232}
              height={299}
            />
          </div>
          <div className={styles.personalnfo}>
            {!isEditProfile ? (
              <div>
                <div className={styles.boldText}>
                  Name:
                  <div
                    className={styles.text}
                    style={{ top: "-22px", left: "61px" }}
                  >
                    {" "}
                    {name}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  DOB:
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "53px" }}
                  >
                    {" "}
                    {DOB}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Email:
                  <div
                    className={styles.text}
                    style={{ top: "-23px", left: "61px" }}
                  >
                    {" "}
                    {email}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Program:
                  <div
                    className={styles.text}
                    style={{ top: "-21.5px", left: "85px" }}
                  >
                    {" "}
                    {program}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Cohort:
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "71px" }}
                  >
                    {" "}
                    {cohort}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Phone:
                  <div
                    className={styles.text}
                    style={{ top: "-22px", left: "63px" }}
                  >
                    {" "}
                    {phone}{" "}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className={styles.boldText1} style={{ marginTop: "10px" }}>
                  Name:
                  <input
                    onChange={changeName}
                    value={name}
                    type="text"
                    id="fname"
                    name="fname"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  DOB:
                  <input
                    onChange={changeDOB}
                    value={DOB}
                    type="text"
                    id="fdob"
                    name="fdob"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  Email:
                  <input
                    onChange={changeEmail}
                    value={email}
                    type="text"
                    id="femail"
                    name="femail"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  Program:
                  <input
                    onChange={changeProgram}
                    value={program}
                    type="text"
                    id="fposition"
                    name="fposition"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  Cohort:
                  <input
                    onChange={changeCohort}
                    value={cohort}
                    type="text"
                    id="fposition"
                    name="fposition"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  Phone:
                  <input
                    onChange={changePhone}
                    value={phone}
                    type="text"
                    id="fphone"
                    name="fphone"
                  ></input>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isEdit && (
        <>
          <button
            className={styles.editBtn}
            onClick={() => onClickProfile()}
            style={{ left: "350px", top: "390px" }}
          >
            {editProfile}
          </button>
        </>
      )}
    </div>
  );
}
