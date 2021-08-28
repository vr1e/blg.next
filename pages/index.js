import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

export default function HomePage(props) {
	return (
		<>
			<Head>
				<title>Karolyne&apos;s Blog</title>
				<meta
					name='description'
					content='I post about programming and web developement'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export async function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
	};
}
