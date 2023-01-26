import * as React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Navbar from "../../src/components/Navbar";
import Sidebar from "../../src/components/Sidebar";

export default function ViewAttendingDetail() {
  const [isEdit, setIsEdit] = React.useState(true);
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
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Sidebar highlight={2} />
      </div>
    </>
  );
}
