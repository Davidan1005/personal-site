import styles from "./About.module.css"

export default function About () {
    return (
        <>
            <div className={styles.container} id="about">
                <p1 className={styles.header}>About</p1>

                {/* <div>
                    <p1>My competencies</p1>
                    <div></div>
                </div> */}

                <div>
                    <p1>I’m a developer passionate about exploring 
                        new technologies. I love `building projects that challenge
                        me, from web apps to robotics.
                        Always learning, always experimenting.</p1>
                </div>

            </div>

        </>
    )
}