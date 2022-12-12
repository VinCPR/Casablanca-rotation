import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import styles from "./Feature.module.css";
export default function Feature() {
    return (
        <>
            <div className={styles.featureBackground}>
                <div className={styles.featureTitle}> 
                    <h1> The benefit of using our platform</h1>
                </div> 
                <div className={styles.featureBlock}> 
                    <div className={styles.feature}>
                        <Image alt='Icon1' src={"/images/Icon.png"}width={108} height={108} />
                        <div className={styles.text}>
                            <h1> Professional</h1>
                            <p>As a program director, you can assess learners, instructors and educational experiences</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <Image alt='Icon2' src={"/images/Icon-2.png"} width={108} height={108} />
                        <div className={styles.text}>
                            <h1> Easy management </h1>
                            <p>Manage curriculum, deliver schedules to students, hospitals, and faculties with ease</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <Image alt='Icon3' src={"/images/Icon-3.png"} width={108} height={108} />
                        <div className={styles.text}>
                            <h1> Relieve your effort</h1>
                            <p>Build master clinical rotations based on your needs, flexible and customizable</p>
                        </div>
                    </div>          
                </div> 
            </div> 
        </>
    )
}
