import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";
export default function StudentProfile() {
  const [image,setImage] =React.useState("/images/anhthe.png");
  const [name, setName] = React.useState("Do My Dieu Linh");
  const [DOB, setDOB] = React.useState("23/09/2004");
  const [email, setEmail] = React.useState("22linh.dmd@vinuni.edu.vn");
  const [cohort, setcohort] = React.useState("Cohort 1(2020->2026)");
  const [program, setProgram] = React.useState(" Medical Doctor");
  const [phone, setPhone] = React.useState("0904291212");
  const [isEditProfile, setIsEditProfile] = React.useState(false);
  const [isEditPhoto, setIsEditPhoto] = React.useState(false);
  
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
    setcohort(event.target.value);
  };
  const changePhone = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(event.target.value);
  };

  return (
        <div className={styles.splitLeft}>
          <div className={styles.infoHeader}>PERSONAL INFO</div>
          <div className={styles.studentPhoto}>
              <div>
                <Image
                  src={image}
                  alt="logo"
                  width={232}
                  height={299}
                />
                {/*<button
                  className={styles.editBtn}
                  onClick={() => setIsEditPhoto(true)}
                >
                  EDIT
                </button>*/}
              </div>
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
                    style={{ top: "-22.5px", left: "85px" }}
                  >
                    {" "}
                    {program}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Cohort:
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "70px" }}
                  >
                    {" "}
                    {cohort}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Phone: 
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "79px" }}
                  >
                    {" "}
                    {phone}{" "}
                  </div>
                </div>
                <button
                  className={styles.editBtn}
                  onClick={() => setIsEditProfile(true)}
                >
                  EDIT
                </button>
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
                  Position:
                  <input
                    onChange={changeProgram}
                    value={program}
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
                <button
                  className={styles.editBtn}
                  onClick={() => setIsEditProfile(false)}
                >
                  ENTER
                </button>
              </div>
            )}
          </div>
        </div>
  );
}
