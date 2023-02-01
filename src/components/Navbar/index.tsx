import styles from "./index.module.css";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  async function onClickLogout() {
    localStorage.clear();
    router.push(`/login`);
    setIsLogin(false);
  }
  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setIsLogin(true);
    }
    if (localStorage.getItem("role_name") != "admin") {
      const lastName = localStorage.getItem("last_name");
      const firstName = localStorage.getItem("first_name");
      setName(lastName + " " + firstName);
    }
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <Image
        src="/images/Logo.jpg"
        alt="logo"
        width={45}
        height={45}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer", position: "absolute", left: "20px" }}
      />
      <div
        className={styles.title}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer", position: "absolute", left: "50px" }}
      >
        C-Rotation
      </div>
      {!isLogin ? (
        <button
          onClick={() => router.push("/login")}
          className={styles.loginBtn}
        >
          <div className={styles.text}>LOGIN</div>
        </button>
      ) : (
        <div className={styles.nameArea}>
          <div className={styles.name}>{name}</div>
          <button onClick={() => onClickLogout()} className={styles.logoutBtn}>
            <div className={styles.text}>LOGOUT</div>
          </button>
        </div>
      )}
    </div>
  );
}
