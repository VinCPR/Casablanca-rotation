import { url } from "inspector";
import Navbar from "../../components/Navbar";
import IconEmail from "./assets/IconEmail";
import IconPassword from "./assets/IconPassword";
import styles from "./index.module.css";

export default function LoginPage() {
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
            <input className={styles.input} placeholder="EMAIL" />
            <input
              className={styles.input}
              type="password"
              placeholder="PASSWORD"
            />
            <button className={styles.forgotPassword}>Forgot password?</button>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.newAccount}>Create account</button>
          </div>
        </div>
      </div>
    </>
  );
}
