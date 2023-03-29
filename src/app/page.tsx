import Introduction from '@/components/Introduction';
import About from '@/components/About';
import styles from './page.module.css';
import Experience from '@/components/Experience';

export default function Home() {
    return (
        <div className={styles.content}>
            <Introduction />
            <About />
            <Experience />
        </div>
    );
}
