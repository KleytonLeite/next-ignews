import '../styles/global.scss';

import { Provider as NextAuthprovider } from 'next-auth/client';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <NextAuthprovider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthprovider>
  )
}

export default MyApp
