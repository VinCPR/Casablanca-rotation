import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  isEdit?: boolean;
};

export default function ViewAttendingDetail({ isEdit }: Props) {
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
  const [editProfile, setEditProfile] = React.useState("EDIT");
  const [editContactInfo, setEditContactInfo] = React.useState("EDIT");
  const [editBiography, setEditBiography] = React.useState("EDIT");

  function onClickProfile() {
    setIsEditProfile(!isEditProfile);

    if (isEditProfile) {
      setEditProfile("EDIT");
    }

    if (!isEditProfile) {
      setEditProfile("ENTER");
    }
  }

  function onClickContactInfo() {
    setIsEditContactInfo(!isEditContactInfo);

    if (isEditContactInfo) {
      setEditContactInfo("EDIT");
    }

    if (!isEditContactInfo) {
      setEditContactInfo("ENTER");
    }
  }

  function onClickBiography() {
    setIsEditBiography(!isEditBiography);

    if (isEditBiography) {
      setEditBiography("EDIT");
    }

    if (!isEditBiography) {
      setEditBiography("ENTER");
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
      <div className={styles.profileContainer}>
        <div className={styles.info}>
          {" "}
          <div className={styles.infoHeader}>PERSONAL INFO</div>
          <div className={styles.studentPhoto}>
            <Image
              src={"/images/anhthe1.png"}
              alt="logo"
              width={232}
              height={299}
            />
          </div>
        </div>
        <div className={styles.personalnfo}>
          {!isEditProfile ? (
            <div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Name:</div>
                <div className={styles.text}> {name} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>DOB:</div>
                <div className={styles.text}> {DOB} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Email:</div>
                <div className={styles.text}> {email} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Position:</div>
                <div className={styles.text}> {position} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Phone:</div>
                <div className={styles.text}> {phone} </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Name:</div>
                <input
                  className={styles.input}
                  onChange={changeName}
                  value={name}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>DOB:</div>
                <input
                  className={styles.input}
                  onChange={changeDOB}
                  value={DOB}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Email:</div>
                <input
                  className={styles.input}
                  onChange={changeEmail}
                  value={email}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Position:</div>
                <input
                  className={styles.input}
                  onChange={changePosition}
                  value={position}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Phone:</div>
                <input
                  className={styles.input}
                  onChange={changePhone}
                  value={phone}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
            </div>
          )}
          <div>
            {isEdit && (
              <button
                className={styles.editBtn}
                onClick={() => onClickProfile()}
              >
                {editProfile}
              </button>
            )}
          </div>
        </div>
        <div className={styles.contactlnfo}>
          <div className={styles.infoHeader}>CONTACT INFO</div>
          {!isEditContactInfo ? (
            <div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Office Hours:</div>
                <div className={styles.text}> {officeHours} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Contact Method:</div>
                <div className={styles.text}> {contactMethod} </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Office Hours:</div>
                <input
                  className={styles.input}
                  onChange={changeOfficeHours}
                  value={officeHours}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Contact Method:</div>
                <input
                  className={styles.input}
                  onChange={changeContactMethod}
                  value={contactMethod}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
            </div>
          )}
          <div>
            {isEdit && (
              <button
                className={styles.editBtn}
                onClick={() => onClickContactInfo()}
              >
                {editContactInfo}
              </button>
            )}
          </div>
        </div>
        <div className={styles.biography}>
          <div className={styles.infoHeader}>BIOGRAPHY</div>
          {!isEditBiography ? (
            <div
              className={styles.text}
              style={{ marginLeft: "0px", marginTop: "10px" }}
            >
              {" "}
              {biography}{" "}
            </div>
          ) : (
            <form>
              <textarea
                onChange={changeBiography}
                value={biography}
                className={styles.input}
                style={{
                  width: "1150px",
                  height: "100px",
                  display: "flex",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
              >
                {" "}
              </textarea>
            </form>
          )}

          {isEdit && (
            <button
              style={{ marginLeft: "0px" }}
              className={styles.editBtn}
              onClick={() => onClickBiography()}
            >
              {editBiography}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
