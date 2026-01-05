import styles from "./Hero.module.css"
import profilePic from "./profile photo.jpg"

export default function Hero () {
    return (
        <>
            <div className={styles.container}>
                <img 
                src={profilePic}
                alt="profile"
                className={styles.image}>
                </img>
                <h1 className={styles.header}>
                    Hello, I'm <br />
                    David Nduka
                </h1>
                <h1 className={styles.intro}>
                    Software Engineer & Electrical Engineering student in Nigeria | Robotics enthusiast
                </h1>
            </div>
        </>
    )
}