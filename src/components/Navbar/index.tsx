import styles from "./index.module.css";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async function onClick() {
    localStorage.clear();
    router.push(`/login`);
    setIsLogin(false);
  }
  useEffect(() => {
    if (localStorage.getItem("role_name")) {
      setIsLogin(true);
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
        style={{ cursor: "pointer" }}
      />
      <div
        className={styles.title}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
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
        <button onClick={() => onClick()} className={styles.logoutBtn}>
          <div className={styles.text}>LOGOUT</div>
        </button>
      )}
    </div>
  );
}
