import styles from "./index.module.css";
import { ReactDOM } from "react";
import { useState } from "react";
import FirstStep from "./FirstStep";
export default function MainLayout(){
    return (
        <div className={styles.mainLayout} >
            <FirstStep></FirstStep>
        </div>
    )
}