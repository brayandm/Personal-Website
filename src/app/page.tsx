import Introduction from '@/components/Introduction';
import About from '@/components/About';
import styles from './page.module.css';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { sdk } from '@/graphql/client';

export default async function Home() {
    const experiences = await sdk.experiences();
    const projects = await sdk.projects();

    return (
        <div className={styles.content}>
            <Introduction />
            <div className={styles.space} />
            <About />
            <div className={styles.space} />
            <Experience experiences={experiences} />
            <div className={styles.space} />
            <Projects projects={projects} />
            <div className={styles.space} />
            <Contact />
        </div>
    );
}
