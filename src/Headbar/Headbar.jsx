import styles from "./Headbar.module.css"
import { FaBars } from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Headbar() {
    return(
        <>
        <div className={styles.container}>

       
            {/* <button className={styles.hamburger}>
                <FaBars size = {28} />
            </button> */}
            <div className={styles.hamburger}>

                <HamburgerMenu />
            </div>

            <a href="#projects" style={{textDecoration: "none"}}>
                <div className={styles.View_work}>
                    View my work &nbsp; 
                    <FaArrowRight size={15} />
                </div>
            </a>
        </div>
        </>
    )

}