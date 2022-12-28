import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";

export default function ViewStudentDetail() {
  const [name, setName] = React.useState("Do My Dieu Linh");
  const [DOB, setDOB] = React.useState("23/09/2004");
  const [email, setEmail] = React.useState("22linh.dmd@vinuni.edu.vn");
  const [position, setPosition] = React.useState("CBM Ungraduated Student");
  const [phone, setPhone] = React.useState("0904291212");
  const [officeHours, setOfficeHours] = React.useState(
    "3p.m->5 p.m, Tuesday (room I310)"
  );
  const [contactMethod, setContactMethod] = React.useState("email or teams");
  const [biography, setBiography] = React.useState(
    "Hi, I am Vu Duc Viet - a faculty of CHS. I completed my residency in Intensive Care in 1995 and PhD in 2011 from Hanoi Medical University, residency (FFI) in France (1997-1998 and 2004); attended training courses at International Medical Center of Japan (IMCJ) and Royal North Shore Hospital Sydney (Australia) -2009; visiting physician at St Anthony Hospital, Colorado and Mayo Clinic, Rochester, Minnesota (US)."
  );
  const [isEditProfile, setIsEditProfile] = React.useState(false);
  const [isEditContactInfo, setIsEditContactInfo] = React.useState(false);
  const [isEditBiography, setIsEditBiography] = React.useState(false);

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
  const changePosition = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPosition(event.target.value);
  };
  const changePhone = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhone(event.target.value);
  };
  const changeOfficeHours = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOfficeHours(event.target.value);
  };
  const changeContactMethod = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContactMethod(event.target.value);
  };
  const changeBiography = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBiography(event.target.value);
  };

  return (
    <div>
      <div>
        <div className={styles.splitLeft}>
          <div className={styles.infoHeader}>PERSONAL INFO</div>
          <div className={styles.studentPhoto}>
            <Image
              src={"/images/anhthe.png"}
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
                  Position:
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "79px" }}
                  >
                    {" "}
                    {position}{" "}
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
                    onChange={changePosition}
                    value={position}
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

        <div className={styles.splitRight}>
          <div className={styles.infoHeader} style={{ marginLeft: "28px" }}>
            CONTACT INFO
          </div>
          <div className={styles.contactInfo}>
            {!isEditContactInfo ? (
              <div>
                <div className={styles.boldText}>
                  Office Hours:
                  <div
                    className={styles.text}
                    style={{ top: "-22px", left: "122px" }}
                  >
                    {" "}
                    {officeHours}{" "}
                  </div>
                </div>
                <div className={styles.boldText}>
                  Contact method:
                  <div
                    className={styles.text}
                    style={{ top: "-22.5px", left: "150px" }}
                  >
                    {" "}
                    {contactMethod}{" "}
                  </div>
                </div>

                <button
                  className={styles.editBtn}
                  style={{ top: "100px" }}
                  onClick={() => setIsEditContactInfo(true)}
                >
                  EDIT
                </button>
              </div>
            ) : (
              <div>
                <div className={styles.boldText1} style={{ marginTop: "10px" }}>
                  Office Hours:
                  <input
                    onChange={changeOfficeHours}
                    value={officeHours}
                    type="text"
                    id="fofficehours"
                    name="fofficehours"
                  ></input>
                </div>
                <div className={styles.boldText1}>
                  Contact method:
                  <input
                    onChange={changeContactMethod}
                    value={contactMethod}
                    type="text"
                    id="fcontactmethod"
                    name="fcontactmethod"
                  ></input>
                </div>
                <button
                  className={styles.editBtn}
                  style={{ top: "100px" }}
                  onClick={() => setIsEditContactInfo(false)}
                >
                  ENTER
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className={styles.headerBottom}>BIOGRAPHY</div>

        {!isEditBiography ? (
          <div>
            <div className={styles.text} style={{ top: "10px", left: "15px" }}>
              {" "}
              {biography}{" "}
            </div>

            <button
              className={styles.editBtn}
              style={{ top: "510px", left: "15px" }}
              onClick={() => setIsEditBiography(true)}
            >
              EDIT
            </button>
          </div>
        ) : (
          <div className={styles.create}>
            <form>
              <textarea onChange={changeBiography} value={biography}>
                {" "}
              </textarea>
              <button
                className={styles.editBtn}
                style={{ top: "510px", left: "15px" }}
                onClick={() => setIsEditBiography(false)}
              >
                ENTER
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
