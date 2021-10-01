import '../styles/globals.scss'
import 'normalize.css'
import BasicLayout from '../layouts/BasicLayout'
import { useEffect } from 'react'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener('gesturestart', function(e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom =1;
  });
  
  document.addEventListener('gesturechange', function(e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom =1;
  });
  
  document.addEventListener('gestureend', function(e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = 1;
  });
  }, [])
  return (
    <>
      <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/> 
                <link rel="preload" href="/fonts/Genesys.ttf" as="font" crossOrigin=""/>
                <link rel="preload" href="/fonts/SFPRODISPLAYREGULAR.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SFPRODISPLAYBOLD.woff" as="font" crossOrigin="" />
            </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
