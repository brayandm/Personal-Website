import styles from './Introduction.module.css';

export default function Introduction() {
    return (
        <div className={styles.presentation}>
            <h1>Hi, my name is</h1>
            <h2>Brayan Duran.</h2>
            <h3>I build things for the web.</h3>
            <p>
                {`I'm a Fullstack developer and sometimes a DevOps.
                I enjoy creating things that live on the internet. My interest
                in web development grows every day with the aim of becoming a
                great professional in the future.`}
            </p>
        </div>
    );
}
