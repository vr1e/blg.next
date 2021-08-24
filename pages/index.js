import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next Blog</title>
				<meta name='description' content='Blog Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1 className={styles.title}>Nxt Blg</h1>
			</main>
		</div>
	);
}