import type { AppProps } from 'next/app';
import Head from 'next/head';
import Modal from 'react-modal';

import { AppProvider } from '../contexts';

import '../styles/global.css';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Rock Paper Scissors Master</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
