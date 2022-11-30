import Navbar from "../../components/Navbar"
import SideBar from "../../components/Sidebar"
import MainLayout from "./MainLayout"
import styles from "./index.module.css";

export default function DesignRotation(){
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.pageContain}>
            <SideBar></SideBar>
            <MainLayout></MainLayout>
            </div>
        </div>
    )
}
