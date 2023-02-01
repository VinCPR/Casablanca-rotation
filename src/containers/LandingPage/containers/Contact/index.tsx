import styles from "./index.module.css";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Contact Us</div>
      <div className={styles.subHeading}>
        C-Rotation is designed for medical program. Build a better educational
        experience for medical practitioners.
      </div>
      <form className={styles.form}>
        <div className={styles.contactUsTitle}> Contact Us</div>
        <input className={styles.input} placeholder="Your Name" />
        <input className={styles.input} placeholder="Your Email" />
        <textarea className={styles.input} placeholder="Your Message" />
        <button className={styles.sendButton}> Send </button>
      </form>
    </div>
  );
}
