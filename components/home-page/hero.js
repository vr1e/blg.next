import Image from 'next/image';
import styles from './hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
				<Image
					src='/images/site/jzz_3jWMzHA.jpg'
					alt='An image showing Nik'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Karolyne</h1>
			<p>
				I blog about web dev - especially frontend frameworks like Angular or
				React
			</p>
		</section>
	);
}
