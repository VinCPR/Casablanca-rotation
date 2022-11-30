import styles from "./index.module.css";
import Link from "next/link";
export default function BackButton ( ){
    return(
        <Link href="/landing-page"> 
        <button className={styles.backButton}>
        <span>&lt;&lt; Back</span>
        </button>
        </Link>
    )
}
