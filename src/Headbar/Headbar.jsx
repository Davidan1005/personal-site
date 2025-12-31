import styles from "./Headbar.module.css"
import { FaBars } from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Headbar() {
    return(
        <>
        <div className={styles.container}>

            <div className={styles.hamburger}>
                <HamburgerMenu />
            </div>

            <nav className={styles.navbar}>
                <a href="#projects">Projects </a>
                <a href="#about">About</a>
                <a href="#exploring">Exploring</a>
            </nav>

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