import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Rubik } from '@next/font/google'

const rubik = Rubik({
	subsets: ['latin'],
	weight: 'variable',
	variable: '--font-rubik',
	display: 'swap',
});

const MyApp = ({ Component, pageProps }) => {
	return (
	<>
		<Head>
			<title>Bridgr</title>
			<meta property="og:title" lang='en' content="Bridgr" key="title" />
		</Head>
		<main className={`${rubik.variable} font-rubik`}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	</>
	)
}
export default MyApp;
