import styles from './Experience.module.css';

export default function About() {
    return (
        <div id="experience-id" className={styles.experience}>
            <div className={styles.experience_text}>
                <div className={styles.experience_init}>
                    <div>
                        <h2>02. </h2>
                        <h1>{`Where I've Worked`}</h1>
                    </div>
                    <div className={styles.separator}></div>
                </div>
            </div>
        </div>
    );
}
