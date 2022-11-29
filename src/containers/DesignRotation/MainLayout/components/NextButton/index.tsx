import { useState } from "react";
import styles from "./index.module.css";

import Link from "next/link"



export default function NextButton () {
    
    return(
        <Link href="/design-rotation/second-step">
        <button  className={styles.nextButton}>
            <span>Next&gt;&gt;</span>
        </button>
        </Link>
    )
}