// import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
