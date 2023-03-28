'use client';

import styles from './NavBar.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
    const [menu, setMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div
                className={styles.icon_navigation}
                onClick={() => setMenu(!menu)}
            >
                <Image
                    src={'/barra-de-menus.png'}
                    alt={'menu'}
                    width={30}
                    height={30}
                />
            </div>
            <section className={styles.wrapper}>
                <button className={styles.main_button}>B</button>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <a className={styles.nav_about} href="#about-id">
                                <p>01.</p> About
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.nav_experience}
                                href="#experience-id"
                            >
                                <p>02.</p> Experience
                            </a>
                        </li>
                        <li>
                            <a className={styles.nav_work} href="#work-id">
                                <p>03.</p> Work
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.nav_contact}
                                href="#contact-id"
                            >
                                <p>04.</p> Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    className={
                        menu
                            ? `${styles.menu} ${styles.menu_show}`
                            : styles.menu
                    }
                >
                    <ul>
                        <li>
                            <a className={styles.nav_about} href="#about-id">
                                <div>
                                    <h1>01.</h1>
                                    <h2>About</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.nav_experience}
                                href="#experience-id"
                            >
                                <div>
                                    <h1>02.</h1>
                                    <h2>Experience</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className={styles.nav_work} href="#work-id">
                                <div>
                                    <h1>03.</h1>
                                    <h2>Work</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.nav_contact}
                                href="#contact-id"
                            >
                                <div>
                                    <h1>04.</h1>
                                    <h2>Contact</h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    );
}
