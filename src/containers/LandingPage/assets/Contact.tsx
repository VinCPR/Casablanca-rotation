import styles from "./Contact.module.css";
export default function Contact() {
    return (
        <>
            <div className={styles.Contactcontainer}>
                <h1>Contact Us</h1>
                <h3>C-Rotation is designed for medical program. Build a better educational experience for medical practitioners.</h3>
                <form>
                    <h4> Contact Us</h4>
                    <input placeholder="Your Name"/>
                    <input placeholder="Your Email"/>
                    <textarea placeholder="Your Message"/>
                    <button> Send </button>
                </form> 
            </div>
        </>
    )
}