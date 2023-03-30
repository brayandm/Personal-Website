'use client';

import styles from './About.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div id="about-id" className={styles.about}>
                <div className={styles.about_text}>
                    <div className={styles.about_init}>
                        <div>
                            <h2>01. </h2>
                            <h1>About Me</h1>
                        </div>
                        <div className={styles.separator}></div>
                    </div>
                    <p>
                        {`Hello! My name is Brayan and I'm a computer science student
                    at Harbour.Space University. Lover of competitive
                    programming and mathematics. Contestant in several
                    international programming competitions obtaining medals and
                    good results. Creator of various problems on platforms such
                    as Codeforces. Enjoying teaching other people about
                    programming and algorithms, as well as having a great
                    passion for learning new things in the art of computer
                    programming.`}
                    </p>
                </div>
                <Image
                    src="/picture.jpg"
                    alt="picture"
                    width={300}
                    height={300}
                />
            </div>
        </motion.div>
    );
}
