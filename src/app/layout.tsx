import './globals.css';
import styles from './layout.module.css';

export const metadata = {
    title: 'Personal Website',
    description: 'Personal Website of Brayan Duran',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className={styles.header}>
                    <section className={styles.wrapper}>
                        <button className={styles.main_button}>B</button>
                        <nav className={styles.navigation}>
                            <ul>
                                <li>
                                    <a
                                        className={styles.nav_about}
                                        href="#about-id"
                                    >
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
                                    <a
                                        className={styles.nav_work}
                                        href="#work-id"
                                    >
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
                    </section>
                </header>
                {children}
            </body>
        </html>
    );
}
