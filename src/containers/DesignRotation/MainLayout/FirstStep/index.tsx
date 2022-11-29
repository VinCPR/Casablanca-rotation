import styles from "./index.module.css";
import { ReactDOM } from "react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
export default function FirstStep(){
    const [currentPage,setCurrentPage] = useState(1);
    
    return (
        <div  >
        <BackButton></BackButton>
        <text className= {styles.title}>LET’S GET STARTED</text>
        <div className={styles.text}>
            <text  >We need a few information before diving into the rotation design</text>
        </div>
        <div className={styles.questionLabel}>
            <label>Enter the number of blocks:</label>
            <input className= {styles.questionBox1}  type = "text" />
        </div>
        <div className={styles.questionLabel}>
            <label>Enter the number of groups in each block:</label>
            <input className={styles.questionBox2} type = "text" />
        </div>
        <div className={styles.questionLabel}>
            <label>Enter the number of students in each group:</label>
            <input className={styles.questionBox3} type = "text" />
        </div>
        <NextButton></NextButton>
        </div>
    )
}