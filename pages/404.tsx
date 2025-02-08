import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/404.module.css';

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Page Not Found - Cook It 🍳</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>404 - Am I cooked?</h1>
                <p className={styles.description}>
                    Oops! The page you are looking for does not exist.
                </p>
                <Link href="/" className={styles.homeLink}>
                   Go back to Home
                </Link>
            </div>
        </>
    );
};

export default Custom404;