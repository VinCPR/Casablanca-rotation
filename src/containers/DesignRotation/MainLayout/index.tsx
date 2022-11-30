import styles from "./index.module.css";
import FirstStep from "./FirstStep";
export default function MainLayout(){
    return (
        <div className={styles.mainLayout} >
            <FirstStep/>
        </div>
    )
}
