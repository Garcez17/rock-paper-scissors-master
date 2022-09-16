import type { AppProps } from 'next/app';
import Modal from 'react-modal';

import { AppProvider } from '../contexts';

import '../styles/global.css';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
