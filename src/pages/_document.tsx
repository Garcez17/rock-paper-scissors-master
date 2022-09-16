import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Come play rock paper scissors!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}