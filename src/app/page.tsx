import Introduction from '@/components/Introduction';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.content}>
            <Introduction />
        </div>
    );
}
