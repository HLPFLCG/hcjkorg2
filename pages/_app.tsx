// pages/_app.tsx
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import { GTM_ID } from '../lib/gtm';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize GTM
    TagManager.initialize({
      gtmId: GTM_ID,
    });
  }, []);

  return <Component {...pageProps} />;
}
