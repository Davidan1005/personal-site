import styles from "./ContactWidgets.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactWidgets () {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.githubWidget}>
                    <p1>My Github</p1>
                    <a href="https://github.com/Davidan1005" target="_blank"> <FaGithub size={40} color="#0F2C5B" className={styles.icon}/></a>
                </div>

                <div className={styles.emailWidget}>
                    <p1>Contact me</p1>
                    <a href="mailto:ndukadavid90@gmail.com" target="_blank"><SiGmail size={40} color="#0F2C5B" className={styles.icon} /></a>
                </div>

                <div className={styles.linkedinWidget}>
                    <p1>My Linkedin</p1>
                    <a href="https://linkedin.com/in/david-nduka-224094275" target="blank"><FaLinkedin size={40} color="#0F2C5B" className={styles.icon}/></a>
                </div>      
            </div>
        </>
    )
}