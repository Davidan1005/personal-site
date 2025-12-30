import styles from "./Hero.module.css"
import profilePic from "./profile photo.jpg"

export default function Hero () {
    return (
        <>
            <div className={styles.container}>
                <img 
                src={profilePic}
                alt="profile"
                className={styles.image}
                >
                </img>
                <h1 className={styles.im}>
                    I'm
                </h1>
                <h1 className={styles.name}>
                    David Nduka
                </h1>
                <h1 className={styles.title}>
                    Software Engineer/ Electrical engineering student
                </h1>
            </div>
        </>
    )
}