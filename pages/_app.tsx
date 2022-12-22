import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // https://www.learnbestcoding.com/post/9/easiest-way-to-integrate-google-analytics-with-react-js-and-next-js#pageviews
  useEffect(() => {
    TagManager.initialize({ gtmId: String(process.env.NEXT_PUBLIC_GTM_ID) });
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme,
        }}
      >
        <NotificationsProvider position="top-center">
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}