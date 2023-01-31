import { url } from "inspector";
import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import IconEmail from "./assets/IconEmail";
import IconPassword from "./assets/IconPassword";
import styles from "./index.module.css";
import httpPostLogin from "@/modules/http/httpPostLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const router = useRouter();
  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  async function onClickLogin() {
    httpPostLogin({ email: email, password: password });
    while (!localStorage.getItem("role_name")) {
      await delay(1000);
    }
    router.push(`/`);
  }

  return (
    <>
      <Navbar />
      <div className={styles.loginBackground}>
        <div className={styles.loginSection}>
          <div className={styles.loginContainer}>
            <div className={styles.iconEmail}>
              <IconEmail />
            </div>
            <div className={styles.iconPassword}>
              <IconPassword />
            </div>
            <input
              className={styles.input}
              placeholder="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.forgotPassword}>Forgot password?</button>
            <button
              className={styles.loginButton}
              onClick={async () => onClickLogin()}
            >
              Login
            </button>
            <button className={styles.newAccount}>Create account</button>
          </div>
        </div>
      </div>
    </>
  );
}
