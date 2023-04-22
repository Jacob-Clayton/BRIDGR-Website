import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Montserrat, Poppins, Urbanist } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
	display: 'swap',
})

const urbanist = Urbanist({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-urbanist',
	display: 'swap',
})

const MyApp = ({ Component, pageProps }) => {
	return (
	<>
		<Head>
			<title>BRIDGR</title>
			<meta property="og:title" lang='en' content="BRIDGR" key="title" />
		</Head>
		<main className={`${montserrat.variable} font-montserrat`}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	</>
	)
}


export default MyApp;
