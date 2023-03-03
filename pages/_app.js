import Head from 'next/head';
import Script from 'next/script'
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BRIDGR</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-ZZX6QLDR9Q"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZX6QLDR9Q', {
            page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
