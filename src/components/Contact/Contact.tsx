import styles from './Contact.module.css';
import Image from 'next/image';

export default function Contact() {
    return (
        <div id="contact-id" className={styles.contact}>
            <div className={styles.contact_text}>
                <div className={styles.contact_init}>
                    <div className={styles.contact_init_inside}>
                        <h2>04. </h2>
                        <h1>{`What's Next?`}</h1>
                    </div>
                </div>
                <div className={styles.contact_all}>
                    <h1>Get In Touch</h1>
                    <p>
                        {`Although I'm not currently looking for any new
                        opportunities, my inbox is always open. Whether you have
                        a question or just want to say hi, I'll try my best to
                        get back to you!`}
                    </p>
                </div>
                <div className={styles.contact_links}>
                    <a href="https://github.com/brayandm" target="_blank">
                        <Image
                            className={styles.contact_icon}
                            src="/github.svg"
                            alt="github"
                            width={110}
                            height={110}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brayan-dur%C3%A1n-medina-34546a249/"
                        target="_blank"
                    >
                        <Image
                            className={styles.contact_icon}
                            src="/linkedin.svg"
                            alt="linkedin"
                            width={115}
                            height={115}
                        />
                    </a>
                    <a href="https://telegram.me/brayand" target="_blank">
                        <Image
                            className={styles.contact_icon}
                            src="/telegram.svg"
                            alt="telegram"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
