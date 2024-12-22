import { Inter as Font } from '@next/font/google';
import FeaturedEvents from '../components/featured-events';
import Layout from '../components/global/layout';
import Hero from '../components/hero';
import HowItWorks from '../components/how-it-works';
import RecentBlog from '../components/recent-blog';
import Testimonial from '../components/testimonial';
import UpcomingEvents from '../components/upcoming-events';
import { API_URL } from '../config';

const inter = Font({ subsets: ['latin'] });

export default function Home({ events, blogs }) {
	const eventsData = events.data;
	const blogsData = blogs.data;

	return (
		<Layout title='hoodlum'>
			<Hero />
			<UpcomingEvents events={eventsData} />
			<HowItWorks />
			<FeaturedEvents events={eventsData} />
			<Testimonial />
			<RecentBlog blogs={blogsData} />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events?populate=*`);
	const events = await res.json();
	const blogData = await fetch(`${API_URL}/api/blogs?populate=*`);
	const blogs = await blogData.json();
	console.log(blogs);
	return {
		props: { events, blogs },
	};
}
