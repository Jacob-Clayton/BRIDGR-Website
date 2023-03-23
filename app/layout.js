import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <title>BRIDGR</title>
      <meta property="og:title" content="BRIDGR" key="title" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
