import styles from "./Headbar.module.css"
import { FaBars } from "react-icons/fa";

export default function Headbar() {
    return(
        <>
        <div className={styles.container}>

       
            <button className={styles.hamburger}>
                <FaBars size = {28} />
            </button>
            <div className={styles.View_work}>
                View my work 
            </div>
        </div>
        </>
    )

}