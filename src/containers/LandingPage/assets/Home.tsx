import Image from "next/image";
import Styles from "./Home.module.css";
export default function Home() {
    return (
        <>
            <div className={Styles.Hero}> 
                <div className={Styles.herodisplay}>
                    <h1> Don’t be patient for clinical rotation any longer</h1>
                    <p> Design clinical rotations for your institution easily in just a few steps. </p>
                    <button> Get Started </button>
                </div>
                <div className={Styles.ManImage}>
                    {/*<vector className="Vector"> </vector> */}
                    <img src="/images/man.png" alt="Man"/>
                </div>
            </div>  
        </>
    )
}
