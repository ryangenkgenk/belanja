import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Hoodlum - Event booking & Ticketing',
	description: 'Event booking & Ticketing Next.js, Strapi',
	keywords: 'event',
};
