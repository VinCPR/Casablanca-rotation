import styles from "./index.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginSection}>
        <div className={styles.loginContainer}>
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
  );
}
