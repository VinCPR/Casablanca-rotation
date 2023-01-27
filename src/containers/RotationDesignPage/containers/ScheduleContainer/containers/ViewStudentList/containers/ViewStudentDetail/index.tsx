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
                <div className={styles.boldText}>Program:</div>
                <div className={styles.text}> {program} </div>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Cohort:</div>
                <div className={styles.text}> {cohort} </div>
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
                <div className={styles.boldText}>Program:</div>
                <input
                  className={styles.input}
                  onChange={changeProgram}
                  value={program}
                  type="text"
                  id="fname"
                  name="fname"
                ></input>
              </div>
              <div className={styles.inLine}>
                <div className={styles.boldText}>Cohort:</div>
                <input
                  className={styles.input}
                  onChange={changeCohort}
                  value={cohort}
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
      </div>
    </div>
  );
}
