import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router'
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react'
import { pageview, GA_TRACKING_ID } from '../lib/analytics'
import { Montserrat, Poppins, Urbanist } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins'
})

const urbanist = Urbanist({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-urbanist',
  })

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
	const isProduction = process.env.NODE_ENV === 'production'

  const Analytics = () =>
		isProduction && (
			<>
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>

				<Script strategy='afterInteractive' id='ga-script'>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}', {
							page_path: window.location.pathname,
						});
					`}
				</Script>
			</>
		)

	useEffect(() => {
		const handleRouteChange = (url) => {
			pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
	<>
		<Head>
			<title>BRIDGR</title>
			<meta property="og:title" content="BRIDGR" key="title" />
		</Head>
		<main className={`${montserrat.variable} font-montserrat`}>
			<Analytics />
			<Component {...pageProps} />
		</main>
	</>
	)
}


export default MyApp;
